import * as React from 'react';
import Sandbox from './sandbox';

import styles from './styles.module.css';

export function SandboxFeature(){

  return <div className={styles.SandboxFeature} >
    <Sandbox/>
  </div>;

};

export default SandboxFeature;