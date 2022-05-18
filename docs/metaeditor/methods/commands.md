---
title: Commands
sidebar_label: Commands
---

:::info

This page shows an example of sending a command from MetaEditor to Unreal Engine.

:::

## emitAsync()

```typescript
// soon
```

## metaEmitAsync()

> With MetaPortal you can [add new commands](../../metaportal/commands.md) and test them through the [Developer Panel](../devpanel/commands.md).

> Added commands in MetaPortal can be called through special uuid-shortcuts. This greatly simplifies the development and updating of commands.

```typescript
// soon
```

:::warning

Your component should be wrapper in `<ContextProvider />`

```typescript
// soon
```

:::

## Command Body

| Keys              | Format   | Default value | Description                                                                                                                                                                                                                              |
| ----------------- | -------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `command`         | `string` |               | The unique command name that Unreal Engine will receive.<br/>Type: `slug` (lowercase, no spaces)                                                                                                                                         |
| `request.body`    | `json`   | `{}`          | An object with the data that Unreal Engine will receive as the contents of the command.                                                                                                                                                  |
| `verification_id` | `string` | `undefined`   | This is the unique identifier for the command. With it, you can distinguish between two identical commands sent to the Unreal Engine.<br/><br/>If you specify `undefined"`, then MetaEditor will automatically assign a sequence number. |
| `fakeResponse`    | `json`   | `false`       | Callback emulation for testing commands without waiting for a callback from Unreal Engine.                                                                                                                                               |
