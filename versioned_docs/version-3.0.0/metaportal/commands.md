---
title: Commands
sidebar_label: Commands
---

## How to add a command

1. [Choose a project on MertaPortal](https://portal.metaeditor.io/user/projects/) and add a new command.

2. Connect the [API key](../pixel-streaming/settings/api.md) of the project

3. Each added command receives a uuid tag, which serves as a shortcut to invoke the command from MetaEditor.

4. All added commands are displayed in the developer panel.

## How to find the uuid shortcut

1. Open the list of commands in the developer panel and click on the `"Copy"` icon next to the command.

2. The copied `uuid` can be invoked via [emitUuidAsync](../pixel-streaming/methods/commands_portal.md)
