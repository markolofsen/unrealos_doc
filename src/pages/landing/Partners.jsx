
import * as React from 'react';

// sass
import styles from './Index.module.scss';


// docusaurus
import useBaseUrl from '@docusaurus/useBaseUrl';


export default function Intro() {

  const getLogo = name => useBaseUrl(`assets/home/logotypes/${name}.svg`);

  const list = [
    'ue',
    'nvidia',

    'aws',
    'google',
    'microsoft',

    'node',
    'react',

    'ios',
    'android',
    'chrome',
  ]

  return (
    <div className={styles.partnersRoot}>
      <div className={styles.partnersHeader}>
        Partners & Technologies
      </div>
      <div className={styles.partnersList}>
        {list.map((name, index) => (
          <img key={index} src={getLogo(name)} />
        ))}
      </div>
    </div>
  )
}