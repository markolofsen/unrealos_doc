---
title: Context Provider
sidebar_label: Context Provider
---

# Context Provider

Wrap your application in `ContextProvider`.

Don't call `usePlayer()` and `useSystem()` on the parent component.

```tsx title="src/App.tsx"
import React from 'react'

// libs
import { ContextProvider } from 'pixel-streaming'

import CustomContainer from './CustomContainer'

const App = () => (
  <ContextProvider>
    <CustomContainer />
  </ContextProvider>
)

export default App
```
