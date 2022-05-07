---
title: PixelStreaming settings
sidebar_label: Settings
---

# PixelStreaming settings

> [Hosting and Networking Guide for Pixel Streaming in Unreal Engine](https://docs.unrealengine.com/5.0/en-US/hosting-and-networking-guide-for-pixel-streaming-in-unreal-engine/)

:::info

For the best Pixel Streaming experience, we recommend using [MetaEditor with Pixel Streaming](../metaeditor/installation.md)

:::

## Installation

```bash
yarn add pixel-streaming
```

## Usage

```javascript
import React from "react";

// libs
import PixelStreaming, { usePS, DebugData } from 'pixel-streaming'

export default function Player(props) {
    const refPixelStreaming = React.useRef(null);

    React.useEffect(() => {

        /**
         * String host to url with signal server.
           If host starts wih `https` then it will be used `wss`
           If starts with `http` then will be used `ws`
           Example: `https://uuid1234567890.streamdomain.com`
         */

        refPixelStreaming.current.cls.initConnection({
            host: 'http://127.0.0.1',
            port: 80,
        })
    }, [])

    return (
        <div>
            <button onClick={handleConnection}>Connect</button>
            <PixelStreaming
                ref={refPixelStreaming}
                onReady={(payload) => {
                  // console.warn('ready', payload);
                }}
                onLoad={(payload) => {
                    // console.warn('loaded', payload);
                }}
                onConnect={() => {
                    // console.warn('connected');
                }}
                onRestart={() => {
                    // console.warn('onRestart');
                }}
                onError={(payload) => {
                    // console.error('error', payload);
                }}
                onClose={(payload) => {
                    // console.error('closed', payload);
                }}
                onProgress={(payload) => {
                    // console.warn('progress', payload);
                }}
                settings={{
                    lifetime: {
                        intervalSec: 0,
                        maxFps: 30,
                    },
                    resolutionMode: 'console',
                    volume: 1,
                    quality: 1,
                    pixelStreaming: {
                        warnTimeout: 120,
                        closeTimeout: 10,
                        lockMouse: false,
                        fakeMouseWithTouches: false,
                    }
                }}
                metaSettings={{
                    isDev: true,
                    showDevTools: true,
                    notifyCommands: true,
                    notifyCallbacks: true,
                }}
            >
                {(payload) => <div style={{ padding: 30 }}>{props.children}</div>}
            </PixelStreaming>
        </div>
    );
}
```

## Props

| Prop                    | Description                                                                                                                                                                                                                                                                                                                 | Type       |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| metaSettings            | Settings for MetaEditor                                                                                                                                                                                                                                                                                                     | `object`   |
| settings.lifetime       | `intervalSec` — reset frequency <br/>`maxFps` —  frames per second                                                                                                                                                                                                                                                          | `opbject`  |
| settings.resolutionMode | `console` or `command`<br/>By default is `undefined`                                                                                                                                                                                                                                                                        | `string`   |
| settings.pixelStreaming | Pixel Streaming Configuration                                                                                                                                                                                                                                                                                               | `object`   |
| children                | The function receives parameters and renders the nested component <br/>Example: `{(payload) => (...)}` <br/><br/>**Incoming parameters:** <br/>`state` — [Object with state data](#ps-state)<br/>`initConnection()` — If `autoConnect={false}`, then use the `initConnection()` function to manually connect to the stream. | `function` |
| onLoad                  | When the stream started                                                                                                                                                                                                                                                                                                     | `function` |
| onConnect               | Called when the stream is running                                                                                                                                                                                                                                                                                           |            |
| onRestart               | Called when the stream is restarted                                                                                                                                                                                                                                                                                         | `function` |
| onError                 | Called on errors in the webrtc connection                                                                                                                                                                                                                                                                                   |            |
| onClose                 | Called if the webrtc connection is closed                                                                                                                                                                                                                                                                                   |            |
| onProgress              | Return progress in percentage based on `secondsToStart`                                                                                                                                                                                                                                                                     | `function` |

<h2 id="ps-state">Reference object data</h2>

`refPixelStreaming.current.state`

| Variable              | Default                 | Description |
| --------------------- | ----------------------- | ----------- |
| aggregated_stats      | `false`                 |             |
| callback_caller       | `false`                 |             |
| callback_loading      | `false`                 |             |
| closed                | `false`                 |             |
| connect               | `false`                 |             |
| error                 | `false`                 |             |
| last_interaction      | `null`                  |             |
| loaded                | `false`                 |             |
| mouse_moving          | `false`                 |             |
| quality_speed         | `false`                 |             |
| resolution_multiplier | `1.5`                   |             |
| stream_config         | `false`                 |             |
| users_count           | `0`                     |             |
| window_size           | `{width: 0, height: 0}` |             |

## Context

```javascript
import PixelStreaming, { usePS, DebugData } from 'pixel-streaming'

function App() {

    // Do not initialize this hook more than once!
    const PS = usePS()

    const handleConnection = () => {
        PS.cls.setConnection({
            host: 'http://127.0.0.1',
            port: 80,
        })
        PS.cls.initConnection()
    }

    return (...)
}
```

## Send command to stream server

```javascript
refPixelStreaming.current.emitAsync({
 verification_id: undefined, //server response with execute command by verification id
 command: 'user_sound', //key of command
 request: {
   body: {
     volume: 1,
   }   
 },
})
```

## Event for handling callbacks from Unreal Engine

```javascript
refPixelStreaming.current.useTrigger({
  onCommand: (payload) => {
    alert(JSON.stringify(payload))
  },
  onCallback: (payload) => {
    alert(JSON.stringify(payload))
  },
})

/*
// Response Example:

{
    "verification_id": "autogenerated__1",
    "initiator": "browser",
    "command": "user_sound",
    "request": {
        "body": {
            "volume": 1
        }
    },
    "response": {
        "time": "Apr 20, 2022, 6:20:15 AM",
        "body": {
            "volume": 1
        }
    }
}
*/
```

## Attention!

- React v.`17.0.2`

- Apply style `pointerEvents: 'none'` to all JSX elements that overlap the stream.

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Unreal Engine Pixel Streaming](https://docs.unrealengine.com/5.0/en-US) - Library for Unreal Engine.
- [Styled Jss](https://www.npmjs.com/package/styled-jss) - Styled Components on top of JSS
