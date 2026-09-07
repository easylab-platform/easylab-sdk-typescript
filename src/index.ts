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

import { createClient, type Transport } from '@connectrpc/connect'
import { createConnectTransport } from '@connectrpc/connect-web'

import { AgentService } from './gen/agent/v1/agent_pb.js'
import { LabService, OpsService, RegistryService } from './gen/easylab/v1/easylab_pb.js'

export {
  AgentService,
  type Session,
  type Message,
  type PromptRequest,
  type PromptResponse,
  type WatchSessionRequest,
  type WatchSessionResponse,
  type ListSessionsRequest,
  type ListSessionsResponse,
  type CreateSessionRequest,
  type CreateSessionResponse,
  type GetSessionRequest,
  type GetSessionResponse,
  type ListMessagesRequest,
  type ListMessagesResponse,
  type Provider,
  type Preset,
  type ToolInfo,
} from './gen/agent/v1/agent_pb.js'
export * from './gen/easylab/v1/easylab_pb.js'

/** Client construction options. */
export interface EasyLabClientOptions {
  /** Gateway base URL (protocol + host, no trailing slash needed). */
  baseUrl: string
  /** Optional bearer token attached to every request. */
  token?: string
  /** Custom headers attached to every request. */
  headers?: Record<string, string>
  /** Transport override (tests). */
  transport?: Transport
}

/** The typed easylab gateway client: lab + ops + registry + agent surfaces. */
export interface EasyLabClient {
  readonly transport: Transport
  /** Lab surface (repos/branches/blobs/revisions/search/graph/...). */
  readonly lab: ReturnType<typeof createLabClient>
  /** Ops surface (services/sandboxes/builds/tasks/sync). */
  readonly ops: ReturnType<typeof createOpsClient>
  /** Registry surface (packages). */
  readonly registry: ReturnType<typeof createRegistryClient>
  /** Agent surface (sessions/providers/...) served through the gateway. */
  readonly agent: ReturnType<typeof createAgentClient>
}

function createLabClient(transport: Transport) {
  return createClient(LabService, transport)
}
function createOpsClient(transport: Transport) {
  return createClient(OpsService, transport)
}
function createRegistryClient(transport: Transport) {
  return createClient(RegistryService, transport)
}
function createAgentClient(transport: Transport) {
  return createClient(AgentService, transport)
}

/** Build the typed easylab gateway client. */
export function createEasyLabClient(options: EasyLabClientOptions): EasyLabClient {
  const headers: Record<string, string> = { ...(options.headers ?? {}) }
  if (options.token && !headers['Authorization']) {
    headers['Authorization'] = `Bearer ${options.token}`
  }
  const transport =
    options.transport ??
    createConnectTransport({
      baseUrl: options.baseUrl.replace(/\/+$/, ''),
      interceptors: [
        next => async req => {
          for (const [k, v] of Object.entries(headers)) {
            req.header.set(k, v)
          }
          return await next(req)
        },
      ],
    })
  return {
    transport,
    lab: createLabClient(transport),
    ops: createOpsClient(transport),
    registry: createRegistryClient(transport),
    agent: createAgentClient(transport),
  }
}
