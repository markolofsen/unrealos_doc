
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

// styles
import { styled } from '@site/src/styles/snippets'

// material
import Button from '@mui/material/Button'
import Icon from '@mui/material/Icon'
import Typography from '@mui/material/Typography'


const IconPlus = styled.custom(Icon, theme => ({
  color: theme.palette.success.main,
}))

const IconMinus = styled.custom(Icon, theme => ({
  opacity: .3,
}))


const PageHeaderList = styled.ul(theme => ({
  listStyle: 'none none',

  padding: theme.spacing(10, 0, 15),
  maxWidth: 700,
  margin: '0 auto',

  '& > li': {
    textAlign: 'center',
  },
  '& > [data-li="tilte"]': {
    ...theme.typography.h2,
    '& > span': {
      color: theme.palette.success.main,
    }
  },
  '& > [data-li="subtilte"]': {
    ...theme.typography.h6,
  },
  '& > [data-li="subtilte"]': {
    ...theme.typography.body1,
  },
}))

const TableDiv = styled.div(theme => ({
  borderTop: `solid 1px rgba(255,255,255, .1)`,
  padding: theme.spacing(10, 0, 20),

  '& ul': {
    listStyle: 'none none',
    margin: 0,
    padding: 0,
  },
  '& [data-row]': {
    display: 'flex',
    '& > li': {
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



const HeaderList = styled.ul(theme => ({

  '& > li': {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4, 3, 2),
    '&:nth-child(3)': {
      border: `solid 1px rgba(255,255,255, .1)`,
      borderBottom: 0,
      borderRadius: '10px 10px 0 0',
      backgroundColor: 'rgba(255,255,255, .05)',
    },
    '& > [data-el="reccomend"]': {
      position: 'absolute',
      margin: theme.spacing(-5.5, 0, 0, -2),
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
      padding: theme.spacing(1, 0, 2),
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
      },
    },
    '& > ul': {
      flex: 1,
      '& > [data-li="description"]': {
        opacity: .7,
        marginTop: theme.spacing(2),
      }
    },
  },

  '& label': {
    ...theme.typography.h5,
  },

}))

const RowGroup = styled.div(theme => ({
  backgroundColor: 'rgba(0,0,0, .3)',
  padding: 10,
  borderRadius: 10,
}))

const RowList = styled.ul(theme => ({

  borderBottom: `solid 1px rgba(255,255,255, .1)`,
  '& > li': {
    padding: theme.spacing(1.5, 3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    '&:nth-child(1)': {
      '& > small': {
        opacity: .7,
        fontSize: '.8rem',
      }
    },
    '&:nth-child(n+2)': {
      alignItems: 'center',
    },

    '&:nth-child(3)': {
      border: `solid 1px rgba(255,255,255, .1)`,
      borderTop: 0,
      borderBottom: 0,
      backgroundColor: 'rgba(255,255,255, .05)',
    },

  }

}))



const GetIcon = ({ variant }) => {


  if (variant === '+') {
    return (
      <IconPlus>check</IconPlus>
    )
  }

  else if (variant === '-') {
    return (
      <IconMinus>remove</IconMinus>
    )
  }


  return;
}






export default function Pricing() {
  const {
    siteConfig: { organizationName, projectName },
  } = useDocusaurusContext();

  const startUrl = useBaseUrl('docs/')
  const buyUrl = useBaseUrl('community/')

  const data = [
    {
      slug: 'community',
      name: 'Community',
      description: 'Get started with the industry-standard UI library for building React user interfaces (open-source, MIT licensed).',
      price: {
        value: 0,
        text: '– free forever.'
      },
      button: (
        <Link
          fullWidth
          size="large"
          variant="outlined"
          color="inherit"
          component={Button}
          to={startUrl}>
          Get Started
        </Link>
      )
    },
    {
      slug: 'business',
      name: 'Business',
      description: 'Suitable for professional developers building enterprise solutions for a large audience.',
      price: {
        value: 186,
        text: '/ developer.'
      },
      button: (
        <Link
          fullWidth
          size="large"
          variant="contained"
          color="primary"
          component={Button}
          to={buyUrl}>
          Buy Now
        </Link>
      ),
    },
    {
      slug: 'enterprise',
      name: 'Enterprise',
      description: 'Unlock all the most advanced features and professional support.',
      price: {
        value: 599,
        text: '/ developer.'
      },
      button: (
        <Link
          size="large"
          variant="outlined"
          color="inherit"
          component={Button}
          to={buyUrl}>
          Request
        </Link>
      ),
    },
  ]

  const rows = {
    client: [
      {
        label: 'Webrtc connection duration per user session',
        community: '10 min.',
        business: 'Unlimited',
        enterprise: 'Unlimited',
      },
      // {
      //   label: 'Some new',
      //   community: '+',
      //   business: '+',
      //   enterprise: '+',
      // },
    ],
    plugin: [
      {
        label: (
          <>
            <div>
              Mechanism for testing commands in Standalone mode.
            </div>
            <small>
              No need to rebuild the project.
            </small>
          </>
        ),
        community: '50 commands',
        business: 'Unlimited',
        enterprise: 'Unlimited',
      },
      // {
      //   label: 'Some new',
      //   community: '+',
      //   business: '+',
      //   enterprise: '+',
      // },
    ],
    support: [
      {
        label: 'Community',
        community: <GetIcon variant="+" />,
        business: <GetIcon variant="+" />,
        enterprise: <GetIcon variant="+" />,
      },
      {
        label: 'Bug reports & feature requests',
        community: <GetIcon variant="+" />,
        business: '+ Priority over Community',
        enterprise: '+ Priority over Pro',
      },
      {
        label: (
          <>
            <div>
              Technical advisory.
            </div>
            <small>
              Subject to fair use policy
            </small>
          </>
        ),
        community: <GetIcon variant="-" />,
        business: <GetIcon variant="-" />,
        enterprise: '?',
      },
      {
        label: 'Support duration',
        community: <GetIcon variant="-" />,
        business: '1 year',
        enterprise: '1 year',
      },
      {
        label: 'Guaranteed response time',
        community: <GetIcon variant="-" />,
        business: '1 year',
        enterprise: (
          <>
            <div>
              2 business days
            </div>
            <small>
              1 business day (priority only)
            </small>
          </>
        ),
      },
      {
        label: 'Pre - screening',
        community: '-',
        business: '-',
        enterprise: (
          <>
            <div>
              4 hours
            </div>
            <small>
              priority only
            </small>
          </>
        ),
      },
      {
        label: 'Issue escalation',
        community: '-',
        business: '-',
        enterprise: 'priority only',
      },
    ]
  }

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
    <Layout
      title="Pricing"
      description="">
      <main className="container margin-vert--lg">

        <PageHeaderList>
          <li>
            <Heading as="h4">
              Pricing
            </Heading>
          </li>
          <li data-li="tilte">
            Start using <span>MetaEditor</span> for free!
          </li>
          <li data-li="subtilte">
            The community edition lets you get started right away. Buy MetaEditor Pro to get more features and professional support.
          </li>
        </PageHeaderList>

        <TableDiv>
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
                  <li data-li="description">
                    {item.description}
                  </li>
                </ul>

                <div data-el="price">
                  <span data-free={item.price.value === 0}>
                    ${item.price.value}
                  </span>
                  <small>{item.price.text}</small>
                </div>

                {item.button}
                {/* <Button
                  endIcon={<Icon>chevron_right</Icon>}
                  size="large"
                  color="primary"
                  variant={item.button.isOutlined ? 'outlined' : 'contained'}
                  disabled={.disabled}>
                  {item.button.label}
                </Button> */}
              </li>
            ))}
          </HeaderList>

          {renderGroupList('Frontend (open-source)', rows.client)}

          {renderGroupList('UE Plugin (open-source)', rows.plugin)}

          {renderGroupList('Support', rows.support)}

        </TableDiv>

      </main>
    </Layout>
  );
}
