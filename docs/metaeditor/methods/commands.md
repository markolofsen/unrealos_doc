---
title: Pixel Streaming Commands
sidebar_label: Commands
---

:::info
This page shows an example of sending a command from MetaEditor to Unreal Engine.

Your Application should be wrapped in [ContextProvider](../settings/context_provider.md)
:::

## Async Commands

```tsx title="src/AsyncCommands.tsx"
import React from 'react'

// ui
import Button from 'rsuite/Button'

// libs
import { usePlayer } from 'pixel-streaming'


export const CommandsAsync: React.FC<any> = () => {
  const player = usePlayer()

  const [disabled, setDisabled] = React.useState<boolean>(false)

  const emitAsyncCommand = (commandName: string, value: any) => async () => {
    setDisabled(true)
    await player.cls.emitAsyncCommand(commandName, value).then((res: any) => {
      if (res) {
        console.log('@@@callback', JSON.stringify(res, null, 4))
      }
    })
    setDisabled(false)
  }

  return (
    <div>

      <h5>
        Async Commands
      </h5>

      <div data-actions>
        <Button appearance='primary' disabled={disabled} onClick={emitAsyncCommand('switchvariant', { set: 0, index: 2 })}>
          Color: white
        </Button>
        <Button appearance='primary' disabled={disabled} onClick={emitAsyncCommand('switchvariant', { set: 0, index: 1 })}>
          Color: black
        </Button>
      </div>

    </div>
  )
}
```

## System Commands

```tsx title="src/SystemCommands.tsx"
import React from 'react'

// ui
import Button from 'rsuite/Button'

// libs
import { usePlayer } from 'pixel-streaming'

export const CommandsSystem: React.FC<any> = () => {
  const player = usePlayer()

  const emitCommandSystem = (commandName: string, value: any) => async () => {
    player.cls.emitCommandSystem(commandName, value)
  }

  return (
    <div>

      <h5>
        System Commands
      </h5>

      <div data-actions>
        <Button appearance='primary' onClick={emitCommandSystem('debug_mode', { mode: 'off' })}>
          Debug: off
        </Button>
        <Button appearance='primary' onClick={emitCommandSystem('debug_mode', { mode: 'on' })}>
          Debug: on
        </Button>
      </div>

    </div>
  )
}
```


## Commands Body

| Keys              | Format   | Default value | Description                                                                                                                                                                                                                              |
| ----------------- | -------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `command`         | `string` |               | The unique command name that Unreal Engine will receive.<br/>Type: `slug` (lowercase, no spaces)                                                                                                                                         |
| `request.body`    | `json`   | `{}`          | An object with the data that Unreal Engine will receive as the contents of the command.                                                                                                                                                  |
| `verification_id` | `string` | `undefined`   | This is the unique identifier for the command. With it, you can distinguish between two identical commands sent to the Unreal Engine.<br/><br/>If you specify `undefined"`, then MetaEditor will automatically assign a sequence number. |
