import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Value } from "@bufbuild/protobuf/wkt";
import type { JsonObject, Message as Message$1 } from "@bufbuild/protobuf";
/**
 * Describes the file agent/v1/agent.proto.
 */
export declare const file_agent_v1_agent: GenFile;
/**
 * Session is a row in the agent session table.
 *
 * @generated from message agent.v1.Session
 */
export type Session = Message$1<"agent.v1.Session"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string model = 2;
     */
    model: string;
    /**
     * @generated from field: string preset = 3;
     */
    preset: string;
    /**
     * @generated from field: string tip_id = 4;
     */
    tipId: string;
    /**
     * @generated from field: int32 max_turns = 5;
     */
    maxTurns: number;
    /**
     * @generated from field: string system_prompt = 6;
     */
    systemPrompt: string;
    /**
     * @generated from field: int32 input_tokens = 7;
     */
    inputTokens: number;
    /**
     * @generated from field: int32 output_tokens = 8;
     */
    outputTokens: number;
    /**
     * @generated from field: int32 total_tokens = 9;
     */
    totalTokens: number;
    /**
     * @generated from field: int32 last_input_tokens = 10;
     */
    lastInputTokens: number;
    /**
     * @generated from field: int32 last_output_tokens = 11;
     */
    lastOutputTokens: number;
    /**
     * @generated from field: string created_at = 12;
     */
    createdAt: string;
    /**
     * @generated from field: string updated_at = 13;
     */
    updatedAt: string;
    /**
     * @generated from field: string last_used_at = 14;
     */
    lastUsedAt: string;
    /**
     * @generated from field: string locale = 15;
     */
    locale: string;
    /**
     * UI aggregates.
     *
     * @generated from field: string org = 16;
     */
    org: string;
    /**
     * @generated from field: string repo = 17;
     */
    repo: string;
    /**
     * @generated from field: string branch = 18;
     */
    branch: string;
    /**
     * @generated from field: int32 unread_count = 19;
     */
    unreadCount: number;
    /**
     * @generated from field: string last_message_at = 20;
     */
    lastMessageAt: string;
    /**
     * @generated from field: string last_message_preview = 21;
     */
    lastMessagePreview: string;
};
/**
 * Describes the message agent.v1.Session.
 * Use `create(SessionSchema)` to create a new message.
 */
export declare const SessionSchema: GenMessage<Session>;
/**
 * Message row (bare).
 *
 * @generated from message agent.v1.Message
 */
export type Message = Message$1<"agent.v1.Message"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string role = 2;
     */
    role: string;
    /**
     * @generated from field: string prev_id = 3;
     */
    prevId: string;
    /**
     * @generated from field: string created_at = 4;
     */
    createdAt: string;
    /**
     * @generated from field: repeated agent.v1.Part parts = 5;
     */
    parts: Part[];
};
/**
 * Describes the message agent.v1.Message.
 * Use `create(MessageSchema)` to create a new message.
 */
export declare const MessageSchema: GenMessage<Message>;
/**
 * A tool/text part body. `data` is the JSON/plain payload.
 *
 * @generated from message agent.v1.Part
 */
export type Part = Message$1<"agent.v1.Part"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string message_id = 2;
     */
    messageId: string;
    /**
     * @generated from field: string type = 3;
     */
    type: string;
    /**
     * @generated from field: int32 seq = 4;
     */
    seq: number;
    /**
     * @generated from field: string data = 5;
     */
    data: string;
};
/**
 * Describes the message agent.v1.Part.
 * Use `create(PartSchema)` to create a new message.
 */
export declare const PartSchema: GenMessage<Part>;
/**
 * Mailbox entry.
 *
 * @generated from message agent.v1.MailboxEntry
 */
export type MailboxEntry = Message$1<"agent.v1.MailboxEntry"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string session_name = 2;
     */
    sessionName: string;
    /**
     * @generated from field: string msg_type = 3;
     */
    msgType: string;
    /**
     * @generated from field: string payload = 4;
     */
    payload: string;
    /**
     * @generated from field: string effective_at = 5;
     */
    effectiveAt: string;
    /**
     * @generated from field: string status = 6;
     */
    status: string;
    /**
     * @generated from field: string created_at = 7;
     */
    createdAt: string;
    /**
     * @generated from field: string consumed_at = 8;
     */
    consumedAt: string;
    /**
     * @generated from field: int64 seq = 9;
     */
    seq: bigint;
};
/**
 * Describes the message agent.v1.MailboxEntry.
 * Use `create(MailboxEntrySchema)` to create a new message.
 */
export declare const MailboxEntrySchema: GenMessage<MailboxEntry>;
/**
 * Preset row.
 *
 * @generated from message agent.v1.Preset
 */
export type Preset = Message$1<"agent.v1.Preset"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string system_prompt = 2;
     */
    systemPrompt: string;
    /**
     * @generated from field: string system_prompt_i18n = 3;
     */
    systemPromptI18n: string;
    /**
     * @generated from field: repeated string tools = 4;
     */
    tools: string[];
    /**
     * @generated from field: int32 max_turns = 5;
     */
    maxTurns: number;
    /**
     * @generated from field: bool is_system = 6;
     */
    isSystem: boolean;
};
/**
 * Describes the message agent.v1.Preset.
 * Use `create(PresetSchema)` to create a new message.
 */
export declare const PresetSchema: GenMessage<Preset>;
/**
 * Provider row.
 *
 * @generated from message agent.v1.Provider
 */
export type Provider = Message$1<"agent.v1.Provider"> & {
    /**
     * @generated from field: string provider_id = 1;
     */
    providerId: string;
    /**
     * @generated from field: string api_type = 2;
     */
    apiType: string;
    /**
     * @generated from field: string base_url = 3;
     */
    baseUrl: string;
    /**
     * @generated from field: string api_key = 4;
     */
    apiKey: string;
    /**
     * @generated from field: map<string, string> headers = 5;
     */
    headers: {
        [key: string]: string;
    };
    /**
     * @generated from field: repeated string models = 6;
     */
    models: string[];
    /**
     * @generated from field: string updated_at = 7;
     */
    updatedAt: string;
};
/**
 * Describes the message agent.v1.Provider.
 * Use `create(ProviderSchema)` to create a new message.
 */
export declare const ProviderSchema: GenMessage<Provider>;
/**
 * Provider model entry.
 *
 * @generated from message agent.v1.ProviderModel
 */
export type ProviderModel = Message$1<"agent.v1.ProviderModel"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
};
/**
 * Describes the message agent.v1.ProviderModel.
 * Use `create(ProviderModelSchema)` to create a new message.
 */
export declare const ProviderModelSchema: GenMessage<ProviderModel>;
/**
 * Tool discovery entry.
 *
 * @generated from message agent.v1.ToolInfo
 */
export type ToolInfo = Message$1<"agent.v1.ToolInfo"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: string category = 3;
     */
    category: string;
    /**
     * @generated from field: google.protobuf.Struct parameters = 4;
     */
    parameters?: JsonObject | undefined;
    /**
     * @generated from field: repeated agent.v1.ToolConfigField config_fields = 5;
     */
    configFields: ToolConfigField[];
    /**
     * @generated from field: repeated string required_config = 6;
     */
    requiredConfig: string[];
};
/**
 * Describes the message agent.v1.ToolInfo.
 * Use `create(ToolInfoSchema)` to create a new message.
 */
export declare const ToolInfoSchema: GenMessage<ToolInfo>;
/**
 * Declared config knob for a tool/extension.
 *
 * @generated from message agent.v1.ToolConfigField
 */
export type ToolConfigField = Message$1<"agent.v1.ToolConfigField"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string type = 2;
     */
    type: string;
    /**
     * @generated from field: repeated string enum_values = 3;
     */
    enumValues: string[];
    /**
     * @generated from field: google.protobuf.Value default = 6;
     */
    default?: Value | undefined;
    /**
     * @generated from field: string description = 7;
     */
    description: string;
    /**
     * @generated from field: string scope = 8;
     */
    scope: string;
};
/**
 * Describes the message agent.v1.ToolConfigField.
 * Use `create(ToolConfigFieldSchema)` to create a new message.
 */
export declare const ToolConfigFieldSchema: GenMessage<ToolConfigField>;
/**
 * A tool's configured value.
 *
 * @generated from message agent.v1.ToolConfig
 */
export type ToolConfig = Message$1<"agent.v1.ToolConfig"> & {
    /**
     * @generated from field: map<string, google.protobuf.Value> values = 1;
     */
    values: {
        [key: string]: Value;
    };
};
/**
 * Describes the message agent.v1.ToolConfig.
 * Use `create(ToolConfigSchema)` to create a new message.
 */
export declare const ToolConfigSchema: GenMessage<ToolConfig>;
/**
 * SSE-ish stream event emitted by Prompt streaming.
 *
 * @generated from message agent.v1.PromptResponse
 */
export type PromptResponse = Message$1<"agent.v1.PromptResponse"> & {
    /**
     * status | text-delta | tool-call | tool-result | error | turn-complete
     *
     * @generated from field: string event = 1;
     */
    event: string;
    /**
     * @generated from field: map<string, string> params = 2;
     */
    params: {
        [key: string]: string;
    };
    /**
     * @generated from field: string eid = 3;
     */
    eid: string;
};
/**
 * Describes the message agent.v1.PromptResponse.
 * Use `create(PromptResponseSchema)` to create a new message.
 */
export declare const PromptResponseSchema: GenMessage<PromptResponse>;
/**
 * WatchSession streams live session events (the Connect replacement for the
 * SSE /stream endpoint): turn deltas, tool calls, errors and completions.
 *
 * @generated from message agent.v1.WatchSessionRequest
 */
export type WatchSessionRequest = Message$1<"agent.v1.WatchSessionRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message agent.v1.WatchSessionRequest.
 * Use `create(WatchSessionRequestSchema)` to create a new message.
 */
export declare const WatchSessionRequestSchema: GenMessage<WatchSessionRequest>;
/**
 * @generated from message agent.v1.WatchSessionResponse
 */
export type WatchSessionResponse = Message$1<"agent.v1.WatchSessionResponse"> & {
    /**
     * @generated from field: string event = 1;
     */
    event: string;
    /**
     * @generated from field: google.protobuf.Struct params = 2;
     */
    params?: JsonObject | undefined;
    /**
     * @generated from field: string eid = 3;
     */
    eid: string;
};
/**
 * Describes the message agent.v1.WatchSessionResponse.
 * Use `create(WatchSessionResponseSchema)` to create a new message.
 */
export declare const WatchSessionResponseSchema: GenMessage<WatchSessionResponse>;
/**
 * A file reference (attachment).
 *
 * @generated from message agent.v1.FileRef
 */
export type FileRef = Message$1<"agent.v1.FileRef"> & {
    /**
     * @generated from field: string code = 1;
     */
    code: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string mime = 3;
     */
    mime: string;
    /**
     * @generated from field: int32 size = 4;
     */
    size: number;
};
/**
 * Describes the message agent.v1.FileRef.
 * Use `create(FileRefSchema)` to create a new message.
 */
export declare const FileRefSchema: GenMessage<FileRef>;
/**
 * @generated from message agent.v1.ListSessionsRequest
 */
export type ListSessionsRequest = Message$1<"agent.v1.ListSessionsRequest"> & {};
/**
 * Describes the message agent.v1.ListSessionsRequest.
 * Use `create(ListSessionsRequestSchema)` to create a new message.
 */
export declare const ListSessionsRequestSchema: GenMessage<ListSessionsRequest>;
/**
 * @generated from message agent.v1.ListSessionsResponse
 */
export type ListSessionsResponse = Message$1<"agent.v1.ListSessionsResponse"> & {
    /**
     * @generated from field: repeated agent.v1.Session sessions = 1;
     */
    sessions: Session[];
};
/**
 * Describes the message agent.v1.ListSessionsResponse.
 * Use `create(ListSessionsResponseSchema)` to create a new message.
 */
export declare const ListSessionsResponseSchema: GenMessage<ListSessionsResponse>;
/**
 * @generated from message agent.v1.CreateSessionRequest
 */
export type CreateSessionRequest = Message$1<"agent.v1.CreateSessionRequest"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string model = 2;
     */
    model: string;
    /**
     * @generated from field: string preset = 3;
     */
    preset: string;
    /**
     * @generated from field: string org = 4;
     */
    org: string;
    /**
     * @generated from field: string repo = 5;
     */
    repo: string;
    /**
     * @generated from field: string branch = 6;
     */
    branch: string;
};
/**
 * Describes the message agent.v1.CreateSessionRequest.
 * Use `create(CreateSessionRequestSchema)` to create a new message.
 */
export declare const CreateSessionRequestSchema: GenMessage<CreateSessionRequest>;
/**
 * @generated from message agent.v1.CreateSessionResponse
 */
export type CreateSessionResponse = Message$1<"agent.v1.CreateSessionResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string session_name = 2;
     */
    sessionName: string;
};
/**
 * Describes the message agent.v1.CreateSessionResponse.
 * Use `create(CreateSessionResponseSchema)` to create a new message.
 */
export declare const CreateSessionResponseSchema: GenMessage<CreateSessionResponse>;
/**
 * @generated from message agent.v1.GetSessionRequest
 */
export type GetSessionRequest = Message$1<"agent.v1.GetSessionRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message agent.v1.GetSessionRequest.
 * Use `create(GetSessionRequestSchema)` to create a new message.
 */
export declare const GetSessionRequestSchema: GenMessage<GetSessionRequest>;
/**
 * @generated from message agent.v1.GetSessionResponse
 */
export type GetSessionResponse = Message$1<"agent.v1.GetSessionResponse"> & {
    /**
     * @generated from field: agent.v1.Session session = 1;
     */
    session?: Session | undefined;
};
/**
 * Describes the message agent.v1.GetSessionResponse.
 * Use `create(GetSessionResponseSchema)` to create a new message.
 */
export declare const GetSessionResponseSchema: GenMessage<GetSessionResponse>;
/**
 * @generated from message agent.v1.DeleteSessionRequest
 */
export type DeleteSessionRequest = Message$1<"agent.v1.DeleteSessionRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message agent.v1.DeleteSessionRequest.
 * Use `create(DeleteSessionRequestSchema)` to create a new message.
 */
export declare const DeleteSessionRequestSchema: GenMessage<DeleteSessionRequest>;
/**
 * @generated from message agent.v1.DeleteSessionResponse
 */
export type DeleteSessionResponse = Message$1<"agent.v1.DeleteSessionResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
};
/**
 * Describes the message agent.v1.DeleteSessionResponse.
 * Use `create(DeleteSessionResponseSchema)` to create a new message.
 */
export declare const DeleteSessionResponseSchema: GenMessage<DeleteSessionResponse>;
/**
 * @generated from message agent.v1.ListMessagesRequest
 */
export type ListMessagesRequest = Message$1<"agent.v1.ListMessagesRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: int32 limit = 2;
     */
    limit: number;
    /**
     * @generated from field: string before = 3;
     */
    before: string;
};
/**
 * Describes the message agent.v1.ListMessagesRequest.
 * Use `create(ListMessagesRequestSchema)` to create a new message.
 */
export declare const ListMessagesRequestSchema: GenMessage<ListMessagesRequest>;
/**
 * @generated from message agent.v1.ListMessagesResponse
 */
export type ListMessagesResponse = Message$1<"agent.v1.ListMessagesResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: repeated agent.v1.Message messages = 2;
     */
    messages: Message[];
};
/**
 * Describes the message agent.v1.ListMessagesResponse.
 * Use `create(ListMessagesResponseSchema)` to create a new message.
 */
export declare const ListMessagesResponseSchema: GenMessage<ListMessagesResponse>;
/**
 * @generated from message agent.v1.PromptRequest
 */
export type PromptRequest = Message$1<"agent.v1.PromptRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string prompt = 2;
     */
    prompt: string;
    /**
     * @generated from field: repeated agent.v1.FileRef attachments = 3;
     */
    attachments: FileRef[];
};
/**
 * Describes the message agent.v1.PromptRequest.
 * Use `create(PromptRequestSchema)` to create a new message.
 */
export declare const PromptRequestSchema: GenMessage<PromptRequest>;
/**
 * @generated from message agent.v1.ForkRequest
 */
export type ForkRequest = Message$1<"agent.v1.ForkRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string message_id = 3;
     */
    messageId: string;
    /**
     * @generated from field: string preset = 4;
     */
    preset: string;
};
/**
 * Describes the message agent.v1.ForkRequest.
 * Use `create(ForkRequestSchema)` to create a new message.
 */
export declare const ForkRequestSchema: GenMessage<ForkRequest>;
/**
 * @generated from message agent.v1.ForkResponse
 */
export type ForkResponse = Message$1<"agent.v1.ForkResponse"> & {
    /**
     * @generated from field: agent.v1.Session session = 1;
     */
    session?: Session | undefined;
};
/**
 * Describes the message agent.v1.ForkResponse.
 * Use `create(ForkResponseSchema)` to create a new message.
 */
export declare const ForkResponseSchema: GenMessage<ForkResponse>;
/**
 * @generated from message agent.v1.RenameRequest
 */
export type RenameRequest = Message$1<"agent.v1.RenameRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
};
/**
 * Describes the message agent.v1.RenameRequest.
 * Use `create(RenameRequestSchema)` to create a new message.
 */
export declare const RenameRequestSchema: GenMessage<RenameRequest>;
/**
 * @generated from message agent.v1.RenameResponse
 */
export type RenameResponse = Message$1<"agent.v1.RenameResponse"> & {
    /**
     * @generated from field: agent.v1.Session session = 1;
     */
    session?: Session | undefined;
};
/**
 * Describes the message agent.v1.RenameResponse.
 * Use `create(RenameResponseSchema)` to create a new message.
 */
export declare const RenameResponseSchema: GenMessage<RenameResponse>;
/**
 * @generated from message agent.v1.SetModelRequest
 */
export type SetModelRequest = Message$1<"agent.v1.SetModelRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string model = 2;
     */
    model: string;
};
/**
 * Describes the message agent.v1.SetModelRequest.
 * Use `create(SetModelRequestSchema)` to create a new message.
 */
export declare const SetModelRequestSchema: GenMessage<SetModelRequest>;
/**
 * @generated from message agent.v1.SetModelResponse
 */
export type SetModelResponse = Message$1<"agent.v1.SetModelResponse"> & {
    /**
     * @generated from field: agent.v1.Session session = 1;
     */
    session?: Session | undefined;
};
/**
 * Describes the message agent.v1.SetModelResponse.
 * Use `create(SetModelResponseSchema)` to create a new message.
 */
export declare const SetModelResponseSchema: GenMessage<SetModelResponse>;
/**
 * @generated from message agent.v1.UndoRequest
 */
export type UndoRequest = Message$1<"agent.v1.UndoRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string message_id = 2;
     */
    messageId: string;
};
/**
 * Describes the message agent.v1.UndoRequest.
 * Use `create(UndoRequestSchema)` to create a new message.
 */
export declare const UndoRequestSchema: GenMessage<UndoRequest>;
/**
 * @generated from message agent.v1.UndoResponse
 */
export type UndoResponse = Message$1<"agent.v1.UndoResponse"> & {
    /**
     * @generated from field: agent.v1.Session session = 1;
     */
    session?: Session | undefined;
};
/**
 * Describes the message agent.v1.UndoResponse.
 * Use `create(UndoResponseSchema)` to create a new message.
 */
export declare const UndoResponseSchema: GenMessage<UndoResponse>;
/**
 * @generated from message agent.v1.StateRequest
 */
export type StateRequest = Message$1<"agent.v1.StateRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message agent.v1.StateRequest.
 * Use `create(StateRequestSchema)` to create a new message.
 */
export declare const StateRequestSchema: GenMessage<StateRequest>;
/**
 * @generated from message agent.v1.StateResponse
 */
export type StateResponse = Message$1<"agent.v1.StateResponse"> & {
    /**
     * @generated from field: google.protobuf.Struct state = 1;
     */
    state?: JsonObject | undefined;
};
/**
 * Describes the message agent.v1.StateResponse.
 * Use `create(StateResponseSchema)` to create a new message.
 */
export declare const StateResponseSchema: GenMessage<StateResponse>;
/**
 * @generated from message agent.v1.MailboxRequest
 */
export type MailboxRequest = Message$1<"agent.v1.MailboxRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message agent.v1.MailboxRequest.
 * Use `create(MailboxRequestSchema)` to create a new message.
 */
export declare const MailboxRequestSchema: GenMessage<MailboxRequest>;
/**
 * @generated from message agent.v1.MailboxResponse
 */
export type MailboxResponse = Message$1<"agent.v1.MailboxResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: repeated agent.v1.MailboxEntry mailbox = 2;
     */
    mailbox: MailboxEntry[];
};
/**
 * Describes the message agent.v1.MailboxResponse.
 * Use `create(MailboxResponseSchema)` to create a new message.
 */
export declare const MailboxResponseSchema: GenMessage<MailboxResponse>;
/**
 * @generated from message agent.v1.UpdateSettingsRequest
 */
export type UpdateSettingsRequest = Message$1<"agent.v1.UpdateSettingsRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string model = 2;
     */
    model: string;
    /**
     * @generated from field: string preset = 3;
     */
    preset: string;
    /**
     * @generated from field: int32 max_turns = 4;
     */
    maxTurns: number;
    /**
     * @generated from field: string system_prompt = 5;
     */
    systemPrompt: string;
    /**
     * @generated from field: string locale = 6;
     */
    locale: string;
};
/**
 * Describes the message agent.v1.UpdateSettingsRequest.
 * Use `create(UpdateSettingsRequestSchema)` to create a new message.
 */
export declare const UpdateSettingsRequestSchema: GenMessage<UpdateSettingsRequest>;
/**
 * @generated from message agent.v1.UpdateSettingsResponse
 */
export type UpdateSettingsResponse = Message$1<"agent.v1.UpdateSettingsResponse"> & {
    /**
     * @generated from field: agent.v1.Session session = 1;
     */
    session?: Session | undefined;
};
/**
 * Describes the message agent.v1.UpdateSettingsResponse.
 * Use `create(UpdateSettingsResponseSchema)` to create a new message.
 */
export declare const UpdateSettingsResponseSchema: GenMessage<UpdateSettingsResponse>;
/**
 * @generated from message agent.v1.InterruptRequest
 */
export type InterruptRequest = Message$1<"agent.v1.InterruptRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message agent.v1.InterruptRequest.
 * Use `create(InterruptRequestSchema)` to create a new message.
 */
export declare const InterruptRequestSchema: GenMessage<InterruptRequest>;
/**
 * @generated from message agent.v1.InterruptResponse
 */
export type InterruptResponse = Message$1<"agent.v1.InterruptResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: bool interrupted = 2;
     */
    interrupted: boolean;
};
/**
 * Describes the message agent.v1.InterruptResponse.
 * Use `create(InterruptResponseSchema)` to create a new message.
 */
export declare const InterruptResponseSchema: GenMessage<InterruptResponse>;
/**
 * @generated from message agent.v1.CompactRequest
 */
export type CompactRequest = Message$1<"agent.v1.CompactRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message agent.v1.CompactRequest.
 * Use `create(CompactRequestSchema)` to create a new message.
 */
export declare const CompactRequestSchema: GenMessage<CompactRequest>;
/**
 * @generated from message agent.v1.CompactResponse
 */
export type CompactResponse = Message$1<"agent.v1.CompactResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
};
/**
 * Describes the message agent.v1.CompactResponse.
 * Use `create(CompactResponseSchema)` to create a new message.
 */
export declare const CompactResponseSchema: GenMessage<CompactResponse>;
/**
 * @generated from message agent.v1.ListProvidersRequest
 */
export type ListProvidersRequest = Message$1<"agent.v1.ListProvidersRequest"> & {};
/**
 * Describes the message agent.v1.ListProvidersRequest.
 * Use `create(ListProvidersRequestSchema)` to create a new message.
 */
export declare const ListProvidersRequestSchema: GenMessage<ListProvidersRequest>;
/**
 * @generated from message agent.v1.ListProvidersResponse
 */
export type ListProvidersResponse = Message$1<"agent.v1.ListProvidersResponse"> & {
    /**
     * @generated from field: repeated agent.v1.Provider providers = 1;
     */
    providers: Provider[];
};
/**
 * Describes the message agent.v1.ListProvidersResponse.
 * Use `create(ListProvidersResponseSchema)` to create a new message.
 */
export declare const ListProvidersResponseSchema: GenMessage<ListProvidersResponse>;
/**
 * @generated from message agent.v1.ListProvidersCatalogRequest
 */
export type ListProvidersCatalogRequest = Message$1<"agent.v1.ListProvidersCatalogRequest"> & {};
/**
 * Describes the message agent.v1.ListProvidersCatalogRequest.
 * Use `create(ListProvidersCatalogRequestSchema)` to create a new message.
 */
export declare const ListProvidersCatalogRequestSchema: GenMessage<ListProvidersCatalogRequest>;
/**
 * @generated from message agent.v1.ListProvidersCatalogResponse
 */
export type ListProvidersCatalogResponse = Message$1<"agent.v1.ListProvidersCatalogResponse"> & {
    /**
     * @generated from field: map<string, agent.v1.CatalogProvider> providers = 1;
     */
    providers: {
        [key: string]: CatalogProvider;
    };
};
/**
 * Describes the message agent.v1.ListProvidersCatalogResponse.
 * Use `create(ListProvidersCatalogResponseSchema)` to create a new message.
 */
export declare const ListProvidersCatalogResponseSchema: GenMessage<ListProvidersCatalogResponse>;
/**
 * @generated from message agent.v1.CatalogProvider
 */
export type CatalogProvider = Message$1<"agent.v1.CatalogProvider"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string api = 3;
     */
    api: string;
    /**
     * @generated from field: string npm = 4;
     */
    npm: string;
    /**
     * @generated from field: repeated string env = 5;
     */
    env: string[];
    /**
     * @generated from field: map<string, google.protobuf.Value> models = 6;
     */
    models: {
        [key: string]: Value;
    };
};
/**
 * Describes the message agent.v1.CatalogProvider.
 * Use `create(CatalogProviderSchema)` to create a new message.
 */
export declare const CatalogProviderSchema: GenMessage<CatalogProvider>;
/**
 * @generated from message agent.v1.RegisterProviderRequest
 */
export type RegisterProviderRequest = Message$1<"agent.v1.RegisterProviderRequest"> & {
    /**
     * @generated from field: agent.v1.Provider provider = 1;
     */
    provider?: Provider | undefined;
};
/**
 * Describes the message agent.v1.RegisterProviderRequest.
 * Use `create(RegisterProviderRequestSchema)` to create a new message.
 */
export declare const RegisterProviderRequestSchema: GenMessage<RegisterProviderRequest>;
/**
 * @generated from message agent.v1.RegisterProviderResponse
 */
export type RegisterProviderResponse = Message$1<"agent.v1.RegisterProviderResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
};
/**
 * Describes the message agent.v1.RegisterProviderResponse.
 * Use `create(RegisterProviderResponseSchema)` to create a new message.
 */
export declare const RegisterProviderResponseSchema: GenMessage<RegisterProviderResponse>;
/**
 * @generated from message agent.v1.DeleteProviderRequest
 */
export type DeleteProviderRequest = Message$1<"agent.v1.DeleteProviderRequest"> & {
    /**
     * @generated from field: string provider_id = 1;
     */
    providerId: string;
};
/**
 * Describes the message agent.v1.DeleteProviderRequest.
 * Use `create(DeleteProviderRequestSchema)` to create a new message.
 */
export declare const DeleteProviderRequestSchema: GenMessage<DeleteProviderRequest>;
/**
 * @generated from message agent.v1.DeleteProviderResponse
 */
export type DeleteProviderResponse = Message$1<"agent.v1.DeleteProviderResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
};
/**
 * Describes the message agent.v1.DeleteProviderResponse.
 * Use `create(DeleteProviderResponseSchema)` to create a new message.
 */
export declare const DeleteProviderResponseSchema: GenMessage<DeleteProviderResponse>;
/**
 * @generated from message agent.v1.TestProviderRequest
 */
export type TestProviderRequest = Message$1<"agent.v1.TestProviderRequest"> & {
    /**
     * @generated from field: string provider_id = 1;
     */
    providerId: string;
    /**
     * @generated from field: string api_type = 2;
     */
    apiType: string;
    /**
     * @generated from field: string base_url = 3;
     */
    baseUrl: string;
    /**
     * @generated from field: string api_key = 4;
     */
    apiKey: string;
    /**
     * @generated from field: string model = 5;
     */
    model: string;
};
/**
 * Describes the message agent.v1.TestProviderRequest.
 * Use `create(TestProviderRequestSchema)` to create a new message.
 */
export declare const TestProviderRequestSchema: GenMessage<TestProviderRequest>;
/**
 * @generated from message agent.v1.TestProviderResponse
 */
export type TestProviderResponse = Message$1<"agent.v1.TestProviderResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string result = 2;
     */
    result: string;
};
/**
 * Describes the message agent.v1.TestProviderResponse.
 * Use `create(TestProviderResponseSchema)` to create a new message.
 */
export declare const TestProviderResponseSchema: GenMessage<TestProviderResponse>;
/**
 * @generated from message agent.v1.ListModelsRequest
 */
export type ListModelsRequest = Message$1<"agent.v1.ListModelsRequest"> & {};
/**
 * Describes the message agent.v1.ListModelsRequest.
 * Use `create(ListModelsRequestSchema)` to create a new message.
 */
export declare const ListModelsRequestSchema: GenMessage<ListModelsRequest>;
/**
 * @generated from message agent.v1.ListModelsResponse
 */
export type ListModelsResponse = Message$1<"agent.v1.ListModelsResponse"> & {
    /**
     * @generated from field: repeated agent.v1.ModelInfo models = 1;
     */
    models: ModelInfo[];
};
/**
 * Describes the message agent.v1.ListModelsResponse.
 * Use `create(ListModelsResponseSchema)` to create a new message.
 */
export declare const ListModelsResponseSchema: GenMessage<ListModelsResponse>;
/**
 * @generated from message agent.v1.ModelInfo
 */
export type ModelInfo = Message$1<"agent.v1.ModelInfo"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
};
/**
 * Describes the message agent.v1.ModelInfo.
 * Use `create(ModelInfoSchema)` to create a new message.
 */
export declare const ModelInfoSchema: GenMessage<ModelInfo>;
/**
 * @generated from message agent.v1.ListPresetsRequest
 */
export type ListPresetsRequest = Message$1<"agent.v1.ListPresetsRequest"> & {};
/**
 * Describes the message agent.v1.ListPresetsRequest.
 * Use `create(ListPresetsRequestSchema)` to create a new message.
 */
export declare const ListPresetsRequestSchema: GenMessage<ListPresetsRequest>;
/**
 * @generated from message agent.v1.ListPresetsResponse
 */
export type ListPresetsResponse = Message$1<"agent.v1.ListPresetsResponse"> & {
    /**
     * @generated from field: repeated agent.v1.Preset presets = 1;
     */
    presets: Preset[];
};
/**
 * Describes the message agent.v1.ListPresetsResponse.
 * Use `create(ListPresetsResponseSchema)` to create a new message.
 */
export declare const ListPresetsResponseSchema: GenMessage<ListPresetsResponse>;
/**
 * @generated from message agent.v1.UpsertPresetRequest
 */
export type UpsertPresetRequest = Message$1<"agent.v1.UpsertPresetRequest"> & {
    /**
     * @generated from field: agent.v1.Preset preset = 1;
     */
    preset?: Preset | undefined;
};
/**
 * Describes the message agent.v1.UpsertPresetRequest.
 * Use `create(UpsertPresetRequestSchema)` to create a new message.
 */
export declare const UpsertPresetRequestSchema: GenMessage<UpsertPresetRequest>;
/**
 * @generated from message agent.v1.UpsertPresetResponse
 */
export type UpsertPresetResponse = Message$1<"agent.v1.UpsertPresetResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
};
/**
 * Describes the message agent.v1.UpsertPresetResponse.
 * Use `create(UpsertPresetResponseSchema)` to create a new message.
 */
export declare const UpsertPresetResponseSchema: GenMessage<UpsertPresetResponse>;
/**
 * @generated from message agent.v1.DeletePresetRequest
 */
export type DeletePresetRequest = Message$1<"agent.v1.DeletePresetRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message agent.v1.DeletePresetRequest.
 * Use `create(DeletePresetRequestSchema)` to create a new message.
 */
export declare const DeletePresetRequestSchema: GenMessage<DeletePresetRequest>;
/**
 * @generated from message agent.v1.DeletePresetResponse
 */
export type DeletePresetResponse = Message$1<"agent.v1.DeletePresetResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
};
/**
 * Describes the message agent.v1.DeletePresetResponse.
 * Use `create(DeletePresetResponseSchema)` to create a new message.
 */
export declare const DeletePresetResponseSchema: GenMessage<DeletePresetResponse>;
/**
 * @generated from message agent.v1.PreviewPresetRequest
 */
export type PreviewPresetRequest = Message$1<"agent.v1.PreviewPresetRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message agent.v1.PreviewPresetRequest.
 * Use `create(PreviewPresetRequestSchema)` to create a new message.
 */
export declare const PreviewPresetRequestSchema: GenMessage<PreviewPresetRequest>;
/**
 * @generated from message agent.v1.PreviewPresetResponse
 */
export type PreviewPresetResponse = Message$1<"agent.v1.PreviewPresetResponse"> & {
    /**
     * @generated from field: string template = 1;
     */
    template: string;
    /**
     * @generated from field: string rendered = 2;
     */
    rendered: string;
};
/**
 * Describes the message agent.v1.PreviewPresetResponse.
 * Use `create(PreviewPresetResponseSchema)` to create a new message.
 */
export declare const PreviewPresetResponseSchema: GenMessage<PreviewPresetResponse>;
/**
 * @generated from message agent.v1.GetConfigRequest
 */
export type GetConfigRequest = Message$1<"agent.v1.GetConfigRequest"> & {
    /**
     * @generated from field: string key = 1;
     */
    key: string;
};
/**
 * Describes the message agent.v1.GetConfigRequest.
 * Use `create(GetConfigRequestSchema)` to create a new message.
 */
export declare const GetConfigRequestSchema: GenMessage<GetConfigRequest>;
/**
 * @generated from message agent.v1.GetConfigResponse
 */
export type GetConfigResponse = Message$1<"agent.v1.GetConfigResponse"> & {
    /**
     * @generated from field: string key = 1;
     */
    key: string;
    /**
     * @generated from field: string value = 2;
     */
    value: string;
};
/**
 * Describes the message agent.v1.GetConfigResponse.
 * Use `create(GetConfigResponseSchema)` to create a new message.
 */
export declare const GetConfigResponseSchema: GenMessage<GetConfigResponse>;
/**
 * @generated from message agent.v1.SetConfigRequest
 */
export type SetConfigRequest = Message$1<"agent.v1.SetConfigRequest"> & {
    /**
     * @generated from field: string key = 1;
     */
    key: string;
    /**
     * @generated from field: string value = 2;
     */
    value: string;
};
/**
 * Describes the message agent.v1.SetConfigRequest.
 * Use `create(SetConfigRequestSchema)` to create a new message.
 */
export declare const SetConfigRequestSchema: GenMessage<SetConfigRequest>;
/**
 * @generated from message agent.v1.SetConfigResponse
 */
export type SetConfigResponse = Message$1<"agent.v1.SetConfigResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
};
/**
 * Describes the message agent.v1.SetConfigResponse.
 * Use `create(SetConfigResponseSchema)` to create a new message.
 */
export declare const SetConfigResponseSchema: GenMessage<SetConfigResponse>;
/**
 * @generated from message agent.v1.ListToolsRequest
 */
export type ListToolsRequest = Message$1<"agent.v1.ListToolsRequest"> & {
    /**
     * @generated from field: string locale = 1;
     */
    locale: string;
};
/**
 * Describes the message agent.v1.ListToolsRequest.
 * Use `create(ListToolsRequestSchema)` to create a new message.
 */
export declare const ListToolsRequestSchema: GenMessage<ListToolsRequest>;
/**
 * @generated from message agent.v1.ListToolsResponse
 */
export type ListToolsResponse = Message$1<"agent.v1.ListToolsResponse"> & {
    /**
     * @generated from field: repeated agent.v1.ToolInfo tools = 1;
     */
    tools: ToolInfo[];
};
/**
 * Describes the message agent.v1.ListToolsResponse.
 * Use `create(ListToolsResponseSchema)` to create a new message.
 */
export declare const ListToolsResponseSchema: GenMessage<ListToolsResponse>;
/**
 * @generated from message agent.v1.GetToolConfigRequest
 */
export type GetToolConfigRequest = Message$1<"agent.v1.GetToolConfigRequest"> & {};
/**
 * Describes the message agent.v1.GetToolConfigRequest.
 * Use `create(GetToolConfigRequestSchema)` to create a new message.
 */
export declare const GetToolConfigRequestSchema: GenMessage<GetToolConfigRequest>;
/**
 * @generated from message agent.v1.GetToolConfigResponse
 */
export type GetToolConfigResponse = Message$1<"agent.v1.GetToolConfigResponse"> & {
    /**
     * @generated from field: agent.v1.ToolConfig config = 1;
     */
    config?: ToolConfig | undefined;
};
/**
 * Describes the message agent.v1.GetToolConfigResponse.
 * Use `create(GetToolConfigResponseSchema)` to create a new message.
 */
export declare const GetToolConfigResponseSchema: GenMessage<GetToolConfigResponse>;
/**
 * @generated from message agent.v1.SetToolConfigRequest
 */
export type SetToolConfigRequest = Message$1<"agent.v1.SetToolConfigRequest"> & {
    /**
     * @generated from field: google.protobuf.Struct config = 1;
     */
    config?: JsonObject | undefined;
};
/**
 * Describes the message agent.v1.SetToolConfigRequest.
 * Use `create(SetToolConfigRequestSchema)` to create a new message.
 */
export declare const SetToolConfigRequestSchema: GenMessage<SetToolConfigRequest>;
/**
 * @generated from message agent.v1.SetToolConfigResponse
 */
export type SetToolConfigResponse = Message$1<"agent.v1.SetToolConfigResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
};
/**
 * Describes the message agent.v1.SetToolConfigResponse.
 * Use `create(SetToolConfigResponseSchema)` to create a new message.
 */
export declare const SetToolConfigResponseSchema: GenMessage<SetToolConfigResponse>;
/**
 * @generated from message agent.v1.SetExtensionConfigRequest
 */
export type SetExtensionConfigRequest = Message$1<"agent.v1.SetExtensionConfigRequest"> & {
    /**
     * @generated from field: string ext_id = 1;
     */
    extId: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: google.protobuf.Value value = 3;
     */
    value?: Value | undefined;
};
/**
 * Describes the message agent.v1.SetExtensionConfigRequest.
 * Use `create(SetExtensionConfigRequestSchema)` to create a new message.
 */
export declare const SetExtensionConfigRequestSchema: GenMessage<SetExtensionConfigRequest>;
/**
 * @generated from message agent.v1.SetExtensionConfigResponse
 */
export type SetExtensionConfigResponse = Message$1<"agent.v1.SetExtensionConfigResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
};
/**
 * Describes the message agent.v1.SetExtensionConfigResponse.
 * Use `create(SetExtensionConfigResponseSchema)` to create a new message.
 */
export declare const SetExtensionConfigResponseSchema: GenMessage<SetExtensionConfigResponse>;
/**
 * @generated from message agent.v1.UploadFileRequest
 */
export type UploadFileRequest = Message$1<"agent.v1.UploadFileRequest"> & {
    /**
     * @generated from field: agent.v1.FileRef file = 1;
     */
    file?: FileRef | undefined;
    /**
     * @generated from field: string data = 2;
     */
    data: string;
};
/**
 * Describes the message agent.v1.UploadFileRequest.
 * Use `create(UploadFileRequestSchema)` to create a new message.
 */
export declare const UploadFileRequestSchema: GenMessage<UploadFileRequest>;
/**
 * @generated from message agent.v1.UploadFileResponse
 */
export type UploadFileResponse = Message$1<"agent.v1.UploadFileResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string code = 2;
     */
    code: string;
};
/**
 * Describes the message agent.v1.UploadFileResponse.
 * Use `create(UploadFileResponseSchema)` to create a new message.
 */
export declare const UploadFileResponseSchema: GenMessage<UploadFileResponse>;
/**
 * @generated from message agent.v1.IngestFileRequest
 */
export type IngestFileRequest = Message$1<"agent.v1.IngestFileRequest"> & {
    /**
     * optional; empty => server mints one
     *
     * @generated from field: string code = 1;
     */
    code: string;
    /**
     * @generated from field: bytes data = 2;
     */
    data: Uint8Array;
    /**
     * @generated from field: string name = 3;
     */
    name: string;
    /**
     * @generated from field: string mime = 4;
     */
    mime: string;
};
/**
 * Describes the message agent.v1.IngestFileRequest.
 * Use `create(IngestFileRequestSchema)` to create a new message.
 */
export declare const IngestFileRequestSchema: GenMessage<IngestFileRequest>;
/**
 * @generated from message agent.v1.IngestFileResponse
 */
export type IngestFileResponse = Message$1<"agent.v1.IngestFileResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string code = 2;
     */
    code: string;
};
/**
 * Describes the message agent.v1.IngestFileResponse.
 * Use `create(IngestFileResponseSchema)` to create a new message.
 */
export declare const IngestFileResponseSchema: GenMessage<IngestFileResponse>;
/**
 * @generated from message agent.v1.GetFileRequest
 */
export type GetFileRequest = Message$1<"agent.v1.GetFileRequest"> & {
    /**
     * @generated from field: string code = 1;
     */
    code: string;
};
/**
 * Describes the message agent.v1.GetFileRequest.
 * Use `create(GetFileRequestSchema)` to create a new message.
 */
export declare const GetFileRequestSchema: GenMessage<GetFileRequest>;
/**
 * @generated from message agent.v1.GetFileResponse
 */
export type GetFileResponse = Message$1<"agent.v1.GetFileResponse"> & {
    /**
     * @generated from field: bytes data = 1;
     */
    data: Uint8Array;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string mime = 3;
     */
    mime: string;
};
/**
 * Describes the message agent.v1.GetFileResponse.
 * Use `create(GetFileResponseSchema)` to create a new message.
 */
export declare const GetFileResponseSchema: GenMessage<GetFileResponse>;
/**
 * @generated from message agent.v1.GetFileMetaRequest
 */
export type GetFileMetaRequest = Message$1<"agent.v1.GetFileMetaRequest"> & {
    /**
     * @generated from field: string code = 1;
     */
    code: string;
};
/**
 * Describes the message agent.v1.GetFileMetaRequest.
 * Use `create(GetFileMetaRequestSchema)` to create a new message.
 */
export declare const GetFileMetaRequestSchema: GenMessage<GetFileMetaRequest>;
/**
 * @generated from message agent.v1.GetFileMetaResponse
 */
export type GetFileMetaResponse = Message$1<"agent.v1.GetFileMetaResponse"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string mime = 2;
     */
    mime: string;
    /**
     * @generated from field: int32 size = 3;
     */
    size: number;
};
/**
 * Describes the message agent.v1.GetFileMetaResponse.
 * Use `create(GetFileMetaResponseSchema)` to create a new message.
 */
export declare const GetFileMetaResponseSchema: GenMessage<GetFileMetaResponse>;
/**
 * @generated from message agent.v1.GetAgentConfigRequest
 */
export type GetAgentConfigRequest = Message$1<"agent.v1.GetAgentConfigRequest"> & {};
/**
 * Describes the message agent.v1.GetAgentConfigRequest.
 * Use `create(GetAgentConfigRequestSchema)` to create a new message.
 */
export declare const GetAgentConfigRequestSchema: GenMessage<GetAgentConfigRequest>;
/**
 * @generated from message agent.v1.GetAgentConfigResponse
 */
export type GetAgentConfigResponse = Message$1<"agent.v1.GetAgentConfigResponse"> & {
    /**
     * @generated from field: google.protobuf.Struct config = 1;
     */
    config?: JsonObject | undefined;
};
/**
 * Describes the message agent.v1.GetAgentConfigResponse.
 * Use `create(GetAgentConfigResponseSchema)` to create a new message.
 */
export declare const GetAgentConfigResponseSchema: GenMessage<GetAgentConfigResponse>;
/**
 * @generated from message agent.v1.HealthRequest
 */
export type HealthRequest = Message$1<"agent.v1.HealthRequest"> & {};
/**
 * Describes the message agent.v1.HealthRequest.
 * Use `create(HealthRequestSchema)` to create a new message.
 */
export declare const HealthRequestSchema: GenMessage<HealthRequest>;
/**
 * @generated from message agent.v1.HealthResponse
 */
export type HealthResponse = Message$1<"agent.v1.HealthResponse"> & {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
};
/**
 * Describes the message agent.v1.HealthResponse.
 * Use `create(HealthResponseSchema)` to create a new message.
 */
export declare const HealthResponseSchema: GenMessage<HealthResponse>;
/**
 * AgentService is the session-backend API.
 *
 * @generated from service agent.v1.AgentService
 */
export declare const AgentService: GenService<{
    /**
     * @generated from rpc agent.v1.AgentService.Health
     */
    health: {
        methodKind: "unary";
        input: typeof HealthRequestSchema;
        output: typeof HealthResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.ListSessions
     */
    listSessions: {
        methodKind: "unary";
        input: typeof ListSessionsRequestSchema;
        output: typeof ListSessionsResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.CreateSession
     */
    createSession: {
        methodKind: "unary";
        input: typeof CreateSessionRequestSchema;
        output: typeof CreateSessionResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.GetSession
     */
    getSession: {
        methodKind: "unary";
        input: typeof GetSessionRequestSchema;
        output: typeof GetSessionResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.DeleteSession
     */
    deleteSession: {
        methodKind: "unary";
        input: typeof DeleteSessionRequestSchema;
        output: typeof DeleteSessionResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.ListMessages
     */
    listMessages: {
        methodKind: "unary";
        input: typeof ListMessagesRequestSchema;
        output: typeof ListMessagesResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.Prompt
     */
    prompt: {
        methodKind: "server_streaming";
        input: typeof PromptRequestSchema;
        output: typeof PromptResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.WatchSession
     */
    watchSession: {
        methodKind: "server_streaming";
        input: typeof WatchSessionRequestSchema;
        output: typeof WatchSessionResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.Fork
     */
    fork: {
        methodKind: "unary";
        input: typeof ForkRequestSchema;
        output: typeof ForkResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.Rename
     */
    rename: {
        methodKind: "unary";
        input: typeof RenameRequestSchema;
        output: typeof RenameResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.SetModel
     */
    setModel: {
        methodKind: "unary";
        input: typeof SetModelRequestSchema;
        output: typeof SetModelResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.Undo
     */
    undo: {
        methodKind: "unary";
        input: typeof UndoRequestSchema;
        output: typeof UndoResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.State
     */
    state: {
        methodKind: "unary";
        input: typeof StateRequestSchema;
        output: typeof StateResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.Mailbox
     */
    mailbox: {
        methodKind: "unary";
        input: typeof MailboxRequestSchema;
        output: typeof MailboxResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.UpdateSettings
     */
    updateSettings: {
        methodKind: "unary";
        input: typeof UpdateSettingsRequestSchema;
        output: typeof UpdateSettingsResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.Interrupt
     */
    interrupt: {
        methodKind: "unary";
        input: typeof InterruptRequestSchema;
        output: typeof InterruptResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.Compact
     */
    compact: {
        methodKind: "unary";
        input: typeof CompactRequestSchema;
        output: typeof CompactResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.ListProviders
     */
    listProviders: {
        methodKind: "unary";
        input: typeof ListProvidersRequestSchema;
        output: typeof ListProvidersResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.ListProvidersCatalog
     */
    listProvidersCatalog: {
        methodKind: "unary";
        input: typeof ListProvidersCatalogRequestSchema;
        output: typeof ListProvidersCatalogResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.RegisterProvider
     */
    registerProvider: {
        methodKind: "unary";
        input: typeof RegisterProviderRequestSchema;
        output: typeof RegisterProviderResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.DeleteProvider
     */
    deleteProvider: {
        methodKind: "unary";
        input: typeof DeleteProviderRequestSchema;
        output: typeof DeleteProviderResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.TestProvider
     */
    testProvider: {
        methodKind: "unary";
        input: typeof TestProviderRequestSchema;
        output: typeof TestProviderResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.ListModels
     */
    listModels: {
        methodKind: "unary";
        input: typeof ListModelsRequestSchema;
        output: typeof ListModelsResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.ListPresets
     */
    listPresets: {
        methodKind: "unary";
        input: typeof ListPresetsRequestSchema;
        output: typeof ListPresetsResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.UpsertPreset
     */
    upsertPreset: {
        methodKind: "unary";
        input: typeof UpsertPresetRequestSchema;
        output: typeof UpsertPresetResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.DeletePreset
     */
    deletePreset: {
        methodKind: "unary";
        input: typeof DeletePresetRequestSchema;
        output: typeof DeletePresetResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.PreviewPreset
     */
    previewPreset: {
        methodKind: "unary";
        input: typeof PreviewPresetRequestSchema;
        output: typeof PreviewPresetResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.GetConfig
     */
    getConfig: {
        methodKind: "unary";
        input: typeof GetConfigRequestSchema;
        output: typeof GetConfigResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.SetConfig
     */
    setConfig: {
        methodKind: "unary";
        input: typeof SetConfigRequestSchema;
        output: typeof SetConfigResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.ListTools
     */
    listTools: {
        methodKind: "unary";
        input: typeof ListToolsRequestSchema;
        output: typeof ListToolsResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.GetToolConfig
     */
    getToolConfig: {
        methodKind: "unary";
        input: typeof GetToolConfigRequestSchema;
        output: typeof GetToolConfigResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.SetToolConfig
     */
    setToolConfig: {
        methodKind: "unary";
        input: typeof SetToolConfigRequestSchema;
        output: typeof SetToolConfigResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.SetExtensionConfig
     */
    setExtensionConfig: {
        methodKind: "unary";
        input: typeof SetExtensionConfigRequestSchema;
        output: typeof SetExtensionConfigResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.UploadFile
     */
    uploadFile: {
        methodKind: "unary";
        input: typeof UploadFileRequestSchema;
        output: typeof UploadFileResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.IngestFile
     */
    ingestFile: {
        methodKind: "unary";
        input: typeof IngestFileRequestSchema;
        output: typeof IngestFileResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.GetFile
     */
    getFile: {
        methodKind: "unary";
        input: typeof GetFileRequestSchema;
        output: typeof GetFileResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.GetFileMeta
     */
    getFileMeta: {
        methodKind: "unary";
        input: typeof GetFileMetaRequestSchema;
        output: typeof GetFileMetaResponseSchema;
    };
    /**
     * @generated from rpc agent.v1.AgentService.GetAgentConfig
     */
    getAgentConfig: {
        methodKind: "unary";
        input: typeof GetAgentConfigRequestSchema;
        output: typeof GetAgentConfigResponseSchema;
    };
}>;
