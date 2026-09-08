import { type Transport } from '@connectrpc/connect';
/** Common options for Node transports. */
export interface NodeTransportOptions {
    /** Base URL (protocol + host, no trailing slash needed). */
    baseUrl: string;
    /** Optional bearer token attached to every request. */
    token?: string;
    /** Custom headers attached to every request. */
    headers?: Record<string, string>;
    /**
     * Idle timeout for pooled HTTP/2 sessions, in milliseconds
     * (connect-node default when omitted).
     */
    keepAliveTimeoutMs?: number;
}
/** Options for the gateway transport (HTTP/2 to the easylab gateway). */
export interface GatewayOptions extends NodeTransportOptions {
}
/** Build a Node transport for the easylab gateway over HTTP/2. */
export declare function createGatewayTransport(options: GatewayOptions): Transport;
/** Options for the direct-agent transport (h2c to the agent backend). */
export interface AgentOptions extends NodeTransportOptions {
}
/** Build the DIRECT agent transport: cleartext HTTP/2 (h2c prior knowledge). */
export declare function createAgentTransport(options: AgentOptions): Transport;
/** The typed agent.v1 client for in-cluster direct calls (h2c). */
export declare function createAgentClient(options: AgentOptions): import("@connectrpc/connect").Client<import("@bufbuild/protobuf/codegenv2").GenService<{
    health: {
        methodKind: "unary";
        input: typeof import("./agent.js").HealthRequestSchema;
        output: typeof import("./agent.js").HealthResponseSchema;
    };
    listSessions: {
        methodKind: "unary";
        input: typeof import("./agent.js").ListSessionsRequestSchema;
        output: typeof import("./agent.js").ListSessionsResponseSchema;
    };
    createSession: {
        methodKind: "unary";
        input: typeof import("./agent.js").CreateSessionRequestSchema;
        output: typeof import("./agent.js").CreateSessionResponseSchema;
    };
    getSession: {
        methodKind: "unary";
        input: typeof import("./agent.js").GetSessionRequestSchema;
        output: typeof import("./agent.js").GetSessionResponseSchema;
    };
    deleteSession: {
        methodKind: "unary";
        input: typeof import("./agent.js").DeleteSessionRequestSchema;
        output: typeof import("./agent.js").DeleteSessionResponseSchema;
    };
    listMessages: {
        methodKind: "unary";
        input: typeof import("./agent.js").ListMessagesRequestSchema;
        output: typeof import("./agent.js").ListMessagesResponseSchema;
    };
    prompt: {
        methodKind: "server_streaming";
        input: typeof import("./agent.js").PromptRequestSchema;
        output: typeof import("./agent.js").PromptResponseSchema;
    };
    watchSession: {
        methodKind: "server_streaming";
        input: typeof import("./agent.js").WatchSessionRequestSchema;
        output: typeof import("./agent.js").WatchSessionResponseSchema;
    };
    fork: {
        methodKind: "unary";
        input: typeof import("./agent.js").ForkRequestSchema;
        output: typeof import("./agent.js").ForkResponseSchema;
    };
    rename: {
        methodKind: "unary";
        input: typeof import("./agent.js").RenameRequestSchema;
        output: typeof import("./agent.js").RenameResponseSchema;
    };
    setModel: {
        methodKind: "unary";
        input: typeof import("./agent.js").SetModelRequestSchema;
        output: typeof import("./agent.js").SetModelResponseSchema;
    };
    undo: {
        methodKind: "unary";
        input: typeof import("./agent.js").UndoRequestSchema;
        output: typeof import("./agent.js").UndoResponseSchema;
    };
    state: {
        methodKind: "unary";
        input: typeof import("./agent.js").StateRequestSchema;
        output: typeof import("./agent.js").StateResponseSchema;
    };
    mailbox: {
        methodKind: "unary";
        input: typeof import("./agent.js").MailboxRequestSchema;
        output: typeof import("./agent.js").MailboxResponseSchema;
    };
    updateSettings: {
        methodKind: "unary";
        input: typeof import("./agent.js").UpdateSettingsRequestSchema;
        output: typeof import("./agent.js").UpdateSettingsResponseSchema;
    };
    interrupt: {
        methodKind: "unary";
        input: typeof import("./agent.js").InterruptRequestSchema;
        output: typeof import("./agent.js").InterruptResponseSchema;
    };
    compact: {
        methodKind: "unary";
        input: typeof import("./agent.js").CompactRequestSchema;
        output: typeof import("./agent.js").CompactResponseSchema;
    };
    listProviders: {
        methodKind: "unary";
        input: typeof import("./agent.js").ListProvidersRequestSchema;
        output: typeof import("./agent.js").ListProvidersResponseSchema;
    };
    listProvidersCatalog: {
        methodKind: "unary";
        input: typeof import("./agent.js").ListProvidersCatalogRequestSchema;
        output: typeof import("./agent.js").ListProvidersCatalogResponseSchema;
    };
    registerProvider: {
        methodKind: "unary";
        input: typeof import("./agent.js").RegisterProviderRequestSchema;
        output: typeof import("./agent.js").RegisterProviderResponseSchema;
    };
    deleteProvider: {
        methodKind: "unary";
        input: typeof import("./agent.js").DeleteProviderRequestSchema;
        output: typeof import("./agent.js").DeleteProviderResponseSchema;
    };
    testProvider: {
        methodKind: "unary";
        input: typeof import("./agent.js").TestProviderRequestSchema;
        output: typeof import("./agent.js").TestProviderResponseSchema;
    };
    listModels: {
        methodKind: "unary";
        input: typeof import("./agent.js").ListModelsRequestSchema;
        output: typeof import("./agent.js").ListModelsResponseSchema;
    };
    listPresets: {
        methodKind: "unary";
        input: typeof import("./agent.js").ListPresetsRequestSchema;
        output: typeof import("./agent.js").ListPresetsResponseSchema;
    };
    upsertPreset: {
        methodKind: "unary";
        input: typeof import("./agent.js").UpsertPresetRequestSchema;
        output: typeof import("./agent.js").UpsertPresetResponseSchema;
    };
    deletePreset: {
        methodKind: "unary";
        input: typeof import("./agent.js").DeletePresetRequestSchema;
        output: typeof import("./agent.js").DeletePresetResponseSchema;
    };
    previewPreset: {
        methodKind: "unary";
        input: typeof import("./agent.js").PreviewPresetRequestSchema;
        output: typeof import("./agent.js").PreviewPresetResponseSchema;
    };
    getConfig: {
        methodKind: "unary";
        input: typeof import("./agent.js").GetConfigRequestSchema;
        output: typeof import("./agent.js").GetConfigResponseSchema;
    };
    setConfig: {
        methodKind: "unary";
        input: typeof import("./agent.js").SetConfigRequestSchema;
        output: typeof import("./agent.js").SetConfigResponseSchema;
    };
    listTools: {
        methodKind: "unary";
        input: typeof import("./agent.js").ListToolsRequestSchema;
        output: typeof import("./agent.js").ListToolsResponseSchema;
    };
    getToolConfig: {
        methodKind: "unary";
        input: typeof import("./agent.js").GetToolConfigRequestSchema;
        output: typeof import("./agent.js").GetToolConfigResponseSchema;
    };
    setToolConfig: {
        methodKind: "unary";
        input: typeof import("./agent.js").SetToolConfigRequestSchema;
        output: typeof import("./agent.js").SetToolConfigResponseSchema;
    };
    setExtensionConfig: {
        methodKind: "unary";
        input: typeof import("./agent.js").SetExtensionConfigRequestSchema;
        output: typeof import("./agent.js").SetExtensionConfigResponseSchema;
    };
    uploadFile: {
        methodKind: "unary";
        input: typeof import("./agent.js").UploadFileRequestSchema;
        output: typeof import("./agent.js").UploadFileResponseSchema;
    };
    ingestFile: {
        methodKind: "unary";
        input: typeof import("./agent.js").IngestFileRequestSchema;
        output: typeof import("./agent.js").IngestFileResponseSchema;
    };
    getFile: {
        methodKind: "unary";
        input: typeof import("./agent.js").GetFileRequestSchema;
        output: typeof import("./agent.js").GetFileResponseSchema;
    };
    getFileMeta: {
        methodKind: "unary";
        input: typeof import("./agent.js").GetFileMetaRequestSchema;
        output: typeof import("./agent.js").GetFileMetaResponseSchema;
    };
    getAgentConfig: {
        methodKind: "unary";
        input: typeof import("./agent.js").GetAgentConfigRequestSchema;
        output: typeof import("./agent.js").GetAgentConfigResponseSchema;
    };
}>>;
