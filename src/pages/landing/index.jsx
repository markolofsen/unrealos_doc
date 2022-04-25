import * as React from 'react';

// blocks
import Intro from './Intro'
import Partners from './Partners'

// sass
import styles from './styles.module.scss';

export default function Landing() {

  return (
    <div className={styles.indexRoot}>
      <Intro />
      <div className={styles.container}>
        <Partners />
      </div>
    </div>
  )
}