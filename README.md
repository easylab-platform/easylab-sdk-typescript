# easylab-sdk-typescript

EasyLab typed client SDK for TypeScript — **buf-generated Connect code only**
(easylab.v1 + agent.v1 + worker.v1). No hand-written transport, auth, or
wrapper: the caller builds its own `Transport` (connect-web / connect-node) and
passes it to `createClient(<Service>, transport)`.

```ts
import { createClient } from '@connectrpc/connect'
import { createConnectTransport } from '@connectrpc/connect-web'
import { LabService } from '@easylab/sdk'

const transport = createConnectTransport({ baseUrl: 'https://easylab.example.com' })
const lab = createClient(LabService, transport)
const { repos } = await lab.listRepos({})
```

Entrypoints:
- `@easylab/sdk` → easylab.v1 (lab + ops + registry + sandbox + workflow)
- `@easylab/sdk/agent` → agent.v1 (the gateway's forwarded agent surface)
- `@easylab/sdk/worker` → worker.v1 sandbox payloads

Consumed as a git dependency:

```json
"dependencies": {
  "@easylab/sdk": "github:easylab-platform/easylab-sdk-typescript#v0.5.0"
}
```
