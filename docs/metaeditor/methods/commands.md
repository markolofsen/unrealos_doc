---
title: Commands
sidebar_label: Commands
---

## Example

```javascript
import Button from '@mui/material/Button';
import { usePlayer } from 'metaeditor/context/'

function Demo() {
  const player = usePlayer()

  const handleCommand = (type, value) => event => {

    player.cmd.emit({
      type,
      value,
      verification_id: undefined,
      emulation: true,
    })

  }

  return (
    <MetaEditor {...props}>
      <Button onClick={handleCommand('my_command_1', { anyObject: [.1, 3.14] })}>
        Send command to Unreal Engine
      </Button>
    </MetaEditor>
  )
}

```



:::warning

Demo function must be a child of the MetaEditor component.

```javas
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
| `type`            | `string` |               | The unique command name that Unreal Engine will receive.<br/>Type: `slug` (lowercase, no spaces)                                                                                                                                         |
| `value`           | `object` | `{}`          | An object with the data that Unreal Engine will receive as the contents of the command.                                                                                                                                                  |
| `verification_id` | `string` | `undefined`   | This is the unique identifier for the command. With it, you can distinguish between two identical commands sent to the Unreal Engine.<br/><br/>If you specify `undefined"`, then MetaEditor will automatically assign a sequence number. |
| `emulation`       | `string` | `false`       | Callback emulation for testing commands without waiting for a callback from Unreal Engine.                                                                                                                                               |






