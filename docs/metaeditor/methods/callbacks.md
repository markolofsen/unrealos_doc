---
title: Callbacks
sidebar_label: Callbacks
---

:::info

This page shows how to get a callback from Unreal Engine in MetaEditor.

:::

## Get command & callback event

```javascript
import * as React from 'react';

// context
import { usePlayer } from "metaeditor/context/";

export default function Demo() {
  const player = usePlayer()

  const onCommand = (payload) => {
    if (payload.command === 'test_command') {
      alert('Command\n' + JSON.stringify(payload))
    }
  }

  const onCallback = (payload) => {
    if (payload.command === 'test_command') {
      alert('Callback\n' + JSON.stringify(detail))
    }
  }

  player.cls.useTrigger({ onCommand, onCallback })

  return (...)
}
```

## Get async callback

```javascript
import * as React from 'react';

// context
import { usePlayer } from 'metaeditor/context/';

// material
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Demo() {
  const player = usePlayer()
  const [disabled, setDisabled] = React.useState(false)

  const testCommand = async () => {
    setDisabled(true)
    await player.cls.emitAsync({
      command: 'change_color',
      request: {
        // The request body should only contain a json object.
        body: { volume: 1 },
      },

      // If the callback emulation option is enabled, then the contents of fakeResponse will be returned as response.body
      fakeResponse: undefined,
    }).then(res => {
      if (res) {
        alert('Callback received!')
        console.log(res)
      }
    })
    setDisabled(false)
  }

  if (!player.state.active) {
    return (<div />)
  }

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Button variant="outlined" color="inherit" disabled={disabled} onClick={testCommand}>
        Test command
      </Button>
    </Box>
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
