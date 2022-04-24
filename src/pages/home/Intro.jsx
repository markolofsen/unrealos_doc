
import * as React from 'react';

// sass
import styles from './styles.module.scss';

// docusaurus
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Intro() {

  const demoUrl = 'https://ps.metaeditor.io/'
  const installUrl = '/docs/metaeditor/installation'

  const previewUrl = useBaseUrl('assets/home/preview.jpg');
  const logoUnreal = useBaseUrl('assets/home/logo_ue.svg');

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
              Open door
            </li>
            <li>
              Open door
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
          <div data-el="bg" style={{
            backgroundImage: `url(${previewUrl})`
          }} />
          {renderLaptopContent()}
        </li>
      </ul>
    )
  }

  return (
    <div className={styles.root}>
      <ul data-list="root">
        <li data-li="content">

          <ul className={styles.listContent}>
            <li>
              <h6>Open Source</h6>
              <h1>
                React.js
                <span>Pixel Streaming</span>
                for Unreal Engine
              </h1>
              <h5 className="body1">
                MetaEditor offers a complete set of tools for professionally developing and running applications from Unreal Engine in browsers.
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

        </li>

        <li data-li="preview">

          <div className={styles.preview}>
            {renderLaptop()}

            <ul className={styles.previewBlock}>
              <li>
                <h5>
                  Sending a commands
                </h5>
                <div>
                  User sends commands to Unreal Engine. For example, when he clicks on a menu item on a website.
                </div>
              </li>
              <li>
                <h5>
                  Getting callbacks
                </h5>
                <div>
                  Your site receives callbacks from Unreal Engine to change the web interface.
                </div>
              </li>
            </ul>

            <ul className={styles.previewBlock}>
              <li>
                <h5>
                  MetaEditor Platform
                </h5>
                <div>
                  Upload your Unreal Engine project to out platform and the system will automatically scale streaming servers for your users.
                </div>
              </li>
              <li>
                <h5>
                  Unreal Engine
                </h5>
                <div>
                  Installed MetaPlugin to work with Pixel Streaming. Listens for commands and sends callbacks.
                </div>
              </li>
            </ul>
          </div>

        </li>
      </ul>
    </div>
  )
}