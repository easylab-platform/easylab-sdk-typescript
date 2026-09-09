/**
 * LabService covers the revision-native repo + filesystem surface.
 *
 * @generated from service easylab.v1.LabService
 */
export declare const LabService: {
    readonly typeName: "easylab.v1.LabService";
    readonly methods: {
        /**
         * @generated from rpc easylab.v1.LabService.Health
         */
        readonly health: {
            readonly name: "Health";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.LabService.Status
         */
        readonly status: {
            readonly name: "Status";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.LabService.ListRepos
         */
        readonly listRepos: {
            readonly name: "ListRepos";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.LabService.CreateRepo
         */
        readonly createRepo: {
            readonly name: "CreateRepo";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.LabService.DeleteRepo
         */
        readonly deleteRepo: {
            readonly name: "DeleteRepo";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.LabService.EnsureRepo
         */
        readonly ensureRepo: {
            readonly name: "EnsureRepo";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.LabService.EnsureOrg
         */
        readonly ensureOrg: {
            readonly name: "EnsureOrg";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.LabService.ForkRepo
         */
        readonly forkRepo: {
            readonly name: "ForkRepo";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.LabService.CloneRepo
         */
        readonly cloneRepo: {
            readonly name: "CloneRepo";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.LabService.Tree
         */
        readonly tree: {
            readonly name: "Tree";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.LabService.ReadBlob
         */
        readonly readBlob: {
            readonly name: "ReadBlob";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.LabService.WriteBlob
         */
        readonly writeBlob: {
            readonly name: "WriteBlob";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.LabService.Log
         */
        readonly log: {
            readonly name: "Log";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.LabService.Tags
         */
        readonly tags: {
            readonly name: "Tags";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.LabService.Branches
         */
        readonly branches: {
            readonly name: "Branches";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.LabService.Revisions
         */
        readonly revisions: {
            readonly name: "Revisions";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.LabService.Diff
         */
        readonly diff: {
            readonly name: "Diff";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.LabService.Blame
         */
        readonly blame: {
            readonly name: "Blame";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.LabService.DeleteBranch
         */
        readonly deleteBranch: {
            readonly name: "DeleteBranch";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.LabService.CreateBranch
         */
        readonly createBranch: {
            readonly name: "CreateBranch";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.LabService.FileHistory
         */
        readonly fileHistory: {
            readonly name: "FileHistory";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.LabService.Search
         */
        readonly search: {
            readonly name: "Search";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.LabService.Graph
         */
        readonly graph: {
            readonly name: "Graph";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.LabService.Compare
         */
        readonly compare: {
            readonly name: "Compare";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.LabService.Rebase
         */
        readonly rebase: {
            readonly name: "Rebase";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * ---- Lab additions (REST removals) ----
         *
         * @generated from rpc easylab.v1.LabService.DeleteOrg
         */
        readonly deleteOrg: {
            readonly name: "DeleteOrg";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * Releases (backed by the generic artifact registry; format "generic").
         *
         * @generated from rpc easylab.v1.LabService.ListReleases
         */
        readonly listReleases: {
            readonly name: "ListReleases";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.LabService.DownloadReleaseAsset
         */
        readonly downloadReleaseAsset: {
            readonly name: "DownloadReleaseAsset";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * Source archive tarball for a rev/tag.
         *
         * @generated from rpc easylab.v1.LabService.Archive
         */
        readonly archive: {
            readonly name: "Archive";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * Mirror (persistent push/pull mirrors on a repo).
         *
         * @generated from rpc easylab.v1.LabService.GetMirror
         */
        readonly getMirror: {
            readonly name: "GetMirror";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.LabService.SetMirror
         */
        readonly setMirror: {
            readonly name: "SetMirror";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.LabService.DeleteMirror
         */
        readonly deleteMirror: {
            readonly name: "DeleteMirror";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.LabService.SyncMirror
         */
        readonly syncMirror: {
            readonly name: "SyncMirror";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
    };
};
/**
 * OpsService covers the dev/deploy surface (services, sandboxes, builds).
 *
 * @generated from service easylab.v1.OpsService
 */
export declare const OpsService: {
    readonly typeName: "easylab.v1.OpsService";
    readonly methods: {
        /**
         * @generated from rpc easylab.v1.OpsService.OpsStatus
         */
        readonly opsStatus: {
            readonly name: "OpsStatus";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.OpsService.ListNamespaces
         */
        readonly listNamespaces: {
            readonly name: "ListNamespaces";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.OpsService.ListServices
         */
        readonly listServices: {
            readonly name: "ListServices";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.OpsService.GetService
         */
        readonly getService: {
            readonly name: "GetService";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.OpsService.LaunchService
         */
        readonly launchService: {
            readonly name: "LaunchService";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.OpsService.DeleteService
         */
        readonly deleteService: {
            readonly name: "DeleteService";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.OpsService.ScaleService
         */
        readonly scaleService: {
            readonly name: "ScaleService";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.OpsService.SandboxExec
         */
        readonly sandboxExec: {
            readonly name: "SandboxExec";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.OpsService.SandboxRead
         */
        readonly sandboxRead: {
            readonly name: "SandboxRead";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.OpsService.SandboxWrite
         */
        readonly sandboxWrite: {
            readonly name: "SandboxWrite";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.OpsService.SandboxJobKill
         */
        readonly sandboxJobKill: {
            readonly name: "SandboxJobKill";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.OpsService.ListTasks
         */
        readonly listTasks: {
            readonly name: "ListTasks";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.OpsService.GetTask
         */
        readonly getTask: {
            readonly name: "GetTask";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.OpsService.Build
         */
        readonly build: {
            readonly name: "Build";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.OpsService.TaskLog
         */
        readonly taskLog: {
            readonly name: "TaskLog";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.OpsService.Sync
         */
        readonly sync: {
            readonly name: "Sync";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
    };
};
/**
 * RegistryService covers the package registry surface.
 *
 * @generated from service easylab.v1.RegistryService
 */
export declare const RegistryService: {
    readonly typeName: "easylab.v1.RegistryService";
    readonly methods: {
        /**
         * @generated from rpc easylab.v1.RegistryService.ListPackageTypes
         */
        readonly listPackageTypes: {
            readonly name: "ListPackageTypes";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.RegistryService.ListPackages
         */
        readonly listPackages: {
            readonly name: "ListPackages";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.RegistryService.PackageVersions
         */
        readonly packageVersions: {
            readonly name: "PackageVersions";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.RegistryService.DeletePackage
         */
        readonly deletePackage: {
            readonly name: "DeletePackage";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.RegistryService.DeletePackageVersion
         */
        readonly deletePackageVersion: {
            readonly name: "DeletePackageVersion";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.RegistryService.ListPublishSpecs
         */
        readonly listPublishSpecs: {
            readonly name: "ListPublishSpecs";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.RegistryService.OCICatalog
         */
        readonly oCICatalog: {
            readonly name: "OCICatalog";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
    };
};
/**
 * SandboxService fronts every worker.v1 API for the UI/console and owns the
 * sandbox lifecycle (derived image + launch + sync + registry table).
 *
 * @generated from service easylab.v1.SandboxService
 */
export declare const SandboxService: {
    readonly typeName: "easylab.v1.SandboxService";
    readonly methods: {
        /**
         * lifecycle
         *
         * @generated from rpc easylab.v1.SandboxService.ListSandboxes
         */
        readonly listSandboxes: {
            readonly name: "ListSandboxes";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.SandboxService.GetSandbox
         */
        readonly getSandbox: {
            readonly name: "GetSandbox";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.SandboxService.EnsureSandboxImage
         */
        readonly ensureSandboxImage: {
            readonly name: "EnsureSandboxImage";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.SandboxService.LaunchSandbox
         */
        readonly launchSandbox: {
            readonly name: "LaunchSandbox";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.SandboxService.DeleteSandbox
         */
        readonly deleteSandbox: {
            readonly name: "DeleteSandbox";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * worker passthroughs (sandbox routing + worker.v1 payloads)
         *
         * @generated from rpc easylab.v1.SandboxService.Execute
         */
        readonly execute: {
            readonly name: "Execute";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.SandboxService.ListJobs
         */
        readonly listJobs: {
            readonly name: "ListJobs";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.SandboxService.JobOutput
         */
        readonly jobOutput: {
            readonly name: "JobOutput";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.SandboxService.WatchJob
         */
        readonly watchJob: {
            readonly name: "WatchJob";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.SandboxService.JobWait
         */
        readonly jobWait: {
            readonly name: "JobWait";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.SandboxService.JobStdin
         */
        readonly jobStdin: {
            readonly name: "JobStdin";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.SandboxService.JobKill
         */
        readonly jobKill: {
            readonly name: "JobKill";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.SandboxService.FileRead
         */
        readonly fileRead: {
            readonly name: "FileRead";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * SyncWorkspace pushes the repo tree at rev into the sandbox and records
         * rev + worker boot id in the registry (single rev-coherence write).
         *
         * @generated from rpc easylab.v1.SandboxService.SyncWorkspace
         */
        readonly syncWorkspace: {
            readonly name: "SyncWorkspace";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.SandboxService.FileWrite
         */
        readonly fileWrite: {
            readonly name: "FileWrite";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc easylab.v1.SandboxService.FileList
         */
        readonly fileList: {
            readonly name: "FileList";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
    };
};
