// Node transport factories for in-cluster callers.
//
// Two flavors, mirroring the Go agentsdk:
// - createGatewayTransport: the easylab gateway over TLS (HTTP/2 via ALPN,
//   HTTP/1.1 for plain http://), with connection-pooling sessions.
// - createAgentTransport / createAgentClient: DIRECT agent calls over
//   cleartext HTTP/2 (h2c prior knowledge). The agent serves HTTP/2 only,
//   so this is the one transport that can talk to it.
//
// This entry is Node-only (resolvable under the "node" exports condition);
// bundlers exclude it from browser builds, keeping `node:http2` out of the
// web bundle. Browser clients use `@easylab/sdk/web` via the gateway.

import { type Interceptor, type Transport, createClient } from '@connectrpc/connect'
import { createConnectTransport } from '@connectrpc/connect-node'

import { AgentService } from './gen/agent/v1/agent_pb.js'

/** Common options for Node transports. */
export interface NodeTransportOptions {
  /** Base URL (protocol + host, no trailing slash needed). */
  baseUrl: string
  /** Optional bearer token attached to every request. */
  token?: string
  /** Custom headers attached to every request. */
  headers?: Record<string, string>
  /**
   * Idle timeout for pooled HTTP/2 sessions, in milliseconds
   * (connect-node default when omitted).
   */
  keepAliveTimeoutMs?: number
}

function authInterceptors(options: NodeTransportOptions): Interceptor[] {
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
  return [auth]
}

/** Options for the gateway transport (TLS to the easylab gateway). */
export interface GatewayOptions extends NodeTransportOptions {
  /**
   * HTTP version for the gateway connection. Defaults to "2" — cleartext
   * prior-knowledge (h2c) for http://, ALPN for https://. The gateway's
   * Connect surface is HTTP/2-only; pass "1.1" only for legacy endpoints.
   */
  httpVersion?: '1.1' | '2'
}

/** Build a Node transport for the easylab gateway (TLS, pooled sessions). */
export function createGatewayTransport(options: GatewayOptions): Transport {
  const httpVersion = options.httpVersion ?? '2'
  return createConnectTransport({
    baseUrl: options.baseUrl.replace(/\/+$/, ''),
    httpVersion,
    interceptors: authInterceptors(options),
    ...(options.keepAliveTimeoutMs !== undefined
      ? { keepAliveTimeoutMs: options.keepAliveTimeoutMs }
      : {}),
  })
}

/** Options for the direct-agent transport (h2c to the agent backend). */
export interface AgentOptions extends NodeTransportOptions {
  /**
   * Force a specific HTTP version. The agent serves HTTP/2 only, so the
   * default (and recommended) is "2" = cleartext HTTP/2 prior knowledge.
   */
  httpVersion?: '1.1' | '2'
}

/** Build the DIRECT agent transport: cleartext HTTP/2 (h2c prior knowledge). */
export function createAgentTransport(options: AgentOptions): Transport {
  return createConnectTransport({
    baseUrl: options.baseUrl.replace(/\/+$/, ''),
    httpVersion: options.httpVersion ?? '2',
    interceptors: authInterceptors(options),
    ...(options.keepAliveTimeoutMs !== undefined
      ? { keepAliveTimeoutMs: options.keepAliveTimeoutMs }
      : {}),
  })
}

/** The typed agent.v1 client for in-cluster direct calls (h2c). */
export function createAgentClient(options: AgentOptions) {
  return createClient(AgentService, createAgentTransport(options))
}
