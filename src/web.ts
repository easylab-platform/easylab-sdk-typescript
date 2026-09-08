// Browser transport factory for the easylab gateway.
//
// Browsers cannot speak cleartext HTTP/2 (fetch is HTTP/1.1 over plain
// http://) and cannot reach the agent backend directly — every browser
// client goes through the easylab gateway over TLS. This entry keeps the
// connect-web (fetch) transport out of Node-specific paths; the generated
// clients in the package core (`@easylab/sdk`) are isomorphic and accept
// the Transport built here.

import { type Interceptor, type Transport, createClient } from '@connectrpc/connect'
import { createConnectTransport } from '@connectrpc/connect-web'

import { AgentService } from './gen/agent/v1/agent_pb.js'
import { LabService, OpsService, RegistryService } from './gen/easylab/v1/easylab_pb.js'

/** Options for the browser (connect-web) gateway transport. */
export interface WebGatewayTransportOptions {
  /** Gateway origin, e.g. `https://easylab.example.com` (same-origin for SPAs). */
  baseUrl: string
  /** Optional bearer token attached to every request. */
  token?: string
  /** Custom headers attached to every request. */
  headers?: Record<string, string>
}

/** Build the browser transport for the easylab gateway (fetch, TLS h1/h2/h3). */
export function createGatewayTransport(
  options: WebGatewayTransportOptions,
): Transport {
  const headers: Record<string, string> = { ...(options.headers ?? {}) }
  if (options.token !== undefined && headers['Authorization'] === undefined) {
    headers['Authorization'] = `Bearer ${options.token}`
  }
  const auth: Interceptor = next => async req => {
    for (const [k, v] of Object.entries(headers)) {
      req.header.set(k, v)
    }
    return await next(req)
  }
  return createConnectTransport({
    baseUrl: options.baseUrl.replace(/\/+$/, ''),
    interceptors: [auth],
  })
}

/**
 * The full gateway client for browsers: lab + ops + registry + the agent
 * surface served through the gateway (`client.agent`).
 */
export function createWebClient(options: WebGatewayTransportOptions): {
  transport: Transport
  lab: ReturnType<typeof createClient<typeof LabService>>
  ops: ReturnType<typeof createClient<typeof OpsService>>
  registry: ReturnType<typeof createClient<typeof RegistryService>>
  agent: ReturnType<typeof createClient<typeof AgentService>>
} {
  const transport = createGatewayTransport(options)
  return {
    transport,
    lab: createClient(LabService, transport),
    ops: createClient(OpsService, transport),
    registry: createClient(RegistryService, transport),
    agent: createClient(AgentService, transport),
  }
}
