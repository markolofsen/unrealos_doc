
import * as React from 'react';

// sass
import styles from './styles.module.scss';


export default function VoteBadges() {

  const alt = 'MetaEditor - Pixel Streaming for Unreal Engine'

  return (
    <div className={styles.votesRoot}>
      <a href="https://www.producthunt.com/posts/metaeditor?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-metaeditor" target="_blank">
        <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=341552&theme=light" alt={alt} />
      </a>

      <a
        target='_blank'
        href='https://github.com/markolofsen/metaeditor'
      >
        <img
          alt={alt}
          src='https://img.shields.io/github/stars/markolofsen/metaeditor?style=social'
        />
      </a>
    </div>
  )
}

