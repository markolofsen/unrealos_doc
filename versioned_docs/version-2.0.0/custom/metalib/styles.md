---
title: Styles
sidebar_label: Styles
---

### Custom media

```javascript
// styles
import { media } from 'metalib/styles/'

const RootDiv = styled.div(theme => ({
    [media.down.sm]: {
      height: 28,
    },
    [media.up.sm]: {
      height: 50,
    },
}))


```

### Styled

```javascript
// styles
import { styled, css, darken, lighten, alpha, withStyles } from 'metalib/styles/'

const RootDiv = styled.div(theme => ({
  borderRadius: css.makeRadius(0, 0, 'auto', 'auto'),
  borderRadius: css.makeRadius(),
}))

const RootList = styled.ul(theme => ({
}))

const Custom = styled.custom(Box, theme => ({

}))
```

### Transitions

[Transitions - Material UI](https://mui.com/material-ui/customization/transitions/)

```javascript
// styles
import { styled } from 'metalib/styles/'

const RootDiv = styled.div(theme => ({
    transition: theme.transitions.create(['all', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    transition: theme.transitions.create(['all', 'width']),
}))
```

### Breakpoints

[Breakpoints - Material UI](https://mui.com/material-ui/customization/breakpoints/)

```javascript
// styles
import { styled } from 'metalib/styles/'

const RootDiv = styled.div(theme => ({
    [theme.breakpoints.down('xs')]: {
        width: 'auto',
    },
    [theme.breakpoints.up('sm')]: {
        width: 'auto',
    },
}))
```
