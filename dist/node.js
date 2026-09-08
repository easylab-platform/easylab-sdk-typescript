// Node transport factories for in-cluster callers.
//
// Two flavors, mirroring the Go agentsdk:
// - createGatewayTransport: the easylab gateway over HTTP/2 — cleartext
//   prior-knowledge (h2c) for http:// URLs, ALPN for https:// .
// - createAgentTransport / createAgentClient: DIRECT agent calls over
//   cleartext HTTP/2 (h2c prior knowledge). The agent serves HTTP/2 only.
//
// This SDK speaks HTTP/2 exclusively: the URL scheme decides TLS vs
// cleartext (https:// => h2 over TLS, http:// => h2c). HTTP/1.1 is not
// supported — the easylab gateway and agent both serve HTTP/2 only.
//
// This entry is Node-only (resolvable under the "node" exports condition);
// bundlers exclude it from browser builds, keeping `node:http2` out of the
// web bundle. Browser clients use `@easylab/sdk/web` via the gateway.
import { createClient } from '@connectrpc/connect';
import { createConnectTransport } from '@connectrpc/connect-node';
import { AgentService } from './gen/agent/v1/agent_pb.js';
function authInterceptors(options) {
    const headers = { ...(options.headers ?? {}) };
    if (options.token !== undefined && headers['Authorization'] === undefined) {
        headers['Authorization'] = `Bearer ${options.token}`;
    }
    const auth = next => async (req) => {
        for (const [k, v] of Object.entries(headers)) {
            req.header.set(k, v);
        }
        return await next(req);
    };
    return [auth];
}
/** Build a Node transport for the easylab gateway over HTTP/2. */
export function createGatewayTransport(options) {
    return createConnectTransport({
        baseUrl: options.baseUrl.replace(/\/+$/, ''),
        httpVersion: '2',
        interceptors: authInterceptors(options),
        ...(options.keepAliveTimeoutMs !== undefined
            ? { keepAliveTimeoutMs: options.keepAliveTimeoutMs }
            : {}),
    });
}
/** Build the DIRECT agent transport: cleartext HTTP/2 (h2c prior knowledge). */
export function createAgentTransport(options) {
    return createConnectTransport({
        baseUrl: options.baseUrl.replace(/\/+$/, ''),
        httpVersion: '2',
        interceptors: authInterceptors(options),
        ...(options.keepAliveTimeoutMs !== undefined
            ? { keepAliveTimeoutMs: options.keepAliveTimeoutMs }
            : {}),
    });
}
/** The typed agent.v1 client for in-cluster direct calls (h2c). */
export function createAgentClient(options) {
    return createClient(AgentService, createAgentTransport(options));
}
