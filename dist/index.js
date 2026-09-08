// EasyLab typed client SDK for TypeScript.
//
// One entrypoint, one baseUrl: the easylab gateway. It serves both the
// easylab.v1.* surface (lab/ops/registry) and the agent.v1.* surface
// (sessions/providers/... forwarded to the abc agent backend). Web frontends
// never talk to the agent directly.
//
// Usage:
//   const client = createEasyLabClient({ baseUrl: 'https://easylab.example.com', token: '...' })
//   const repos = await client.lab.listRepos({})
//   const sessions = await client.agent.listSessions({})
import { createClient } from '@connectrpc/connect';
import { createConnectTransport } from '@connectrpc/connect-web';
import { AgentService } from './gen/agent/v1/agent_pb.js';
import { LabService, OpsService, RegistryService } from './gen/easylab/v1/easylab_pb.js';
export { AgentService, } from './gen/agent/v1/agent_pb.js';
export * from './gen/easylab/v1/easylab_pb.js';
function createLabClient(transport) {
    return createClient(LabService, transport);
}
function createOpsClient(transport) {
    return createClient(OpsService, transport);
}
function createRegistryClient(transport) {
    return createClient(RegistryService, transport);
}
function createAgentClient(transport) {
    return createClient(AgentService, transport);
}
/** Build the typed easylab gateway client. */
export function createEasyLabClient(options) {
    const headers = { ...(options.headers ?? {}) };
    if (options.token && !headers['Authorization']) {
        headers['Authorization'] = `Bearer ${options.token}`;
    }
    const transport = options.transport ??
        createConnectTransport({
            baseUrl: options.baseUrl.replace(/\/+$/, ''),
            interceptors: [
                next => async (req) => {
                    for (const [k, v] of Object.entries(headers)) {
                        req.header.set(k, v);
                    }
                    return await next(req);
                },
            ],
        });
    return {
        transport,
        lab: createLabClient(transport),
        ops: createOpsClient(transport),
        registry: createRegistryClient(transport),
        agent: createAgentClient(transport),
    };
}
