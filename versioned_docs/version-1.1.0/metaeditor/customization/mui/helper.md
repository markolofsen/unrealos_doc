---
title: MUI helper
sidebar_label: Helper
---




### Material Icons finder

* [MUI Icon Component](https://mui.com/components/icons/)
* [Icons Finder](https://fonts.google.com/icons)

```javascript
import Icon from '@mui/material/Icon';


return (
    <Icon>document</Icon>
)
```

### Samples

```javascript
import * as React from 'react';

// styles
import { styled, css, darken, lighten, alpha, withStyles } from 'metaeditor/common/styles/'

const RootDiv = styled.div(theme => ({
}))

const RootList = styled.ul(theme => ({
}))

const Custom = styled.custom(Element, theme => ({

}))

```


### Styles props

```javascript

// styles

import { styled } from 'metaeditor/common/styles/'

const RootDiv = styled.div(theme => ({
  borderRadius: css.makeRadius(0, 0, 'auto', 'auto'),
  borderRadius: css.makeRadius(),
}))

```


### Transition


```javascript
const useStyles = makeStyles(theme => ({
    root: {
        transition: theme.transitions.create(['all', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    root: {
        transition: theme.transitions.create(['all', 'width']),
    }
}))
```

### Breakpoints

```javascript
const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.down('xs')]: {
            width: 'auto',
        },
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
        },
    },
}))
```

### Font weight

```javascript
const useStyles = makeStyles(theme => ({
    root: {
        fontWeight: theme.typography.fontWeightLight,
        fontWeight: theme.typography.fontWeightRegular,
        fontWeight: theme.typography.fontWeightMedium,
        fontWeight: theme.typography.fontWeightBold,
    },
}))
```


