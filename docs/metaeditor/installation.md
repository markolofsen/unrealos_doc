---
title: Pixel Streaming Installation
sidebar_label: Installation
---

# PixelStreaming settings

[Official Guide for Pixel Streaming](https://docs.unrealengine.com/5.0/en-US/hosting-and-networking-guide-for-pixel-streaming-in-unreal-engine/)

## Installation

```bash
npm install rsuite pixel-streaming
# or
yarn add rsuite pixel-streaming
```

## Settings

```tsx title="src/Player.tsx"
import React from 'react'

// global styles
import 'rsuite/dist/rsuite.min.css'

// libs
import { Player, ContextProvider, usePlayer, useSystem, PlayerPropsSchema } from 'pixel-streaming'


const PlayerContext: React.FC<any> = ({ build }: any) => {
  const player = usePlayer()
  const system = useSystem()

  React.useEffect(() => {

    if (player.cls.initReady) {
      // player.cls.initPlayer('https://i-00c56684d4fff23e4.cloudvec.com')
      system.cls.connectBuild(build)
    }

  }, [player.cls.initReady])

  return (
    <Player {...playerConfig} />
  )

}

const playerConfig: PlayerPropsSchema = {
  // apiKey: '3e9e49c6-60eb-469b-80b6-9a9b53fa7f73',
  metaConfig: {
    showToolbar: true,
    showQuickMenu: true,
    showDevBar: true,
    showOverlay: true,
    notifications: {
      showCommands: false,
      showCallbacks: false,
      placement: 'topStart',
    },
    videoUrl: null,
    issuesUrl: 'https://metaeditor.io/feature-requests/',
  },
  config: {
    secondsToKill: 60 * 5,
    secondsToStart: 0,
    autoRestart: true,
  },
  psConfig: {
    enableVerboseLogging: false,
    enableSpsAutoplay: true,
    startVideoMuted: false,
    autoPlayAudio: false,
    controlScheme: 1,
    suppressBrowserKeys: true,
    fakeMouseWithTouches: true,
  },
  ueSettings: {
    Encoder: {
      TargetBitrate: -1,
      MaxBitrate: 20000000,
      MinQP: 0, //-1
      MaxQP: 51, //-1
      RateControl: 'CBR', //"CBR" | "VBR" | "ConstQP"
      FillerData: true,
      MultiPass: 'FULL', //"DISABLED" | "QUARTER" | "FULL";
    },
    WebRTC: {
      DegradationPref: 'MAINTAIN_FRAMERATE', //"BALANCED" | "MAINTAIN_FRAMERATE" | "MAINTAIN_RESOLUTION";
      MinBitrate: 100000,
      MaxBitrate: 20000000,
      LowQP: 25,
      HighQP: 37,
      MaxFPS: 60,
      FPS: 60,
    },
    Console: {
      cursor: false,
      hudSats: true,
    }
  }
}

const CustomPlayer: React.FC<any> = ({ build }) => (
  <ContextProvider>
    <PlayerContext build={build} />
  </ContextProvider>
)

export default CustomPlayer
```

## Attention!

- React `18.1.0`

- Node `16.*`

## Built With

- [React](https://reactjs.org/) — A JavaScript library for building user interfaces

- [MetaEditor](https://metaeditor.io/) — Complete set of tools for professional developing and running the Unreal Engine’s Applications in browsers.

- [Unreal Engine Pixel Streaming](https://docs.unrealengine.com/5.0/en-US) — Library for Unreal Engine.

- [React Suite](https://www.npmjs.com/package/rsuite) — Set of react component libraries for enterprise system products.
