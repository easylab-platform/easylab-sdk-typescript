import { type Transport } from '@connectrpc/connect';
export { AgentService, type Session, type Message, type PromptRequest, type PromptResponse, type WatchSessionRequest, type WatchSessionResponse, type ListSessionsRequest, type ListSessionsResponse, type CreateSessionRequest, type CreateSessionResponse, type GetSessionRequest, type GetSessionResponse, type ListMessagesRequest, type ListMessagesResponse, type Provider, type Preset, type ToolInfo, } from './gen/agent/v1/agent_pb.js';
export * from './gen/easylab/v1/easylab_pb.js';
/** Client construction options. */
export interface EasyLabClientOptions {
    /** Gateway base URL (protocol + host, no trailing slash needed). */
    baseUrl: string;
    /** Optional bearer token attached to every request. */
    token?: string;
    /** Custom headers attached to every request. */
    headers?: Record<string, string>;
    /** Transport override (tests). */
    transport?: Transport;
}
/** The typed easylab gateway client: lab + ops + registry + agent surfaces. */
export interface EasyLabClient {
    readonly transport: Transport;
    /** Lab surface (repos/branches/blobs/revisions/search/graph/...). */
    readonly lab: ReturnType<typeof createLabClient>;
    /** Ops surface (services/sandboxes/builds/tasks/sync). */
    readonly ops: ReturnType<typeof createOpsClient>;
    /** Registry surface (packages). */
    readonly registry: ReturnType<typeof createRegistryClient>;
    /** Agent surface (sessions/providers/...) served through the gateway. */
    readonly agent: ReturnType<typeof createAgentClient>;
    /** Sandbox surface (worker-backed sandboxes: jobs observability/console/files). */
    readonly sandbox: ReturnType<typeof createSandboxClient>;
}
declare function createLabClient(transport: Transport): import("@connectrpc/connect").Client<import("@bufbuild/protobuf/codegenv2").GenService<{
    health: {
        methodKind: "unary";
        input: typeof import("./easylab.js").HealthRequestSchema;
        output: typeof import("./easylab.js").HealthResponseSchema;
    };
    status: {
        methodKind: "unary";
        input: typeof import("./easylab.js").StatusRequestSchema;
        output: typeof import("./easylab.js").StatusResponseSchema;
    };
    listRepos: {
        methodKind: "unary";
        input: typeof import("./easylab.js").ListReposRequestSchema;
        output: typeof import("./easylab.js").ListReposResponseSchema;
    };
    createRepo: {
        methodKind: "unary";
        input: typeof import("./easylab.js").CreateRepoRequestSchema;
        output: typeof import("./easylab.js").CreateRepoResponseSchema;
    };
    deleteRepo: {
        methodKind: "unary";
        input: typeof import("./easylab.js").DeleteRepoRequestSchema;
        output: typeof import("./easylab.js").DeleteRepoResponseSchema;
    };
    ensureRepo: {
        methodKind: "unary";
        input: typeof import("./easylab.js").EnsureRepoRequestSchema;
        output: typeof import("./easylab.js").EnsureRepoResponseSchema;
    };
    ensureOrg: {
        methodKind: "unary";
        input: typeof import("./easylab.js").EnsureOrgRequestSchema;
        output: typeof import("./easylab.js").EnsureOrgResponseSchema;
    };
    forkRepo: {
        methodKind: "unary";
        input: typeof import("./easylab.js").ForkRepoRequestSchema;
        output: typeof import("./easylab.js").ForkRepoResponseSchema;
    };
    cloneRepo: {
        methodKind: "unary";
        input: typeof import("./easylab.js").CloneRepoRequestSchema;
        output: typeof import("./easylab.js").CloneRepoResponseSchema;
    };
    tree: {
        methodKind: "unary";
        input: typeof import("./easylab.js").TreeRequestSchema;
        output: typeof import("./easylab.js").TreeResponseSchema;
    };
    readBlob: {
        methodKind: "unary";
        input: typeof import("./easylab.js").ReadBlobRequestSchema;
        output: typeof import("./easylab.js").ReadBlobResponseSchema;
    };
    writeBlob: {
        methodKind: "unary";
        input: typeof import("./easylab.js").WriteBlobRequestSchema;
        output: typeof import("./easylab.js").WriteBlobResponseSchema;
    };
    log: {
        methodKind: "unary";
        input: typeof import("./easylab.js").LogRequestSchema;
        output: typeof import("./easylab.js").LogResponseSchema;
    };
    tags: {
        methodKind: "unary";
        input: typeof import("./easylab.js").TagsRequestSchema;
        output: typeof import("./easylab.js").TagsResponseSchema;
    };
    branches: {
        methodKind: "unary";
        input: typeof import("./easylab.js").BranchesRequestSchema;
        output: typeof import("./easylab.js").BranchesResponseSchema;
    };
    revisions: {
        methodKind: "unary";
        input: typeof import("./easylab.js").RevisionsRequestSchema;
        output: typeof import("./easylab.js").RevisionsResponseSchema;
    };
    diff: {
        methodKind: "unary";
        input: typeof import("./easylab.js").DiffRequestSchema;
        output: typeof import("./easylab.js").DiffResponseSchema;
    };
    blame: {
        methodKind: "unary";
        input: typeof import("./easylab.js").BlameRequestSchema;
        output: typeof import("./easylab.js").BlameResponseSchema;
    };
    deleteBranch: {
        methodKind: "unary";
        input: typeof import("./easylab.js").DeleteBranchRequestSchema;
        output: typeof import("./easylab.js").DeleteBranchResponseSchema;
    };
    createBranch: {
        methodKind: "unary";
        input: typeof import("./easylab.js").CreateBranchRequestSchema;
        output: typeof import("./easylab.js").CreateBranchResponseSchema;
    };
    fileHistory: {
        methodKind: "unary";
        input: typeof import("./easylab.js").FileHistoryRequestSchema;
        output: typeof import("./easylab.js").FileHistoryResponseSchema;
    };
    search: {
        methodKind: "unary";
        input: typeof import("./easylab.js").SearchRequestSchema;
        output: typeof import("./easylab.js").SearchResponseSchema;
    };
    graph: {
        methodKind: "unary";
        input: typeof import("./easylab.js").GraphRequestSchema;
        output: typeof import("./easylab.js").GraphResponseSchema;
    };
    compare: {
        methodKind: "unary";
        input: typeof import("./easylab.js").CompareRequestSchema;
        output: typeof import("./easylab.js").CompareResponseSchema;
    };
    rebase: {
        methodKind: "unary";
        input: typeof import("./easylab.js").RebaseRequestSchema;
        output: typeof import("./easylab.js").RebaseResponseSchema;
    };
    deleteOrg: {
        methodKind: "unary";
        input: typeof import("./easylab.js").DeleteOrgRequestSchema;
        output: typeof import("./easylab.js").DeleteOrgResponseSchema;
    };
    listReleases: {
        methodKind: "unary";
        input: typeof import("./easylab.js").ListReleasesRequestSchema;
        output: typeof import("./easylab.js").ListReleasesResponseSchema;
    };
    downloadReleaseAsset: {
        methodKind: "unary";
        input: typeof import("./easylab.js").DownloadReleaseAssetRequestSchema;
        output: typeof import("./easylab.js").DownloadReleaseAssetResponseSchema;
    };
    archive: {
        methodKind: "unary";
        input: typeof import("./easylab.js").ArchiveRequestSchema;
        output: typeof import("./easylab.js").ArchiveResponseSchema;
    };
    getMirror: {
        methodKind: "unary";
        input: typeof import("./easylab.js").GetMirrorRequestSchema;
        output: typeof import("./easylab.js").GetMirrorResponseSchema;
    };
    setMirror: {
        methodKind: "unary";
        input: typeof import("./easylab.js").SetMirrorRequestSchema;
        output: typeof import("./easylab.js").SetMirrorResponseSchema;
    };
    deleteMirror: {
        methodKind: "unary";
        input: typeof import("./easylab.js").DeleteMirrorRequestSchema;
        output: typeof import("./easylab.js").DeleteMirrorResponseSchema;
    };
    syncMirror: {
        methodKind: "unary";
        input: typeof import("./easylab.js").SyncMirrorRequestSchema;
        output: typeof import("./easylab.js").SyncMirrorResponseSchema;
    };
}>>;
declare function createOpsClient(transport: Transport): import("@connectrpc/connect").Client<import("@bufbuild/protobuf/codegenv2").GenService<{
    opsStatus: {
        methodKind: "unary";
        input: typeof import("./easylab.js").OpsStatusRequestSchema;
        output: typeof import("./easylab.js").OpsStatusResponseSchema;
    };
    listNamespaces: {
        methodKind: "unary";
        input: typeof import("./easylab.js").ListNamespacesRequestSchema;
        output: typeof import("./easylab.js").ListNamespacesResponseSchema;
    };
    listServices: {
        methodKind: "unary";
        input: typeof import("./easylab.js").ListServicesRequestSchema;
        output: typeof import("./easylab.js").ListServicesResponseSchema;
    };
    getService: {
        methodKind: "unary";
        input: typeof import("./easylab.js").GetServiceRequestSchema;
        output: typeof import("./easylab.js").GetServiceResponseSchema;
    };
    launchService: {
        methodKind: "unary";
        input: typeof import("./easylab.js").LaunchServiceRequestSchema;
        output: typeof import("./easylab.js").LaunchServiceResponseSchema;
    };
    deleteService: {
        methodKind: "unary";
        input: typeof import("./easylab.js").DeleteServiceRequestSchema;
        output: typeof import("./easylab.js").DeleteServiceResponseSchema;
    };
    scaleService: {
        methodKind: "unary";
        input: typeof import("./easylab.js").ScaleServiceRequestSchema;
        output: typeof import("./easylab.js").ScaleServiceResponseSchema;
    };
    sandboxExec: {
        methodKind: "unary";
        input: typeof import("./easylab.js").SandboxExecRequestSchema;
        output: typeof import("./easylab.js").SandboxExecResponseSchema;
    };
    sandboxRead: {
        methodKind: "unary";
        input: typeof import("./easylab.js").SandboxReadRequestSchema;
        output: typeof import("./easylab.js").SandboxReadResponseSchema;
    };
    sandboxWrite: {
        methodKind: "unary";
        input: typeof import("./easylab.js").SandboxWriteRequestSchema;
        output: typeof import("./easylab.js").SandboxWriteResponseSchema;
    };
    sandboxJobKill: {
        methodKind: "unary";
        input: typeof import("./easylab.js").SandboxJobKillRequestSchema;
        output: typeof import("./easylab.js").SandboxJobKillResponseSchema;
    };
    listTasks: {
        methodKind: "unary";
        input: typeof import("./easylab.js").ListTasksRequestSchema;
        output: typeof import("./easylab.js").ListTasksResponseSchema;
    };
    getTask: {
        methodKind: "unary";
        input: typeof import("./easylab.js").GetTaskRequestSchema;
        output: typeof import("./easylab.js").GetTaskResponseSchema;
    };
    build: {
        methodKind: "unary";
        input: typeof import("./easylab.js").BuildRequestSchema;
        output: typeof import("./easylab.js").BuildResponseSchema;
    };
    taskLog: {
        methodKind: "server_streaming";
        input: typeof import("./easylab.js").TaskLogRequestSchema;
        output: typeof import("./easylab.js").TaskLogResponseSchema;
    };
    sync: {
        methodKind: "unary";
        input: typeof import("./easylab.js").SyncRequestSchema;
        output: typeof import("./easylab.js").SyncResponseSchema;
    };
}>>;
declare function createRegistryClient(transport: Transport): import("@connectrpc/connect").Client<import("@bufbuild/protobuf/codegenv2").GenService<{
    listPackageTypes: {
        methodKind: "unary";
        input: typeof import("./easylab.js").ListPackageTypesRequestSchema;
        output: typeof import("./easylab.js").ListPackageTypesResponseSchema;
    };
    listPackages: {
        methodKind: "unary";
        input: typeof import("./easylab.js").ListPackagesRequestSchema;
        output: typeof import("./easylab.js").ListPackagesResponseSchema;
    };
    packageVersions: {
        methodKind: "unary";
        input: typeof import("./easylab.js").PackageVersionsRequestSchema;
        output: typeof import("./easylab.js").PackageVersionsResponseSchema;
    };
    deletePackage: {
        methodKind: "unary";
        input: typeof import("./easylab.js").DeletePackageRequestSchema;
        output: typeof import("./easylab.js").DeletePackageResponseSchema;
    };
    deletePackageVersion: {
        methodKind: "unary";
        input: typeof import("./easylab.js").DeletePackageVersionRequestSchema;
        output: typeof import("./easylab.js").DeletePackageVersionResponseSchema;
    };
    listPublishSpecs: {
        methodKind: "unary";
        input: typeof import("./easylab.js").ListPublishSpecsRequestSchema;
        output: typeof import("./easylab.js").ListPublishSpecsResponseSchema;
    };
    oCICatalog: {
        methodKind: "unary";
        input: typeof import("./easylab.js").OCICatalogRequestSchema;
        output: typeof import("./easylab.js").OCICatalogResponseSchema;
    };
}>>;
declare function createAgentClient(transport: Transport): import("@connectrpc/connect").Client<import("@bufbuild/protobuf/codegenv2").GenService<{
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
declare function createSandboxClient(transport: Transport): import("@connectrpc/connect").Client<import("@bufbuild/protobuf/codegenv2").GenService<{
    listSandboxes: {
        methodKind: "unary";
        input: typeof import("./easylab.js").ListSandboxesRequestSchema;
        output: typeof import("./easylab.js").ListSandboxesResponseSchema;
    };
    getSandbox: {
        methodKind: "unary";
        input: typeof import("./easylab.js").GetSandboxRequestSchema;
        output: typeof import("./easylab.js").GetSandboxResponseSchema;
    };
    ensureSandboxImage: {
        methodKind: "unary";
        input: typeof import("./easylab.js").EnsureSandboxImageRequestSchema;
        output: typeof import("./easylab.js").EnsureSandboxImageResponseSchema;
    };
    launchSandbox: {
        methodKind: "unary";
        input: typeof import("./easylab.js").LaunchSandboxRequestSchema;
        output: typeof import("./easylab.js").LaunchSandboxResponseSchema;
    };
    deleteSandbox: {
        methodKind: "unary";
        input: typeof import("./easylab.js").DeleteSandboxRequestSchema;
        output: typeof import("./easylab.js").DeleteSandboxResponseSchema;
    };
    execute: {
        methodKind: "unary";
        input: typeof import("./easylab.js").ExecuteRequestSchema;
        output: typeof import("./gen/worker/v1/worker_pb.js").ExecuteResponseSchema;
    };
    listJobs: {
        methodKind: "unary";
        input: typeof import("./easylab.js").ListJobsRequestSchema;
        output: typeof import("./gen/worker/v1/worker_pb.js").ListJobsResponseSchema;
    };
    jobOutput: {
        methodKind: "unary";
        input: typeof import("./easylab.js").JobOutputRequestSchema;
        output: typeof import("./gen/worker/v1/worker_pb.js").JobOutputResponseSchema;
    };
    watchJob: {
        methodKind: "server_streaming";
        input: typeof import("./easylab.js").WatchJobRequestSchema;
        output: typeof import("./gen/worker/v1/worker_pb.js").WatchJobResponseSchema;
    };
    jobWait: {
        methodKind: "unary";
        input: typeof import("./easylab.js").JobWaitRequestSchema;
        output: typeof import("./gen/worker/v1/worker_pb.js").JobWaitResponseSchema;
    };
    jobStdin: {
        methodKind: "unary";
        input: typeof import("./easylab.js").JobStdinRequestSchema;
        output: typeof import("./gen/worker/v1/worker_pb.js").JobStdinResponseSchema;
    };
    jobKill: {
        methodKind: "unary";
        input: typeof import("./easylab.js").JobKillRequestSchema;
        output: typeof import("./gen/worker/v1/worker_pb.js").JobKillResponseSchema;
    };
    fileRead: {
        methodKind: "unary";
        input: typeof import("./easylab.js").FileReadRequestSchema;
        output: typeof import("./gen/worker/v1/worker_pb.js").FileReadResponseSchema;
    };
    syncWorkspace: {
        methodKind: "unary";
        input: typeof import("./easylab.js").SyncWorkspaceRequestSchema;
        output: typeof import("./easylab.js").SyncWorkspaceResponseSchema;
    };
    fileWrite: {
        methodKind: "unary";
        input: typeof import("./easylab.js").FileWriteRequestSchema;
        output: typeof import("./gen/worker/v1/worker_pb.js").FileWriteResponseSchema;
    };
    fileList: {
        methodKind: "unary";
        input: typeof import("./easylab.js").FileListRequestSchema;
        output: typeof import("./gen/worker/v1/worker_pb.js").FileListResponseSchema;
    };
}>>;
/** Build the typed easylab gateway client. */
export declare function createEasyLabClient(options: EasyLabClientOptions): EasyLabClient;
