---
title: Commands
sidebar_label: Commands
---

## How to add a command

1. [Choose a project on MertaPortal](https://portal.metaeditor.io/user/projects/) and add a new command.

2. Each added command receives a uuid tag, which serves as a shortcut to invoke the command from MetaEditor.

3. All added commands are displayed in the developer panel.

## How to find the uuid shortcut

1. In the list of commands in the developer panel, click on the subtitle
   (example `camera_zoom #2c2453`)

2. The copied label can be invoked via [metaEmitAsync](../metaeditor/methods/commands.md)

## How to execute command via uuid shortcut

```javascript
import React from "react"

// context
import { useSystem } from 'metaeditor/context/';

// material
import Button from '@mui/material/Button';

/**
 * To execute commands through a uuid shortcut, 
 * specify the API key of your project in MetaPortal.
 */
const API_KEY = '3e9e49c6-60eb-469b-80b6-9a9b53fa7f73'


function PortalCommands() {
  const system = useSystem()

  React.useEffect(() => {

    /**
     * After the commands are loaded, MetaEditor will know 
     * which command to execute when receiving a uuid shortcut.
     */
    system.cls.loadData(API_KEY)

  }, [])

  const handleEmit = async (uuid) => event => {
    await system.clsApi.metaEmitAsync(uuid)
  }

  return (
    <Button onClick={handleEmit('2cd6dd')}>
      Send command
    </Button>
  )
}
```
