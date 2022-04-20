---
title: Hooks
sidebar_label: Hooks
---

### useContainerDimensions

```javascript
import * as React from 'react'
import {useContainerDimensions} from 'metaeditor/common/hooks/'

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
import {useCountdown} from 'metaeditor/common/hooks/'

function MyComponent() {
  const countdown = useCountdown({seconds: 60});

  // countdown.start()
  // countdown.stop()
  // countdown.value
}
```

### useStateEvents & useReducerEvents

```javascript
import * as React from 'react'
import {useStateEvents, useReducerEvents} from 'metaeditor/common/hooks/'

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
import {useHotkeys} from 'metaeditor/common/hooks/'

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

### useMedia

```javascript
import {useMedia} from 'metaeditor/common/hooks/'

function MyComponent() {
    const media = useMedia();
    const isMobile = media.down.sm

    console.warn(media)

    // Response:
    // "up":{"xs":true,"sm":true,"md":true,"lg":false,"xl":false},
    // "down":{"xs":false,"sm":false,"md":true,"lg":true,"xl":true},

    return (
        <div>

            {media.up.sm && (
                <div>Over sm</div>
            )}
            {media.down.sm && (
                <div>Less then sm</div>
            )}

            <pre>
                {JSON.strinigy(media, null, 4)}
            </pre>
        </div>
    )
}
```

### useNotify

```javascript
import {useNotify} from 'metaeditor/common/hooks/'

function MyComponent() {
  const notify = useNotify()

  const sendNotification = (content) => {
    notify.info(content, {key: undefined})
  }

  return (
    <div>

      <button onClick={() => {

        sendNotification((
          <div>
            Some html content
          </div>
        ))

      }}>Normal</button>

    </div>
  )
}
```

### useParseUrl

```javascript
import {useParseUrl} from 'metaeditor/common/hooks/'

function MyComponent() {
  const parseUrl = useParseUrl()

  React.useEffect(() => {
      if (parseUrl.active && parseUrl.query?.mode === 'dev') {
        alert('Good!')
      }
    }, [parseUrl.active])
}
```

### useSound

```javascript
import {useSound} from 'metaeditor/common/hooks/'

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
import {useStorage} from 'metaeditor/common/hooks/'

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
import {useUnload} from 'metaeditor/common/hooks/'

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
import {useWindowSize} from 'metaeditor/common/hooks/'

function MyComponent() {
    const windowSize = useWindowSize();

    return (
        <div>
            {windowSize.width}px / {windowSize.height}px
        </div>
    );
}
```