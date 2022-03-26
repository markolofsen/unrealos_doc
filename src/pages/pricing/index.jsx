
import React from 'react';

// docusaurus
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

// styles
import { styled, media } from '@site/src/styles/snippets'

// blocks
import TableHeader from './TableHeader';
import TableRows from './TableRows'

// components
import MobileTabs from './components/MobileTabs'


const PageHeaderList = styled.ul(theme => ({
  listStyle: 'none none',
  maxWidth: 700,
  margin: '0 auto',

  [media.down.sm]: {
    padding: theme.spacing(5, 0, 10),
  },
  [media.up.sm]: {
    padding: theme.spacing(10, 0, 15),
  },

  '& > li': {
    textAlign: 'center',
  },
  '& > [data-li="tilte"]': {
    ...theme.typography.h2,
    '& > span': {
      color: theme.palette.success.main,
    },
    [media.down.sm]: {
      paddingBottom: theme.spacing(10),
      lineHeight: '3rem',
      '& > span': {
        display: 'block',
      }
    },
  },
  '& > [data-li="subtilte"]': {
    ...theme.typography.h6,
  },
  '& > [data-li="subtilte"]': {
    ...theme.typography.body1,
  },
}))

const TableDiv = styled.div(theme => ({

  ...theme.typography.body1,

  // [media.down.sm]: {
  //   padding: theme.spacing(50, 0, 10),
  // },
  [media.up.sm]: {
    padding: theme.spacing(10, 0, 20),
    borderTop: `solid 1px rgba(255,255,255, .1)`,
  },


  // [media.down.md]: {
  //   fontSize: '0.9rem',
  // },
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
        width: '100%',
        [media.up.md]: {
          flex: '0 0 25%',
          maxWidth: '25%',
        },

      },
    },
  },


  // For mobiles
  [media.down.sm]: {
    '& [data-mobile-hidden="true"]': {
      display: 'none',
    },
  },

}))




export default function Pricing() {
  const {
    siteConfig: { organizationName, projectName },
  } = useDocusaurusContext();

  const [mounted, setMounted] = React.useState(true) //hack for ssr jss of docusaurus
  const [menuIndex, setMenuIndex] = React.useState(0)

  React.useEffect(() => {

    setMounted(false)
    setTimeout(() => setMounted(true), 300)

  }, [])

  if (!mounted) return <div />

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

        <MobileTabs value={menuIndex} onChange={setMenuIndex} />

        <TableDiv>
          <TableHeader menuIndex={menuIndex} />
          <TableRows menuIndex={menuIndex} />
        </TableDiv>

      </main>
    </Layout>
  );
}
