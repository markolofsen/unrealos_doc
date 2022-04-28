import * as React from 'react';

// blocks
import Intro from './Intro'
import Partners from './Partners'
import Products from './Products'
import Votes from './Votes'

// sass
import styles from './styles.module.scss';

export default function Landing() {

  return (
    <div className={styles.indexRoot}>
      <Intro />
      <Votes />
      <div className={styles.container}>
        <Partners />
        <Products />
      </div>
    </div>
  )
}