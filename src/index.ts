// EasyLab typed client SDK for TypeScript.
//
// This package ships ONLY the buf-generated Connect code for the easylab
// gateway surface — no hand-written transport, auth, or client wrappers. The
// caller builds its own `Transport` (connect-web / connect-node) and passes it
// to `createClient(<Service>, transport)`.
//
// Entrypoints:
//   @easylab/sdk         → easylab.v1 (lab + ops + registry + sandbox + workflow)
//   @easylab/sdk/agent   → agent.v1 (the gateway's forwarded agent surface)
//   @easylab/sdk/worker  → worker.v1 (sandbox worker payloads)
export * from './gen/easylab/v1/easylab_pb.js'
