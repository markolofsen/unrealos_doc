
import * as React from 'react';

// sass
import styles from './styles.module.scss';


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
      <h6 className={styles.partnersHeader}>
        Partners & Technologies
      </h6>
      <div className={styles.partnersList}>
        {list.map((name, index) => (
          <img key={index} src={getLogo(name)} />
        ))}
      </div>
    </div>
  )
}