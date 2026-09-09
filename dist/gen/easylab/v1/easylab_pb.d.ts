import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { ExecuteRequest as ExecuteRequest$1, ExecuteResponseSchema, FileListRequest as FileListRequest$1, FileListResponseSchema, FileReadRequest as FileReadRequest$1, FileReadResponseSchema, FileWriteRequest as FileWriteRequest$1, FileWriteResponseSchema, JobKillRequest as JobKillRequest$1, JobKillResponseSchema, JobOutputRequest as JobOutputRequest$1, JobOutputResponseSchema, JobStdinRequest as JobStdinRequest$1, JobStdinResponseSchema, JobWaitRequest as JobWaitRequest$1, JobWaitResponseSchema, ListJobsResponseSchema, WatchJobRequest as WatchJobRequest$1, WatchJobResponseSchema } from "../../worker/v1/worker_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file easylab/v1/easylab.proto.
 */
export declare const file_easylab_v1_easylab: GenFile;
/**
 * @generated from message easylab.v1.RepoRefReq
 */
export type RepoRefReq = Message<"easylab.v1.RepoRefReq"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
};
/**
 * Describes the message easylab.v1.RepoRefReq.
 * Use `create(RepoRefReqSchema)` to create a new message.
 */
export declare const RepoRefReqSchema: GenMessage<RepoRefReq>;
/**
 * @generated from message easylab.v1.RepoInfo
 */
export type RepoInfo = Message<"easylab.v1.RepoInfo"> & {
    /**
     * @generated from field: string namespace = 1;
     */
    namespace: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string default_branch = 3;
     */
    defaultBranch: string;
    /**
     * @generated from field: string sha = 4;
     */
    sha: string;
    /**
     * @generated from field: map<string, string> meta = 5;
     */
    meta: {
        [key: string]: string;
    };
};
/**
 * Describes the message easylab.v1.RepoInfo.
 * Use `create(RepoInfoSchema)` to create a new message.
 */
export declare const RepoInfoSchema: GenMessage<RepoInfo>;
/**
 * @generated from message easylab.v1.Ok
 */
export type Ok = Message<"easylab.v1.Ok"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string error = 2;
     */
    error: string;
};
/**
 * Describes the message easylab.v1.Ok.
 * Use `create(OkSchema)` to create a new message.
 */
export declare const OkSchema: GenMessage<Ok>;
/**
 * @generated from message easylab.v1.FileEntry
 */
export type FileEntry = Message<"easylab.v1.FileEntry"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string path = 2;
     */
    path: string;
    /**
     * file | dir | symlink | ...
     *
     * @generated from field: string kind = 3;
     */
    kind: string;
    /**
     * @generated from field: int32 size = 4;
     */
    size: number;
};
/**
 * Describes the message easylab.v1.FileEntry.
 * Use `create(FileEntrySchema)` to create a new message.
 */
export declare const FileEntrySchema: GenMessage<FileEntry>;
/**
 * @generated from message easylab.v1.DiffFile
 */
export type DiffFile = Message<"easylab.v1.DiffFile"> & {
    /**
     * @generated from field: string path = 1;
     */
    path: string;
    /**
     * @generated from field: string diff = 2;
     */
    diff: string;
    /**
     * @generated from field: int32 additions = 3;
     */
    additions: number;
    /**
     * @generated from field: int32 deletions = 4;
     */
    deletions: number;
};
/**
 * Describes the message easylab.v1.DiffFile.
 * Use `create(DiffFileSchema)` to create a new message.
 */
export declare const DiffFileSchema: GenMessage<DiffFile>;
/**
 * @generated from message easylab.v1.CommitInfo
 */
export type CommitInfo = Message<"easylab.v1.CommitInfo"> & {
    /**
     * @generated from field: string change_id = 1;
     */
    changeId: string;
    /**
     * @generated from field: string commit_id = 2;
     */
    commitId: string;
    /**
     * @generated from field: string author = 3;
     */
    author: string;
    /**
     * @generated from field: string timestamp = 4;
     */
    timestamp: string;
    /**
     * @generated from field: string message = 5;
     */
    message: string;
};
/**
 * Describes the message easylab.v1.CommitInfo.
 * Use `create(CommitInfoSchema)` to create a new message.
 */
export declare const CommitInfoSchema: GenMessage<CommitInfo>;
/**
 * @generated from message easylab.v1.TagInfo
 */
export type TagInfo = Message<"easylab.v1.TagInfo"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string target = 2;
     */
    target: string;
};
/**
 * Describes the message easylab.v1.TagInfo.
 * Use `create(TagInfoSchema)` to create a new message.
 */
export declare const TagInfoSchema: GenMessage<TagInfo>;
/**
 * @generated from message easylab.v1.BranchInfo
 */
export type BranchInfo = Message<"easylab.v1.BranchInfo"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string sha = 2;
     */
    sha: string;
};
/**
 * Describes the message easylab.v1.BranchInfo.
 * Use `create(BranchInfoSchema)` to create a new message.
 */
export declare const BranchInfoSchema: GenMessage<BranchInfo>;
/**
 * @generated from message easylab.v1.RevisionInfo
 */
export type RevisionInfo = Message<"easylab.v1.RevisionInfo"> & {
    /**
     * @generated from field: string rev = 1;
     */
    rev: string;
    /**
     * @generated from field: string sha = 2;
     */
    sha: string;
    /**
     * @generated from field: string message = 3;
     */
    message: string;
    /**
     * @generated from field: string author = 4;
     */
    author: string;
    /**
     * @generated from field: string timestamp = 5;
     */
    timestamp: string;
};
/**
 * Describes the message easylab.v1.RevisionInfo.
 * Use `create(RevisionInfoSchema)` to create a new message.
 */
export declare const RevisionInfoSchema: GenMessage<RevisionInfo>;
/**
 * @generated from message easylab.v1.RevisionFile
 */
export type RevisionFile = Message<"easylab.v1.RevisionFile"> & {
    /**
     * @generated from field: string path = 1;
     */
    path: string;
    /**
     * @generated from field: string mode = 2;
     */
    mode: string;
    /**
     * @generated from field: string sha = 3;
     */
    sha: string;
};
/**
 * Describes the message easylab.v1.RevisionFile.
 * Use `create(RevisionFileSchema)` to create a new message.
 */
export declare const RevisionFileSchema: GenMessage<RevisionFile>;
/**
 * @generated from message easylab.v1.MirrorInfo
 */
export type MirrorInfo = Message<"easylab.v1.MirrorInfo"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string url = 2;
     */
    url: string;
    /**
     * @generated from field: string status = 3;
     */
    status: string;
};
/**
 * Describes the message easylab.v1.MirrorInfo.
 * Use `create(MirrorInfoSchema)` to create a new message.
 */
export declare const MirrorInfoSchema: GenMessage<MirrorInfo>;
/**
 * @generated from message easylab.v1.ListReposRequest
 */
export type ListReposRequest = Message<"easylab.v1.ListReposRequest"> & {};
/**
 * Describes the message easylab.v1.ListReposRequest.
 * Use `create(ListReposRequestSchema)` to create a new message.
 */
export declare const ListReposRequestSchema: GenMessage<ListReposRequest>;
/**
 * @generated from message easylab.v1.ListReposResponse
 */
export type ListReposResponse = Message<"easylab.v1.ListReposResponse"> & {
    /**
     * @generated from field: repeated easylab.v1.RepoInfo repos = 1;
     */
    repos: RepoInfo[];
};
/**
 * Describes the message easylab.v1.ListReposResponse.
 * Use `create(ListReposResponseSchema)` to create a new message.
 */
export declare const ListReposResponseSchema: GenMessage<ListReposResponse>;
/**
 * @generated from message easylab.v1.CreateRepoRequest
 */
export type CreateRepoRequest = Message<"easylab.v1.CreateRepoRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
};
/**
 * Describes the message easylab.v1.CreateRepoRequest.
 * Use `create(CreateRepoRequestSchema)` to create a new message.
 */
export declare const CreateRepoRequestSchema: GenMessage<CreateRepoRequest>;
/**
 * @generated from message easylab.v1.CreateRepoResponse
 */
export type CreateRepoResponse = Message<"easylab.v1.CreateRepoResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string error = 2;
     */
    error: string;
};
/**
 * Describes the message easylab.v1.CreateRepoResponse.
 * Use `create(CreateRepoResponseSchema)` to create a new message.
 */
export declare const CreateRepoResponseSchema: GenMessage<CreateRepoResponse>;
/**
 * @generated from message easylab.v1.DeleteRepoRequest
 */
export type DeleteRepoRequest = Message<"easylab.v1.DeleteRepoRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
};
/**
 * Describes the message easylab.v1.DeleteRepoRequest.
 * Use `create(DeleteRepoRequestSchema)` to create a new message.
 */
export declare const DeleteRepoRequestSchema: GenMessage<DeleteRepoRequest>;
/**
 * @generated from message easylab.v1.DeleteRepoResponse
 */
export type DeleteRepoResponse = Message<"easylab.v1.DeleteRepoResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string deleted = 2;
     */
    deleted: string;
};
/**
 * Describes the message easylab.v1.DeleteRepoResponse.
 * Use `create(DeleteRepoResponseSchema)` to create a new message.
 */
export declare const DeleteRepoResponseSchema: GenMessage<DeleteRepoResponse>;
/**
 * @generated from message easylab.v1.EnsureRepoRequest
 */
export type EnsureRepoRequest = Message<"easylab.v1.EnsureRepoRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
};
/**
 * Describes the message easylab.v1.EnsureRepoRequest.
 * Use `create(EnsureRepoRequestSchema)` to create a new message.
 */
export declare const EnsureRepoRequestSchema: GenMessage<EnsureRepoRequest>;
/**
 * @generated from message easylab.v1.EnsureRepoResponse
 */
export type EnsureRepoResponse = Message<"easylab.v1.EnsureRepoResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string error = 2;
     */
    error: string;
};
/**
 * Describes the message easylab.v1.EnsureRepoResponse.
 * Use `create(EnsureRepoResponseSchema)` to create a new message.
 */
export declare const EnsureRepoResponseSchema: GenMessage<EnsureRepoResponse>;
/**
 * @generated from message easylab.v1.EnsureOrgRequest
 */
export type EnsureOrgRequest = Message<"easylab.v1.EnsureOrgRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
};
/**
 * Describes the message easylab.v1.EnsureOrgRequest.
 * Use `create(EnsureOrgRequestSchema)` to create a new message.
 */
export declare const EnsureOrgRequestSchema: GenMessage<EnsureOrgRequest>;
/**
 * @generated from message easylab.v1.EnsureOrgResponse
 */
export type EnsureOrgResponse = Message<"easylab.v1.EnsureOrgResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string error = 2;
     */
    error: string;
};
/**
 * Describes the message easylab.v1.EnsureOrgResponse.
 * Use `create(EnsureOrgResponseSchema)` to create a new message.
 */
export declare const EnsureOrgResponseSchema: GenMessage<EnsureOrgResponse>;
/**
 * @generated from message easylab.v1.ForkRepoRequest
 */
export type ForkRepoRequest = Message<"easylab.v1.ForkRepoRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: string to = 3;
     */
    to: string;
};
/**
 * Describes the message easylab.v1.ForkRepoRequest.
 * Use `create(ForkRepoRequestSchema)` to create a new message.
 */
export declare const ForkRepoRequestSchema: GenMessage<ForkRepoRequest>;
/**
 * @generated from message easylab.v1.ForkRepoResponse
 */
export type ForkRepoResponse = Message<"easylab.v1.ForkRepoResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string error = 2;
     */
    error: string;
};
/**
 * Describes the message easylab.v1.ForkRepoResponse.
 * Use `create(ForkRepoResponseSchema)` to create a new message.
 */
export declare const ForkRepoResponseSchema: GenMessage<ForkRepoResponse>;
/**
 * @generated from message easylab.v1.CloneRepoRequest
 */
export type CloneRepoRequest = Message<"easylab.v1.CloneRepoRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: string git_url = 3;
     */
    gitUrl: string;
    /**
     * @generated from field: string rev = 4;
     */
    rev: string;
};
/**
 * Describes the message easylab.v1.CloneRepoRequest.
 * Use `create(CloneRepoRequestSchema)` to create a new message.
 */
export declare const CloneRepoRequestSchema: GenMessage<CloneRepoRequest>;
/**
 * @generated from message easylab.v1.CloneRepoResponse
 */
export type CloneRepoResponse = Message<"easylab.v1.CloneRepoResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string error = 2;
     */
    error: string;
};
/**
 * Describes the message easylab.v1.CloneRepoResponse.
 * Use `create(CloneRepoResponseSchema)` to create a new message.
 */
export declare const CloneRepoResponseSchema: GenMessage<CloneRepoResponse>;
/**
 * @generated from message easylab.v1.TreeRequest
 */
export type TreeRequest = Message<"easylab.v1.TreeRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: string ref = 3;
     */
    ref: string;
    /**
     * @generated from field: string path = 4;
     */
    path: string;
};
/**
 * Describes the message easylab.v1.TreeRequest.
 * Use `create(TreeRequestSchema)` to create a new message.
 */
export declare const TreeRequestSchema: GenMessage<TreeRequest>;
/**
 * @generated from message easylab.v1.TreeResponse
 */
export type TreeResponse = Message<"easylab.v1.TreeResponse"> & {
    /**
     * @generated from field: repeated easylab.v1.FileEntry entries = 1;
     */
    entries: FileEntry[];
};
/**
 * Describes the message easylab.v1.TreeResponse.
 * Use `create(TreeResponseSchema)` to create a new message.
 */
export declare const TreeResponseSchema: GenMessage<TreeResponse>;
/**
 * @generated from message easylab.v1.ReadBlobRequest
 */
export type ReadBlobRequest = Message<"easylab.v1.ReadBlobRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: string ref = 3;
     */
    ref: string;
    /**
     * @generated from field: string path = 4;
     */
    path: string;
};
/**
 * Describes the message easylab.v1.ReadBlobRequest.
 * Use `create(ReadBlobRequestSchema)` to create a new message.
 */
export declare const ReadBlobRequestSchema: GenMessage<ReadBlobRequest>;
/**
 * @generated from message easylab.v1.ReadBlobResponse
 */
export type ReadBlobResponse = Message<"easylab.v1.ReadBlobResponse"> & {
    /**
     * @generated from field: string content = 1;
     */
    content: string;
    /**
     * @generated from field: bytes raw = 2;
     */
    raw: Uint8Array;
};
/**
 * Describes the message easylab.v1.ReadBlobResponse.
 * Use `create(ReadBlobResponseSchema)` to create a new message.
 */
export declare const ReadBlobResponseSchema: GenMessage<ReadBlobResponse>;
/**
 * @generated from message easylab.v1.WriteBlobRequest
 */
export type WriteBlobRequest = Message<"easylab.v1.WriteBlobRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: string ref = 3;
     */
    ref: string;
    /**
     * @generated from field: string path = 4;
     */
    path: string;
    /**
     * @generated from field: string content = 5;
     */
    content: string;
    /**
     * @generated from field: bytes raw = 6;
     */
    raw: Uint8Array;
    /**
     * @generated from field: string message = 7;
     */
    message: string;
};
/**
 * Describes the message easylab.v1.WriteBlobRequest.
 * Use `create(WriteBlobRequestSchema)` to create a new message.
 */
export declare const WriteBlobRequestSchema: GenMessage<WriteBlobRequest>;
/**
 * @generated from message easylab.v1.WriteBlobResponse
 */
export type WriteBlobResponse = Message<"easylab.v1.WriteBlobResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string error = 2;
     */
    error: string;
};
/**
 * Describes the message easylab.v1.WriteBlobResponse.
 * Use `create(WriteBlobResponseSchema)` to create a new message.
 */
export declare const WriteBlobResponseSchema: GenMessage<WriteBlobResponse>;
/**
 * @generated from message easylab.v1.LogRequest
 */
export type LogRequest = Message<"easylab.v1.LogRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: string ref = 3;
     */
    ref: string;
    /**
     * @generated from field: int32 limit = 4;
     */
    limit: number;
};
/**
 * Describes the message easylab.v1.LogRequest.
 * Use `create(LogRequestSchema)` to create a new message.
 */
export declare const LogRequestSchema: GenMessage<LogRequest>;
/**
 * @generated from message easylab.v1.LogResponse
 */
export type LogResponse = Message<"easylab.v1.LogResponse"> & {
    /**
     * @generated from field: repeated easylab.v1.CommitInfo commits = 1;
     */
    commits: CommitInfo[];
};
/**
 * Describes the message easylab.v1.LogResponse.
 * Use `create(LogResponseSchema)` to create a new message.
 */
export declare const LogResponseSchema: GenMessage<LogResponse>;
/**
 * @generated from message easylab.v1.TagsRequest
 */
export type TagsRequest = Message<"easylab.v1.TagsRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
};
/**
 * Describes the message easylab.v1.TagsRequest.
 * Use `create(TagsRequestSchema)` to create a new message.
 */
export declare const TagsRequestSchema: GenMessage<TagsRequest>;
/**
 * @generated from message easylab.v1.TagsResponse
 */
export type TagsResponse = Message<"easylab.v1.TagsResponse"> & {
    /**
     * @generated from field: repeated easylab.v1.TagInfo tags = 1;
     */
    tags: TagInfo[];
};
/**
 * Describes the message easylab.v1.TagsResponse.
 * Use `create(TagsResponseSchema)` to create a new message.
 */
export declare const TagsResponseSchema: GenMessage<TagsResponse>;
/**
 * @generated from message easylab.v1.BranchesRequest
 */
export type BranchesRequest = Message<"easylab.v1.BranchesRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
};
/**
 * Describes the message easylab.v1.BranchesRequest.
 * Use `create(BranchesRequestSchema)` to create a new message.
 */
export declare const BranchesRequestSchema: GenMessage<BranchesRequest>;
/**
 * @generated from message easylab.v1.BranchesResponse
 */
export type BranchesResponse = Message<"easylab.v1.BranchesResponse"> & {
    /**
     * @generated from field: repeated easylab.v1.BranchInfo branches = 1;
     */
    branches: BranchInfo[];
};
/**
 * Describes the message easylab.v1.BranchesResponse.
 * Use `create(BranchesResponseSchema)` to create a new message.
 */
export declare const BranchesResponseSchema: GenMessage<BranchesResponse>;
/**
 * @generated from message easylab.v1.RevisionsRequest
 */
export type RevisionsRequest = Message<"easylab.v1.RevisionsRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: string ref = 3;
     */
    ref: string;
    /**
     * @generated from field: int32 limit = 4;
     */
    limit: number;
};
/**
 * Describes the message easylab.v1.RevisionsRequest.
 * Use `create(RevisionsRequestSchema)` to create a new message.
 */
export declare const RevisionsRequestSchema: GenMessage<RevisionsRequest>;
/**
 * @generated from message easylab.v1.RevisionsResponse
 */
export type RevisionsResponse = Message<"easylab.v1.RevisionsResponse"> & {
    /**
     * @generated from field: repeated easylab.v1.RevisionInfo revisions = 1;
     */
    revisions: RevisionInfo[];
};
/**
 * Describes the message easylab.v1.RevisionsResponse.
 * Use `create(RevisionsResponseSchema)` to create a new message.
 */
export declare const RevisionsResponseSchema: GenMessage<RevisionsResponse>;
/**
 * @generated from message easylab.v1.DiffRequest
 */
export type DiffRequest = Message<"easylab.v1.DiffRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: string change_id = 3;
     */
    changeId: string;
    /**
     * @generated from field: string path = 4;
     */
    path: string;
    /**
     * @generated from field: string from = 5;
     */
    from: string;
    /**
     * @generated from field: string to = 6;
     */
    to: string;
};
/**
 * Describes the message easylab.v1.DiffRequest.
 * Use `create(DiffRequestSchema)` to create a new message.
 */
export declare const DiffRequestSchema: GenMessage<DiffRequest>;
/**
 * @generated from message easylab.v1.DiffResponse
 */
export type DiffResponse = Message<"easylab.v1.DiffResponse"> & {
    /**
     * @generated from field: repeated easylab.v1.DiffFile files = 1;
     */
    files: DiffFile[];
};
/**
 * Describes the message easylab.v1.DiffResponse.
 * Use `create(DiffResponseSchema)` to create a new message.
 */
export declare const DiffResponseSchema: GenMessage<DiffResponse>;
/**
 * @generated from message easylab.v1.BlameRequest
 */
export type BlameRequest = Message<"easylab.v1.BlameRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: string path = 3;
     */
    path: string;
    /**
     * @generated from field: string ref = 4;
     */
    ref: string;
};
/**
 * Describes the message easylab.v1.BlameRequest.
 * Use `create(BlameRequestSchema)` to create a new message.
 */
export declare const BlameRequestSchema: GenMessage<BlameRequest>;
/**
 * @generated from message easylab.v1.BlameResponse
 */
export type BlameResponse = Message<"easylab.v1.BlameResponse"> & {
    /**
     * @generated from field: repeated string lines = 1;
     */
    lines: string[];
};
/**
 * Describes the message easylab.v1.BlameResponse.
 * Use `create(BlameResponseSchema)` to create a new message.
 */
export declare const BlameResponseSchema: GenMessage<BlameResponse>;
/**
 * @generated from message easylab.v1.DeleteBranchRequest
 */
export type DeleteBranchRequest = Message<"easylab.v1.DeleteBranchRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: string branch = 3;
     */
    branch: string;
};
/**
 * Describes the message easylab.v1.DeleteBranchRequest.
 * Use `create(DeleteBranchRequestSchema)` to create a new message.
 */
export declare const DeleteBranchRequestSchema: GenMessage<DeleteBranchRequest>;
/**
 * @generated from message easylab.v1.DeleteBranchResponse
 */
export type DeleteBranchResponse = Message<"easylab.v1.DeleteBranchResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string error = 2;
     */
    error: string;
};
/**
 * Describes the message easylab.v1.DeleteBranchResponse.
 * Use `create(DeleteBranchResponseSchema)` to create a new message.
 */
export declare const DeleteBranchResponseSchema: GenMessage<DeleteBranchResponse>;
/**
 * @generated from message easylab.v1.CreateBranchRequest
 */
export type CreateBranchRequest = Message<"easylab.v1.CreateBranchRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: string branch = 3;
     */
    branch: string;
    /**
     * @generated from field: string from = 4;
     */
    from: string;
};
/**
 * Describes the message easylab.v1.CreateBranchRequest.
 * Use `create(CreateBranchRequestSchema)` to create a new message.
 */
export declare const CreateBranchRequestSchema: GenMessage<CreateBranchRequest>;
/**
 * @generated from message easylab.v1.CreateBranchResponse
 */
export type CreateBranchResponse = Message<"easylab.v1.CreateBranchResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string error = 2;
     */
    error: string;
};
/**
 * Describes the message easylab.v1.CreateBranchResponse.
 * Use `create(CreateBranchResponseSchema)` to create a new message.
 */
export declare const CreateBranchResponseSchema: GenMessage<CreateBranchResponse>;
/**
 * @generated from message easylab.v1.FileHistoryRequest
 */
export type FileHistoryRequest = Message<"easylab.v1.FileHistoryRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: string path = 3;
     */
    path: string;
    /**
     * @generated from field: string ref = 4;
     */
    ref: string;
};
/**
 * Describes the message easylab.v1.FileHistoryRequest.
 * Use `create(FileHistoryRequestSchema)` to create a new message.
 */
export declare const FileHistoryRequestSchema: GenMessage<FileHistoryRequest>;
/**
 * @generated from message easylab.v1.FileHistoryResponse
 */
export type FileHistoryResponse = Message<"easylab.v1.FileHistoryResponse"> & {
    /**
     * @generated from field: repeated easylab.v1.CommitInfo commits = 1;
     */
    commits: CommitInfo[];
};
/**
 * Describes the message easylab.v1.FileHistoryResponse.
 * Use `create(FileHistoryResponseSchema)` to create a new message.
 */
export declare const FileHistoryResponseSchema: GenMessage<FileHistoryResponse>;
/**
 * @generated from message easylab.v1.ServiceInfo
 */
export type ServiceInfo = Message<"easylab.v1.ServiceInfo"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string image = 2;
     */
    image: string;
    /**
     * @generated from field: int32 replicas = 3;
     */
    replicas: number;
    /**
     * @generated from field: int32 ready = 4;
     */
    ready: number;
    /**
     * @generated from field: string namespace = 5;
     */
    namespace: string;
    /**
     * @generated from field: string age = 6;
     */
    age: string;
    /**
     * @generated from field: repeated int32 ports = 7;
     */
    ports: number[];
    /**
     * @generated from field: string session = 8;
     */
    session: string;
    /**
     * @generated from field: string status = 9;
     */
    status: string;
    /**
     * @generated from field: string url = 10;
     */
    url: string;
    /**
     * @generated from field: string kind = 11;
     */
    kind: string;
    /**
     * direct pod address (sandbox worker reach)
     *
     * @generated from field: string pod_ip = 12;
     */
    podIp: string;
    /**
     * running | pending | ...
     *
     * @generated from field: string phase = 13;
     */
    phase: string;
};
/**
 * Describes the message easylab.v1.ServiceInfo.
 * Use `create(ServiceInfoSchema)` to create a new message.
 */
export declare const ServiceInfoSchema: GenMessage<ServiceInfo>;
/**
 * @generated from message easylab.v1.ServicePod
 */
export type ServicePod = Message<"easylab.v1.ServicePod"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string ip = 2;
     */
    ip: string;
    /**
     * @generated from field: string phase = 3;
     */
    phase: string;
    /**
     * @generated from field: bool ready = 4;
     */
    ready: boolean;
    /**
     * @generated from field: string image = 5;
     */
    image: string;
    /**
     * @generated from field: string age = 6;
     */
    age: string;
    /**
     * @generated from field: int32 restarts = 7;
     */
    restarts: number;
};
/**
 * Describes the message easylab.v1.ServicePod.
 * Use `create(ServicePodSchema)` to create a new message.
 */
export declare const ServicePodSchema: GenMessage<ServicePod>;
/**
 * @generated from message easylab.v1.ListServicesRequest
 */
export type ListServicesRequest = Message<"easylab.v1.ListServicesRequest"> & {
    /**
     * @generated from field: bool all = 1;
     */
    all: boolean;
    /**
     * @generated from field: string org = 2;
     */
    org: string;
    /**
     * @generated from field: string repo = 3;
     */
    repo: string;
    /**
     * @generated from field: string namespace = 4;
     */
    namespace: string;
};
/**
 * Describes the message easylab.v1.ListServicesRequest.
 * Use `create(ListServicesRequestSchema)` to create a new message.
 */
export declare const ListServicesRequestSchema: GenMessage<ListServicesRequest>;
/**
 * @generated from message easylab.v1.ListServicesResponse
 */
export type ListServicesResponse = Message<"easylab.v1.ListServicesResponse"> & {
    /**
     * @generated from field: repeated easylab.v1.ServiceInfo services = 1;
     */
    services: ServiceInfo[];
};
/**
 * Describes the message easylab.v1.ListServicesResponse.
 * Use `create(ListServicesResponseSchema)` to create a new message.
 */
export declare const ListServicesResponseSchema: GenMessage<ListServicesResponse>;
/**
 * @generated from message easylab.v1.GetServiceRequest
 */
export type GetServiceRequest = Message<"easylab.v1.GetServiceRequest"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
};
/**
 * Describes the message easylab.v1.GetServiceRequest.
 * Use `create(GetServiceRequestSchema)` to create a new message.
 */
export declare const GetServiceRequestSchema: GenMessage<GetServiceRequest>;
/**
 * @generated from message easylab.v1.GetServiceResponse
 */
export type GetServiceResponse = Message<"easylab.v1.GetServiceResponse"> & {
    /**
     * @generated from field: easylab.v1.ServiceInfo service = 1;
     */
    service?: ServiceInfo | undefined;
    /**
     * @generated from field: repeated easylab.v1.ServicePod pods = 2;
     */
    pods: ServicePod[];
};
/**
 * Describes the message easylab.v1.GetServiceResponse.
 * Use `create(GetServiceResponseSchema)` to create a new message.
 */
export declare const GetServiceResponseSchema: GenMessage<GetServiceResponse>;
/**
 * PortSpec maps a container port to a published service port.
 *
 * @generated from message easylab.v1.PortSpec
 */
export type PortSpec = Message<"easylab.v1.PortSpec"> & {
    /**
     * @generated from field: int32 container = 1;
     */
    container: number;
    /**
     * @generated from field: int32 service = 2;
     */
    service: number;
};
/**
 * Describes the message easylab.v1.PortSpec.
 * Use `create(PortSpecSchema)` to create a new message.
 */
export declare const PortSpecSchema: GenMessage<PortSpec>;
/**
 * @generated from message easylab.v1.LaunchServiceRequest
 */
export type LaunchServiceRequest = Message<"easylab.v1.LaunchServiceRequest"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string image = 2;
     */
    image: string;
    /**
     * "bare" (sandbox/worker pod) | "deployment"
     *
     * @generated from field: string kind = 3;
     */
    kind: string;
    /**
     * @generated from field: string command = 4;
     */
    command: string;
    /**
     * @generated from field: repeated easylab.v1.PortSpec ports = 5;
     */
    ports: PortSpec[];
    /**
     * @generated from field: map<string, string> env = 6;
     */
    env: {
        [key: string]: string;
    };
    /**
     * @generated from field: int32 replicas = 7;
     */
    replicas: number;
    /**
     * @generated from field: string group = 8;
     */
    group: string;
    /**
     * @generated from field: string network = 9;
     */
    network: string;
    /**
     * @generated from field: string namespace = 10;
     */
    namespace: string;
    /**
     * @generated from field: string cpus = 11;
     */
    cpus: string;
    /**
     * @generated from field: uint64 memory_bytes = 12;
     */
    memoryBytes: bigint;
    /**
     * @generated from field: map<string, string> annotations = 13;
     */
    annotations: {
        [key: string]: string;
    };
    /**
     * @generated from field: string session = 14;
     */
    session: string;
    /**
     * @generated from field: string org = 15;
     */
    org: string;
    /**
     * @generated from field: string repo = 16;
     */
    repo: string;
};
/**
 * Describes the message easylab.v1.LaunchServiceRequest.
 * Use `create(LaunchServiceRequestSchema)` to create a new message.
 */
export declare const LaunchServiceRequestSchema: GenMessage<LaunchServiceRequest>;
/**
 * @generated from message easylab.v1.LaunchServiceResponse
 */
export type LaunchServiceResponse = Message<"easylab.v1.LaunchServiceResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string error = 2;
     */
    error: string;
    /**
     * @generated from field: string name = 3;
     */
    name: string;
    /**
     * @generated from field: string url = 4;
     */
    url: string;
};
/**
 * Describes the message easylab.v1.LaunchServiceResponse.
 * Use `create(LaunchServiceResponseSchema)` to create a new message.
 */
export declare const LaunchServiceResponseSchema: GenMessage<LaunchServiceResponse>;
/**
 * @generated from message easylab.v1.DeleteServiceRequest
 */
export type DeleteServiceRequest = Message<"easylab.v1.DeleteServiceRequest"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
};
/**
 * Describes the message easylab.v1.DeleteServiceRequest.
 * Use `create(DeleteServiceRequestSchema)` to create a new message.
 */
export declare const DeleteServiceRequestSchema: GenMessage<DeleteServiceRequest>;
/**
 * @generated from message easylab.v1.DeleteServiceResponse
 */
export type DeleteServiceResponse = Message<"easylab.v1.DeleteServiceResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string error = 2;
     */
    error: string;
};
/**
 * Describes the message easylab.v1.DeleteServiceResponse.
 * Use `create(DeleteServiceResponseSchema)` to create a new message.
 */
export declare const DeleteServiceResponseSchema: GenMessage<DeleteServiceResponse>;
/**
 * @generated from message easylab.v1.ScaleServiceRequest
 */
export type ScaleServiceRequest = Message<"easylab.v1.ScaleServiceRequest"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: int32 replicas = 2;
     */
    replicas: number;
};
/**
 * Describes the message easylab.v1.ScaleServiceRequest.
 * Use `create(ScaleServiceRequestSchema)` to create a new message.
 */
export declare const ScaleServiceRequestSchema: GenMessage<ScaleServiceRequest>;
/**
 * @generated from message easylab.v1.ScaleServiceResponse
 */
export type ScaleServiceResponse = Message<"easylab.v1.ScaleServiceResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string error = 2;
     */
    error: string;
};
/**
 * Describes the message easylab.v1.ScaleServiceResponse.
 * Use `create(ScaleServiceResponseSchema)` to create a new message.
 */
export declare const ScaleServiceResponseSchema: GenMessage<ScaleServiceResponse>;
/**
 * @generated from message easylab.v1.SandboxExecRequest
 */
export type SandboxExecRequest = Message<"easylab.v1.SandboxExecRequest"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string command = 2;
     */
    command: string;
    /**
     * @generated from field: string workdir = 3;
     */
    workdir: string;
    /**
     * @generated from field: string stdin = 4;
     */
    stdin: string;
};
/**
 * Describes the message easylab.v1.SandboxExecRequest.
 * Use `create(SandboxExecRequestSchema)` to create a new message.
 */
export declare const SandboxExecRequestSchema: GenMessage<SandboxExecRequest>;
/**
 * @generated from message easylab.v1.SandboxExecResponse
 */
export type SandboxExecResponse = Message<"easylab.v1.SandboxExecResponse"> & {
    /**
     * @generated from field: int32 exit_code = 1;
     */
    exitCode: number;
    /**
     * @generated from field: string output = 2;
     */
    output: string;
    /**
     * @generated from field: string job_id = 3;
     */
    jobId: string;
    /**
     * @generated from field: bool backgrounded = 4;
     */
    backgrounded: boolean;
    /**
     * @generated from field: string note = 5;
     */
    note: string;
    /**
     * @generated from field: string error = 6;
     */
    error: string;
};
/**
 * Describes the message easylab.v1.SandboxExecResponse.
 * Use `create(SandboxExecResponseSchema)` to create a new message.
 */
export declare const SandboxExecResponseSchema: GenMessage<SandboxExecResponse>;
/**
 * @generated from message easylab.v1.SandboxReadRequest
 */
export type SandboxReadRequest = Message<"easylab.v1.SandboxReadRequest"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string path = 2;
     */
    path: string;
};
/**
 * Describes the message easylab.v1.SandboxReadRequest.
 * Use `create(SandboxReadRequestSchema)` to create a new message.
 */
export declare const SandboxReadRequestSchema: GenMessage<SandboxReadRequest>;
/**
 * @generated from message easylab.v1.SandboxReadResponse
 */
export type SandboxReadResponse = Message<"easylab.v1.SandboxReadResponse"> & {
    /**
     * @generated from field: string content = 1;
     */
    content: string;
    /**
     * @generated from field: string error = 2;
     */
    error: string;
};
/**
 * Describes the message easylab.v1.SandboxReadResponse.
 * Use `create(SandboxReadResponseSchema)` to create a new message.
 */
export declare const SandboxReadResponseSchema: GenMessage<SandboxReadResponse>;
/**
 * @generated from message easylab.v1.SandboxWriteRequest
 */
export type SandboxWriteRequest = Message<"easylab.v1.SandboxWriteRequest"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string path = 2;
     */
    path: string;
    /**
     * @generated from field: string content = 3;
     */
    content: string;
};
/**
 * Describes the message easylab.v1.SandboxWriteRequest.
 * Use `create(SandboxWriteRequestSchema)` to create a new message.
 */
export declare const SandboxWriteRequestSchema: GenMessage<SandboxWriteRequest>;
/**
 * @generated from message easylab.v1.SandboxWriteResponse
 */
export type SandboxWriteResponse = Message<"easylab.v1.SandboxWriteResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string error = 2;
     */
    error: string;
};
/**
 * Describes the message easylab.v1.SandboxWriteResponse.
 * Use `create(SandboxWriteResponseSchema)` to create a new message.
 */
export declare const SandboxWriteResponseSchema: GenMessage<SandboxWriteResponse>;
/**
 * @generated from message easylab.v1.SandboxJobKillRequest
 */
export type SandboxJobKillRequest = Message<"easylab.v1.SandboxJobKillRequest"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string job_id = 2;
     */
    jobId: string;
};
/**
 * Describes the message easylab.v1.SandboxJobKillRequest.
 * Use `create(SandboxJobKillRequestSchema)` to create a new message.
 */
export declare const SandboxJobKillRequestSchema: GenMessage<SandboxJobKillRequest>;
/**
 * @generated from message easylab.v1.SandboxJobKillResponse
 */
export type SandboxJobKillResponse = Message<"easylab.v1.SandboxJobKillResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string error = 2;
     */
    error: string;
};
/**
 * Describes the message easylab.v1.SandboxJobKillResponse.
 * Use `create(SandboxJobKillResponseSchema)` to create a new message.
 */
export declare const SandboxJobKillResponseSchema: GenMessage<SandboxJobKillResponse>;
/**
 * @generated from message easylab.v1.TaskLogRequest
 */
export type TaskLogRequest = Message<"easylab.v1.TaskLogRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message easylab.v1.TaskLogRequest.
 * Use `create(TaskLogRequestSchema)` to create a new message.
 */
export declare const TaskLogRequestSchema: GenMessage<TaskLogRequest>;
/**
 * @generated from message easylab.v1.ListTasksRequest
 */
export type ListTasksRequest = Message<"easylab.v1.ListTasksRequest"> & {};
/**
 * Describes the message easylab.v1.ListTasksRequest.
 * Use `create(ListTasksRequestSchema)` to create a new message.
 */
export declare const ListTasksRequestSchema: GenMessage<ListTasksRequest>;
/**
 * @generated from message easylab.v1.TaskEntry
 */
export type TaskEntry = Message<"easylab.v1.TaskEntry"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string kind = 2;
     */
    kind: string;
    /**
     * @generated from field: string state = 3;
     */
    state: string;
    /**
     * @generated from field: string session = 4;
     */
    session: string;
    /**
     * @generated from field: string command = 5;
     */
    command: string;
    /**
     * @generated from field: string created_at = 6;
     */
    createdAt: string;
};
/**
 * Describes the message easylab.v1.TaskEntry.
 * Use `create(TaskEntrySchema)` to create a new message.
 */
export declare const TaskEntrySchema: GenMessage<TaskEntry>;
/**
 * @generated from message easylab.v1.ListTasksResponse
 */
export type ListTasksResponse = Message<"easylab.v1.ListTasksResponse"> & {
    /**
     * @generated from field: repeated easylab.v1.TaskEntry tasks = 1;
     */
    tasks: TaskEntry[];
};
/**
 * Describes the message easylab.v1.ListTasksResponse.
 * Use `create(ListTasksResponseSchema)` to create a new message.
 */
export declare const ListTasksResponseSchema: GenMessage<ListTasksResponse>;
/**
 * @generated from message easylab.v1.GetTaskRequest
 */
export type GetTaskRequest = Message<"easylab.v1.GetTaskRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message easylab.v1.GetTaskRequest.
 * Use `create(GetTaskRequestSchema)` to create a new message.
 */
export declare const GetTaskRequestSchema: GenMessage<GetTaskRequest>;
/**
 * @generated from message easylab.v1.GetTaskResponse
 */
export type GetTaskResponse = Message<"easylab.v1.GetTaskResponse"> & {
    /**
     * @generated from field: easylab.v1.TaskEntry task = 1;
     */
    task?: TaskEntry | undefined;
};
/**
 * Describes the message easylab.v1.GetTaskResponse.
 * Use `create(GetTaskResponseSchema)` to create a new message.
 */
export declare const GetTaskResponseSchema: GenMessage<GetTaskResponse>;
/**
 * @generated from message easylab.v1.BuildRequest
 */
export type BuildRequest = Message<"easylab.v1.BuildRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: string ref = 3;
     */
    ref: string;
    /**
     * @generated from field: string dockerfile_path = 4;
     */
    dockerfilePath: string;
    /**
     * @generated from field: string tag = 5;
     */
    tag: string;
    /**
     * @generated from field: string context = 6;
     */
    context: string;
    /**
     * @generated from field: bool no_cache = 7;
     */
    noCache: boolean;
};
/**
 * Describes the message easylab.v1.BuildRequest.
 * Use `create(BuildRequestSchema)` to create a new message.
 */
export declare const BuildRequestSchema: GenMessage<BuildRequest>;
/**
 * @generated from message easylab.v1.BuildResponse
 */
export type BuildResponse = Message<"easylab.v1.BuildResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string task_id = 2;
     */
    taskId: string;
    /**
     * @generated from field: string image = 3;
     */
    image: string;
    /**
     * @generated from field: string error = 4;
     */
    error: string;
};
/**
 * Describes the message easylab.v1.BuildResponse.
 * Use `create(BuildResponseSchema)` to create a new message.
 */
export declare const BuildResponseSchema: GenMessage<BuildResponse>;
/**
 * @generated from message easylab.v1.OpsStatusRequest
 */
export type OpsStatusRequest = Message<"easylab.v1.OpsStatusRequest"> & {};
/**
 * Describes the message easylab.v1.OpsStatusRequest.
 * Use `create(OpsStatusRequestSchema)` to create a new message.
 */
export declare const OpsStatusRequestSchema: GenMessage<OpsStatusRequest>;
/**
 * @generated from message easylab.v1.OpsStatusResponse
 */
export type OpsStatusResponse = Message<"easylab.v1.OpsStatusResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string version = 2;
     */
    version: string;
    /**
     * @generated from field: int32 sandboxes = 3;
     */
    sandboxes: number;
};
/**
 * Describes the message easylab.v1.OpsStatusResponse.
 * Use `create(OpsStatusResponseSchema)` to create a new message.
 */
export declare const OpsStatusResponseSchema: GenMessage<OpsStatusResponse>;
/**
 * @generated from message easylab.v1.ListNamespacesRequest
 */
export type ListNamespacesRequest = Message<"easylab.v1.ListNamespacesRequest"> & {};
/**
 * Describes the message easylab.v1.ListNamespacesRequest.
 * Use `create(ListNamespacesRequestSchema)` to create a new message.
 */
export declare const ListNamespacesRequestSchema: GenMessage<ListNamespacesRequest>;
/**
 * @generated from message easylab.v1.NamespaceInfo
 */
export type NamespaceInfo = Message<"easylab.v1.NamespaceInfo"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
};
/**
 * Describes the message easylab.v1.NamespaceInfo.
 * Use `create(NamespaceInfoSchema)` to create a new message.
 */
export declare const NamespaceInfoSchema: GenMessage<NamespaceInfo>;
/**
 * @generated from message easylab.v1.ListNamespacesResponse
 */
export type ListNamespacesResponse = Message<"easylab.v1.ListNamespacesResponse"> & {
    /**
     * @generated from field: repeated easylab.v1.NamespaceInfo namespaces = 1;
     */
    namespaces: NamespaceInfo[];
};
/**
 * Describes the message easylab.v1.ListNamespacesResponse.
 * Use `create(ListNamespacesResponseSchema)` to create a new message.
 */
export declare const ListNamespacesResponseSchema: GenMessage<ListNamespacesResponse>;
/**
 * @generated from message easylab.v1.PackageTypeEntry
 */
export type PackageTypeEntry = Message<"easylab.v1.PackageTypeEntry"> & {
    /**
     * @generated from field: string type = 1;
     */
    type: string;
    /**
     * @generated from field: string upstream = 2;
     */
    upstream: string;
    /**
     * @generated from field: int32 packages = 3;
     */
    packages: number;
};
/**
 * Describes the message easylab.v1.PackageTypeEntry.
 * Use `create(PackageTypeEntrySchema)` to create a new message.
 */
export declare const PackageTypeEntrySchema: GenMessage<PackageTypeEntry>;
/**
 * @generated from message easylab.v1.ListPackageTypesRequest
 */
export type ListPackageTypesRequest = Message<"easylab.v1.ListPackageTypesRequest"> & {};
/**
 * Describes the message easylab.v1.ListPackageTypesRequest.
 * Use `create(ListPackageTypesRequestSchema)` to create a new message.
 */
export declare const ListPackageTypesRequestSchema: GenMessage<ListPackageTypesRequest>;
/**
 * @generated from message easylab.v1.ListPackageTypesResponse
 */
export type ListPackageTypesResponse = Message<"easylab.v1.ListPackageTypesResponse"> & {
    /**
     * @generated from field: repeated easylab.v1.PackageTypeEntry packages = 1;
     */
    packages: PackageTypeEntry[];
};
/**
 * Describes the message easylab.v1.ListPackageTypesResponse.
 * Use `create(ListPackageTypesResponseSchema)` to create a new message.
 */
export declare const ListPackageTypesResponseSchema: GenMessage<ListPackageTypesResponse>;
/**
 * @generated from message easylab.v1.PackageVersion
 */
export type PackageVersion = Message<"easylab.v1.PackageVersion"> & {
    /**
     * @generated from field: string version = 1;
     */
    version: string;
    /**
     * @generated from field: int32 download_count = 2;
     */
    downloadCount: number;
    /**
     * @generated from field: int64 created_unix = 3;
     */
    createdUnix: bigint;
    /**
     * @generated from field: repeated easylab.v1.PackageVersionFile files = 4;
     */
    files: PackageVersionFile[];
};
/**
 * Describes the message easylab.v1.PackageVersion.
 * Use `create(PackageVersionSchema)` to create a new message.
 */
export declare const PackageVersionSchema: GenMessage<PackageVersion>;
/**
 * @generated from message easylab.v1.PackageVersionFile
 */
export type PackageVersionFile = Message<"easylab.v1.PackageVersionFile"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: int64 size = 3;
     */
    size: bigint;
    /**
     * @generated from field: string sha = 4;
     */
    sha: string;
};
/**
 * Describes the message easylab.v1.PackageVersionFile.
 * Use `create(PackageVersionFileSchema)` to create a new message.
 */
export declare const PackageVersionFileSchema: GenMessage<PackageVersionFile>;
/**
 * @generated from message easylab.v1.PackageInfo
 */
export type PackageInfo = Message<"easylab.v1.PackageInfo"> & {
    /**
     * @generated from field: string type = 1;
     */
    type: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: repeated easylab.v1.PackageVersion versions = 3;
     */
    versions: PackageVersion[];
};
/**
 * Describes the message easylab.v1.PackageInfo.
 * Use `create(PackageInfoSchema)` to create a new message.
 */
export declare const PackageInfoSchema: GenMessage<PackageInfo>;
/**
 * @generated from message easylab.v1.ListPackagesRequest
 */
export type ListPackagesRequest = Message<"easylab.v1.ListPackagesRequest"> & {
    /**
     * @generated from field: string type = 1;
     */
    type: string;
    /**
     * @generated from field: string q = 2;
     */
    q: string;
    /**
     * @generated from field: int32 page = 3;
     */
    page: number;
    /**
     * @generated from field: int32 page_size = 4;
     */
    pageSize: number;
    /**
     * @generated from field: int32 limit = 5;
     */
    limit: number;
    /**
     * @generated from field: int32 offset = 6;
     */
    offset: number;
};
/**
 * Describes the message easylab.v1.ListPackagesRequest.
 * Use `create(ListPackagesRequestSchema)` to create a new message.
 */
export declare const ListPackagesRequestSchema: GenMessage<ListPackagesRequest>;
/**
 * @generated from message easylab.v1.ListPackagesResponse
 */
export type ListPackagesResponse = Message<"easylab.v1.ListPackagesResponse"> & {
    /**
     * @generated from field: repeated easylab.v1.PackageInfo packages = 1;
     */
    packages: PackageInfo[];
};
/**
 * Describes the message easylab.v1.ListPackagesResponse.
 * Use `create(ListPackagesResponseSchema)` to create a new message.
 */
export declare const ListPackagesResponseSchema: GenMessage<ListPackagesResponse>;
/**
 * @generated from message easylab.v1.PackageVersionsRequest
 */
export type PackageVersionsRequest = Message<"easylab.v1.PackageVersionsRequest"> & {
    /**
     * @generated from field: string type = 1;
     */
    type: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
};
/**
 * Describes the message easylab.v1.PackageVersionsRequest.
 * Use `create(PackageVersionsRequestSchema)` to create a new message.
 */
export declare const PackageVersionsRequestSchema: GenMessage<PackageVersionsRequest>;
/**
 * @generated from message easylab.v1.PackageVersionsResponse
 */
export type PackageVersionsResponse = Message<"easylab.v1.PackageVersionsResponse"> & {
    /**
     * @generated from field: repeated easylab.v1.PackageVersion versions = 1;
     */
    versions: PackageVersion[];
};
/**
 * Describes the message easylab.v1.PackageVersionsResponse.
 * Use `create(PackageVersionsResponseSchema)` to create a new message.
 */
export declare const PackageVersionsResponseSchema: GenMessage<PackageVersionsResponse>;
/**
 * @generated from message easylab.v1.DeletePackageRequest
 */
export type DeletePackageRequest = Message<"easylab.v1.DeletePackageRequest"> & {
    /**
     * @generated from field: string type = 1;
     */
    type: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
};
/**
 * Describes the message easylab.v1.DeletePackageRequest.
 * Use `create(DeletePackageRequestSchema)` to create a new message.
 */
export declare const DeletePackageRequestSchema: GenMessage<DeletePackageRequest>;
/**
 * @generated from message easylab.v1.DeletePackageResponse
 */
export type DeletePackageResponse = Message<"easylab.v1.DeletePackageResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string error = 2;
     */
    error: string;
};
/**
 * Describes the message easylab.v1.DeletePackageResponse.
 * Use `create(DeletePackageResponseSchema)` to create a new message.
 */
export declare const DeletePackageResponseSchema: GenMessage<DeletePackageResponse>;
/**
 * @generated from message easylab.v1.DeletePackageVersionRequest
 */
export type DeletePackageVersionRequest = Message<"easylab.v1.DeletePackageVersionRequest"> & {
    /**
     * @generated from field: string type = 1;
     */
    type: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string version = 3;
     */
    version: string;
};
/**
 * Describes the message easylab.v1.DeletePackageVersionRequest.
 * Use `create(DeletePackageVersionRequestSchema)` to create a new message.
 */
export declare const DeletePackageVersionRequestSchema: GenMessage<DeletePackageVersionRequest>;
/**
 * @generated from message easylab.v1.DeletePackageVersionResponse
 */
export type DeletePackageVersionResponse = Message<"easylab.v1.DeletePackageVersionResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string error = 2;
     */
    error: string;
};
/**
 * Describes the message easylab.v1.DeletePackageVersionResponse.
 * Use `create(DeletePackageVersionResponseSchema)` to create a new message.
 */
export declare const DeletePackageVersionResponseSchema: GenMessage<DeletePackageVersionResponse>;
/**
 * @generated from message easylab.v1.PublishSpec
 */
export type PublishSpec = Message<"easylab.v1.PublishSpec"> & {
    /**
     * @generated from field: string protocol = 1;
     */
    protocol: string;
    /**
     * @generated from field: repeated string args = 2;
     */
    args: string[];
    /**
     * @generated from field: repeated string required = 3;
     */
    required: string[];
};
/**
 * Describes the message easylab.v1.PublishSpec.
 * Use `create(PublishSpecSchema)` to create a new message.
 */
export declare const PublishSpecSchema: GenMessage<PublishSpec>;
/**
 * @generated from message easylab.v1.ListPublishSpecsRequest
 */
export type ListPublishSpecsRequest = Message<"easylab.v1.ListPublishSpecsRequest"> & {};
/**
 * Describes the message easylab.v1.ListPublishSpecsRequest.
 * Use `create(ListPublishSpecsRequestSchema)` to create a new message.
 */
export declare const ListPublishSpecsRequestSchema: GenMessage<ListPublishSpecsRequest>;
/**
 * @generated from message easylab.v1.ListPublishSpecsResponse
 */
export type ListPublishSpecsResponse = Message<"easylab.v1.ListPublishSpecsResponse"> & {
    /**
     * @generated from field: repeated easylab.v1.PublishSpec specs = 1;
     */
    specs: PublishSpec[];
};
/**
 * Describes the message easylab.v1.ListPublishSpecsResponse.
 * Use `create(ListPublishSpecsResponseSchema)` to create a new message.
 */
export declare const ListPublishSpecsResponseSchema: GenMessage<ListPublishSpecsResponse>;
/**
 * @generated from message easylab.v1.HealthRequest
 */
export type HealthRequest = Message<"easylab.v1.HealthRequest"> & {};
/**
 * Describes the message easylab.v1.HealthRequest.
 * Use `create(HealthRequestSchema)` to create a new message.
 */
export declare const HealthRequestSchema: GenMessage<HealthRequest>;
/**
 * @generated from message easylab.v1.HealthResponse
 */
export type HealthResponse = Message<"easylab.v1.HealthResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string version = 2;
     */
    version: string;
};
/**
 * Describes the message easylab.v1.HealthResponse.
 * Use `create(HealthResponseSchema)` to create a new message.
 */
export declare const HealthResponseSchema: GenMessage<HealthResponse>;
/**
 * @generated from message easylab.v1.StatusRequest
 */
export type StatusRequest = Message<"easylab.v1.StatusRequest"> & {};
/**
 * Describes the message easylab.v1.StatusRequest.
 * Use `create(StatusRequestSchema)` to create a new message.
 */
export declare const StatusRequestSchema: GenMessage<StatusRequest>;
/**
 * @generated from message easylab.v1.StatusResponse
 */
export type StatusResponse = Message<"easylab.v1.StatusResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string version = 2;
     */
    version: string;
    /**
     * @generated from field: string db = 3;
     */
    db: string;
    /**
     * @generated from field: int32 sandboxes = 4;
     */
    sandboxes: number;
};
/**
 * Describes the message easylab.v1.StatusResponse.
 * Use `create(StatusResponseSchema)` to create a new message.
 */
export declare const StatusResponseSchema: GenMessage<StatusResponse>;
/**
 * @generated from message easylab.v1.SearchRequest
 */
export type SearchRequest = Message<"easylab.v1.SearchRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: string ref = 3;
     */
    ref: string;
    /**
     * @generated from field: string q = 4;
     */
    q: string;
};
/**
 * Describes the message easylab.v1.SearchRequest.
 * Use `create(SearchRequestSchema)` to create a new message.
 */
export declare const SearchRequestSchema: GenMessage<SearchRequest>;
/**
 * @generated from message easylab.v1.SearchResponse
 */
export type SearchResponse = Message<"easylab.v1.SearchResponse"> & {
    /**
     * @generated from field: repeated string matches = 1;
     */
    matches: string[];
};
/**
 * Describes the message easylab.v1.SearchResponse.
 * Use `create(SearchResponseSchema)` to create a new message.
 */
export declare const SearchResponseSchema: GenMessage<SearchResponse>;
/**
 * @generated from message easylab.v1.GraphRequest
 */
export type GraphRequest = Message<"easylab.v1.GraphRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: int32 limit = 3;
     */
    limit: number;
};
/**
 * Describes the message easylab.v1.GraphRequest.
 * Use `create(GraphRequestSchema)` to create a new message.
 */
export declare const GraphRequestSchema: GenMessage<GraphRequest>;
/**
 * @generated from message easylab.v1.GraphNode
 */
export type GraphNode = Message<"easylab.v1.GraphNode"> & {
    /**
     * @generated from field: string revision_id = 1;
     */
    revisionId: string;
    /**
     * @generated from field: string snapshot = 2;
     */
    snapshot: string;
    /**
     * @generated from field: string message = 3;
     */
    message: string;
    /**
     * @generated from field: string author = 4;
     */
    author: string;
    /**
     * @generated from field: repeated string parents = 5;
     */
    parents: string[];
    /**
     * @generated from field: bool is_head = 6;
     */
    isHead: boolean;
    /**
     * @generated from field: int64 created_ms = 7;
     */
    createdMs: bigint;
};
/**
 * Describes the message easylab.v1.GraphNode.
 * Use `create(GraphNodeSchema)` to create a new message.
 */
export declare const GraphNodeSchema: GenMessage<GraphNode>;
/**
 * @generated from message easylab.v1.GraphResponse
 */
export type GraphResponse = Message<"easylab.v1.GraphResponse"> & {
    /**
     * @generated from field: repeated easylab.v1.GraphNode nodes = 1;
     */
    nodes: GraphNode[];
};
/**
 * Describes the message easylab.v1.GraphResponse.
 * Use `create(GraphResponseSchema)` to create a new message.
 */
export declare const GraphResponseSchema: GenMessage<GraphResponse>;
/**
 * @generated from message easylab.v1.CompareRequest
 */
export type CompareRequest = Message<"easylab.v1.CompareRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: string from = 3;
     */
    from: string;
    /**
     * @generated from field: string to = 4;
     */
    to: string;
};
/**
 * Describes the message easylab.v1.CompareRequest.
 * Use `create(CompareRequestSchema)` to create a new message.
 */
export declare const CompareRequestSchema: GenMessage<CompareRequest>;
/**
 * @generated from message easylab.v1.CompareResponse
 */
export type CompareResponse = Message<"easylab.v1.CompareResponse"> & {
    /**
     * @generated from field: repeated easylab.v1.DiffFile files = 1;
     */
    files: DiffFile[];
};
/**
 * Describes the message easylab.v1.CompareResponse.
 * Use `create(CompareResponseSchema)` to create a new message.
 */
export declare const CompareResponseSchema: GenMessage<CompareResponse>;
/**
 * @generated from message easylab.v1.RebaseRequest
 */
export type RebaseRequest = Message<"easylab.v1.RebaseRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: string rev = 3;
     */
    rev: string;
    /**
     * @generated from field: repeated string new_parents = 4;
     */
    newParents: string[];
};
/**
 * Describes the message easylab.v1.RebaseRequest.
 * Use `create(RebaseRequestSchema)` to create a new message.
 */
export declare const RebaseRequestSchema: GenMessage<RebaseRequest>;
/**
 * @generated from message easylab.v1.RebaseResponse
 */
export type RebaseResponse = Message<"easylab.v1.RebaseResponse"> & {
    /**
     * @generated from field: string revision_id = 1;
     */
    revisionId: string;
    /**
     * @generated from field: string snapshot = 2;
     */
    snapshot: string;
};
/**
 * Describes the message easylab.v1.RebaseResponse.
 * Use `create(RebaseResponseSchema)` to create a new message.
 */
export declare const RebaseResponseSchema: GenMessage<RebaseResponse>;
/**
 * @generated from message easylab.v1.SyncRequest
 */
export type SyncRequest = Message<"easylab.v1.SyncRequest"> & {
    /**
     * service/container name
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string org = 2;
     */
    org: string;
    /**
     * @generated from field: string repo = 3;
     */
    repo: string;
    /**
     * @generated from field: string rev = 4;
     */
    rev: string;
    /**
     * @generated from field: string namespace = 5;
     */
    namespace: string;
    /**
     * extract destination inside the container (default /workspace)
     *
     * @generated from field: string dest = 6;
     */
    dest: string;
    /**
     * @generated from field: bool force = 7;
     */
    force: boolean;
};
/**
 * Describes the message easylab.v1.SyncRequest.
 * Use `create(SyncRequestSchema)` to create a new message.
 */
export declare const SyncRequestSchema: GenMessage<SyncRequest>;
/**
 * @generated from message easylab.v1.SyncResponse
 */
export type SyncResponse = Message<"easylab.v1.SyncResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: int32 files = 2;
     */
    files: number;
};
/**
 * Describes the message easylab.v1.SyncResponse.
 * Use `create(SyncResponseSchema)` to create a new message.
 */
export declare const SyncResponseSchema: GenMessage<SyncResponse>;
/**
 * @generated from message easylab.v1.TaskLogResponse
 */
export type TaskLogResponse = Message<"easylab.v1.TaskLogResponse"> & {
    /**
     * stdout | stderr | state
     *
     * @generated from field: string stream = 1;
     */
    stream: string;
    /**
     * @generated from field: string line = 2;
     */
    line: string;
};
/**
 * Describes the message easylab.v1.TaskLogResponse.
 * Use `create(TaskLogResponseSchema)` to create a new message.
 */
export declare const TaskLogResponseSchema: GenMessage<TaskLogResponse>;
/**
 * @generated from message easylab.v1.DeleteOrgRequest
 */
export type DeleteOrgRequest = Message<"easylab.v1.DeleteOrgRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
};
/**
 * Describes the message easylab.v1.DeleteOrgRequest.
 * Use `create(DeleteOrgRequestSchema)` to create a new message.
 */
export declare const DeleteOrgRequestSchema: GenMessage<DeleteOrgRequest>;
/**
 * @generated from message easylab.v1.DeleteOrgResponse
 */
export type DeleteOrgResponse = Message<"easylab.v1.DeleteOrgResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string error = 2;
     */
    error: string;
};
/**
 * Describes the message easylab.v1.DeleteOrgResponse.
 * Use `create(DeleteOrgResponseSchema)` to create a new message.
 */
export declare const DeleteOrgResponseSchema: GenMessage<DeleteOrgResponse>;
/**
 * @generated from message easylab.v1.ReleaseView
 */
export type ReleaseView = Message<"easylab.v1.ReleaseView"> & {
    /**
     * @generated from field: string tag = 1;
     */
    tag: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string description = 3;
     */
    description: string;
    /**
     * @generated from field: bool draft = 4;
     */
    draft: boolean;
    /**
     * @generated from field: bool prerelease = 5;
     */
    prerelease: boolean;
    /**
     * @generated from field: string revision_id = 6;
     */
    revisionId: string;
    /**
     * @generated from field: string created = 7;
     */
    created: string;
    /**
     * @generated from field: repeated easylab.v1.ReleaseAssetView assets = 8;
     */
    assets: ReleaseAssetView[];
};
/**
 * Describes the message easylab.v1.ReleaseView.
 * Use `create(ReleaseViewSchema)` to create a new message.
 */
export declare const ReleaseViewSchema: GenMessage<ReleaseView>;
/**
 * @generated from message easylab.v1.ReleaseAssetView
 */
export type ReleaseAssetView = Message<"easylab.v1.ReleaseAssetView"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: int64 size = 2;
     */
    size: bigint;
    /**
     * @generated from field: string digest = 3;
     */
    digest: string;
    /**
     * @generated from field: string content_type = 4;
     */
    contentType: string;
};
/**
 * Describes the message easylab.v1.ReleaseAssetView.
 * Use `create(ReleaseAssetViewSchema)` to create a new message.
 */
export declare const ReleaseAssetViewSchema: GenMessage<ReleaseAssetView>;
/**
 * @generated from message easylab.v1.ListReleasesRequest
 */
export type ListReleasesRequest = Message<"easylab.v1.ListReleasesRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
};
/**
 * Describes the message easylab.v1.ListReleasesRequest.
 * Use `create(ListReleasesRequestSchema)` to create a new message.
 */
export declare const ListReleasesRequestSchema: GenMessage<ListReleasesRequest>;
/**
 * @generated from message easylab.v1.ListReleasesResponse
 */
export type ListReleasesResponse = Message<"easylab.v1.ListReleasesResponse"> & {
    /**
     * @generated from field: repeated easylab.v1.ReleaseView releases = 1;
     */
    releases: ReleaseView[];
};
/**
 * Describes the message easylab.v1.ListReleasesResponse.
 * Use `create(ListReleasesResponseSchema)` to create a new message.
 */
export declare const ListReleasesResponseSchema: GenMessage<ListReleasesResponse>;
/**
 * @generated from message easylab.v1.DownloadReleaseAssetRequest
 */
export type DownloadReleaseAssetRequest = Message<"easylab.v1.DownloadReleaseAssetRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: string tag = 3;
     */
    tag: string;
    /**
     * @generated from field: string name = 4;
     */
    name: string;
};
/**
 * Describes the message easylab.v1.DownloadReleaseAssetRequest.
 * Use `create(DownloadReleaseAssetRequestSchema)` to create a new message.
 */
export declare const DownloadReleaseAssetRequestSchema: GenMessage<DownloadReleaseAssetRequest>;
/**
 * @generated from message easylab.v1.DownloadReleaseAssetResponse
 */
export type DownloadReleaseAssetResponse = Message<"easylab.v1.DownloadReleaseAssetResponse"> & {
    /**
     * @generated from field: bytes data = 1;
     */
    data: Uint8Array;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string content_type = 3;
     */
    contentType: string;
};
/**
 * Describes the message easylab.v1.DownloadReleaseAssetResponse.
 * Use `create(DownloadReleaseAssetResponseSchema)` to create a new message.
 */
export declare const DownloadReleaseAssetResponseSchema: GenMessage<DownloadReleaseAssetResponse>;
/**
 * @generated from message easylab.v1.ArchiveRequest
 */
export type ArchiveRequest = Message<"easylab.v1.ArchiveRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: string ref = 3;
     */
    ref: string;
};
/**
 * Describes the message easylab.v1.ArchiveRequest.
 * Use `create(ArchiveRequestSchema)` to create a new message.
 */
export declare const ArchiveRequestSchema: GenMessage<ArchiveRequest>;
/**
 * @generated from message easylab.v1.ArchiveResponse
 */
export type ArchiveResponse = Message<"easylab.v1.ArchiveResponse"> & {
    /**
     * @generated from field: bytes data = 1;
     */
    data: Uint8Array;
    /**
     * @generated from field: string filename = 2;
     */
    filename: string;
};
/**
 * Describes the message easylab.v1.ArchiveResponse.
 * Use `create(ArchiveResponseSchema)` to create a new message.
 */
export declare const ArchiveResponseSchema: GenMessage<ArchiveResponse>;
/**
 * @generated from message easylab.v1.MirrorCfg
 */
export type MirrorCfg = Message<"easylab.v1.MirrorCfg"> & {
    /**
     * @generated from field: string pull_url = 1;
     */
    pullUrl: string;
    /**
     * @generated from field: string push_url = 2;
     */
    pushUrl: string;
    /**
     * @generated from field: bool push_secret_set = 3;
     */
    pushSecretSet: boolean;
};
/**
 * Describes the message easylab.v1.MirrorCfg.
 * Use `create(MirrorCfgSchema)` to create a new message.
 */
export declare const MirrorCfgSchema: GenMessage<MirrorCfg>;
/**
 * @generated from message easylab.v1.GetMirrorRequest
 */
export type GetMirrorRequest = Message<"easylab.v1.GetMirrorRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
};
/**
 * Describes the message easylab.v1.GetMirrorRequest.
 * Use `create(GetMirrorRequestSchema)` to create a new message.
 */
export declare const GetMirrorRequestSchema: GenMessage<GetMirrorRequest>;
/**
 * @generated from message easylab.v1.GetMirrorResponse
 */
export type GetMirrorResponse = Message<"easylab.v1.GetMirrorResponse"> & {
    /**
     * @generated from field: easylab.v1.MirrorCfg mirror = 1;
     */
    mirror?: MirrorCfg | undefined;
};
/**
 * Describes the message easylab.v1.GetMirrorResponse.
 * Use `create(GetMirrorResponseSchema)` to create a new message.
 */
export declare const GetMirrorResponseSchema: GenMessage<GetMirrorResponse>;
/**
 * @generated from message easylab.v1.SetMirrorRequest
 */
export type SetMirrorRequest = Message<"easylab.v1.SetMirrorRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: string pull_url = 3;
     */
    pullUrl: string;
    /**
     * @generated from field: string push_url = 4;
     */
    pushUrl: string;
    /**
     * @generated from field: string push_secret = 5;
     */
    pushSecret: string;
};
/**
 * Describes the message easylab.v1.SetMirrorRequest.
 * Use `create(SetMirrorRequestSchema)` to create a new message.
 */
export declare const SetMirrorRequestSchema: GenMessage<SetMirrorRequest>;
/**
 * @generated from message easylab.v1.SetMirrorResponse
 */
export type SetMirrorResponse = Message<"easylab.v1.SetMirrorResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string error = 2;
     */
    error: string;
};
/**
 * Describes the message easylab.v1.SetMirrorResponse.
 * Use `create(SetMirrorResponseSchema)` to create a new message.
 */
export declare const SetMirrorResponseSchema: GenMessage<SetMirrorResponse>;
/**
 * @generated from message easylab.v1.DeleteMirrorRequest
 */
export type DeleteMirrorRequest = Message<"easylab.v1.DeleteMirrorRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
};
/**
 * Describes the message easylab.v1.DeleteMirrorRequest.
 * Use `create(DeleteMirrorRequestSchema)` to create a new message.
 */
export declare const DeleteMirrorRequestSchema: GenMessage<DeleteMirrorRequest>;
/**
 * @generated from message easylab.v1.DeleteMirrorResponse
 */
export type DeleteMirrorResponse = Message<"easylab.v1.DeleteMirrorResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string error = 2;
     */
    error: string;
};
/**
 * Describes the message easylab.v1.DeleteMirrorResponse.
 * Use `create(DeleteMirrorResponseSchema)` to create a new message.
 */
export declare const DeleteMirrorResponseSchema: GenMessage<DeleteMirrorResponse>;
/**
 * @generated from message easylab.v1.SyncMirrorRequest
 */
export type SyncMirrorRequest = Message<"easylab.v1.SyncMirrorRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * pull | push
     *
     * @generated from field: string kind = 3;
     */
    kind: string;
    /**
     * @generated from field: map<string, string> body = 4;
     */
    body: {
        [key: string]: string;
    };
};
/**
 * Describes the message easylab.v1.SyncMirrorRequest.
 * Use `create(SyncMirrorRequestSchema)` to create a new message.
 */
export declare const SyncMirrorRequestSchema: GenMessage<SyncMirrorRequest>;
/**
 * @generated from message easylab.v1.SyncMirrorResponse
 */
export type SyncMirrorResponse = Message<"easylab.v1.SyncMirrorResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string updated_branches = 2;
     */
    updatedBranches: string;
    /**
     * @generated from field: string error = 3;
     */
    error: string;
};
/**
 * Describes the message easylab.v1.SyncMirrorResponse.
 * Use `create(SyncMirrorResponseSchema)` to create a new message.
 */
export declare const SyncMirrorResponseSchema: GenMessage<SyncMirrorResponse>;
/**
 * @generated from message easylab.v1.OCICatalogRequest
 */
export type OCICatalogRequest = Message<"easylab.v1.OCICatalogRequest"> & {};
/**
 * Describes the message easylab.v1.OCICatalogRequest.
 * Use `create(OCICatalogRequestSchema)` to create a new message.
 */
export declare const OCICatalogRequestSchema: GenMessage<OCICatalogRequest>;
/**
 * @generated from message easylab.v1.OCICatalogResponse
 */
export type OCICatalogResponse = Message<"easylab.v1.OCICatalogResponse"> & {
    /**
     * @generated from field: repeated string repositories = 1;
     */
    repositories: string[];
};
/**
 * Describes the message easylab.v1.OCICatalogResponse.
 * Use `create(OCICatalogResponseSchema)` to create a new message.
 */
export declare const OCICatalogResponseSchema: GenMessage<OCICatalogResponse>;
/**
 * @generated from message easylab.v1.SandboxInfo
 */
export type SandboxInfo = Message<"easylab.v1.SandboxInfo"> & {
    /**
     * container/service name (session key or standalone)
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * association: '' org = standalone sandbox (no sync)
     *
     * @generated from field: string org = 2;
     */
    org: string;
    /**
     * @generated from field: string repo = 3;
     */
    repo: string;
    /**
     * @generated from field: string branch = 4;
     */
    branch: string;
    /**
     * e.g. docker.io/library/golang:1.26
     *
     * @generated from field: string base_image = 5;
     */
    baseImage: string;
    /**
     * injected-worker image tag
     *
     * @generated from field: string derived_image = 6;
     */
    derivedImage: string;
    /**
     * default /workspace ('/tmp' for nonroot bases)
     *
     * @generated from field: string workspace = 7;
     */
    workspace: string;
    /**
     * live podman phase (Running/Pending/Exited/gone)
     *
     * @generated from field: string phase = 8;
     */
    phase: string;
    /**
     * @generated from field: string pod_ip = 9;
     */
    podIp: string;
    /**
     * live worker boot id (changed = worker restarted)
     *
     * @generated from field: string boot_id = 10;
     */
    bootId: string;
    /**
     * @generated from field: int32 running_jobs = 11;
     */
    runningJobs: number;
    /**
     * worker window (24h retention)
     *
     * @generated from field: int32 total_jobs = 12;
     */
    totalJobs: number;
    /**
     * easylab rev-coherence metadata
     *
     * @generated from field: string synced_rev = 13;
     */
    syncedRev: string;
    /**
     * @generated from field: string synced_boot_id = 14;
     */
    syncedBootId: string;
    /**
     * aggregation note (worker unreachable etc.)
     *
     * @generated from field: string error = 15;
     */
    error: string;
};
/**
 * Describes the message easylab.v1.SandboxInfo.
 * Use `create(SandboxInfoSchema)` to create a new message.
 */
export declare const SandboxInfoSchema: GenMessage<SandboxInfo>;
/**
 * @generated from message easylab.v1.ListSandboxesRequest
 */
export type ListSandboxesRequest = Message<"easylab.v1.ListSandboxesRequest"> & {};
/**
 * Describes the message easylab.v1.ListSandboxesRequest.
 * Use `create(ListSandboxesRequestSchema)` to create a new message.
 */
export declare const ListSandboxesRequestSchema: GenMessage<ListSandboxesRequest>;
/**
 * @generated from message easylab.v1.ListSandboxesResponse
 */
export type ListSandboxesResponse = Message<"easylab.v1.ListSandboxesResponse"> & {
    /**
     * @generated from field: repeated easylab.v1.SandboxInfo sandboxes = 1;
     */
    sandboxes: SandboxInfo[];
};
/**
 * Describes the message easylab.v1.ListSandboxesResponse.
 * Use `create(ListSandboxesResponseSchema)` to create a new message.
 */
export declare const ListSandboxesResponseSchema: GenMessage<ListSandboxesResponse>;
/**
 * @generated from message easylab.v1.GetSandboxRequest
 */
export type GetSandboxRequest = Message<"easylab.v1.GetSandboxRequest"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
};
/**
 * Describes the message easylab.v1.GetSandboxRequest.
 * Use `create(GetSandboxRequestSchema)` to create a new message.
 */
export declare const GetSandboxRequestSchema: GenMessage<GetSandboxRequest>;
/**
 * @generated from message easylab.v1.GetSandboxResponse
 */
export type GetSandboxResponse = Message<"easylab.v1.GetSandboxResponse"> & {
    /**
     * @generated from field: easylab.v1.SandboxInfo sandbox = 1;
     */
    sandbox?: SandboxInfo | undefined;
};
/**
 * Describes the message easylab.v1.GetSandboxResponse.
 * Use `create(GetSandboxResponseSchema)` to create a new message.
 */
export declare const GetSandboxResponseSchema: GenMessage<GetSandboxResponse>;
/**
 * @generated from message easylab.v1.EnsureSandboxImageRequest
 */
export type EnsureSandboxImageRequest = Message<"easylab.v1.EnsureSandboxImageRequest"> & {
    /**
     * @generated from field: string base_image = 1;
     */
    baseImage: string;
};
/**
 * Describes the message easylab.v1.EnsureSandboxImageRequest.
 * Use `create(EnsureSandboxImageRequestSchema)` to create a new message.
 */
export declare const EnsureSandboxImageRequestSchema: GenMessage<EnsureSandboxImageRequest>;
/**
 * @generated from message easylab.v1.EnsureSandboxImageResponse
 */
export type EnsureSandboxImageResponse = Message<"easylab.v1.EnsureSandboxImageResponse"> & {
    /**
     * @generated from field: string derived_image = 1;
     */
    derivedImage: string;
    /**
     * false = cache hit
     *
     * @generated from field: bool built = 2;
     */
    built: boolean;
};
/**
 * Describes the message easylab.v1.EnsureSandboxImageResponse.
 * Use `create(EnsureSandboxImageResponseSchema)` to create a new message.
 */
export declare const EnsureSandboxImageResponseSchema: GenMessage<EnsureSandboxImageResponse>;
/**
 * @generated from message easylab.v1.LaunchSandboxRequest
 */
export type LaunchSandboxRequest = Message<"easylab.v1.LaunchSandboxRequest"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string base_image = 2;
     */
    baseImage: string;
    /**
     * '' = standalone (independent sandbox, never synced)
     *
     * @generated from field: string org = 3;
     */
    org: string;
    /**
     * @generated from field: string repo = 4;
     */
    repo: string;
    /**
     * @generated from field: string branch = 5;
     */
    branch: string;
    /**
     * default /workspace
     *
     * @generated from field: string workspace = 6;
     */
    workspace: string;
    /**
     * @generated from field: map<string, string> env = 7;
     */
    env: {
        [key: string]: string;
    };
    /**
     * @generated from field: string cpus = 8;
     */
    cpus: string;
    /**
     * @generated from field: uint64 memory_bytes = 9;
     */
    memoryBytes: bigint;
};
/**
 * Describes the message easylab.v1.LaunchSandboxRequest.
 * Use `create(LaunchSandboxRequestSchema)` to create a new message.
 */
export declare const LaunchSandboxRequestSchema: GenMessage<LaunchSandboxRequest>;
/**
 * @generated from message easylab.v1.LaunchSandboxResponse
 */
export type LaunchSandboxResponse = Message<"easylab.v1.LaunchSandboxResponse"> & {
    /**
     * @generated from field: easylab.v1.SandboxInfo sandbox = 1;
     */
    sandbox?: SandboxInfo | undefined;
};
/**
 * Describes the message easylab.v1.LaunchSandboxResponse.
 * Use `create(LaunchSandboxResponseSchema)` to create a new message.
 */
export declare const LaunchSandboxResponseSchema: GenMessage<LaunchSandboxResponse>;
/**
 * @generated from message easylab.v1.DeleteSandboxRequest
 */
export type DeleteSandboxRequest = Message<"easylab.v1.DeleteSandboxRequest"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
};
/**
 * Describes the message easylab.v1.DeleteSandboxRequest.
 * Use `create(DeleteSandboxRequestSchema)` to create a new message.
 */
export declare const DeleteSandboxRequestSchema: GenMessage<DeleteSandboxRequest>;
/**
 * @generated from message easylab.v1.DeleteSandboxResponse
 */
export type DeleteSandboxResponse = Message<"easylab.v1.DeleteSandboxResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string error = 2;
     */
    error: string;
};
/**
 * Describes the message easylab.v1.DeleteSandboxResponse.
 * Use `create(DeleteSandboxResponseSchema)` to create a new message.
 */
export declare const DeleteSandboxResponseSchema: GenMessage<DeleteSandboxResponse>;
/**
 * @generated from message easylab.v1.ExecuteRequest
 */
export type ExecuteRequest = Message<"easylab.v1.ExecuteRequest"> & {
    /**
     * @generated from field: string sandbox = 1;
     */
    sandbox: string;
    /**
     * @generated from field: worker.v1.ExecuteRequest req = 2;
     */
    req?: ExecuteRequest$1 | undefined;
};
/**
 * Describes the message easylab.v1.ExecuteRequest.
 * Use `create(ExecuteRequestSchema)` to create a new message.
 */
export declare const ExecuteRequestSchema: GenMessage<ExecuteRequest>;
/**
 * @generated from message easylab.v1.ListJobsRequest
 */
export type ListJobsRequest = Message<"easylab.v1.ListJobsRequest"> & {
    /**
     * @generated from field: string sandbox = 1;
     */
    sandbox: string;
    /**
     * @generated from field: int32 limit = 2;
     */
    limit: number;
};
/**
 * Describes the message easylab.v1.ListJobsRequest.
 * Use `create(ListJobsRequestSchema)` to create a new message.
 */
export declare const ListJobsRequestSchema: GenMessage<ListJobsRequest>;
/**
 * @generated from message easylab.v1.JobOutputRequest
 */
export type JobOutputRequest = Message<"easylab.v1.JobOutputRequest"> & {
    /**
     * @generated from field: string sandbox = 1;
     */
    sandbox: string;
    /**
     * @generated from field: worker.v1.JobOutputRequest req = 2;
     */
    req?: JobOutputRequest$1 | undefined;
};
/**
 * Describes the message easylab.v1.JobOutputRequest.
 * Use `create(JobOutputRequestSchema)` to create a new message.
 */
export declare const JobOutputRequestSchema: GenMessage<JobOutputRequest>;
/**
 * @generated from message easylab.v1.WatchJobRequest
 */
export type WatchJobRequest = Message<"easylab.v1.WatchJobRequest"> & {
    /**
     * @generated from field: string sandbox = 1;
     */
    sandbox: string;
    /**
     * @generated from field: worker.v1.WatchJobRequest req = 2;
     */
    req?: WatchJobRequest$1 | undefined;
};
/**
 * Describes the message easylab.v1.WatchJobRequest.
 * Use `create(WatchJobRequestSchema)` to create a new message.
 */
export declare const WatchJobRequestSchema: GenMessage<WatchJobRequest>;
/**
 * @generated from message easylab.v1.JobWaitRequest
 */
export type JobWaitRequest = Message<"easylab.v1.JobWaitRequest"> & {
    /**
     * @generated from field: string sandbox = 1;
     */
    sandbox: string;
    /**
     * @generated from field: worker.v1.JobWaitRequest req = 2;
     */
    req?: JobWaitRequest$1 | undefined;
};
/**
 * Describes the message easylab.v1.JobWaitRequest.
 * Use `create(JobWaitRequestSchema)` to create a new message.
 */
export declare const JobWaitRequestSchema: GenMessage<JobWaitRequest>;
/**
 * @generated from message easylab.v1.JobStdinRequest
 */
export type JobStdinRequest = Message<"easylab.v1.JobStdinRequest"> & {
    /**
     * @generated from field: string sandbox = 1;
     */
    sandbox: string;
    /**
     * @generated from field: worker.v1.JobStdinRequest req = 2;
     */
    req?: JobStdinRequest$1 | undefined;
};
/**
 * Describes the message easylab.v1.JobStdinRequest.
 * Use `create(JobStdinRequestSchema)` to create a new message.
 */
export declare const JobStdinRequestSchema: GenMessage<JobStdinRequest>;
/**
 * @generated from message easylab.v1.JobKillRequest
 */
export type JobKillRequest = Message<"easylab.v1.JobKillRequest"> & {
    /**
     * @generated from field: string sandbox = 1;
     */
    sandbox: string;
    /**
     * @generated from field: worker.v1.JobKillRequest req = 2;
     */
    req?: JobKillRequest$1 | undefined;
};
/**
 * Describes the message easylab.v1.JobKillRequest.
 * Use `create(JobKillRequestSchema)` to create a new message.
 */
export declare const JobKillRequestSchema: GenMessage<JobKillRequest>;
/**
 * @generated from message easylab.v1.FileReadRequest
 */
export type FileReadRequest = Message<"easylab.v1.FileReadRequest"> & {
    /**
     * @generated from field: string sandbox = 1;
     */
    sandbox: string;
    /**
     * @generated from field: worker.v1.FileReadRequest req = 2;
     */
    req?: FileReadRequest$1 | undefined;
};
/**
 * Describes the message easylab.v1.FileReadRequest.
 * Use `create(FileReadRequestSchema)` to create a new message.
 */
export declare const FileReadRequestSchema: GenMessage<FileReadRequest>;
/**
 * @generated from message easylab.v1.SyncWorkspaceRequest
 */
export type SyncWorkspaceRequest = Message<"easylab.v1.SyncWorkspaceRequest"> & {
    /**
     * @generated from field: string sandbox = 1;
     */
    sandbox: string;
    /**
     * @generated from field: string org = 2;
     */
    org: string;
    /**
     * @generated from field: string repo = 3;
     */
    repo: string;
    /**
     * branch head commit to push
     *
     * @generated from field: string rev = 4;
     */
    rev: string;
    /**
     * @generated from field: string branch = 5;
     */
    branch: string;
};
/**
 * Describes the message easylab.v1.SyncWorkspaceRequest.
 * Use `create(SyncWorkspaceRequestSchema)` to create a new message.
 */
export declare const SyncWorkspaceRequestSchema: GenMessage<SyncWorkspaceRequest>;
/**
 * @generated from message easylab.v1.SyncWorkspaceResponse
 */
export type SyncWorkspaceResponse = Message<"easylab.v1.SyncWorkspaceResponse"> & {
    /**
     * @generated from field: string synced_rev = 1;
     */
    syncedRev: string;
};
/**
 * Describes the message easylab.v1.SyncWorkspaceResponse.
 * Use `create(SyncWorkspaceResponseSchema)` to create a new message.
 */
export declare const SyncWorkspaceResponseSchema: GenMessage<SyncWorkspaceResponse>;
/**
 * @generated from message easylab.v1.FileWriteRequest
 */
export type FileWriteRequest = Message<"easylab.v1.FileWriteRequest"> & {
    /**
     * @generated from field: string sandbox = 1;
     */
    sandbox: string;
    /**
     * @generated from field: worker.v1.FileWriteRequest req = 2;
     */
    req?: FileWriteRequest$1 | undefined;
};
/**
 * Describes the message easylab.v1.FileWriteRequest.
 * Use `create(FileWriteRequestSchema)` to create a new message.
 */
export declare const FileWriteRequestSchema: GenMessage<FileWriteRequest>;
/**
 * @generated from message easylab.v1.FileListRequest
 */
export type FileListRequest = Message<"easylab.v1.FileListRequest"> & {
    /**
     * @generated from field: string sandbox = 1;
     */
    sandbox: string;
    /**
     * @generated from field: worker.v1.FileListRequest req = 2;
     */
    req?: FileListRequest$1 | undefined;
};
/**
 * Describes the message easylab.v1.FileListRequest.
 * Use `create(FileListRequestSchema)` to create a new message.
 */
export declare const FileListRequestSchema: GenMessage<FileListRequest>;
/**
 * @generated from enum easylab.v1.ServiceKind
 */
export declare enum ServiceKind {
    /**
     * @generated from enum value: SERVICE_KIND_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: SERVICE_KIND_DEPLOYMENT = 1;
     */
    DEPLOYMENT = 1,
    /**
     * @generated from enum value: SERVICE_KIND_BARE = 2;
     */
    BARE = 2
}
/**
 * Describes the enum easylab.v1.ServiceKind.
 */
export declare const ServiceKindSchema: GenEnum<ServiceKind>;
/**
 * LabService covers the revision-native repo + filesystem surface.
 *
 * @generated from service easylab.v1.LabService
 */
export declare const LabService: GenService<{
    /**
     * @generated from rpc easylab.v1.LabService.Health
     */
    health: {
        methodKind: "unary";
        input: typeof HealthRequestSchema;
        output: typeof HealthResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.Status
     */
    status: {
        methodKind: "unary";
        input: typeof StatusRequestSchema;
        output: typeof StatusResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.ListRepos
     */
    listRepos: {
        methodKind: "unary";
        input: typeof ListReposRequestSchema;
        output: typeof ListReposResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.CreateRepo
     */
    createRepo: {
        methodKind: "unary";
        input: typeof CreateRepoRequestSchema;
        output: typeof CreateRepoResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.DeleteRepo
     */
    deleteRepo: {
        methodKind: "unary";
        input: typeof DeleteRepoRequestSchema;
        output: typeof DeleteRepoResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.EnsureRepo
     */
    ensureRepo: {
        methodKind: "unary";
        input: typeof EnsureRepoRequestSchema;
        output: typeof EnsureRepoResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.EnsureOrg
     */
    ensureOrg: {
        methodKind: "unary";
        input: typeof EnsureOrgRequestSchema;
        output: typeof EnsureOrgResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.ForkRepo
     */
    forkRepo: {
        methodKind: "unary";
        input: typeof ForkRepoRequestSchema;
        output: typeof ForkRepoResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.CloneRepo
     */
    cloneRepo: {
        methodKind: "unary";
        input: typeof CloneRepoRequestSchema;
        output: typeof CloneRepoResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.Tree
     */
    tree: {
        methodKind: "unary";
        input: typeof TreeRequestSchema;
        output: typeof TreeResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.ReadBlob
     */
    readBlob: {
        methodKind: "unary";
        input: typeof ReadBlobRequestSchema;
        output: typeof ReadBlobResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.WriteBlob
     */
    writeBlob: {
        methodKind: "unary";
        input: typeof WriteBlobRequestSchema;
        output: typeof WriteBlobResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.Log
     */
    log: {
        methodKind: "unary";
        input: typeof LogRequestSchema;
        output: typeof LogResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.Tags
     */
    tags: {
        methodKind: "unary";
        input: typeof TagsRequestSchema;
        output: typeof TagsResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.Branches
     */
    branches: {
        methodKind: "unary";
        input: typeof BranchesRequestSchema;
        output: typeof BranchesResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.Revisions
     */
    revisions: {
        methodKind: "unary";
        input: typeof RevisionsRequestSchema;
        output: typeof RevisionsResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.Diff
     */
    diff: {
        methodKind: "unary";
        input: typeof DiffRequestSchema;
        output: typeof DiffResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.Blame
     */
    blame: {
        methodKind: "unary";
        input: typeof BlameRequestSchema;
        output: typeof BlameResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.DeleteBranch
     */
    deleteBranch: {
        methodKind: "unary";
        input: typeof DeleteBranchRequestSchema;
        output: typeof DeleteBranchResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.CreateBranch
     */
    createBranch: {
        methodKind: "unary";
        input: typeof CreateBranchRequestSchema;
        output: typeof CreateBranchResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.FileHistory
     */
    fileHistory: {
        methodKind: "unary";
        input: typeof FileHistoryRequestSchema;
        output: typeof FileHistoryResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.Search
     */
    search: {
        methodKind: "unary";
        input: typeof SearchRequestSchema;
        output: typeof SearchResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.Graph
     */
    graph: {
        methodKind: "unary";
        input: typeof GraphRequestSchema;
        output: typeof GraphResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.Compare
     */
    compare: {
        methodKind: "unary";
        input: typeof CompareRequestSchema;
        output: typeof CompareResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.Rebase
     */
    rebase: {
        methodKind: "unary";
        input: typeof RebaseRequestSchema;
        output: typeof RebaseResponseSchema;
    };
    /**
     * ---- Lab additions (REST removals) ----
     *
     * @generated from rpc easylab.v1.LabService.DeleteOrg
     */
    deleteOrg: {
        methodKind: "unary";
        input: typeof DeleteOrgRequestSchema;
        output: typeof DeleteOrgResponseSchema;
    };
    /**
     * Releases (backed by the generic artifact registry; format "generic").
     *
     * @generated from rpc easylab.v1.LabService.ListReleases
     */
    listReleases: {
        methodKind: "unary";
        input: typeof ListReleasesRequestSchema;
        output: typeof ListReleasesResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.DownloadReleaseAsset
     */
    downloadReleaseAsset: {
        methodKind: "unary";
        input: typeof DownloadReleaseAssetRequestSchema;
        output: typeof DownloadReleaseAssetResponseSchema;
    };
    /**
     * Source archive tarball for a rev/tag.
     *
     * @generated from rpc easylab.v1.LabService.Archive
     */
    archive: {
        methodKind: "unary";
        input: typeof ArchiveRequestSchema;
        output: typeof ArchiveResponseSchema;
    };
    /**
     * Mirror (persistent push/pull mirrors on a repo).
     *
     * @generated from rpc easylab.v1.LabService.GetMirror
     */
    getMirror: {
        methodKind: "unary";
        input: typeof GetMirrorRequestSchema;
        output: typeof GetMirrorResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.SetMirror
     */
    setMirror: {
        methodKind: "unary";
        input: typeof SetMirrorRequestSchema;
        output: typeof SetMirrorResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.DeleteMirror
     */
    deleteMirror: {
        methodKind: "unary";
        input: typeof DeleteMirrorRequestSchema;
        output: typeof DeleteMirrorResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.SyncMirror
     */
    syncMirror: {
        methodKind: "unary";
        input: typeof SyncMirrorRequestSchema;
        output: typeof SyncMirrorResponseSchema;
    };
}>;
/**
 * OpsService covers the dev/deploy surface (services, sandboxes, builds).
 *
 * @generated from service easylab.v1.OpsService
 */
export declare const OpsService: GenService<{
    /**
     * @generated from rpc easylab.v1.OpsService.OpsStatus
     */
    opsStatus: {
        methodKind: "unary";
        input: typeof OpsStatusRequestSchema;
        output: typeof OpsStatusResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.OpsService.ListNamespaces
     */
    listNamespaces: {
        methodKind: "unary";
        input: typeof ListNamespacesRequestSchema;
        output: typeof ListNamespacesResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.OpsService.ListServices
     */
    listServices: {
        methodKind: "unary";
        input: typeof ListServicesRequestSchema;
        output: typeof ListServicesResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.OpsService.GetService
     */
    getService: {
        methodKind: "unary";
        input: typeof GetServiceRequestSchema;
        output: typeof GetServiceResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.OpsService.LaunchService
     */
    launchService: {
        methodKind: "unary";
        input: typeof LaunchServiceRequestSchema;
        output: typeof LaunchServiceResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.OpsService.DeleteService
     */
    deleteService: {
        methodKind: "unary";
        input: typeof DeleteServiceRequestSchema;
        output: typeof DeleteServiceResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.OpsService.ScaleService
     */
    scaleService: {
        methodKind: "unary";
        input: typeof ScaleServiceRequestSchema;
        output: typeof ScaleServiceResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.OpsService.SandboxExec
     */
    sandboxExec: {
        methodKind: "unary";
        input: typeof SandboxExecRequestSchema;
        output: typeof SandboxExecResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.OpsService.SandboxRead
     */
    sandboxRead: {
        methodKind: "unary";
        input: typeof SandboxReadRequestSchema;
        output: typeof SandboxReadResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.OpsService.SandboxWrite
     */
    sandboxWrite: {
        methodKind: "unary";
        input: typeof SandboxWriteRequestSchema;
        output: typeof SandboxWriteResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.OpsService.SandboxJobKill
     */
    sandboxJobKill: {
        methodKind: "unary";
        input: typeof SandboxJobKillRequestSchema;
        output: typeof SandboxJobKillResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.OpsService.ListTasks
     */
    listTasks: {
        methodKind: "unary";
        input: typeof ListTasksRequestSchema;
        output: typeof ListTasksResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.OpsService.GetTask
     */
    getTask: {
        methodKind: "unary";
        input: typeof GetTaskRequestSchema;
        output: typeof GetTaskResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.OpsService.Build
     */
    build: {
        methodKind: "unary";
        input: typeof BuildRequestSchema;
        output: typeof BuildResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.OpsService.TaskLog
     */
    taskLog: {
        methodKind: "server_streaming";
        input: typeof TaskLogRequestSchema;
        output: typeof TaskLogResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.OpsService.Sync
     */
    sync: {
        methodKind: "unary";
        input: typeof SyncRequestSchema;
        output: typeof SyncResponseSchema;
    };
}>;
/**
 * RegistryService covers the package registry surface.
 *
 * @generated from service easylab.v1.RegistryService
 */
export declare const RegistryService: GenService<{
    /**
     * @generated from rpc easylab.v1.RegistryService.ListPackageTypes
     */
    listPackageTypes: {
        methodKind: "unary";
        input: typeof ListPackageTypesRequestSchema;
        output: typeof ListPackageTypesResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.RegistryService.ListPackages
     */
    listPackages: {
        methodKind: "unary";
        input: typeof ListPackagesRequestSchema;
        output: typeof ListPackagesResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.RegistryService.PackageVersions
     */
    packageVersions: {
        methodKind: "unary";
        input: typeof PackageVersionsRequestSchema;
        output: typeof PackageVersionsResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.RegistryService.DeletePackage
     */
    deletePackage: {
        methodKind: "unary";
        input: typeof DeletePackageRequestSchema;
        output: typeof DeletePackageResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.RegistryService.DeletePackageVersion
     */
    deletePackageVersion: {
        methodKind: "unary";
        input: typeof DeletePackageVersionRequestSchema;
        output: typeof DeletePackageVersionResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.RegistryService.ListPublishSpecs
     */
    listPublishSpecs: {
        methodKind: "unary";
        input: typeof ListPublishSpecsRequestSchema;
        output: typeof ListPublishSpecsResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.RegistryService.OCICatalog
     */
    oCICatalog: {
        methodKind: "unary";
        input: typeof OCICatalogRequestSchema;
        output: typeof OCICatalogResponseSchema;
    };
}>;
/**
 * SandboxService fronts every worker.v1 API for the UI/console and owns the
 * sandbox lifecycle (derived image + launch + sync + registry table).
 *
 * @generated from service easylab.v1.SandboxService
 */
export declare const SandboxService: GenService<{
    /**
     * lifecycle
     *
     * @generated from rpc easylab.v1.SandboxService.ListSandboxes
     */
    listSandboxes: {
        methodKind: "unary";
        input: typeof ListSandboxesRequestSchema;
        output: typeof ListSandboxesResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.SandboxService.GetSandbox
     */
    getSandbox: {
        methodKind: "unary";
        input: typeof GetSandboxRequestSchema;
        output: typeof GetSandboxResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.SandboxService.EnsureSandboxImage
     */
    ensureSandboxImage: {
        methodKind: "unary";
        input: typeof EnsureSandboxImageRequestSchema;
        output: typeof EnsureSandboxImageResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.SandboxService.LaunchSandbox
     */
    launchSandbox: {
        methodKind: "unary";
        input: typeof LaunchSandboxRequestSchema;
        output: typeof LaunchSandboxResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.SandboxService.DeleteSandbox
     */
    deleteSandbox: {
        methodKind: "unary";
        input: typeof DeleteSandboxRequestSchema;
        output: typeof DeleteSandboxResponseSchema;
    };
    /**
     * worker passthroughs (sandbox routing + worker.v1 payloads)
     *
     * @generated from rpc easylab.v1.SandboxService.Execute
     */
    execute: {
        methodKind: "unary";
        input: typeof ExecuteRequestSchema;
        output: typeof ExecuteResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.SandboxService.ListJobs
     */
    listJobs: {
        methodKind: "unary";
        input: typeof ListJobsRequestSchema;
        output: typeof ListJobsResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.SandboxService.JobOutput
     */
    jobOutput: {
        methodKind: "unary";
        input: typeof JobOutputRequestSchema;
        output: typeof JobOutputResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.SandboxService.WatchJob
     */
    watchJob: {
        methodKind: "server_streaming";
        input: typeof WatchJobRequestSchema;
        output: typeof WatchJobResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.SandboxService.JobWait
     */
    jobWait: {
        methodKind: "unary";
        input: typeof JobWaitRequestSchema;
        output: typeof JobWaitResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.SandboxService.JobStdin
     */
    jobStdin: {
        methodKind: "unary";
        input: typeof JobStdinRequestSchema;
        output: typeof JobStdinResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.SandboxService.JobKill
     */
    jobKill: {
        methodKind: "unary";
        input: typeof JobKillRequestSchema;
        output: typeof JobKillResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.SandboxService.FileRead
     */
    fileRead: {
        methodKind: "unary";
        input: typeof FileReadRequestSchema;
        output: typeof FileReadResponseSchema;
    };
    /**
     * SyncWorkspace pushes the repo tree at rev into the sandbox and records
     * rev + worker boot id in the registry (single rev-coherence write).
     *
     * @generated from rpc easylab.v1.SandboxService.SyncWorkspace
     */
    syncWorkspace: {
        methodKind: "unary";
        input: typeof SyncWorkspaceRequestSchema;
        output: typeof SyncWorkspaceResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.SandboxService.FileWrite
     */
    fileWrite: {
        methodKind: "unary";
        input: typeof FileWriteRequestSchema;
        output: typeof FileWriteResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.SandboxService.FileList
     */
    fileList: {
        methodKind: "unary";
        input: typeof FileListRequestSchema;
        output: typeof FileListResponseSchema;
    };
}>;
export type { ExecuteResponse, ListJobsResponse, JobOutputResponse, JobWaitResponse, JobStdinResponse, JobKillResponse, WatchJobResponse, FileReadResponse, FileWriteResponse, FileListResponse, InfoResponse, JobEntry, WatchJobResponse_Done, } from '../../worker/v1/worker_pb.js';
