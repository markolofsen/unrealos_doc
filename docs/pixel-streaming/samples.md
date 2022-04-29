---
title: Pixel Streaming Methods
sidebar_label: Methods
---


### The pixel-streaming methods can be accessed in three ways:

```javascript
import React from "react";

// libs
import PixelStreaming, { usePS } from 'pixel-streaming'

function Content() {
  const PS = usePS()

  React.useEffect(() => {
      console.warn('*'.repeat(30))
      console.warn('Methods from context')
      console.dir(PS)
  }, [])

  return (<div />)
}


function App(props) {
  const refPixelStreaming = React.useRef(null)

  React.useEffect(() => {
      console.warn('*'.repeat(30))
      console.warn('Methods from ref')
      console.dir(refPixelStreaming.current)
  }, [])

  return (
    <PixelStreaming ref={refPixelStreaming} {...props}>
      {(payload) => {

        console.warn('*'.repeat(30))
        console.warn('Methods from parent object')
        console.dir(payload)

        return (
          <Content />
        )
      }}
    </PixelStreaming>
  )
}
```



### Sending console commands

> We have already added these commands to the module when starting the connection.

```javascript
import React from "react";

// libs
import { usePS } from 'pixel-streaming'

function Content() {
  const PS = usePS()

  const handleResolution = () => {
    const width = window.innerWidth
    const height = window.innerHeight

    const emitConsole = (payload) => PS.cls.emitConsole(payload)
    emitConsole(`PixelStreaming.Capturer.UseBackBufferSize 0`)
    emitConsole(`PixelStreaming.Capturer.CaptureSize ${width}x${height}`)
    emitConsole(`r.SetRes ${width}x${height}f`)
  }
  
}
```

