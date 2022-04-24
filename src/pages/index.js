/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import * as React from 'react';
import clsx from 'clsx';

// theme
import Layout from '@theme/Layout';
import Image from '@theme/IdealImage';

// docusaurus
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

// styles
import styles from './styles.module.css';

// blocks
import Intro from './home/Intro';

import Description from '@site/docs/description.md'
import Quotes from '@site/src/data/quotes';



const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        MetaEditor is a complete solution for running and testing projects built by Unreal Engine.
        You can connect any web components to interact with the streaming server.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        MetaEditor allows you to focus on the development of Unreal Engine, and we will take care of all the work of integrating into the browser.
      </>
    ),
  },
  {
    title: 'Powered by React',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        A complete solution for launching your own project based on ReactJS and Pixel Streaming. MetaEditor allows you to customize the interaction between the browser and the Unreal Engine project.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p className="text--center">{description}</p>
    </div>
  );
}

function QuotesSection() {
  return (
    <div style={{
      backgroundColor: 'rgba(255,255,255, .03)',
      padding: '3rem 0',
      margin: '3rem 0 5rem',
    }}>
      <div className={clsx(styles.section)}>
        <div className="container">
          <div className="row">
            {Quotes.map((quote) => (
              <div className="col" key={quote.name}>
                <div className="avatar avatar--vertical margin-bottom--sm">
                  <Image
                    alt={quote.name}
                    className="avatar__photo avatar__photo--xl"
                    img={quote.thumbnail}
                    style={{ overflow: 'hidden' }}
                  />
                  <div className="avatar__intro padding-top--sm">
                    <div className="avatar__name">{quote.name}</div>
                    <small className="avatar__subtitle">{quote.title}</small>
                  </div>
                </div>
                <p className="text--center text--italic padding-horiz--md">
                  {quote.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const previewUrl = useBaseUrl('assets/preview.png');
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>

      <Intro />

      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>

          {/*<img className={styles.preview} src={previewUrl} alt={siteConfig.title} />*/}

          <iframe className={styles.preview} src="https://www.youtube.com/embed/videoseries?list=PLvmabfuPusIu_0mo4oPdj5gnL9_L_qqxh&rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--contained button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Documentation
            </Link>
            <Link
              className={clsx(
                'button button--contained button--secondary button--lg',
                styles.getStarted,
              )}
              href="https://ps.metaeditor.io">
              Demo
            </Link>
          </div>
        </div>
      </header>
      <main>

        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({ title, imageUrl, description }) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        <QuotesSection />

        <section className={styles.description}>
          <div className="container">
            <Description name="ps_main" />
          </div>
        </section>

      </main>
    </Layout>
  );
}
