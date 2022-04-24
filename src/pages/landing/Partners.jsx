
import * as React from 'react';

// sass
import styles from './styles.module.scss';


// docusaurus
import useBaseUrl from '@docusaurus/useBaseUrl';


export default function Intro() {

  const getLogo = name => useBaseUrl(`assets/home/logotypes/${name}.svg`);

  const list = [
    'android',
    'aws',
    'chrome',
    'google',
    'ios',
    'maya',
    'microsoft',
    'node',
    'nvidia',
    'oculus',
    'perforce',
    'react',
    'ue',
    'vray'
  ]
  return (
    <div className={styles.container}>
      <div className={styles.root}>
        <h6 className={styles.header}>
          Partners & Technologies
        </h6>
        <div className={styles.partners}>
          {list.map((name, index) => (
            <img key={index} src={getLogo(name)} />
          ))}
        </div>
      </div>
    </div>
  )
}