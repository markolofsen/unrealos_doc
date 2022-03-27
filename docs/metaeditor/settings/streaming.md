---
title: Connecting to a streaming server
sidebar_label: Streaming
---

import DocsMessage from "@site/src/components/DocsMessage.jsx"

## Procedure

* Open `/src/api/env.js`

* Specify the URL (endpoint) of your API server to receive the response (with variable: `apiUrl`)



## To automatically get a free streaming server, you need to run your own API server.

When MetaEditor starts, it contacts your API-server, which returns the data in the following format:

```javascript
status: 200,
body: {

  status: 'pending', // or: active
  host: 'https://streamingdomain.com',
  port: 80,
  que: 1,

  seconds_to_kill: 0,
  seconds_to_start: 0,

}
```

<DocsMessage />
