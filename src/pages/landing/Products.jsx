
import * as React from 'react';

// docusaurus
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

// sass
import styles from './Index.module.scss';


export default function Intro() {
  const [hoverIndex, setHoverIndex] = React.useState(1)

  const handleHover = (index, show) => event => {
    if (show === false && hoverIndex !== index) {
      index = 1
    }
    setHoverIndex(index)
  }
  const handleClick = (index) => event => {
    setHoverIndex(index)
  }

  const renderList = () => {
    const list = [
      ['/docs/pixel-streaming/settings', 'ReactJS framework', 'A library of components for quickly connecting a web interface with Unreal Engine'],
      ['/docs/streaming/desc', 'Unreal Engine Streaming', "Autoscaling servers for distributing streaming Unreal Engine graphics to users' browsers."],
      ['/docs/unreal-engine/preparation/linux', 'Plugin for Unreal Engine', 'A free plugin for integrating MetaEditor with an Unreal Engine project via Pixel Streaming.'],
      ['/docs/metaportal/description', 'Developer Portal', 'In the MetaPortal, you can control the cost of streaming and configure created in Unreal Engine projects.'],
    ].map(([href, title, description]) => ({ href, title, description }))

    return (
      <div className={styles.productsList}>
        {list.map((item, index) => {
          const icon = useBaseUrl(`assets/home/products/icon_${index + 1}.svg`);
          const href = useBaseUrl(item.href)
          const hIndex = index + 1

          return (
            <ul key={index}
              data-selected={hIndex === hoverIndex}
              onClick={handleClick(hIndex)}
              onMouseOver={handleHover(hIndex, true)}
              onMouseOut={handleHover(hIndex, false)}
            >
              <li data-li="icon">
                <img src={icon} />
              </li>
              <li>
                <h6>
                  {item.title}
                </h6>
                <div data-text>
                  {item.description}
                </div>
                <div>
                  <Link to={href}>
                    <strong>
                      Learn more
                    </strong>
                  </Link>
                </div>
              </li>
            </ul>
          )
        })}
      </div>
    )
  }

  const renderPreview = () => {
    const productPreviewHeaderUrl = useBaseUrl(`assets/home/products/product_preview_header.svg`);
    const productPreviewUrl = useBaseUrl(`assets/home/products/product_preview.png`);

    return (
      <ul className={styles.productPreview}>
        <li data-li="header">
          <img src={productPreviewHeaderUrl} />
        </li>
        <li data-li="bottom">
          <img src={productPreviewUrl} />
        </li>
      </ul>
    )
  }

  return (
    <ul className={styles.productsRoot}>
      <li data-li="options">
        <h6>
          Products
        </h6>
        <h3>
          Tools for streaming the <span>Unreal Engine</span> to browsers
        </h3>
        <h5>
          Quickly implement the Unreal Engine to the browser without sacrificing flexibility and control.
        </h5>

        {renderList()}
      </li>
      <li data-li="preview">
        {renderPreview()}
      </li>
    </ul>
  )
}