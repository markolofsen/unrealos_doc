/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

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

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const previewUrl = useBaseUrl('assets/preview.png');
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="MetaEditor — helps integrate Unreal Engine v.5 in the browser. Allows you to send commands and get callbacks from the stream server with launched Unreal Engine.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>

          {/*<img className={styles.preview} src={previewUrl} alt={siteConfig.title} />*/}

          <iframe className={styles.preview} src="https://www.youtube.com/embed/MrJ5xhJpB6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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
                {features.map(({title, imageUrl, description}) => (
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
      </main>
    </Layout>
  );
}
