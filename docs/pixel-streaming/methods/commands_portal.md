---
title: Portal Commands
sidebar_label: Portal Commands
---


With MetaPortal you can [add new commands](../../metaportal/commands.md) and test them through the Developer Panel.

Added commands in MetaPortal can be called through special uuid-shortcuts. This greatly simplifies the development and updating of commands.



:::note How to find the uuid shortcut?
1. In the list of commands in the developer panel, click on the subtitle
   (example `camera_zoom #2c2453`)

2. The copied label can be invoked via `emitUuidAsync()`
:::

:::warning
This method works if you have specified an [API key](../settings/api.md)
:::

## emitUuidAsync()

```tsx title="src/PortalCommands.tsx"
import React from 'react'

// ui
import Button from 'rsuite/Button'

// libs
import { usePlayer } from 'pixel-streaming'


export const CommandsUuid: React.FC<any> = () => {
  const player = usePlayer()

  const [disabled, setDisabled] = React.useState<boolean>(false)

  const emitUuidAsync = (commandUuid: string) => async () => {
    setDisabled(true)
    await player.cls.emitUuidAsync(commandUuid).then((res: any) => {
      if (res) {
        console.log('@@@callback', JSON.stringify(res, null, 4))
      }
    })
    setDisabled(false)
  }

  return (
    <div>

      <h5>
        Portal Commands
      </h5>

      <div data-actions>
        <Button appearance='primary' disabled={disabled} onClick={emitUuidAsync('b355d3')}>
          Color: white
        </Button>
        <Button appearance='primary' disabled={disabled} onClick={emitUuidAsync('7224e7')}>
          Color: black
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
