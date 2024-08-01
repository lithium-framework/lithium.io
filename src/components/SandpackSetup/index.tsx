import React, { useEffect, useState } from 'react';
import { SandpackProvider, SandpackLayout, SandpackCodeEditor, SandpackPreview } from "@codesandbox/sandpack-react";
import { useMemo } from "react";

import { Sandpack } from "@codesandbox/sandpack-react";

import { createConfiguration } from './configuration/index';

const SandpackSetup = ({ config }) => {

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
        style={{ display : "grid" }}
      >
        <SandpackLayout style={{ display : 'grid' , height : '100%' }} >
          <SandpackCodeEditor style={{ gridRow : 1 , height : '100%' }} />
          <SandpackPreview style={{ gridRow : 1 , height : '100%' }}/>
        </SandpackLayout>
      </SandpackProvider>
      :
      <></>
  );

};

export default SandpackSetup;