import React, { useEffect, useState } from 'react';
import { SandpackProvider, SandpackLayout, SandpackFileExplorer, SandpackCodeEditor, SandpackPreview } from "@codesandbox/sandpack-react";

import { createConfiguration } from './configuration/index';
import styles from './style.module.css';
import './style.module.css';

export interface ISandpackSetup{
  config;
  fileExplorer?:boolean;
}

const SandpackSetup = ({ config , fileExplorer }:ISandpackSetup) => {

  let [ configuration , setConfiguration ] = useState< any >( null );
  useEffect(() => {

    createConfiguration( config )
    .then( setConfiguration )

  } , [])

  return (
    configuration ? 
      <SandpackProvider
        template="vanilla-ts"
        files={ configuration.files }
        customSetup={ configuration }
        style={{ display : "flex" , flex : "1" }}
      >
        <SandpackLayout className={`sandpack-layout ${styles.SandpackLayout}`}>
          {( fileExplorer ? <SandpackFileExplorer className={styles.SandpackFileExplorer}/> : null)}
          <SandpackCodeEditor className={styles.SandpackCodeEditor} showLineNumbers = {true} />
          <SandpackPreview className={styles.SandpackPreview} />
        </SandpackLayout>
      </SandpackProvider>
      :
      <></>
  );

};

export default SandpackSetup;