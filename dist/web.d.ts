import { type Transport, createClient } from '@connectrpc/connect';
import { AgentService } from './gen/agent/v1/agent_pb.js';
import { LabService, OpsService, RegistryService } from './gen/easylab/v1/easylab_pb.js';
/** Options for the browser (connect-web) gateway transport. */
export interface WebGatewayTransportOptions {
    /** Gateway origin, e.g. `https://easylab.example.com` (same-origin for SPAs). */
    baseUrl: string;
    /** Optional bearer token attached to every request. */
    token?: string;
    /** Custom headers attached to every request. */
    headers?: Record<string, string>;
}
/** Build the browser transport for the easylab gateway (fetch, TLS h1/h2/h3). */
export declare function createGatewayTransport(options: WebGatewayTransportOptions): Transport;
/**
 * The full gateway client for browsers: lab + ops + registry + the agent
 * surface served through the gateway (`client.agent`).
 */
export declare function createWebClient(options: WebGatewayTransportOptions): {
    transport: Transport;
    lab: ReturnType<typeof createClient<typeof LabService>>;
    ops: ReturnType<typeof createClient<typeof OpsService>>;
    registry: ReturnType<typeof createClient<typeof RegistryService>>;
    agent: ReturnType<typeof createClient<typeof AgentService>>;
};
