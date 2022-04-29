---
title: Commands
sidebar_label: Commands
---

:::info

This page shows an example of sending a command from MetaEditor to Unreal Engine.

:::

## emitAsync()

```javascript
// context
import { usePlayer } from 'metaeditor/context/'

// material
import Button from '@mui/material/Button';

function Demo() {
  const player = usePlayer()

  const handleCommand = async (event) => {

    await player.cls.emitAsync({
      command: 'my_command_1',
      request: {
        // The request body should only contain a json object.
        body: { rotate: true },
      },

      // If the callback emulation option is enabled, then the contents of fakeResponse will be returned as response.body
      fakeResponse: undefined,
    }).then(res => {
      console.log(res)
    })

  }

  return (
    <MetaEditor {...props}>
      <Button onClick={handleCommand}>
        Send command to Unreal Engine
      </Button>
    </MetaEditor>
  )
}
```

## metaEmitAsync()

> With MetaPortal you can [add new commands](../../metaportal/commands.md) and test them through the [Developer Panel](../devpanel/commands.md).

> Added commands in MetaPortal can be called through special uuid-shortcuts. This greatly simplifies the development and updating of commands.

```javascript
// context
import { useSystem } from 'metaeditor/context/'

// material
import Button from '@mui/material/Button';

function PortalCommands() {
  const system = useSystem()

  const handleEmit = async (uuid) => event => {
    return await system.clsApi.metaEmitAsync(uuid)
  }

  return (
    <Button onClick={handleEmit('2cd6dd')}>
      Send command
    </Button>
  )
}
```

:::warning

Demo function must be a child of the MetaEditor component.

```javascript
export default function App(props) {
    return (
      <MetaEditor {...props}>
        <Demo />
      </MetaEditor>
    )
}
```

:::

## Parameters

| Keys              | Format   | Default value | Description                                                                                                                                                                                                                              |
| ----------------- | -------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `command`         | `string` |               | The unique command name that Unreal Engine will receive.<br/>Type: `slug` (lowercase, no spaces)                                                                                                                                         |
| `request.body`    | `json`   | `{}`          | An object with the data that Unreal Engine will receive as the contents of the command.                                                                                                                                                  |
| `verification_id` | `string` | `undefined`   | This is the unique identifier for the command. With it, you can distinguish between two identical commands sent to the Unreal Engine.<br/><br/>If you specify `undefined"`, then MetaEditor will automatically assign a sequence number. |
| `fakeResponse`    | `json`   | `false`       | Callback emulation for testing commands without waiting for a callback from Unreal Engine.                                                                                                                                               |
