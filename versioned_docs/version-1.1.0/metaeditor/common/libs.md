---
title: Libs
sidebar_label: Libs
---

### Request

```javascript
import {Request} from 'metaeditor/common/libs/'

// Get 
Request.GET(url='https://...').then(res => {
  if(res.status === 200) {
    console.log(res.body)
  }
}).catch(err => {
  console.error(err)
})

// Post
const body = {value: 123}
Request.POST(url='https://...', body).then(res => {
  if(res.status === 200) {
    console.log(res.body)
  }
}).catch(err => {
  console.error(err)
})


// Delete
Request.DELETE(url='https://...').then(res => {
  if(res.status === 200) {
    console.log(res.body)
  }
}).catch(err => {
  console.error(err)
})
```
