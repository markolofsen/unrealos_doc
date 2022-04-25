
import * as React from 'react';

// docusaurus
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';




const BoardToken = 'a81502ba-2241-d615-c4e5-9c9fe182798d';


const Feedback = () => {
  React.useEffect(() => {
    (function (w, d, i, s) { function l() { if (!d.getElementById(i)) { var f = d.getElementsByTagName(s)[0], e = d.createElement(s); e.type = "text/javascript", e.async = !0, e.src = "https://canny.io/sdk.js", f.parentNode.insertBefore(e, f) } } if ("function" != typeof w.Canny) { var c = function () { c.q.push(arguments) }; c.q = [], w.Canny = c, "complete" === d.readyState ? l() : w.attachEvent ? w.attachEvent("onload", l) : w.addEventListener("load", l, !1) } })(window, document, "canny-jssdk", "script");

    Canny('render', {
      boardToken: BoardToken,
      basePath: null, // See step 2
      ssoToken: null, // See step 3
    });
  }, []);

  return (
    <div data-canny style={{
      background: 'var(--ifm-color-primary-lightest)',
      borderRadius: 10,
      padding: '2rem',
    }} />
  );
}


export default function FeatureRequest() {
  const {
    siteConfig: { organizationName, projectName },
  } = useDocusaurusContext();

  return (
    <Layout
      title="Feature Requests"
      description="">
      <main className="container margin-vert--lg">

        <Heading as="h1">
          Feature Requests
        </Heading>

        <Feedback />

      </main>
    </Layout>
  );
}
