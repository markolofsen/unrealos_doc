---
title: MetaSnippets
sidebar_label: MetaSnippets
---

import DocsMessage from "@site/src/components/DocsMessage.jsx"

## Installation

```bash
yarn add metasnippets
```

---

## Funcs

### getDevice

```javascript
import {getDevice} from 'metasnippets/funcs/'

const {BrowserView, MobileView, isBrowser, isMobile} = getDevice()
```

---

## Helpers

```javascript
import helpers from 'metasnippets/helpers/'

const {format, custom, array} = helpers
```

---

## Hooks

### useContainerDimensions

```javascript
import React from 'react'
import {useContainerDimensions} from 'metasnippets/hooks/'

function MyComponent() {
  const componentRef = React.useRef(null);
  const { width, height, scrollTop, scrollLeft } = useContainerDimensions(componentRef);

  return (
    <div ref={componentRef}>
      <p>width: {width}px</p>
      <p>height: {height}px</p>
      <p>scrollTop: {scrollTop}px</p>
      <p>scrollLeft: {scrollLeft}px</p>
    <div/>
  )
}
```

### useCountdown

```javascript
import {useCountdown} from 'metasnippets/hooks/'

function MyComponent() {
  const countdown = useCountdown({seconds: 60});

  // countdown.start()
  // countdown.stop()
  // countdown.value
}
```

### useStateEvents & useReducerEvents

```javascript
import React from 'react'
import {useStateEvents, useReducerEvents} from 'metasnippets/hooks/'

function MyComponent() {
  const [state, dispatch] = useReducerEvents(reducer, initialState)
  const [test, setTest] = useStateEvents(false)

  React.useEffect(() => {

    document.addEventListener('demo_key', (e) => {
      console.log(e.detail)
      dispatch({...})
      // or setTest(true)
    })

  }, [])

  return (<div />)
}
```

### useHotkeys

```javascript
import {useHotkeys} from 'metasnippets/hooks/'

function MyComponent() {
  const [amount, setAmount] = useState(0)
  useHotkeys('ctrl+a', () => setAmount(prevAmount => prevAmount + 100))
  useHotkeys('ctrl+d', () => setAmount(prevAmount => prevAmount - 100))

  useHotkeys('ctrl+t', (e, ke) => {
     if(!e.repeat) {
       console.log(e.repeat);
       return ;
     }
     setAmount(prevAmount => prevAmount - 100)
   }, [c])

  return (
    <div>
      {amount >= 0 ? 'Add' : 'Remove'} {Math.abs(amount)} dollars{' '}
      {amount >= 0 ? 'from' : 'to'} my bank account.
    </div>
  )
}
```

### useSound

```javascript
import {useSound} from 'metasnippets/hooks/'

function MyComponent() {
  const sound = useSound('http://.../sound.mp3');

  // sound.play()
  // sound.stop()

  return (
    <div>
      <button onClick={() => sound.play()}>
        Play sound
      </button>
    </div>
  );
}
```

### useStorage

```javascript
import {useStorage} from 'metasnippets/hooks/'

const STORAGE_KEY = 'DEMO_KEY'

function MyComponent() {
  const storage = useStorage()
  const [data, setData] = React.useState({name: ''})

  React.useEffect(() => {

    const stored_data = storage.getItem(STORAGE_KEY, 'local')
    if(typeof stored_data === 'object') {
      setData(stored_data)
    }

  }, [])

  const handleChange = (key) => (event) => {
    const value = event.target.value

    setData(c => {
      const newData = {...c, [key]: value}
      storage.setItem(STORAGE_KEY, newData, 'local')
      return newData;
    })
  }

  return (
    <input
      type="text"
      value={data.name}
      onChange={handleChange('name')}
      type="text"
    />
  );
}
```

### useUnload

```javascript
import {useUnload} from 'metasnippets/hooks/'

function MyComponent() {

  useUnload(e => {
    e.preventDefault();
    e.returnValue = '';
  });

  return (
    <div>
      Some content
    </div>
  );
}
```

### useWindowSize

```javascript
import {useWindowSize} from 'metasnippets/hooks/'

function MyComponent() {
    const windowSize = useWindowSize();

    return (
        <div>
            {windowSize.width}px / {windowSize.height}px
        </div>
    );
}
```

## Libs

### Request

```javascript
import {Request} from 'metasnippets/libs/'

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

## Styles

### custom

```javascript
// in progress
```

### media

```javascript
// in progress
```

### theme

```javascript
// in progress
```

### styled

```javascript

```

<DocsMessage />
