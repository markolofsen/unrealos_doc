
 import React from 'react';
 import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
 import Layout from '@theme/Layout';
 import Heading from '@theme/Heading';
 
 
 export default function Pricing() {
   const {
     siteConfig: {organizationName, projectName},
   } = useDocusaurusContext();

   return (
     <Layout
       title="Pricing"
       description="">
       <main className="container margin-vert--lg">
         <Heading as="h1">
            Pricing
         </Heading>

       </main>
     </Layout>
   );
 }
 