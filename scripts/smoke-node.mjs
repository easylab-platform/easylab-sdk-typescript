// Smoke test for the Node direct-agent transport (@easylab/sdk/node).
//
// Boots a local cleartext HTTP/2 (h2c) server that answers one Connect
// procedure, then drives it with createAgentClient — proving the h2c
// prior-knowledge path and bearer-token injection end to end.
//
//   node scripts/smoke-node.mjs

import * as http2 from 'node:http2'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const { createAgentClient } = require('@easylab/sdk/node')

const PORT = 18099
let sawAuth = ''

const server = http2.createServer((req, res) => {
  const chunks = []
  req.on('data', c => chunks.push(c))
  req.on('end', () => {
    sawAuth = req.headers['authorization'] ?? ''
    // HealthResponse{ok: bool = 1, name: string = 2}, protobuf-encoded:
    // 12 0b "smoke-agent" (field 2) + 08 01 (field 1, true)
    const name = Buffer.from('smoke-agent', 'utf8')
    const body = Buffer.concat([
      Buffer.from([0x12, name.length]),
      name,
      Buffer.from([0x08, 0x01]),
    ])
    res.writeHead(200, { 'content-type': 'application/proto' })
    res.end(body)
  })
})

server.listen(PORT, '127.0.0.1', async () => {
  try {
    const agent = createAgentClient({
      baseUrl: `http://127.0.0.1:${PORT}`,
      token: 'devtoken',
    })
    const res = await agent.health({})
    console.log('health response:', JSON.stringify(res))
    console.log('authorization seen by server:', sawAuth)
    if (res.name !== 'smoke-agent' || res.ok !== true) {
      throw new Error(`unexpected health response: ${JSON.stringify(res)}`)
    }
    if (sawAuth !== 'Bearer devtoken') {
      throw new Error(`authorization header not injected: "${sawAuth}"`)
    }
    console.log('SMOKE OK: h2c direct-agent transport + auth work')
    server.close()
    process.exit(0)
  } catch (e) {
    console.error('SMOKE FAILED:', e)
    server.close()
    process.exit(1)
  }
})
