import React from 'react';
import SandpackSetup from '../SandpackSetup';

export function Sandbox(){

  return <div style={{ display : "flex" , flex : 1 }} >
    <SandpackSetup 
      config={async () => {
        return {
          files : {
            'package.json' : {
              code : await (await fetch( 'https://raw.githubusercontent.com/lithium-framework/lithium-samples/main/package.json' )).text(),
              hidden: true
            },
            'tsconfig.json' : {
              code : await (await fetch( 'https://raw.githubusercontent.com/lithium-framework/lithium-samples/main/tsconfig.json' )).text(),
              hidden: true
            },
            '/index.ts' : {
              code : [
                "import { render , html } from '@lithium-framework/core';",
                "",
                "render( html\`<p>Welcome in lithium sandbox 👋</p>\` )"
              ].join('\n'),
              active : true
            },
          },
        }
      }}
      fileExplorer = {true} 
    />
  </div>

}

export default Sandbox;