
import * as React from 'react';

// sass
import styles from './styles.module.scss';

// docusaurus
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

// components
import StickyBox from '../../components/StickyBox/'


export default function Intro() {

  const demoUrl = 'https://ps.metaeditor.io/'
  const installUrl = '/docs/metaeditor/installation'

  const logoUnreal = useBaseUrl('assets/home/logo_ue.svg');
  const videoUrl = useBaseUrl('assets/home/preview.mp4');
  // const previewUrl = useBaseUrl('assets/home/preview.jpg');

  const renderLaptopContent = () => {

    return (
      <ul className={styles.lapTopContent}>
        <li data-li="content">
          <img src={logoUnreal} />
          <h4>
            Hyper-realistic
            <br />
            3D streaming
            <br />
            on your site
          </h4>
        </li>
        <li data-li="menu">
          <div>
            Web interface for 3D streaming
          </div>
          <ul>
            <li>
              Open door
            </li>
            <li>
              Change color
            </li>
            <li>
              Record video
            </li>
            <li>
              Ride The Track!
            </li>
          </ul>
        </li>
      </ul>
    )
  }

  const renderLaptop = () => {

    return (
      <ul className={styles.lapTopList}>
        <li data-li="bar">
          <span /><span /><span />
        </li>
        <li data-li="content">
          {/* <div data-bg="image" style={{
            backgroundImage: `url(${previewUrl})`
          }} /> */}
          <div data-bg="video">
            <video src={videoUrl} autoPlay muted loop />
          </div>
          {renderLaptopContent()}
        </li>
      </ul>
    )
  }

  const renderLine = (direction = 'up') => {

    return (
      <div className={styles.cardLine} data-direction={direction}>
        <span /><span />
      </div>
    )
  }

  return (
    <ul className={styles.intro}>
      <li data-li="content">

        <div className={styles.listContent} id="sticky-root">
          <StickyBox top={80} bottomBoundary="#sticky-root">
            <ul >
              <li>
                <h6>Open Source</h6>
                <h1>
                  React.js
                  <span>Pixel Streaming</span>
                  for Unreal Engine
                </h1>
                <h5 className="body1">
                  MetaEditor offers a complete set of tools for professionally developing and running Unreal Engine Applications in browsers.
                </h5>
              </li>
              <li data-li="actions">
                <a href={demoUrl} target="_blank" className={styles.buttonPrimary}>
                  Online Demo
                </a>

                <Link
                  className={styles.buttonSecondary}
                  to={useBaseUrl(installUrl)}>
                  Get started
                </Link>
              </li>
            </ul>
          </StickyBox>
        </div>


      </li>

      <li data-li="preview">

        <div className={styles.preview}>
          {renderLaptop()}

          <ul className={styles.cardBlock}>
            <li>
              {renderLine('down')}
              <h5>
                Sending a commands
              </h5>
              <div>
                User sends commands to Unreal Engine. For example, when someone clicks on a menu item on a website.
              </div>
            </li>
            <li>
              {renderLine('up')}
              <h5>
                Getting callbacks
              </h5>
              <div>
                Your site receives callbacks from Unreal Engine to change the web interface.
              </div>
            </li>
          </ul>

          <ul className={styles.cardBlock}>
            <li>
              {renderLine('down')}
              <h5>
                MetaEditor Platform
              </h5>
              <div>
                Upload your Unreal Engine project to our portal and the system will automatically scale streaming servers for your users.
              </div>
            </li>
            <li>
              {renderLine('up')}
              <h5>
                Unreal Engine
              </h5>
              <div>
                Install MetaPlugin to work with Pixel Streaming to listen for commands and send callbacks.
              </div>
            </li>
          </ul>
        </div>

      </li>
    </ul>
  )
}