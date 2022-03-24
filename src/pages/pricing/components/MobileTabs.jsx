import * as React from 'react';


// styles
import { styled, media } from '@site/src/styles/snippets'

// material
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};


const Tabs = styled.custom(TabsUnstyled, theme => ({
  marginBottom: theme.spacing(5),
  [media.up.md]: {
    display: 'none'
  },
}))

const Tab = styled.custom(TabUnstyled, theme => ({
  color: 'white',
  cursor: 'pointer',
  fontSize: '0.875rem',
  fontWeight: 'bold',
  backgroundColor: 'transparent',
  width: '100%',
  padding: '12px 16px',
  margin: '6px 6px',
  border: 'none',
  borderRadius: 5,
  display: 'flex',
  justifyContent: 'center',
  textTransform: 'capitalize',

  '&:hover': {
    backgroundColor: blue[400],
  },

  '&:focus': {
    color: '#fff',
    borderRadius: 3,
    outline: `2px solid ${blue[200]}`,
    outlineOffset: 2,
  },

  [`&.${tabUnstyledClasses.selected}`]: {
    backgroundColor: blue[50],
    color: blue[600],
  },

}))

const TabsList = styled.custom(TabsListUnstyled, theme => ({
  minWidth: 100,
  backgroundColor: blue[500],
  borderRadius: 8,
  marginBottom: 16,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignContent: 'space-between',
}))


const listKeys = ['community', 'business', 'enterprise']

export default function UnstyledTabsCustomized(props) {

  const handleChange = (event, value) => {
    props.onChange(value)
  }

  return (
    <Tabs value={props.value} onChange={handleChange}>
      <TabsList>
        {listKeys.map((item, index) => (
          <Tab key={index} value={index}>
            {item}
          </Tab>
        ))}
      </TabsList>
    </Tabs >
  );
}
