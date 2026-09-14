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
    /**
     * Owning user id and repository coordinates (ownership labels). Empty for a
     * standalone service (owned by its creator only).
     *
     * @generated from field: string owner = 14;
     */
    owner: string;
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
    /**
     * Ownership visibility: "public" (default) or "private".
     *
     * @generated from field: string visibility = 4;
     */
    visibility: string;
    /**
     * Owning user id ("" when unclaimed, e.g. a pull-through cache entry).
     *
     * @generated from field: string owner = 5;
     */
    owner: string;
};
/**
 * Describes the message easylab.v1.PackageInfo.
 * Use `create(PackageInfoSchema)` to create a new message.
 */
export declare const PackageInfoSchema: GenMessage<PackageInfo>;
/**
 * @generated from message easylab.v1.SetPackageVisibilityRequest
 */
export type SetPackageVisibilityRequest = Message<"easylab.v1.SetPackageVisibilityRequest"> & {
    /**
     * @generated from field: string type = 1;
     */
    type: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * public | private
     *
     * @generated from field: string visibility = 3;
     */
    visibility: string;
};
/**
 * Describes the message easylab.v1.SetPackageVisibilityRequest.
 * Use `create(SetPackageVisibilityRequestSchema)` to create a new message.
 */
export declare const SetPackageVisibilityRequestSchema: GenMessage<SetPackageVisibilityRequest>;
/**
 * @generated from message easylab.v1.SetPackageVisibilityResponse
 */
export type SetPackageVisibilityResponse = Message<"easylab.v1.SetPackageVisibilityResponse"> & {
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
 * Describes the message easylab.v1.SetPackageVisibilityResponse.
 * Use `create(SetPackageVisibilityResponseSchema)` to create a new message.
 */
export declare const SetPackageVisibilityResponseSchema: GenMessage<SetPackageVisibilityResponse>;
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
 * UpdateRepo patches a repository's hosting metadata (owner-only fields like
 * visibility are authorized server-side).
 *
 * @generated from message easylab.v1.UpdateRepoRequest
 */
export type UpdateRepoRequest = Message<"easylab.v1.UpdateRepoRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: optional string description = 3;
     */
    description?: string | undefined;
    /**
     * public | private
     *
     * @generated from field: optional string visibility = 4;
     */
    visibility?: string | undefined;
    /**
     * @generated from field: optional string default_branch = 5;
     */
    defaultBranch?: string | undefined;
};
/**
 * Describes the message easylab.v1.UpdateRepoRequest.
 * Use `create(UpdateRepoRequestSchema)` to create a new message.
 */
export declare const UpdateRepoRequestSchema: GenMessage<UpdateRepoRequest>;
/**
 * @generated from message easylab.v1.UpdateRepoResponse
 */
export type UpdateRepoResponse = Message<"easylab.v1.UpdateRepoResponse"> & {
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
 * Describes the message easylab.v1.UpdateRepoResponse.
 * Use `create(UpdateRepoResponseSchema)` to create a new message.
 */
export declare const UpdateRepoResponseSchema: GenMessage<UpdateRepoResponse>;
/**
 * Repo permission roles (a user IS the ownership boundary; owner comes from
 * the namespace owner, maintainer/developer are explicit grants).
 *
 * @generated from message easylab.v1.RepoMember
 */
export type RepoMember = Message<"easylab.v1.RepoMember"> & {
    /**
     * @generated from field: string username = 1;
     */
    username: string;
    /**
     * owner | maintainer | developer
     *
     * @generated from field: string role = 2;
     */
    role: string;
};
/**
 * Describes the message easylab.v1.RepoMember.
 * Use `create(RepoMemberSchema)` to create a new message.
 */
export declare const RepoMemberSchema: GenMessage<RepoMember>;
/**
 * @generated from message easylab.v1.ListRepoMembersRequest
 */
export type ListRepoMembersRequest = Message<"easylab.v1.ListRepoMembersRequest"> & {
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
 * Describes the message easylab.v1.ListRepoMembersRequest.
 * Use `create(ListRepoMembersRequestSchema)` to create a new message.
 */
export declare const ListRepoMembersRequestSchema: GenMessage<ListRepoMembersRequest>;
/**
 * @generated from message easylab.v1.ListRepoMembersResponse
 */
export type ListRepoMembersResponse = Message<"easylab.v1.ListRepoMembersResponse"> & {
    /**
     * @generated from field: repeated easylab.v1.RepoMember members = 1;
     */
    members: RepoMember[];
};
/**
 * Describes the message easylab.v1.ListRepoMembersResponse.
 * Use `create(ListRepoMembersResponseSchema)` to create a new message.
 */
export declare const ListRepoMembersResponseSchema: GenMessage<ListRepoMembersResponse>;
/**
 * @generated from message easylab.v1.SetRepoMemberRequest
 */
export type SetRepoMemberRequest = Message<"easylab.v1.SetRepoMemberRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: string username = 3;
     */
    username: string;
    /**
     * maintainer | developer (owner is the namespace owner)
     *
     * @generated from field: string role = 4;
     */
    role: string;
};
/**
 * Describes the message easylab.v1.SetRepoMemberRequest.
 * Use `create(SetRepoMemberRequestSchema)` to create a new message.
 */
export declare const SetRepoMemberRequestSchema: GenMessage<SetRepoMemberRequest>;
/**
 * @generated from message easylab.v1.SetRepoMemberResponse
 */
export type SetRepoMemberResponse = Message<"easylab.v1.SetRepoMemberResponse"> & {
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
 * Describes the message easylab.v1.SetRepoMemberResponse.
 * Use `create(SetRepoMemberResponseSchema)` to create a new message.
 */
export declare const SetRepoMemberResponseSchema: GenMessage<SetRepoMemberResponse>;
/**
 * @generated from message easylab.v1.RemoveRepoMemberRequest
 */
export type RemoveRepoMemberRequest = Message<"easylab.v1.RemoveRepoMemberRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: string username = 3;
     */
    username: string;
};
/**
 * Describes the message easylab.v1.RemoveRepoMemberRequest.
 * Use `create(RemoveRepoMemberRequestSchema)` to create a new message.
 */
export declare const RemoveRepoMemberRequestSchema: GenMessage<RemoveRepoMemberRequest>;
/**
 * @generated from message easylab.v1.RemoveRepoMemberResponse
 */
export type RemoveRepoMemberResponse = Message<"easylab.v1.RemoveRepoMemberResponse"> & {
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
 * Describes the message easylab.v1.RemoveRepoMemberResponse.
 * Use `create(RemoveRepoMemberResponseSchema)` to create a new message.
 */
export declare const RemoveRepoMemberResponseSchema: GenMessage<RemoveRepoMemberResponse>;
/**
 * SetTag / DeleteTag manage immutable tag refs; DeleteBranch already exists.
 *
 * @generated from message easylab.v1.SetTagRequest
 */
export type SetTagRequest = Message<"easylab.v1.SetTagRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: string name = 3;
     */
    name: string;
    /**
     * @generated from field: string target = 4;
     */
    target: string;
};
/**
 * Describes the message easylab.v1.SetTagRequest.
 * Use `create(SetTagRequestSchema)` to create a new message.
 */
export declare const SetTagRequestSchema: GenMessage<SetTagRequest>;
/**
 * @generated from message easylab.v1.SetTagResponse
 */
export type SetTagResponse = Message<"easylab.v1.SetTagResponse"> & {
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
 * Describes the message easylab.v1.SetTagResponse.
 * Use `create(SetTagResponseSchema)` to create a new message.
 */
export declare const SetTagResponseSchema: GenMessage<SetTagResponse>;
/**
 * @generated from message easylab.v1.DeleteTagRequest
 */
export type DeleteTagRequest = Message<"easylab.v1.DeleteTagRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: string name = 3;
     */
    name: string;
};
/**
 * Describes the message easylab.v1.DeleteTagRequest.
 * Use `create(DeleteTagRequestSchema)` to create a new message.
 */
export declare const DeleteTagRequestSchema: GenMessage<DeleteTagRequest>;
/**
 * @generated from message easylab.v1.DeleteTagResponse
 */
export type DeleteTagResponse = Message<"easylab.v1.DeleteTagResponse"> & {
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
 * Describes the message easylab.v1.DeleteTagResponse.
 * Use `create(DeleteTagResponseSchema)` to create a new message.
 */
export declare const DeleteTagResponseSchema: GenMessage<DeleteTagResponse>;
/**
 * FileChange is one atomic path action inside WriteFiles.
 *
 * @generated from message easylab.v1.FileChange
 */
export type FileChange = Message<"easylab.v1.FileChange"> & {
    /**
     * @generated from field: string path = 1;
     */
    path: string;
    /**
     * @generated from field: string content = 2;
     */
    content: string;
    /**
     * @generated from field: bytes raw = 3;
     */
    raw: Uint8Array;
    /**
     * @generated from field: bool delete = 4;
     */
    delete: boolean;
};
/**
 * Describes the message easylab.v1.FileChange.
 * Use `create(FileChangeSchema)` to create a new message.
 */
export declare const FileChangeSchema: GenMessage<FileChange>;
/**
 * WriteFiles commits one or more file changes onto a branch in a single
 * revision (the REST /files endpoint's RPC form).
 *
 * @generated from message easylab.v1.WriteFilesRequest
 */
export type WriteFilesRequest = Message<"easylab.v1.WriteFilesRequest"> & {
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
     * @generated from field: string message = 4;
     */
    message: string;
    /**
     * @generated from field: repeated easylab.v1.FileChange changes = 5;
     */
    changes: FileChange[];
    /**
     * @generated from field: bool new_commit = 6;
     */
    newCommit: boolean;
};
/**
 * Describes the message easylab.v1.WriteFilesRequest.
 * Use `create(WriteFilesRequestSchema)` to create a new message.
 */
export declare const WriteFilesRequestSchema: GenMessage<WriteFilesRequest>;
/**
 * @generated from message easylab.v1.WriteFilesResponse
 */
export type WriteFilesResponse = Message<"easylab.v1.WriteFilesResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string error = 2;
     */
    error: string;
    /**
     * @generated from field: string revision_id = 3;
     */
    revisionId: string;
    /**
     * @generated from field: string change_id = 4;
     */
    changeId: string;
};
/**
 * Describes the message easylab.v1.WriteFilesResponse.
 * Use `create(WriteFilesResponseSchema)` to create a new message.
 */
export declare const WriteFilesResponseSchema: GenMessage<WriteFilesResponse>;
/**
 * Drop/Revert/Resolve/Squash/RebaseMany are the remaining history-edit ops.
 *
 * @generated from message easylab.v1.DropRequest
 */
export type DropRequest = Message<"easylab.v1.DropRequest"> & {
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
};
/**
 * Describes the message easylab.v1.DropRequest.
 * Use `create(DropRequestSchema)` to create a new message.
 */
export declare const DropRequestSchema: GenMessage<DropRequest>;
/**
 * @generated from message easylab.v1.DropResponse
 */
export type DropResponse = Message<"easylab.v1.DropResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string error = 2;
     */
    error: string;
    /**
     * @generated from field: string revision_id = 3;
     */
    revisionId: string;
    /**
     * @generated from field: string change_id = 4;
     */
    changeId: string;
};
/**
 * Describes the message easylab.v1.DropResponse.
 * Use `create(DropResponseSchema)` to create a new message.
 */
export declare const DropResponseSchema: GenMessage<DropResponse>;
/**
 * @generated from message easylab.v1.RevertRequest
 */
export type RevertRequest = Message<"easylab.v1.RevertRequest"> & {
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
     * @generated from field: string target = 4;
     */
    target: string;
};
/**
 * Describes the message easylab.v1.RevertRequest.
 * Use `create(RevertRequestSchema)` to create a new message.
 */
export declare const RevertRequestSchema: GenMessage<RevertRequest>;
/**
 * @generated from message easylab.v1.RevertResponse
 */
export type RevertResponse = Message<"easylab.v1.RevertResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string error = 2;
     */
    error: string;
    /**
     * @generated from field: string revision_id = 3;
     */
    revisionId: string;
    /**
     * @generated from field: string change_id = 4;
     */
    changeId: string;
};
/**
 * Describes the message easylab.v1.RevertResponse.
 * Use `create(RevertResponseSchema)` to create a new message.
 */
export declare const RevertResponseSchema: GenMessage<RevertResponse>;
/**
 * @generated from message easylab.v1.ResolveRequest
 */
export type ResolveRequest = Message<"easylab.v1.ResolveRequest"> & {
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
     * @generated from field: string content = 4;
     */
    content: string;
};
/**
 * Describes the message easylab.v1.ResolveRequest.
 * Use `create(ResolveRequestSchema)` to create a new message.
 */
export declare const ResolveRequestSchema: GenMessage<ResolveRequest>;
/**
 * @generated from message easylab.v1.ResolveResponse
 */
export type ResolveResponse = Message<"easylab.v1.ResolveResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string error = 2;
     */
    error: string;
    /**
     * @generated from field: string revision_id = 3;
     */
    revisionId: string;
    /**
     * @generated from field: string change_id = 4;
     */
    changeId: string;
};
/**
 * Describes the message easylab.v1.ResolveResponse.
 * Use `create(ResolveResponseSchema)` to create a new message.
 */
export declare const ResolveResponseSchema: GenMessage<ResolveResponse>;
/**
 * @generated from message easylab.v1.SquashRequest
 */
export type SquashRequest = Message<"easylab.v1.SquashRequest"> & {
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
     * @generated from field: string message = 4;
     */
    message: string;
};
/**
 * Describes the message easylab.v1.SquashRequest.
 * Use `create(SquashRequestSchema)` to create a new message.
 */
export declare const SquashRequestSchema: GenMessage<SquashRequest>;
/**
 * @generated from message easylab.v1.SquashResponse
 */
export type SquashResponse = Message<"easylab.v1.SquashResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string error = 2;
     */
    error: string;
    /**
     * @generated from field: string revision_id = 3;
     */
    revisionId: string;
    /**
     * @generated from field: string change_id = 4;
     */
    changeId: string;
};
/**
 * Describes the message easylab.v1.SquashResponse.
 * Use `create(SquashResponseSchema)` to create a new message.
 */
export declare const SquashResponseSchema: GenMessage<SquashResponse>;
/**
 * @generated from message easylab.v1.RebaseManyRequest
 */
export type RebaseManyRequest = Message<"easylab.v1.RebaseManyRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: repeated string revs = 3;
     */
    revs: string[];
    /**
     * @generated from field: string onto = 4;
     */
    onto: string;
};
/**
 * Describes the message easylab.v1.RebaseManyRequest.
 * Use `create(RebaseManyRequestSchema)` to create a new message.
 */
export declare const RebaseManyRequestSchema: GenMessage<RebaseManyRequest>;
/**
 * @generated from message easylab.v1.RebaseManyResponse
 */
export type RebaseManyResponse = Message<"easylab.v1.RebaseManyResponse"> & {
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
 * Describes the message easylab.v1.RebaseManyResponse.
 * Use `create(RebaseManyResponseSchema)` to create a new message.
 */
export declare const RebaseManyResponseSchema: GenMessage<RebaseManyResponse>;
/**
 * Releases (write side; List/Download already exist).
 *
 * @generated from message easylab.v1.CreateReleaseRequest
 */
export type CreateReleaseRequest = Message<"easylab.v1.CreateReleaseRequest"> & {
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
    /**
     * @generated from field: string description = 5;
     */
    description: string;
    /**
     * @generated from field: bool draft = 6;
     */
    draft: boolean;
    /**
     * @generated from field: bool prerelease = 7;
     */
    prerelease: boolean;
    /**
     * @generated from field: string target = 8;
     */
    target: string;
};
/**
 * Describes the message easylab.v1.CreateReleaseRequest.
 * Use `create(CreateReleaseRequestSchema)` to create a new message.
 */
export declare const CreateReleaseRequestSchema: GenMessage<CreateReleaseRequest>;
/**
 * @generated from message easylab.v1.CreateReleaseResponse
 */
export type CreateReleaseResponse = Message<"easylab.v1.CreateReleaseResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string error = 2;
     */
    error: string;
    /**
     * @generated from field: string tag = 3;
     */
    tag: string;
};
/**
 * Describes the message easylab.v1.CreateReleaseResponse.
 * Use `create(CreateReleaseResponseSchema)` to create a new message.
 */
export declare const CreateReleaseResponseSchema: GenMessage<CreateReleaseResponse>;
/**
 * @generated from message easylab.v1.UploadReleaseAssetRequest
 */
export type UploadReleaseAssetRequest = Message<"easylab.v1.UploadReleaseAssetRequest"> & {
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
    /**
     * @generated from field: bytes data = 5;
     */
    data: Uint8Array;
    /**
     * @generated from field: string content_type = 6;
     */
    contentType: string;
};
/**
 * Describes the message easylab.v1.UploadReleaseAssetRequest.
 * Use `create(UploadReleaseAssetRequestSchema)` to create a new message.
 */
export declare const UploadReleaseAssetRequestSchema: GenMessage<UploadReleaseAssetRequest>;
/**
 * @generated from message easylab.v1.UploadReleaseAssetResponse
 */
export type UploadReleaseAssetResponse = Message<"easylab.v1.UploadReleaseAssetResponse"> & {
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
};
/**
 * Describes the message easylab.v1.UploadReleaseAssetResponse.
 * Use `create(UploadReleaseAssetResponseSchema)` to create a new message.
 */
export declare const UploadReleaseAssetResponseSchema: GenMessage<UploadReleaseAssetResponse>;
/**
 * @generated from message easylab.v1.DeleteReleaseRequest
 */
export type DeleteReleaseRequest = Message<"easylab.v1.DeleteReleaseRequest"> & {
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
};
/**
 * Describes the message easylab.v1.DeleteReleaseRequest.
 * Use `create(DeleteReleaseRequestSchema)` to create a new message.
 */
export declare const DeleteReleaseRequestSchema: GenMessage<DeleteReleaseRequest>;
/**
 * @generated from message easylab.v1.DeleteReleaseResponse
 */
export type DeleteReleaseResponse = Message<"easylab.v1.DeleteReleaseResponse"> & {
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
 * Describes the message easylab.v1.DeleteReleaseResponse.
 * Use `create(DeleteReleaseResponseSchema)` to create a new message.
 */
export declare const DeleteReleaseResponseSchema: GenMessage<DeleteReleaseResponse>;
/**
 * Merge requests (fork→upstream change requests).
 *
 * @generated from message easylab.v1.MergeRequest
 */
export type MergeRequest = Message<"easylab.v1.MergeRequest"> & {
    /**
     * @generated from field: string iid = 1;
     */
    iid: string;
    /**
     * @generated from field: string title = 2;
     */
    title: string;
    /**
     * @generated from field: string description = 3;
     */
    description: string;
    /**
     * @generated from field: string source = 4;
     */
    source: string;
    /**
     * @generated from field: string target = 5;
     */
    target: string;
    /**
     * @generated from field: string state = 6;
     */
    state: string;
    /**
     * @generated from field: string author = 7;
     */
    author: string;
    /**
     * @generated from field: string created_at = 8;
     */
    createdAt: string;
    /**
     * @generated from field: string updated_at = 9;
     */
    updatedAt: string;
};
/**
 * Describes the message easylab.v1.MergeRequest.
 * Use `create(MergeRequestSchema)` to create a new message.
 */
export declare const MergeRequestSchema: GenMessage<MergeRequest>;
/**
 * @generated from message easylab.v1.ListMergeRequestsRequest
 */
export type ListMergeRequestsRequest = Message<"easylab.v1.ListMergeRequestsRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: string state = 3;
     */
    state: string;
};
/**
 * Describes the message easylab.v1.ListMergeRequestsRequest.
 * Use `create(ListMergeRequestsRequestSchema)` to create a new message.
 */
export declare const ListMergeRequestsRequestSchema: GenMessage<ListMergeRequestsRequest>;
/**
 * @generated from message easylab.v1.ListMergeRequestsResponse
 */
export type ListMergeRequestsResponse = Message<"easylab.v1.ListMergeRequestsResponse"> & {
    /**
     * @generated from field: repeated easylab.v1.MergeRequest merge_requests = 1;
     */
    mergeRequests: MergeRequest[];
};
/**
 * Describes the message easylab.v1.ListMergeRequestsResponse.
 * Use `create(ListMergeRequestsResponseSchema)` to create a new message.
 */
export declare const ListMergeRequestsResponseSchema: GenMessage<ListMergeRequestsResponse>;
/**
 * @generated from message easylab.v1.GetMergeRequestRequest
 */
export type GetMergeRequestRequest = Message<"easylab.v1.GetMergeRequestRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: string iid = 3;
     */
    iid: string;
};
/**
 * Describes the message easylab.v1.GetMergeRequestRequest.
 * Use `create(GetMergeRequestRequestSchema)` to create a new message.
 */
export declare const GetMergeRequestRequestSchema: GenMessage<GetMergeRequestRequest>;
/**
 * @generated from message easylab.v1.GetMergeRequestResponse
 */
export type GetMergeRequestResponse = Message<"easylab.v1.GetMergeRequestResponse"> & {
    /**
     * @generated from field: easylab.v1.MergeRequest merge_request = 1;
     */
    mergeRequest?: MergeRequest | undefined;
};
/**
 * Describes the message easylab.v1.GetMergeRequestResponse.
 * Use `create(GetMergeRequestResponseSchema)` to create a new message.
 */
export declare const GetMergeRequestResponseSchema: GenMessage<GetMergeRequestResponse>;
/**
 * @generated from message easylab.v1.CreateMergeRequestRequest
 */
export type CreateMergeRequestRequest = Message<"easylab.v1.CreateMergeRequestRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: string title = 3;
     */
    title: string;
    /**
     * @generated from field: string description = 4;
     */
    description: string;
    /**
     * @generated from field: string source = 5;
     */
    source: string;
    /**
     * @generated from field: string target = 6;
     */
    target: string;
};
/**
 * Describes the message easylab.v1.CreateMergeRequestRequest.
 * Use `create(CreateMergeRequestRequestSchema)` to create a new message.
 */
export declare const CreateMergeRequestRequestSchema: GenMessage<CreateMergeRequestRequest>;
/**
 * @generated from message easylab.v1.CreateMergeRequestResponse
 */
export type CreateMergeRequestResponse = Message<"easylab.v1.CreateMergeRequestResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string error = 2;
     */
    error: string;
    /**
     * @generated from field: easylab.v1.MergeRequest merge_request = 3;
     */
    mergeRequest?: MergeRequest | undefined;
};
/**
 * Describes the message easylab.v1.CreateMergeRequestResponse.
 * Use `create(CreateMergeRequestResponseSchema)` to create a new message.
 */
export declare const CreateMergeRequestResponseSchema: GenMessage<CreateMergeRequestResponse>;
/**
 * @generated from message easylab.v1.UpdateMergeRequestRequest
 */
export type UpdateMergeRequestRequest = Message<"easylab.v1.UpdateMergeRequestRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: string iid = 3;
     */
    iid: string;
    /**
     * @generated from field: string state = 4;
     */
    state: string;
};
/**
 * Describes the message easylab.v1.UpdateMergeRequestRequest.
 * Use `create(UpdateMergeRequestRequestSchema)` to create a new message.
 */
export declare const UpdateMergeRequestRequestSchema: GenMessage<UpdateMergeRequestRequest>;
/**
 * @generated from message easylab.v1.UpdateMergeRequestResponse
 */
export type UpdateMergeRequestResponse = Message<"easylab.v1.UpdateMergeRequestResponse"> & {
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
 * Describes the message easylab.v1.UpdateMergeRequestResponse.
 * Use `create(UpdateMergeRequestResponseSchema)` to create a new message.
 */
export declare const UpdateMergeRequestResponseSchema: GenMessage<UpdateMergeRequestResponse>;
/**
 * @generated from message easylab.v1.MergeMergeRequestRequest
 */
export type MergeMergeRequestRequest = Message<"easylab.v1.MergeMergeRequestRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: string iid = 3;
     */
    iid: string;
};
/**
 * Describes the message easylab.v1.MergeMergeRequestRequest.
 * Use `create(MergeMergeRequestRequestSchema)` to create a new message.
 */
export declare const MergeMergeRequestRequestSchema: GenMessage<MergeMergeRequestRequest>;
/**
 * @generated from message easylab.v1.MergeMergeRequestResponse
 */
export type MergeMergeRequestResponse = Message<"easylab.v1.MergeMergeRequestResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string error = 2;
     */
    error: string;
    /**
     * @generated from field: string revision_id = 3;
     */
    revisionId: string;
    /**
     * @generated from field: string snapshot = 4;
     */
    snapshot: string;
    /**
     * @generated from field: int32 conflicts = 5;
     */
    conflicts: number;
};
/**
 * Describes the message easylab.v1.MergeMergeRequestResponse.
 * Use `create(MergeMergeRequestResponseSchema)` to create a new message.
 */
export declare const MergeMergeRequestResponseSchema: GenMessage<MergeMergeRequestResponse>;
/**
 * @generated from message easylab.v1.MergeReview
 */
export type MergeReview = Message<"easylab.v1.MergeReview"> & {
    /**
     * @generated from field: string reviewer = 1;
     */
    reviewer: string;
    /**
     * @generated from field: string state = 2;
     */
    state: string;
    /**
     * @generated from field: string body = 3;
     */
    body: string;
    /**
     * @generated from field: string created_at = 4;
     */
    createdAt: string;
};
/**
 * Describes the message easylab.v1.MergeReview.
 * Use `create(MergeReviewSchema)` to create a new message.
 */
export declare const MergeReviewSchema: GenMessage<MergeReview>;
/**
 * @generated from message easylab.v1.ListReviewsRequest
 */
export type ListReviewsRequest = Message<"easylab.v1.ListReviewsRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: string iid = 3;
     */
    iid: string;
};
/**
 * Describes the message easylab.v1.ListReviewsRequest.
 * Use `create(ListReviewsRequestSchema)` to create a new message.
 */
export declare const ListReviewsRequestSchema: GenMessage<ListReviewsRequest>;
/**
 * @generated from message easylab.v1.ListReviewsResponse
 */
export type ListReviewsResponse = Message<"easylab.v1.ListReviewsResponse"> & {
    /**
     * @generated from field: repeated easylab.v1.MergeReview reviews = 1;
     */
    reviews: MergeReview[];
};
/**
 * Describes the message easylab.v1.ListReviewsResponse.
 * Use `create(ListReviewsResponseSchema)` to create a new message.
 */
export declare const ListReviewsResponseSchema: GenMessage<ListReviewsResponse>;
/**
 * @generated from message easylab.v1.AddReviewRequest
 */
export type AddReviewRequest = Message<"easylab.v1.AddReviewRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: string iid = 3;
     */
    iid: string;
    /**
     * @generated from field: string state = 4;
     */
    state: string;
    /**
     * @generated from field: string body = 5;
     */
    body: string;
};
/**
 * Describes the message easylab.v1.AddReviewRequest.
 * Use `create(AddReviewRequestSchema)` to create a new message.
 */
export declare const AddReviewRequestSchema: GenMessage<AddReviewRequest>;
/**
 * @generated from message easylab.v1.AddReviewResponse
 */
export type AddReviewResponse = Message<"easylab.v1.AddReviewResponse"> & {
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
 * Describes the message easylab.v1.AddReviewResponse.
 * Use `create(AddReviewResponseSchema)` to create a new message.
 */
export declare const AddReviewResponseSchema: GenMessage<AddReviewResponse>;
/**
 * @generated from message easylab.v1.MergeComment
 */
export type MergeComment = Message<"easylab.v1.MergeComment"> & {
    /**
     * @generated from field: string author = 1;
     */
    author: string;
    /**
     * @generated from field: string body = 2;
     */
    body: string;
    /**
     * @generated from field: string path = 3;
     */
    path: string;
    /**
     * @generated from field: string created_at = 4;
     */
    createdAt: string;
};
/**
 * Describes the message easylab.v1.MergeComment.
 * Use `create(MergeCommentSchema)` to create a new message.
 */
export declare const MergeCommentSchema: GenMessage<MergeComment>;
/**
 * @generated from message easylab.v1.ListCommentsRequest
 */
export type ListCommentsRequest = Message<"easylab.v1.ListCommentsRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: string iid = 3;
     */
    iid: string;
};
/**
 * Describes the message easylab.v1.ListCommentsRequest.
 * Use `create(ListCommentsRequestSchema)` to create a new message.
 */
export declare const ListCommentsRequestSchema: GenMessage<ListCommentsRequest>;
/**
 * @generated from message easylab.v1.ListCommentsResponse
 */
export type ListCommentsResponse = Message<"easylab.v1.ListCommentsResponse"> & {
    /**
     * @generated from field: repeated easylab.v1.MergeComment comments = 1;
     */
    comments: MergeComment[];
};
/**
 * Describes the message easylab.v1.ListCommentsResponse.
 * Use `create(ListCommentsResponseSchema)` to create a new message.
 */
export declare const ListCommentsResponseSchema: GenMessage<ListCommentsResponse>;
/**
 * @generated from message easylab.v1.AddCommentRequest
 */
export type AddCommentRequest = Message<"easylab.v1.AddCommentRequest"> & {
    /**
     * @generated from field: string org = 1;
     */
    org: string;
    /**
     * @generated from field: string repo = 2;
     */
    repo: string;
    /**
     * @generated from field: string iid = 3;
     */
    iid: string;
    /**
     * @generated from field: string body = 4;
     */
    body: string;
    /**
     * @generated from field: string path = 5;
     */
    path: string;
};
/**
 * Describes the message easylab.v1.AddCommentRequest.
 * Use `create(AddCommentRequestSchema)` to create a new message.
 */
export declare const AddCommentRequestSchema: GenMessage<AddCommentRequest>;
/**
 * @generated from message easylab.v1.AddCommentResponse
 */
export type AddCommentResponse = Message<"easylab.v1.AddCommentResponse"> & {
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
 * Describes the message easylab.v1.AddCommentResponse.
 * Use `create(AddCommentResponseSchema)` to create a new message.
 */
export declare const AddCommentResponseSchema: GenMessage<AddCommentResponse>;
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
    /**
     * resolved runtime/profile (linux/windows/macos)
     *
     * @generated from field: string runtime = 16;
     */
    runtime: string;
    /**
     * Owning user id (sandboxes are owner-only). Empty when unknown/legacy.
     *
     * @generated from field: string owner = 17;
     */
    owner: string;
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
    /**
     * "" / "linux" (derive base+worker) or "windows"/"macos"
     *
     * @generated from field: string runtime = 2;
     */
    runtime: string;
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
    /**
     * Execution runtime/profile: "" or "linux" (default; base image + injected
     * worker), "windows"/"macos" (a VM-backed worker image served by easylab).
     *
     * @generated from field: string runtime = 10;
     */
    runtime: string;
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
 * @generated from message easylab.v1.RegisterExternalSandboxRequest
 */
export type RegisterExternalSandboxRequest = Message<"easylab.v1.RegisterExternalSandboxRequest"> & {
    /**
     * registry key for this sandbox
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * worker base URL (e.g. http://host:8080)
     *
     * @generated from field: string addr = 2;
     */
    addr: string;
    /**
     * one-time enrollment code (claim path; exclusive)
     *
     * @generated from field: string code = 3;
     */
    code: string;
    /**
     * pre-provisioned bearer token (alternative to code)
     *
     * @generated from field: string token = 4;
     */
    token: string;
    /**
     * optional workspace coords (empty = standalone)
     *
     * @generated from field: string org = 5;
     */
    org: string;
    /**
     * @generated from field: string repo = 6;
     */
    repo: string;
    /**
     * @generated from field: string branch = 7;
     */
    branch: string;
    /**
     * optional caller identity recorded for audit
     *
     * @generated from field: string owner = 8;
     */
    owner: string;
};
/**
 * Describes the message easylab.v1.RegisterExternalSandboxRequest.
 * Use `create(RegisterExternalSandboxRequestSchema)` to create a new message.
 */
export declare const RegisterExternalSandboxRequestSchema: GenMessage<RegisterExternalSandboxRequest>;
/**
 * @generated from message easylab.v1.RegisterExternalSandboxResponse
 */
export type RegisterExternalSandboxResponse = Message<"easylab.v1.RegisterExternalSandboxResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * the active bearer token (issued or echoed)
     *
     * @generated from field: string token = 2;
     */
    token: string;
    /**
     * @generated from field: string error = 3;
     */
    error: string;
};
/**
 * Describes the message easylab.v1.RegisterExternalSandboxResponse.
 * Use `create(RegisterExternalSandboxResponseSchema)` to create a new message.
 */
export declare const RegisterExternalSandboxResponseSchema: GenMessage<RegisterExternalSandboxResponse>;
/**
 * @generated from message easylab.v1.ListExternalSandboxesRequest
 */
export type ListExternalSandboxesRequest = Message<"easylab.v1.ListExternalSandboxesRequest"> & {};
/**
 * Describes the message easylab.v1.ListExternalSandboxesRequest.
 * Use `create(ListExternalSandboxesRequestSchema)` to create a new message.
 */
export declare const ListExternalSandboxesRequestSchema: GenMessage<ListExternalSandboxesRequest>;
/**
 * @generated from message easylab.v1.ExternalSandbox
 */
export type ExternalSandbox = Message<"easylab.v1.ExternalSandbox"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string addr = 2;
     */
    addr: string;
    /**
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
     * @generated from field: string owner = 6;
     */
    owner: string;
    /**
     * @generated from field: string synced_rev = 7;
     */
    syncedRev: string;
    /**
     * @generated from field: string synced_boot_id = 8;
     */
    syncedBootId: string;
    /**
     * worker answered Info with the stored token
     *
     * @generated from field: bool reachable = 9;
     */
    reachable: boolean;
    /**
     * @generated from field: string error = 10;
     */
    error: string;
};
/**
 * Describes the message easylab.v1.ExternalSandbox.
 * Use `create(ExternalSandboxSchema)` to create a new message.
 */
export declare const ExternalSandboxSchema: GenMessage<ExternalSandbox>;
/**
 * @generated from message easylab.v1.ListExternalSandboxesResponse
 */
export type ListExternalSandboxesResponse = Message<"easylab.v1.ListExternalSandboxesResponse"> & {
    /**
     * @generated from field: repeated easylab.v1.ExternalSandbox sandboxes = 1;
     */
    sandboxes: ExternalSandbox[];
};
/**
 * Describes the message easylab.v1.ListExternalSandboxesResponse.
 * Use `create(ListExternalSandboxesResponseSchema)` to create a new message.
 */
export declare const ListExternalSandboxesResponseSchema: GenMessage<ListExternalSandboxesResponse>;
/**
 * @generated from message easylab.v1.ReleaseExternalSandboxRequest
 */
export type ReleaseExternalSandboxRequest = Message<"easylab.v1.ReleaseExternalSandboxRequest"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
};
/**
 * Describes the message easylab.v1.ReleaseExternalSandboxRequest.
 * Use `create(ReleaseExternalSandboxRequestSchema)` to create a new message.
 */
export declare const ReleaseExternalSandboxRequestSchema: GenMessage<ReleaseExternalSandboxRequest>;
/**
 * @generated from message easylab.v1.ReleaseExternalSandboxResponse
 */
export type ReleaseExternalSandboxResponse = Message<"easylab.v1.ReleaseExternalSandboxResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * fresh one-time code for re-claiming ("" if not releasable)
     *
     * @generated from field: string code = 2;
     */
    code: string;
    /**
     * @generated from field: string error = 3;
     */
    error: string;
};
/**
 * Describes the message easylab.v1.ReleaseExternalSandboxResponse.
 * Use `create(ReleaseExternalSandboxResponseSchema)` to create a new message.
 */
export declare const ReleaseExternalSandboxResponseSchema: GenMessage<ReleaseExternalSandboxResponse>;
/**
 * @generated from message easylab.v1.Runner
 */
export type Runner = Message<"easylab.v1.Runner"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * os=linux|windows|macos, arch=, is_container=, toolchain=
     *
     * @generated from field: repeated string labels = 2;
     */
    labels: string[];
    /**
     * podman | host
     *
     * @generated from field: string backend = 3;
     */
    backend: string;
    /**
     * host runner dial address
     *
     * @generated from field: string addr = 4;
     */
    addr: string;
    /**
     * heartbeat unix millis
     *
     * @generated from field: int64 last_seen = 5;
     */
    lastSeen: bigint;
    /**
     * true = sandbox worker (not in CI pool)
     *
     * @generated from field: bool session_bound = 6;
     */
    sessionBound: boolean;
};
/**
 * Describes the message easylab.v1.Runner.
 * Use `create(RunnerSchema)` to create a new message.
 */
export declare const RunnerSchema: GenMessage<Runner>;
/**
 * @generated from message easylab.v1.Trigger
 */
export type Trigger = Message<"easylab.v1.Trigger"> & {
    /**
     * @generated from field: repeated string events = 1;
     */
    events: string[];
};
/**
 * Describes the message easylab.v1.Trigger.
 * Use `create(TriggerSchema)` to create a new message.
 */
export declare const TriggerSchema: GenMessage<Trigger>;
/**
 * @generated from message easylab.v1.Step
 */
export type Step = Message<"easylab.v1.Step"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string run = 2;
     */
    run: string;
    /**
     * @generated from field: map<string, string> env = 3;
     */
    env: {
        [key: string]: string;
    };
    /**
     * @generated from field: string working_directory = 4;
     */
    workingDirectory: string;
};
/**
 * Describes the message easylab.v1.Step.
 * Use `create(StepSchema)` to create a new message.
 */
export declare const StepSchema: GenMessage<Step>;
/**
 * @generated from message easylab.v1.Produce
 */
export type Produce = Message<"easylab.v1.Produce"> & {
    /**
     * oci-build | artifact-upload | publish-protocol
     *
     * @generated from field: string action = 1;
     */
    action: string;
    /**
     * oci-build: build context (default workspace root)
     *
     * @generated from field: string context = 2;
     */
    context: string;
    /**
     * oci-build: Dockerfile path (default root/Dockerfile)
     *
     * @generated from field: string dockerfile = 3;
     */
    dockerfile: string;
    /**
     * oci-build: image tag
     *
     * @generated from field: string tag = 4;
     */
    tag: string;
    /**
     * artifact-upload: glob path(s) relative to workspace
     *
     * @generated from field: string path = 5;
     */
    path: string;
    /**
     * artifact-upload: workspace | release | registry
     *
     * @generated from field: string destination = 6;
     */
    destination: string;
    /**
     * artifact-upload: release tag/ref
     *
     * @generated from field: string ref = 7;
     */
    ref: string;
    /**
     * publish-protocol: npm/pypi/cargo/...
     *
     * @generated from field: string protocol = 8;
     */
    protocol: string;
    /**
     * @generated from field: string name = 9;
     */
    name: string;
    /**
     * @generated from field: string version = 10;
     */
    version: string;
    /**
     * @generated from field: string file = 11;
     */
    file: string;
    /**
     * oci-build: inline Dockerfile/Containerfile body
     *
     * @generated from field: string containerfile = 12;
     */
    containerfile: string;
};
/**
 * Describes the message easylab.v1.Produce.
 * Use `create(ProduceSchema)` to create a new message.
 */
export declare const ProduceSchema: GenMessage<Produce>;
/**
 * @generated from message easylab.v1.JobDef
 */
export type JobDef = Message<"easylab.v1.JobDef"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * prerequisite job ids (DAG order)
     *
     * @generated from field: repeated string needs = 2;
     */
    needs: string[];
    /**
     * runner labels (os/arch/is_container/toolchain)
     *
     * @generated from field: repeated string runs_on = 3;
     */
    runsOn: string[];
    /**
     * explicit image override
     *
     * @generated from field: string container = 4;
     */
    container: string;
    /**
     * @generated from field: string working_directory = 5;
     */
    workingDirectory: string;
    /**
     * @generated from field: repeated easylab.v1.Step steps = 6;
     */
    steps: Step[];
    /**
     * @generated from field: easylab.v1.Produce produce = 7;
     */
    produce?: Produce | undefined;
};
/**
 * Describes the message easylab.v1.JobDef.
 * Use `create(JobDefSchema)` to create a new message.
 */
export declare const JobDefSchema: GenMessage<JobDef>;
/**
 * @generated from message easylab.v1.Workflow
 */
export type Workflow = Message<"easylab.v1.Workflow"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
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
     * @generated from field: easylab.v1.Trigger on = 6;
     */
    on?: Trigger | undefined;
    /**
     * @generated from field: repeated easylab.v1.JobDef jobs = 7;
     */
    jobs: JobDef[];
};
/**
 * Describes the message easylab.v1.Workflow.
 * Use `create(WorkflowSchema)` to create a new message.
 */
export declare const WorkflowSchema: GenMessage<Workflow>;
/**
 * @generated from message easylab.v1.JobInstance
 */
export type JobInstance = Message<"easylab.v1.JobInstance"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string def_id = 2;
     */
    defId: string;
    /**
     * pending | running | success | failure | cancelled
     *
     * @generated from field: string status = 3;
     */
    status: string;
    /**
     * @generated from field: string result = 4;
     */
    result: string;
};
/**
 * Describes the message easylab.v1.JobInstance.
 * Use `create(JobInstanceSchema)` to create a new message.
 */
export declare const JobInstanceSchema: GenMessage<JobInstance>;
/**
 * @generated from message easylab.v1.Run
 */
export type Run = Message<"easylab.v1.Run"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string workflow_id = 2;
     */
    workflowId: string;
    /**
     * pending | running | success | failure
     *
     * @generated from field: string status = 3;
     */
    status: string;
    /**
     * @generated from field: repeated easylab.v1.JobInstance jobs = 4;
     */
    jobs: JobInstance[];
    /**
     * @generated from field: string started_at = 5;
     */
    startedAt: string;
    /**
     * @generated from field: string finished_at = 6;
     */
    finishedAt: string;
};
/**
 * Describes the message easylab.v1.Run.
 * Use `create(RunSchema)` to create a new message.
 */
export declare const RunSchema: GenMessage<Run>;
/**
 * @generated from message easylab.v1.GetWorkflowRequest
 */
export type GetWorkflowRequest = Message<"easylab.v1.GetWorkflowRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message easylab.v1.GetWorkflowRequest.
 * Use `create(GetWorkflowRequestSchema)` to create a new message.
 */
export declare const GetWorkflowRequestSchema: GenMessage<GetWorkflowRequest>;
/**
 * @generated from message easylab.v1.GetWorkflowResponse
 */
export type GetWorkflowResponse = Message<"easylab.v1.GetWorkflowResponse"> & {
    /**
     * @generated from field: easylab.v1.Workflow workflow = 1;
     */
    workflow?: Workflow | undefined;
};
/**
 * Describes the message easylab.v1.GetWorkflowResponse.
 * Use `create(GetWorkflowResponseSchema)` to create a new message.
 */
export declare const GetWorkflowResponseSchema: GenMessage<GetWorkflowResponse>;
/**
 * @generated from message easylab.v1.CreateWorkflowRequest
 */
export type CreateWorkflowRequest = Message<"easylab.v1.CreateWorkflowRequest"> & {
    /**
     * @generated from field: easylab.v1.Workflow workflow = 1;
     */
    workflow?: Workflow | undefined;
};
/**
 * Describes the message easylab.v1.CreateWorkflowRequest.
 * Use `create(CreateWorkflowRequestSchema)` to create a new message.
 */
export declare const CreateWorkflowRequestSchema: GenMessage<CreateWorkflowRequest>;
/**
 * @generated from message easylab.v1.CreateWorkflowResponse
 */
export type CreateWorkflowResponse = Message<"easylab.v1.CreateWorkflowResponse"> & {
    /**
     * @generated from field: easylab.v1.Workflow workflow = 1;
     */
    workflow?: Workflow | undefined;
};
/**
 * Describes the message easylab.v1.CreateWorkflowResponse.
 * Use `create(CreateWorkflowResponseSchema)` to create a new message.
 */
export declare const CreateWorkflowResponseSchema: GenMessage<CreateWorkflowResponse>;
/**
 * @generated from message easylab.v1.ListWorkflowsRequest
 */
export type ListWorkflowsRequest = Message<"easylab.v1.ListWorkflowsRequest"> & {
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
 * Describes the message easylab.v1.ListWorkflowsRequest.
 * Use `create(ListWorkflowsRequestSchema)` to create a new message.
 */
export declare const ListWorkflowsRequestSchema: GenMessage<ListWorkflowsRequest>;
/**
 * @generated from message easylab.v1.ListWorkflowsResponse
 */
export type ListWorkflowsResponse = Message<"easylab.v1.ListWorkflowsResponse"> & {
    /**
     * @generated from field: repeated easylab.v1.Workflow workflows = 1;
     */
    workflows: Workflow[];
};
/**
 * Describes the message easylab.v1.ListWorkflowsResponse.
 * Use `create(ListWorkflowsResponseSchema)` to create a new message.
 */
export declare const ListWorkflowsResponseSchema: GenMessage<ListWorkflowsResponse>;
/**
 * @generated from message easylab.v1.TriggerRunRequest
 */
export type TriggerRunRequest = Message<"easylab.v1.TriggerRunRequest"> & {
    /**
     * @generated from field: string workflow_id = 1;
     */
    workflowId: string;
};
/**
 * Describes the message easylab.v1.TriggerRunRequest.
 * Use `create(TriggerRunRequestSchema)` to create a new message.
 */
export declare const TriggerRunRequestSchema: GenMessage<TriggerRunRequest>;
/**
 * @generated from message easylab.v1.TriggerRunResponse
 */
export type TriggerRunResponse = Message<"easylab.v1.TriggerRunResponse"> & {
    /**
     * @generated from field: easylab.v1.Run run = 1;
     */
    run?: Run | undefined;
};
/**
 * Describes the message easylab.v1.TriggerRunResponse.
 * Use `create(TriggerRunResponseSchema)` to create a new message.
 */
export declare const TriggerRunResponseSchema: GenMessage<TriggerRunResponse>;
/**
 * @generated from message easylab.v1.GetRunRequest
 */
export type GetRunRequest = Message<"easylab.v1.GetRunRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message easylab.v1.GetRunRequest.
 * Use `create(GetRunRequestSchema)` to create a new message.
 */
export declare const GetRunRequestSchema: GenMessage<GetRunRequest>;
/**
 * @generated from message easylab.v1.GetRunResponse
 */
export type GetRunResponse = Message<"easylab.v1.GetRunResponse"> & {
    /**
     * @generated from field: easylab.v1.Run run = 1;
     */
    run?: Run | undefined;
};
/**
 * Describes the message easylab.v1.GetRunResponse.
 * Use `create(GetRunResponseSchema)` to create a new message.
 */
export declare const GetRunResponseSchema: GenMessage<GetRunResponse>;
/**
 * @generated from message easylab.v1.ListRunsRequest
 */
export type ListRunsRequest = Message<"easylab.v1.ListRunsRequest"> & {
    /**
     * @generated from field: string workflow_id = 1;
     */
    workflowId: string;
};
/**
 * Describes the message easylab.v1.ListRunsRequest.
 * Use `create(ListRunsRequestSchema)` to create a new message.
 */
export declare const ListRunsRequestSchema: GenMessage<ListRunsRequest>;
/**
 * @generated from message easylab.v1.ListRunsResponse
 */
export type ListRunsResponse = Message<"easylab.v1.ListRunsResponse"> & {
    /**
     * @generated from field: repeated easylab.v1.Run runs = 1;
     */
    runs: Run[];
};
/**
 * Describes the message easylab.v1.ListRunsResponse.
 * Use `create(ListRunsResponseSchema)` to create a new message.
 */
export declare const ListRunsResponseSchema: GenMessage<ListRunsResponse>;
/**
 * @generated from message easylab.v1.RunJobLogRequest
 */
export type RunJobLogRequest = Message<"easylab.v1.RunJobLogRequest"> & {
    /**
     * @generated from field: string run_id = 1;
     */
    runId: string;
    /**
     * @generated from field: string job_id = 2;
     */
    jobId: string;
};
/**
 * Describes the message easylab.v1.RunJobLogRequest.
 * Use `create(RunJobLogRequestSchema)` to create a new message.
 */
export declare const RunJobLogRequestSchema: GenMessage<RunJobLogRequest>;
/**
 * @generated from message easylab.v1.RunJobLogResponse
 */
export type RunJobLogResponse = Message<"easylab.v1.RunJobLogResponse"> & {
    /**
     * @generated from field: string stream = 1;
     */
    stream: string;
    /**
     * @generated from field: string line = 2;
     */
    line: string;
};
/**
 * Describes the message easylab.v1.RunJobLogResponse.
 * Use `create(RunJobLogResponseSchema)` to create a new message.
 */
export declare const RunJobLogResponseSchema: GenMessage<RunJobLogResponse>;
/**
 * @generated from message easylab.v1.CancelRunRequest
 */
export type CancelRunRequest = Message<"easylab.v1.CancelRunRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message easylab.v1.CancelRunRequest.
 * Use `create(CancelRunRequestSchema)` to create a new message.
 */
export declare const CancelRunRequestSchema: GenMessage<CancelRunRequest>;
/**
 * @generated from message easylab.v1.CancelRunResponse
 */
export type CancelRunResponse = Message<"easylab.v1.CancelRunResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
};
/**
 * Describes the message easylab.v1.CancelRunResponse.
 * Use `create(CancelRunResponseSchema)` to create a new message.
 */
export declare const CancelRunResponseSchema: GenMessage<CancelRunResponse>;
/**
 * @generated from message easylab.v1.RegisterRunnerRequest
 */
export type RegisterRunnerRequest = Message<"easylab.v1.RegisterRunnerRequest"> & {
    /**
     * @generated from field: easylab.v1.Runner runner = 1;
     */
    runner?: Runner | undefined;
};
/**
 * Describes the message easylab.v1.RegisterRunnerRequest.
 * Use `create(RegisterRunnerRequestSchema)` to create a new message.
 */
export declare const RegisterRunnerRequestSchema: GenMessage<RegisterRunnerRequest>;
/**
 * @generated from message easylab.v1.RegisterRunnerResponse
 */
export type RegisterRunnerResponse = Message<"easylab.v1.RegisterRunnerResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
};
/**
 * Describes the message easylab.v1.RegisterRunnerResponse.
 * Use `create(RegisterRunnerResponseSchema)` to create a new message.
 */
export declare const RegisterRunnerResponseSchema: GenMessage<RegisterRunnerResponse>;
/**
 * @generated from message easylab.v1.ListRunnersRequest
 */
export type ListRunnersRequest = Message<"easylab.v1.ListRunnersRequest"> & {
    /**
     * @generated from field: bool session_bound = 1;
     */
    sessionBound: boolean;
};
/**
 * Describes the message easylab.v1.ListRunnersRequest.
 * Use `create(ListRunnersRequestSchema)` to create a new message.
 */
export declare const ListRunnersRequestSchema: GenMessage<ListRunnersRequest>;
/**
 * @generated from message easylab.v1.ListRunnersResponse
 */
export type ListRunnersResponse = Message<"easylab.v1.ListRunnersResponse"> & {
    /**
     * @generated from field: repeated easylab.v1.Runner runners = 1;
     */
    runners: Runner[];
};
/**
 * Describes the message easylab.v1.ListRunnersResponse.
 * Use `create(ListRunnersResponseSchema)` to create a new message.
 */
export declare const ListRunnersResponseSchema: GenMessage<ListRunnersResponse>;
/**
 * @generated from message easylab.v1.RunWorkflowFileRequest
 */
export type RunWorkflowFileRequest = Message<"easylab.v1.RunWorkflowFileRequest"> & {
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
     * '' = run every workflow in the file
     *
     * @generated from field: string name = 4;
     */
    name: string;
    /**
     * optional preset-arg overrides
     *
     * @generated from field: map<string, string> args = 5;
     */
    args: {
        [key: string]: string;
    };
};
/**
 * Describes the message easylab.v1.RunWorkflowFileRequest.
 * Use `create(RunWorkflowFileRequestSchema)` to create a new message.
 */
export declare const RunWorkflowFileRequestSchema: GenMessage<RunWorkflowFileRequest>;
/**
 * @generated from message easylab.v1.RunWorkflowFileResponse
 */
export type RunWorkflowFileResponse = Message<"easylab.v1.RunWorkflowFileResponse"> & {
    /**
     * one pending/running run per matched workflow
     *
     * @generated from field: repeated easylab.v1.Run runs = 1;
     */
    runs: Run[];
    /**
     * requested/unknown names not found
     *
     * @generated from field: repeated string skipped = 2;
     */
    skipped: string[];
    /**
     * @generated from field: string error = 3;
     */
    error: string;
};
/**
 * Describes the message easylab.v1.RunWorkflowFileResponse.
 * Use `create(RunWorkflowFileResponseSchema)` to create a new message.
 */
export declare const RunWorkflowFileResponseSchema: GenMessage<RunWorkflowFileResponse>;
/**
 * User is both the identity and the ownership boundary: a user owns
 * namespaces (and therefore repositories), holds tokens, and is bound to its
 * own abcp-agent tenant. Username is globally unique.
 *
 * @generated from message easylab.v1.User
 */
export type User = Message<"easylab.v1.User"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string username = 2;
     */
    username: string;
    /**
     * @generated from field: string display_name = 3;
     */
    displayName: string;
    /**
     * @generated from field: bool disabled = 4;
     */
    disabled: boolean;
    /**
     * @generated from field: string created_at = 5;
     */
    createdAt: string;
    /**
     * The bound abcp-agent tenant id (usually == username).
     *
     * @generated from field: string agent_tenant = 6;
     */
    agentTenant: string;
};
/**
 * Describes the message easylab.v1.User.
 * Use `create(UserSchema)` to create a new message.
 */
export declare const UserSchema: GenMessage<User>;
/**
 * @generated from message easylab.v1.CreateUserRequest
 */
export type CreateUserRequest = Message<"easylab.v1.CreateUserRequest"> & {
    /**
     * @generated from field: string username = 1;
     */
    username: string;
    /**
     * @generated from field: string display_name = 2;
     */
    displayName: string;
    /**
     * When true, also provision the matching abcp-agent tenant (AdminService)
     * and bind its bootstrap token to the user.
     *
     * @generated from field: bool provision_agent_tenant = 3;
     */
    provisionAgentTenant: boolean;
};
/**
 * Describes the message easylab.v1.CreateUserRequest.
 * Use `create(CreateUserRequestSchema)` to create a new message.
 */
export declare const CreateUserRequestSchema: GenMessage<CreateUserRequest>;
/**
 * @generated from message easylab.v1.CreateUserResponse
 */
export type CreateUserResponse = Message<"easylab.v1.CreateUserResponse"> & {
    /**
     * @generated from field: easylab.v1.User user = 1;
     */
    user?: User | undefined;
    /**
     * One-time plaintext write token of the new user.
     *
     * @generated from field: string token = 2;
     */
    token: string;
};
/**
 * Describes the message easylab.v1.CreateUserResponse.
 * Use `create(CreateUserResponseSchema)` to create a new message.
 */
export declare const CreateUserResponseSchema: GenMessage<CreateUserResponse>;
/**
 * @generated from message easylab.v1.GetUserRequest
 */
export type GetUserRequest = Message<"easylab.v1.GetUserRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message easylab.v1.GetUserRequest.
 * Use `create(GetUserRequestSchema)` to create a new message.
 */
export declare const GetUserRequestSchema: GenMessage<GetUserRequest>;
/**
 * @generated from message easylab.v1.GetUserResponse
 */
export type GetUserResponse = Message<"easylab.v1.GetUserResponse"> & {
    /**
     * @generated from field: easylab.v1.User user = 1;
     */
    user?: User | undefined;
};
/**
 * Describes the message easylab.v1.GetUserResponse.
 * Use `create(GetUserResponseSchema)` to create a new message.
 */
export declare const GetUserResponseSchema: GenMessage<GetUserResponse>;
/**
 * @generated from message easylab.v1.ListUsersRequest
 */
export type ListUsersRequest = Message<"easylab.v1.ListUsersRequest"> & {};
/**
 * Describes the message easylab.v1.ListUsersRequest.
 * Use `create(ListUsersRequestSchema)` to create a new message.
 */
export declare const ListUsersRequestSchema: GenMessage<ListUsersRequest>;
/**
 * @generated from message easylab.v1.ListUsersResponse
 */
export type ListUsersResponse = Message<"easylab.v1.ListUsersResponse"> & {
    /**
     * @generated from field: repeated easylab.v1.User users = 1;
     */
    users: User[];
};
/**
 * Describes the message easylab.v1.ListUsersResponse.
 * Use `create(ListUsersResponseSchema)` to create a new message.
 */
export declare const ListUsersResponseSchema: GenMessage<ListUsersResponse>;
/**
 * @generated from message easylab.v1.UpdateUserRequest
 */
export type UpdateUserRequest = Message<"easylab.v1.UpdateUserRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: optional string display_name = 2;
     */
    displayName?: string | undefined;
    /**
     * @generated from field: optional bool disabled = 3;
     */
    disabled?: boolean | undefined;
};
/**
 * Describes the message easylab.v1.UpdateUserRequest.
 * Use `create(UpdateUserRequestSchema)` to create a new message.
 */
export declare const UpdateUserRequestSchema: GenMessage<UpdateUserRequest>;
/**
 * @generated from message easylab.v1.UpdateUserResponse
 */
export type UpdateUserResponse = Message<"easylab.v1.UpdateUserResponse"> & {
    /**
     * @generated from field: easylab.v1.User user = 1;
     */
    user?: User | undefined;
};
/**
 * Describes the message easylab.v1.UpdateUserResponse.
 * Use `create(UpdateUserResponseSchema)` to create a new message.
 */
export declare const UpdateUserResponseSchema: GenMessage<UpdateUserResponse>;
/**
 * @generated from message easylab.v1.DeleteUserRequest
 */
export type DeleteUserRequest = Message<"easylab.v1.DeleteUserRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message easylab.v1.DeleteUserRequest.
 * Use `create(DeleteUserRequestSchema)` to create a new message.
 */
export declare const DeleteUserRequestSchema: GenMessage<DeleteUserRequest>;
/**
 * @generated from message easylab.v1.DeleteUserResponse
 */
export type DeleteUserResponse = Message<"easylab.v1.DeleteUserResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * true when the bound abcp-agent tenant was also deleted.
     *
     * @generated from field: bool agent_deleted = 2;
     */
    agentDeleted: boolean;
    /**
     * @generated from field: string error = 3;
     */
    error: string;
};
/**
 * Describes the message easylab.v1.DeleteUserResponse.
 * Use `create(DeleteUserResponseSchema)` to create a new message.
 */
export declare const DeleteUserResponseSchema: GenMessage<DeleteUserResponse>;
/**
 * @generated from message easylab.v1.UserToken
 */
export type UserToken = Message<"easylab.v1.UserToken"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string username = 2;
     */
    username: string;
    /**
     * @generated from field: string created_at = 3;
     */
    createdAt: string;
};
/**
 * Describes the message easylab.v1.UserToken.
 * Use `create(UserTokenSchema)` to create a new message.
 */
export declare const UserTokenSchema: GenMessage<UserToken>;
/**
 * @generated from message easylab.v1.ListUserTokensRequest
 */
export type ListUserTokensRequest = Message<"easylab.v1.ListUserTokensRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
};
/**
 * Describes the message easylab.v1.ListUserTokensRequest.
 * Use `create(ListUserTokensRequestSchema)` to create a new message.
 */
export declare const ListUserTokensRequestSchema: GenMessage<ListUserTokensRequest>;
/**
 * @generated from message easylab.v1.ListUserTokensResponse
 */
export type ListUserTokensResponse = Message<"easylab.v1.ListUserTokensResponse"> & {
    /**
     * @generated from field: repeated easylab.v1.UserToken tokens = 1;
     */
    tokens: UserToken[];
};
/**
 * Describes the message easylab.v1.ListUserTokensResponse.
 * Use `create(ListUserTokensResponseSchema)` to create a new message.
 */
export declare const ListUserTokensResponseSchema: GenMessage<ListUserTokensResponse>;
/**
 * @generated from message easylab.v1.CreateUserTokenRequest
 */
export type CreateUserTokenRequest = Message<"easylab.v1.CreateUserTokenRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * Optional client-chosen token; empty mints a random one.
     *
     * @generated from field: string token = 2;
     */
    token: string;
};
/**
 * Describes the message easylab.v1.CreateUserTokenRequest.
 * Use `create(CreateUserTokenRequestSchema)` to create a new message.
 */
export declare const CreateUserTokenRequestSchema: GenMessage<CreateUserTokenRequest>;
/**
 * @generated from message easylab.v1.CreateUserTokenResponse
 */
export type CreateUserTokenResponse = Message<"easylab.v1.CreateUserTokenResponse"> & {
    /**
     * @generated from field: string token = 1;
     */
    token: string;
};
/**
 * Describes the message easylab.v1.CreateUserTokenResponse.
 * Use `create(CreateUserTokenResponseSchema)` to create a new message.
 */
export declare const CreateUserTokenResponseSchema: GenMessage<CreateUserTokenResponse>;
/**
 * @generated from message easylab.v1.DeleteUserTokenRequest
 */
export type DeleteUserTokenRequest = Message<"easylab.v1.DeleteUserTokenRequest"> & {
    /**
     * @generated from field: string token = 1;
     */
    token: string;
};
/**
 * Describes the message easylab.v1.DeleteUserTokenRequest.
 * Use `create(DeleteUserTokenRequestSchema)` to create a new message.
 */
export declare const DeleteUserTokenRequestSchema: GenMessage<DeleteUserTokenRequest>;
/**
 * @generated from message easylab.v1.DeleteUserTokenResponse
 */
export type DeleteUserTokenResponse = Message<"easylab.v1.DeleteUserTokenResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
};
/**
 * Describes the message easylab.v1.DeleteUserTokenResponse.
 * Use `create(DeleteUserTokenResponseSchema)` to create a new message.
 */
export declare const DeleteUserTokenResponseSchema: GenMessage<DeleteUserTokenResponse>;
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
    /**
     * ---- repo metadata / refs / members (REST removal) ----
     *
     * @generated from rpc easylab.v1.LabService.UpdateRepo
     */
    updateRepo: {
        methodKind: "unary";
        input: typeof UpdateRepoRequestSchema;
        output: typeof UpdateRepoResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.SetTag
     */
    setTag: {
        methodKind: "unary";
        input: typeof SetTagRequestSchema;
        output: typeof SetTagResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.DeleteTag
     */
    deleteTag: {
        methodKind: "unary";
        input: typeof DeleteTagRequestSchema;
        output: typeof DeleteTagResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.WriteFiles
     */
    writeFiles: {
        methodKind: "unary";
        input: typeof WriteFilesRequestSchema;
        output: typeof WriteFilesResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.Drop
     */
    drop: {
        methodKind: "unary";
        input: typeof DropRequestSchema;
        output: typeof DropResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.Revert
     */
    revert: {
        methodKind: "unary";
        input: typeof RevertRequestSchema;
        output: typeof RevertResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.Resolve
     */
    resolve: {
        methodKind: "unary";
        input: typeof ResolveRequestSchema;
        output: typeof ResolveResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.Squash
     */
    squash: {
        methodKind: "unary";
        input: typeof SquashRequestSchema;
        output: typeof SquashResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.RebaseMany
     */
    rebaseMany: {
        methodKind: "unary";
        input: typeof RebaseManyRequestSchema;
        output: typeof RebaseManyResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.CreateRelease
     */
    createRelease: {
        methodKind: "unary";
        input: typeof CreateReleaseRequestSchema;
        output: typeof CreateReleaseResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.DeleteRelease
     */
    deleteRelease: {
        methodKind: "unary";
        input: typeof DeleteReleaseRequestSchema;
        output: typeof DeleteReleaseResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.UploadReleaseAsset
     */
    uploadReleaseAsset: {
        methodKind: "unary";
        input: typeof UploadReleaseAssetRequestSchema;
        output: typeof UploadReleaseAssetResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.ListRepoMembers
     */
    listRepoMembers: {
        methodKind: "unary";
        input: typeof ListRepoMembersRequestSchema;
        output: typeof ListRepoMembersResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.SetRepoMember
     */
    setRepoMember: {
        methodKind: "unary";
        input: typeof SetRepoMemberRequestSchema;
        output: typeof SetRepoMemberResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.RemoveRepoMember
     */
    removeRepoMember: {
        methodKind: "unary";
        input: typeof RemoveRepoMemberRequestSchema;
        output: typeof RemoveRepoMemberResponseSchema;
    };
    /**
     * ---- merge requests (fork→upstream change requests) ----
     *
     * @generated from rpc easylab.v1.LabService.ListMergeRequests
     */
    listMergeRequests: {
        methodKind: "unary";
        input: typeof ListMergeRequestsRequestSchema;
        output: typeof ListMergeRequestsResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.GetMergeRequest
     */
    getMergeRequest: {
        methodKind: "unary";
        input: typeof GetMergeRequestRequestSchema;
        output: typeof GetMergeRequestResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.CreateMergeRequest
     */
    createMergeRequest: {
        methodKind: "unary";
        input: typeof CreateMergeRequestRequestSchema;
        output: typeof CreateMergeRequestResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.UpdateMergeRequest
     */
    updateMergeRequest: {
        methodKind: "unary";
        input: typeof UpdateMergeRequestRequestSchema;
        output: typeof UpdateMergeRequestResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.MergeMergeRequest
     */
    mergeMergeRequest: {
        methodKind: "unary";
        input: typeof MergeMergeRequestRequestSchema;
        output: typeof MergeMergeRequestResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.ListReviews
     */
    listReviews: {
        methodKind: "unary";
        input: typeof ListReviewsRequestSchema;
        output: typeof ListReviewsResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.AddReview
     */
    addReview: {
        methodKind: "unary";
        input: typeof AddReviewRequestSchema;
        output: typeof AddReviewResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.ListComments
     */
    listComments: {
        methodKind: "unary";
        input: typeof ListCommentsRequestSchema;
        output: typeof ListCommentsResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.LabService.AddComment
     */
    addComment: {
        methodKind: "unary";
        input: typeof AddCommentRequestSchema;
        output: typeof AddCommentResponseSchema;
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
    /**
     * SetPackageVisibility flips a package's visibility (public|private). Requires
     * maintainer+ on the package's scope (mapped repository, else owning user).
     *
     * @generated from rpc easylab.v1.RegistryService.SetPackageVisibility
     */
    setPackageVisibility: {
        methodKind: "unary";
        input: typeof SetPackageVisibilityRequestSchema;
        output: typeof SetPackageVisibilityResponseSchema;
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
    /**
     * RegisterExternalSandbox adopts an externally-run worker (not launched by
     * easylab). It either claims the worker with its one-time enrollment code
     * (exclusive; the worker then issues a bearer token), or accepts a token
     * already provisioned on the worker. easylab persists the token + address so
     * its worker passthroughs keep working across restarts.
     *
     * @generated from rpc easylab.v1.SandboxService.RegisterExternalSandbox
     */
    registerExternalSandbox: {
        methodKind: "unary";
        input: typeof RegisterExternalSandboxRequestSchema;
        output: typeof RegisterExternalSandboxResponseSchema;
    };
    /**
     * ListExternalSandboxes returns the externally-registered workers (mode =
     * external), including address and owner — managed sandboxes are excluded.
     *
     * @generated from rpc easylab.v1.SandboxService.ListExternalSandboxes
     */
    listExternalSandboxes: {
        methodKind: "unary";
        input: typeof ListExternalSandboxesRequestSchema;
        output: typeof ListExternalSandboxesResponseSchema;
    };
    /**
     * ReleaseExternalSandbox revokes easylab's token on the worker and returns
     * the worker to the claimable state with a fresh one-time code. After a
     * release any caller presenting the new code may claim it. Managed sandboxes
     * cannot be released.
     *
     * @generated from rpc easylab.v1.SandboxService.ReleaseExternalSandbox
     */
    releaseExternalSandbox: {
        methodKind: "unary";
        input: typeof ReleaseExternalSandboxRequestSchema;
        output: typeof ReleaseExternalSandboxResponseSchema;
    };
}>;
/**
 * @generated from service easylab.v1.WorkflowService
 */
export declare const WorkflowService: GenService<{
    /**
     * @generated from rpc easylab.v1.WorkflowService.CreateWorkflow
     */
    createWorkflow: {
        methodKind: "unary";
        input: typeof CreateWorkflowRequestSchema;
        output: typeof CreateWorkflowResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.WorkflowService.GetWorkflow
     */
    getWorkflow: {
        methodKind: "unary";
        input: typeof GetWorkflowRequestSchema;
        output: typeof GetWorkflowResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.WorkflowService.ListWorkflows
     */
    listWorkflows: {
        methodKind: "unary";
        input: typeof ListWorkflowsRequestSchema;
        output: typeof ListWorkflowsResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.WorkflowService.TriggerRun
     */
    triggerRun: {
        methodKind: "unary";
        input: typeof TriggerRunRequestSchema;
        output: typeof TriggerRunResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.WorkflowService.GetRun
     */
    getRun: {
        methodKind: "unary";
        input: typeof GetRunRequestSchema;
        output: typeof GetRunResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.WorkflowService.ListRuns
     */
    listRuns: {
        methodKind: "unary";
        input: typeof ListRunsRequestSchema;
        output: typeof ListRunsResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.WorkflowService.RunJobLog
     */
    runJobLog: {
        methodKind: "server_streaming";
        input: typeof RunJobLogRequestSchema;
        output: typeof RunJobLogResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.WorkflowService.CancelRun
     */
    cancelRun: {
        methodKind: "unary";
        input: typeof CancelRunRequestSchema;
        output: typeof CancelRunResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.WorkflowService.RegisterRunner
     */
    registerRunner: {
        methodKind: "unary";
        input: typeof RegisterRunnerRequestSchema;
        output: typeof RegisterRunnerResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.WorkflowService.ListRunners
     */
    listRunners: {
        methodKind: "unary";
        input: typeof ListRunnersRequestSchema;
        output: typeof ListRunnersResponseSchema;
    };
    /**
     * RunWorkflowFile loads .easylab/workflows.yaml from the branch tree and runs
     * the named workflow (or all when name is empty). Asynchronous: returns the
     * created runs (pending/running); poll GetRun / stream RunJobLog.
     *
     * @generated from rpc easylab.v1.WorkflowService.RunWorkflowFile
     */
    runWorkflowFile: {
        methodKind: "unary";
        input: typeof RunWorkflowFileRequestSchema;
        output: typeof RunWorkflowFileResponseSchema;
    };
}>;
/**
 * UserService is the user administration surface. Create/Update/Delete and
 * token minting require the admin credential (EASYLAB_ADMIN_TOKEN); reads
 * require an authenticated caller.
 *
 * @generated from service easylab.v1.UserService
 */
export declare const UserService: GenService<{
    /**
     * @generated from rpc easylab.v1.UserService.CreateUser
     */
    createUser: {
        methodKind: "unary";
        input: typeof CreateUserRequestSchema;
        output: typeof CreateUserResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.UserService.GetUser
     */
    getUser: {
        methodKind: "unary";
        input: typeof GetUserRequestSchema;
        output: typeof GetUserResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.UserService.ListUsers
     */
    listUsers: {
        methodKind: "unary";
        input: typeof ListUsersRequestSchema;
        output: typeof ListUsersResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.UserService.UpdateUser
     */
    updateUser: {
        methodKind: "unary";
        input: typeof UpdateUserRequestSchema;
        output: typeof UpdateUserResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.UserService.DeleteUser
     */
    deleteUser: {
        methodKind: "unary";
        input: typeof DeleteUserRequestSchema;
        output: typeof DeleteUserResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.UserService.ListUserTokens
     */
    listUserTokens: {
        methodKind: "unary";
        input: typeof ListUserTokensRequestSchema;
        output: typeof ListUserTokensResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.UserService.CreateUserToken
     */
    createUserToken: {
        methodKind: "unary";
        input: typeof CreateUserTokenRequestSchema;
        output: typeof CreateUserTokenResponseSchema;
    };
    /**
     * @generated from rpc easylab.v1.UserService.DeleteUserToken
     */
    deleteUserToken: {
        methodKind: "unary";
        input: typeof DeleteUserTokenRequestSchema;
        output: typeof DeleteUserTokenResponseSchema;
    };
}>;
