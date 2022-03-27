---
title: Commands
sidebar_label: Commands
---





## How to send command

```javascript
/**
 * Note that the Demo() function must be a child of the MetaEditor component.
 * <MetaEditor {{...}}>
 *    <Demo />
 * </MetaEditor>
 */

import Button from '@mui/material/Button';
import { usePlayer } from 'components/MetaEditor/context/'

function Demo() {
  const player = usePlayer()

  const handleCommand = (type, value, verification_id = null) => event => {
    player.cmd.EMIT({type, value, verification_id})
  }

  return (
    <Button onClick={handleCommand('demo_command', { anyObject: [.1, 3.14] })}>
      Send command to Unreal Engine
    </Button>
  )
}
```


