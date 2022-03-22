
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

// theme
import ThemeProvider, { styled } from '@site/src/styles/ThemeProvider'

// material
import Button from '@mui/material/Button'


const RootDiv = styled.div(theme => ({
  borderTop: `solid 1px rgba(255,255,255, .1)`,
  marginTop: theme.spacing(10),
  paddingTop: theme.spacing(10),

  '& ul': {
    listStyle: 'none none',
    margin: 0,
    padding: 0,
  },
  '& [data-row]': {
    display: 'flex',
    '& > li': {
      padding: theme.spacing(3),
      '&:nth-child(1)': {
        flexGrow: 1,
      },
      '&:nth-child(n+2)': {
        flex: '0 0 25%',
        maxWidth: '25%',
      },
    },
  }
}))

const HeaderList = styled.ul(() => ({

  '& > li': {
    display: 'flex',
    flexDirection: 'column',
    '&:nth-child(3)': {
      border: `solid 1px rgba(255,255,255, .1)`,
      borderBottom: 0,
      borderRadius: '10px 10px 0 0',
      backgroundColor: 'rgba(255,255,255, .05)',
    },
    '& > [data-el="reccomend"]': {
      position: 'absolute',
      margin: theme.spacing(-4.5, 0, 0),
      borderRadius: 100,
      color: theme.palette.primary.main,
      border: 'solid 1px',
      borderColor: theme.palette.primary.main,
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(.3, 1.5),
      // ...theme.typography.subtitle2,
      fontSize: 12,
      fontWeight: theme.typography.fontWeightBold,
    },
    '& > [data-el="price"]': {
      padding: theme.spacing(4, 0),
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      '& > span': {
        ...theme.typography.h3,
        color: theme.palette.primary.main,
        '&[data-free="true"]': {
          color: theme.palette.success.main,
        },
      },
      '& > small': {
        marginLeft: 10,
        opacity: .6,
      }
    },
    '& > ul': {
      flex: 1,
      // marginBottom: theme.spacing(3),
    },
  },

  '& label': {
    ...theme.typography.h5,
  },

}))

const RowGroup = styled.div(() => ({
  backgroundColor: 'rgba(0,0,0, .3)',
  padding: 10,
  borderRadius: 10,
}))

const RowList = styled.ul(() => ({

  borderBottom: `solid 1px rgba(255,255,255, .1)`,
  '& > li': {
    padding: '2rem 0',
    '&:nth-child(n+2)': {
      textAlign: 'center',
    },

    '&:nth-child(3)': {
      border: `solid 1px rgba(255,255,255, .1)`,
      borderTop: 0,
      borderBottom: 0,
      backgroundColor: 'rgba(255,255,255, .05)',
    },

  }

}))


const data = [
  {
    slug: 'community',
    name: 'Community',
    description: 'Get started with the industry-standard UI library for building React user interfaces (open-source, MIT licensed).',
    price: {
      value: 0,
      text: '– free forever.'
    },
    button: {
      label: 'Get Started',
      disabled: false,
      isOutlined: true,
    },
  },
  {
    slug: 'business',
    name: 'Business',
    description: '...',
    price: {
      value: 186,
      text: '/ developer.'
    },
    button: {
      label: 'Buy Now',
      disabled: false,
      isOutlined: false,
    },
  },
  {
    slug: 'enterprise',
    name: 'Enterprise',
    description: '...',
    price: {
      value: 599,
      text: '/ developer.'
    },
    button: {
      label: 'In Progress!',
      disabled: true,
      isOutlined: true,
    },
  },
]
const rows = [
  {
    label: 'Some name',
    community: 'c +',
    business: 'b +',
    enterprise: 'e +',
  },
  {
    label: 'Some new',
    community: '+',
    business: '+',
    enterprise: '+',
  },
]

export default function Pricing() {
  const {
    siteConfig: { organizationName, projectName },
  } = useDocusaurusContext();


  const renderGroupList = (title, list) => {
    return (
      <>
        <RowGroup>
          {title}
        </RowGroup>

        {list.map((item, index) => (
          <RowList data-row key={index}>
            <li>
              {item.label}
            </li>

            {['community', 'business', 'enterprise'].map((key, i) => (
              <li key={`${index}-${i}`}>
                {item[key]}
              </li>
            ))}

          </RowList>
        ))}
      </>
    )
  }

  return (
    <ThemeProvider>
      <Layout
        title="Pricing"
        description="">
        <main className="container margin-vert--lg">
          <Heading as="h1">
            Pricing
          </Heading>


          The community edition lets you get going right away. Switch to MUI X Pro to get more components & professional support.


          <RootDiv>

            <HeaderList data-row>
              <li>
                <label>Plans</label>
              </li>
              {data.map((item, index) => (
                <li key={index}>

                  {item.slug === 'business' && (
                    <div data-el="reccomend">
                      Reccomended
                    </div>
                  )}

                  <ul>
                    <li>
                      <label>{item.name}</label>
                    </li>
                    <li>
                      {item.description}
                    </li>
                  </ul>

                  <div data-el="price">
                    <span data-free={item.price.value === 0}>
                      ${item.price.value}
                    </span>
                    <small>{item.price.text}</small>
                  </div>

                  <Button
                    color="primary"
                    variant={item.button.isOutlined ? 'outlined' : 'contained'}
                    disabled={item.button.disabled}>
                    {item.button.label}
                  </Button>
                </li>
              ))}
            </HeaderList>

            {renderGroupList('ME Core (open-source)', rows)}

            {renderGroupList('Support', rows)}

          </RootDiv>


        </main>
      </Layout>
    </ThemeProvider>
  );
}
