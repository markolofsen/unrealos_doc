---
title: Helpers
sidebar_label: Helpers
---

## Helpers

```javascript
import helpers from 'metalib/common/helpers/'

const {format, array} = helpers
```

### array

```javascript
import {array} from 'metalib/common/helpers/'

// Split array
array.split([1,2,3], size = 2)

```

### format

```javascript
import {format} from metalib/common/helpers/'

// Get uuid
format.uuid()

// Replace breakspace to br
format.nl2br(`
String 1
String 2
String 3
`)

// Number format
format.number(100, {
    decimal: 2,
    addon: '$',
    separator: ','
})

// Currency format
format.money(100, '$')

// Big number format
format.numberShortener(100000000)

// Seconds format
format.seconds(60)
format.seconds(60, 'small')
format.seconds(60, 'seconds')

// Megabytes
format.megabytes(1024, 0)

// Bytes
format.bytes(1024 * 1024, 0)

// Text to links
format.textToLinks('Some text https://google.com with link')

// Text shortener
format.textShortener('Long text...', 10)

// Random integer
format.randomInt(100, 1000)


```
