
import React from 'react';

// docusaurus
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';


// styles
import { styled } from '@site/src/styles/snippets'

// material
import Icon from '@mui/material/Icon'
import Typography from '@mui/material/Typography'

// blocks
import TableHeader from './TableHeader';
import TableRows from './TableRows'


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
  },

}))




export default function Pricing() {
  const {
    siteConfig: { organizationName, projectName },
  } = useDocusaurusContext();

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
          <TableHeader />
          <TableRows />
        </TableDiv>

      </main>
    </Layout>
  );
}
