import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file worker/v1/worker.proto.
 */
export declare const file_worker_v1_worker: GenFile;
/**
 * @generated from message worker.v1.InfoRequest
 */
export type InfoRequest = Message<"worker.v1.InfoRequest"> & {};
/**
 * Describes the message worker.v1.InfoRequest.
 * Use `create(InfoRequestSchema)` to create a new message.
 */
export declare const InfoRequestSchema: GenMessage<InfoRequest>;
/**
 * @generated from message worker.v1.InfoResponse
 */
export type InfoResponse = Message<"worker.v1.InfoResponse"> & {
    /**
     * runtime.GOOS
     *
     * @generated from field: string os = 1;
     */
    os: string;
    /**
     * runtime.GOARCH
     *
     * @generated from field: string arch = 2;
     */
    arch: string;
    /**
     * always "builtin(mvdan-sh)" — reported for the model
     *
     * @generated from field: string shell = 3;
     */
    shell: string;
    /**
     * absolute workspace root (default cwd for execute)
     *
     * @generated from field: string workspace = 4;
     */
    workspace: string;
    /**
     * per-process UUID: easylab compares it against the
     *
     * @generated from field: string boot_id = 5;
     */
    bootId: string;
};
/**
 * Describes the message worker.v1.InfoResponse.
 * Use `create(InfoResponseSchema)` to create a new message.
 */
export declare const InfoResponseSchema: GenMessage<InfoResponse>;
/**
 * Execute always registers a job (no fast/slow split, same as legacy worker).
 *
 * @generated from message worker.v1.ExecuteRequest
 */
export type ExecuteRequest = Message<"worker.v1.ExecuteRequest"> & {
    /**
     * @generated from field: string command = 1;
     */
    command: string;
    /**
     * relative to the workspace root
     *
     * @generated from field: string workdir = 2;
     */
    workdir: string;
    /**
     * @generated from field: map<string, string> env = 3;
     */
    env: {
        [key: string]: string;
    };
};
/**
 * Describes the message worker.v1.ExecuteRequest.
 * Use `create(ExecuteRequestSchema)` to create a new message.
 */
export declare const ExecuteRequestSchema: GenMessage<ExecuteRequest>;
/**
 * @generated from message worker.v1.ExecuteResponse
 */
export type ExecuteResponse = Message<"worker.v1.ExecuteResponse"> & {
    /**
     * @generated from field: string job_id = 1;
     */
    jobId: string;
};
/**
 * Describes the message worker.v1.ExecuteResponse.
 * Use `create(ExecuteResponseSchema)` to create a new message.
 */
export declare const ExecuteResponseSchema: GenMessage<ExecuteResponse>;
/**
 * @generated from message worker.v1.JobEntry
 */
export type JobEntry = Message<"worker.v1.JobEntry"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string command = 2;
     */
    command: string;
    /**
     * running | done | killed | failed
     *
     * @generated from field: string state = 3;
     */
    state: string;
    /**
     * @generated from field: int32 exit_code = 4;
     */
    exitCode: number;
    /**
     * unix millis
     *
     * @generated from field: int64 started_at = 5;
     */
    startedAt: bigint;
    /**
     * unix millis, 0 while running
     *
     * @generated from field: int64 finished_at = 6;
     */
    finishedAt: bigint;
};
/**
 * Describes the message worker.v1.JobEntry.
 * Use `create(JobEntrySchema)` to create a new message.
 */
export declare const JobEntrySchema: GenMessage<JobEntry>;
/**
 * @generated from message worker.v1.ListJobsRequest
 */
export type ListJobsRequest = Message<"worker.v1.ListJobsRequest"> & {};
/**
 * Describes the message worker.v1.ListJobsRequest.
 * Use `create(ListJobsRequestSchema)` to create a new message.
 */
export declare const ListJobsRequestSchema: GenMessage<ListJobsRequest>;
/**
 * @generated from message worker.v1.ListJobsResponse
 */
export type ListJobsResponse = Message<"worker.v1.ListJobsResponse"> & {
    /**
     * @generated from field: repeated worker.v1.JobEntry jobs = 1;
     */
    jobs: JobEntry[];
};
/**
 * Describes the message worker.v1.ListJobsResponse.
 * Use `create(ListJobsResponseSchema)` to create a new message.
 */
export declare const ListJobsResponseSchema: GenMessage<ListJobsResponse>;
/**
 * WatchJob is the Connect server-streaming replacement for the /ws/job SSE
 * endpoint: it replays buffered history first, then streams live output until
 * the job completes (or the watcher disconnects; the job itself keeps running).
 *
 * @generated from message worker.v1.WatchJobRequest
 */
export type WatchJobRequest = Message<"worker.v1.WatchJobRequest"> & {
    /**
     * @generated from field: string job_id = 1;
     */
    jobId: string;
};
/**
 * Describes the message worker.v1.WatchJobRequest.
 * Use `create(WatchJobRequestSchema)` to create a new message.
 */
export declare const WatchJobRequestSchema: GenMessage<WatchJobRequest>;
/**
 * @generated from message worker.v1.WatchJobResponse
 */
export type WatchJobResponse = Message<"worker.v1.WatchJobResponse"> & {
    /**
     * @generated from oneof worker.v1.WatchJobResponse.event
     */
    event: {
        /**
         * job.output: incremental stdout chunk
         *
         * @generated from field: string output = 1;
         */
        value: string;
        case: "output";
    } | {
        /**
         * job.completed: terminal event, always sent last
         *
         * @generated from field: worker.v1.WatchJobResponse.Done done = 2;
         */
        value: WatchJobResponse_Done;
        case: "done";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message worker.v1.WatchJobResponse.
 * Use `create(WatchJobResponseSchema)` to create a new message.
 */
export declare const WatchJobResponseSchema: GenMessage<WatchJobResponse>;
/**
 * @generated from message worker.v1.WatchJobResponse.Done
 */
export type WatchJobResponse_Done = Message<"worker.v1.WatchJobResponse.Done"> & {
    /**
     * @generated from field: int32 exit_code = 1;
     */
    exitCode: number;
    /**
     * tail
     *
     * @generated from field: string stdout = 2;
     */
    stdout: string;
    /**
     * tail
     *
     * @generated from field: string stderr = 3;
     */
    stderr: string;
};
/**
 * Describes the message worker.v1.WatchJobResponse.Done.
 * Use `create(WatchJobResponse_DoneSchema)` to create a new message.
 */
export declare const WatchJobResponse_DoneSchema: GenMessage<WatchJobResponse_Done>;
/**
 * @generated from message worker.v1.JobOutputRequest
 */
export type JobOutputRequest = Message<"worker.v1.JobOutputRequest"> & {
    /**
     * @generated from field: string job_id = 1;
     */
    jobId: string;
    /**
     * line index, negative counts from the end (-200 = last 200)
     *
     * @generated from field: int32 start = 2;
     */
    start: number;
    /**
     * exclusive; 0 = through the end of buffer
     *
     * @generated from field: int32 end = 3;
     */
    end: number;
    /**
     * all | stdout | stderr (default all)
     *
     * @generated from field: string stream = 4;
     */
    stream: string;
};
/**
 * Describes the message worker.v1.JobOutputRequest.
 * Use `create(JobOutputRequestSchema)` to create a new message.
 */
export declare const JobOutputRequestSchema: GenMessage<JobOutputRequest>;
/**
 * @generated from message worker.v1.JobOutputResponse
 */
export type JobOutputResponse = Message<"worker.v1.JobOutputResponse"> & {
    /**
     * @generated from field: repeated string lines = 1;
     */
    lines: string[];
    /**
     * @generated from field: int32 total_lines = 2;
     */
    totalLines: number;
    /**
     * @generated from field: int32 start_line = 3;
     */
    startLine: number;
    /**
     * @generated from field: int32 end_line = 4;
     */
    endLine: number;
    /**
     * @generated from field: bool done = 5;
     */
    done: boolean;
};
/**
 * Describes the message worker.v1.JobOutputResponse.
 * Use `create(JobOutputResponseSchema)` to create a new message.
 */
export declare const JobOutputResponseSchema: GenMessage<JobOutputResponse>;
/**
 * Wait blocks until the job completes or timeout_ms elapses. The worker caps
 * the wait at 60s (job_wait cap, matching the legacy contract; clients use a
 * 65s read timeout).
 *
 * @generated from message worker.v1.JobWaitRequest
 */
export type JobWaitRequest = Message<"worker.v1.JobWaitRequest"> & {
    /**
     * @generated from field: string job_id = 1;
     */
    jobId: string;
    /**
     * @generated from field: int32 timeout_ms = 2;
     */
    timeoutMs: number;
};
/**
 * Describes the message worker.v1.JobWaitRequest.
 * Use `create(JobWaitRequestSchema)` to create a new message.
 */
export declare const JobWaitRequestSchema: GenMessage<JobWaitRequest>;
/**
 * @generated from message worker.v1.JobWaitResponse
 */
export type JobWaitResponse = Message<"worker.v1.JobWaitResponse"> & {
    /**
     * @generated from field: string state = 1;
     */
    state: string;
    /**
     * @generated from field: int32 exit_code = 2;
     */
    exitCode: number;
};
/**
 * Describes the message worker.v1.JobWaitResponse.
 * Use `create(JobWaitResponseSchema)` to create a new message.
 */
export declare const JobWaitResponseSchema: GenMessage<JobWaitResponse>;
/**
 * @generated from message worker.v1.JobStdinRequest
 */
export type JobStdinRequest = Message<"worker.v1.JobStdinRequest"> & {
    /**
     * @generated from field: string job_id = 1;
     */
    jobId: string;
    /**
     * @generated from field: bytes data = 2;
     */
    data: Uint8Array;
    /**
     * close the stdin pipe after writing
     *
     * @generated from field: bool close = 3;
     */
    close: boolean;
};
/**
 * Describes the message worker.v1.JobStdinRequest.
 * Use `create(JobStdinRequestSchema)` to create a new message.
 */
export declare const JobStdinRequestSchema: GenMessage<JobStdinRequest>;
/**
 * @generated from message worker.v1.JobStdinResponse
 */
export type JobStdinResponse = Message<"worker.v1.JobStdinResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
};
/**
 * Describes the message worker.v1.JobStdinResponse.
 * Use `create(JobStdinResponseSchema)` to create a new message.
 */
export declare const JobStdinResponseSchema: GenMessage<JobStdinResponse>;
/**
 * @generated from message worker.v1.JobKillRequest
 */
export type JobKillRequest = Message<"worker.v1.JobKillRequest"> & {
    /**
     * @generated from field: string job_id = 1;
     */
    jobId: string;
};
/**
 * Describes the message worker.v1.JobKillRequest.
 * Use `create(JobKillRequestSchema)` to create a new message.
 */
export declare const JobKillRequestSchema: GenMessage<JobKillRequest>;
/**
 * @generated from message worker.v1.JobKillResponse
 */
export type JobKillResponse = Message<"worker.v1.JobKillResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
};
/**
 * Describes the message worker.v1.JobKillResponse.
 * Use `create(JobKillResponseSchema)` to create a new message.
 */
export declare const JobKillResponseSchema: GenMessage<JobKillResponse>;
/**
 * @generated from message worker.v1.FileReadRequest
 */
export type FileReadRequest = Message<"worker.v1.FileReadRequest"> & {
    /**
     * @generated from field: string path = 1;
     */
    path: string;
};
/**
 * Describes the message worker.v1.FileReadRequest.
 * Use `create(FileReadRequestSchema)` to create a new message.
 */
export declare const FileReadRequestSchema: GenMessage<FileReadRequest>;
/**
 * @generated from message worker.v1.FileReadResponse
 */
export type FileReadResponse = Message<"worker.v1.FileReadResponse"> & {
    /**
     * @generated from field: bytes content = 1;
     */
    content: Uint8Array;
};
/**
 * Describes the message worker.v1.FileReadResponse.
 * Use `create(FileReadResponseSchema)` to create a new message.
 */
export declare const FileReadResponseSchema: GenMessage<FileReadResponse>;
/**
 * @generated from message worker.v1.FileWriteRequest
 */
export type FileWriteRequest = Message<"worker.v1.FileWriteRequest"> & {
    /**
     * @generated from field: string path = 1;
     */
    path: string;
    /**
     * @generated from field: bytes content = 2;
     */
    content: Uint8Array;
};
/**
 * Describes the message worker.v1.FileWriteRequest.
 * Use `create(FileWriteRequestSchema)` to create a new message.
 */
export declare const FileWriteRequestSchema: GenMessage<FileWriteRequest>;
/**
 * @generated from message worker.v1.FileWriteResponse
 */
export type FileWriteResponse = Message<"worker.v1.FileWriteResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
};
/**
 * Describes the message worker.v1.FileWriteResponse.
 * Use `create(FileWriteResponseSchema)` to create a new message.
 */
export declare const FileWriteResponseSchema: GenMessage<FileWriteResponse>;
/**
 * @generated from message worker.v1.FileEntry
 */
export type FileEntry = Message<"worker.v1.FileEntry"> & {
    /**
     * @generated from field: string path = 1;
     */
    path: string;
    /**
     * @generated from field: int64 size = 2;
     */
    size: bigint;
    /**
     * @generated from field: bool is_dir = 3;
     */
    isDir: boolean;
};
/**
 * Describes the message worker.v1.FileEntry.
 * Use `create(FileEntrySchema)` to create a new message.
 */
export declare const FileEntrySchema: GenMessage<FileEntry>;
/**
 * @generated from message worker.v1.FileListRequest
 */
export type FileListRequest = Message<"worker.v1.FileListRequest"> & {
    /**
     * @generated from field: string path = 1;
     */
    path: string;
};
/**
 * Describes the message worker.v1.FileListRequest.
 * Use `create(FileListRequestSchema)` to create a new message.
 */
export declare const FileListRequestSchema: GenMessage<FileListRequest>;
/**
 * @generated from message worker.v1.FileListResponse
 */
export type FileListResponse = Message<"worker.v1.FileListResponse"> & {
    /**
     * @generated from field: bool is_dir = 1;
     */
    isDir: boolean;
    /**
     * @generated from field: repeated worker.v1.FileEntry files = 2;
     */
    files: FileEntry[];
};
/**
 * Describes the message worker.v1.FileListResponse.
 * Use `create(FileListResponseSchema)` to create a new message.
 */
export declare const FileListResponseSchema: GenMessage<FileListResponse>;
/**
 * @generated from service worker.v1.WorkerService
 */
export declare const WorkerService: GenService<{
    /**
     * @generated from rpc worker.v1.WorkerService.Info
     */
    info: {
        methodKind: "unary";
        input: typeof InfoRequestSchema;
        output: typeof InfoResponseSchema;
    };
    /**
     * @generated from rpc worker.v1.WorkerService.Execute
     */
    execute: {
        methodKind: "unary";
        input: typeof ExecuteRequestSchema;
        output: typeof ExecuteResponseSchema;
    };
    /**
     * @generated from rpc worker.v1.WorkerService.ListJobs
     */
    listJobs: {
        methodKind: "unary";
        input: typeof ListJobsRequestSchema;
        output: typeof ListJobsResponseSchema;
    };
    /**
     * @generated from rpc worker.v1.WorkerService.WatchJob
     */
    watchJob: {
        methodKind: "server_streaming";
        input: typeof WatchJobRequestSchema;
        output: typeof WatchJobResponseSchema;
    };
    /**
     * @generated from rpc worker.v1.WorkerService.JobOutput
     */
    jobOutput: {
        methodKind: "unary";
        input: typeof JobOutputRequestSchema;
        output: typeof JobOutputResponseSchema;
    };
    /**
     * @generated from rpc worker.v1.WorkerService.JobWait
     */
    jobWait: {
        methodKind: "unary";
        input: typeof JobWaitRequestSchema;
        output: typeof JobWaitResponseSchema;
    };
    /**
     * @generated from rpc worker.v1.WorkerService.JobStdin
     */
    jobStdin: {
        methodKind: "unary";
        input: typeof JobStdinRequestSchema;
        output: typeof JobStdinResponseSchema;
    };
    /**
     * @generated from rpc worker.v1.WorkerService.JobKill
     */
    jobKill: {
        methodKind: "unary";
        input: typeof JobKillRequestSchema;
        output: typeof JobKillResponseSchema;
    };
    /**
     * @generated from rpc worker.v1.WorkerService.FileRead
     */
    fileRead: {
        methodKind: "unary";
        input: typeof FileReadRequestSchema;
        output: typeof FileReadResponseSchema;
    };
    /**
     * @generated from rpc worker.v1.WorkerService.FileWrite
     */
    fileWrite: {
        methodKind: "unary";
        input: typeof FileWriteRequestSchema;
        output: typeof FileWriteResponseSchema;
    };
    /**
     * @generated from rpc worker.v1.WorkerService.FileList
     */
    fileList: {
        methodKind: "unary";
        input: typeof FileListRequestSchema;
        output: typeof FileListResponseSchema;
    };
}>;
