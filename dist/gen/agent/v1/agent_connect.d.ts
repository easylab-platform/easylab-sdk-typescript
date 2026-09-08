/**
 * AgentService is the session-backend API.
 *
 * @generated from service agent.v1.AgentService
 */
export declare const AgentService: {
    readonly typeName: "agent.v1.AgentService";
    readonly methods: {
        /**
         * @generated from rpc agent.v1.AgentService.Health
         */
        readonly health: {
            readonly name: "Health";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.ListSessions
         */
        readonly listSessions: {
            readonly name: "ListSessions";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.CreateSession
         */
        readonly createSession: {
            readonly name: "CreateSession";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.GetSession
         */
        readonly getSession: {
            readonly name: "GetSession";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.DeleteSession
         */
        readonly deleteSession: {
            readonly name: "DeleteSession";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.ListMessages
         */
        readonly listMessages: {
            readonly name: "ListMessages";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.Prompt
         */
        readonly prompt: {
            readonly name: "Prompt";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.WatchSession
         */
        readonly watchSession: {
            readonly name: "WatchSession";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.Fork
         */
        readonly fork: {
            readonly name: "Fork";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.Rename
         */
        readonly rename: {
            readonly name: "Rename";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.SetModel
         */
        readonly setModel: {
            readonly name: "SetModel";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.Undo
         */
        readonly undo: {
            readonly name: "Undo";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.State
         */
        readonly state: {
            readonly name: "State";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.Mailbox
         */
        readonly mailbox: {
            readonly name: "Mailbox";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.UpdateSettings
         */
        readonly updateSettings: {
            readonly name: "UpdateSettings";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.Interrupt
         */
        readonly interrupt: {
            readonly name: "Interrupt";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.Compact
         */
        readonly compact: {
            readonly name: "Compact";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.ListProviders
         */
        readonly listProviders: {
            readonly name: "ListProviders";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.ListProvidersCatalog
         */
        readonly listProvidersCatalog: {
            readonly name: "ListProvidersCatalog";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.RegisterProvider
         */
        readonly registerProvider: {
            readonly name: "RegisterProvider";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.DeleteProvider
         */
        readonly deleteProvider: {
            readonly name: "DeleteProvider";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.TestProvider
         */
        readonly testProvider: {
            readonly name: "TestProvider";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.ListModels
         */
        readonly listModels: {
            readonly name: "ListModels";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.ListPresets
         */
        readonly listPresets: {
            readonly name: "ListPresets";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.UpsertPreset
         */
        readonly upsertPreset: {
            readonly name: "UpsertPreset";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.DeletePreset
         */
        readonly deletePreset: {
            readonly name: "DeletePreset";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.PreviewPreset
         */
        readonly previewPreset: {
            readonly name: "PreviewPreset";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.GetConfig
         */
        readonly getConfig: {
            readonly name: "GetConfig";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.SetConfig
         */
        readonly setConfig: {
            readonly name: "SetConfig";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.ListTools
         */
        readonly listTools: {
            readonly name: "ListTools";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.GetToolConfig
         */
        readonly getToolConfig: {
            readonly name: "GetToolConfig";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.SetToolConfig
         */
        readonly setToolConfig: {
            readonly name: "SetToolConfig";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.SetExtensionConfig
         */
        readonly setExtensionConfig: {
            readonly name: "SetExtensionConfig";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.UploadFile
         */
        readonly uploadFile: {
            readonly name: "UploadFile";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.IngestFile
         */
        readonly ingestFile: {
            readonly name: "IngestFile";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.GetFile
         */
        readonly getFile: {
            readonly name: "GetFile";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.GetFileMeta
         */
        readonly getFileMeta: {
            readonly name: "GetFileMeta";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * @generated from rpc agent.v1.AgentService.GetAgentConfig
         */
        readonly getAgentConfig: {
            readonly name: "GetAgentConfig";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
    };
};
