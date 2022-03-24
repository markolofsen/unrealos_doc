import React from 'react';

// material
import Icon from '@mui/material/Icon'

// styles
import { styled } from '@site/src/styles/snippets'


const IconPlus = styled.custom(Icon, theme => ({
  color: theme.palette.success.main,
}))

const IconMinus = styled.custom(Icon, theme => ({
  opacity: .3,
}))

const SmartIconList = styled.ul(theme => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& > [data-li="text"]': {
    opacity: .5
  }
}))

const SmartIcon = ({ variant, priority }) => {

  const getIcon = () => {
    if (variant === 'yes') {
      return <IconPlus>check</IconPlus>
    }

    else if (variant === 'no') {
      return <IconMinus>remove</IconMinus>
    }
  }

  const getText = () => {
    let text = ''
    if (priority == 1) {
      text = 'Priority over Community'
    } else if (priority == 2) {
      text = 'Priority over Business'
    }
    return (
      <small>
        {text}
      </small>
    )
  }

  return (
    <>
      {getIcon()}
      {getText()}
    </>
  )

}

export default SmartIcon