// Smoke test for the web (fetch) transport entry (@easylab/sdk/web).
//
// Runs in any fetch-capable runtime (Node 18+, browsers). Boots a local
// HTTP/1.1 server that answers one Connect procedure, then drives it with
// createGatewayTransport + createWebClient — proving the connect-web path
// and bearer-token injection end to end.
//
//   node scripts/smoke-web.mjs

import * as http from 'node:http'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const { createWebClient } = require('@easylab/sdk/web')

const PORT = 18098
let sawAuth = ''

const server = http.createServer((req, res) => {
  const chunks = []
  req.on('data', c => chunks.push(c))
  req.on('end', () => {
    sawAuth = req.headers['authorization'] ?? ''
    // connect-web's Connect-protocol transport defaults to the JSON codec.
    res.writeHead(200, { 'content-type': 'application/json' })
    res.end(JSON.stringify({ ok: true, name: 'web-smoke' }))
  })
})

server.listen(PORT, '127.0.0.1', async () => {
  try {
    const client = createWebClient({
      baseUrl: `http://127.0.0.1:${PORT}`,
      token: 'devtoken',
    })
    const res = await client.agent.health({})
    console.log('health response:', JSON.stringify(res))
    console.log('authorization seen by server:', sawAuth)
    if (res.name !== 'web-smoke' || res.ok !== true) {
      throw new Error(`unexpected health response: ${JSON.stringify(res)}`)
    }
    if (sawAuth !== 'Bearer devtoken') {
      throw new Error(`authorization header not injected: "${sawAuth}"`)
    }
    console.log('SMOKE OK: web (fetch) gateway transport + auth work')
    server.close()
    process.exit(0)
  } catch (e) {
    console.error('SMOKE FAILED:', e)
    server.close()
    process.exit(1)
  }
})
