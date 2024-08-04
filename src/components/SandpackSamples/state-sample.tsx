import React from 'react';
import SandpackSetup from '../SandpackSetup';

import { FullScreen, useFullScreenHandle } from "react-full-screen";

function StateSample(){

  return <div style={{ height : 'grid' }} >
    <SandpackSetup config={async () => {
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
            code : await (await fetch( 'https://raw.githubusercontent.com/lithium-framework/lithium-samples/main/src/pages/state/index.ts' )).text(),
            active : true
          },
          '/vanilla.ts' : {
            code : await (await fetch( 'https://raw.githubusercontent.com/lithium-framework/lithium-samples/main/src/pages/state/vanilla.ts' )).text(),
          },
          '/webComponent.ts' : {
            code : await (await fetch( 'https://raw.githubusercontent.com/lithium-framework/lithium-samples/main/src/pages/state/webComponent.ts' )).text(),
          },
        },
      }
    }} />
  </div>

}

export default () => {

  const handle = useFullScreenHandle();

  return (
    <div style={{ display : "grid" , height : "100%" }} >
      <nav style = {{ display : 'flex' , justifyContent: "flex-end" }} >
        <button onClick={handle.enter}> Enter fullscreen </button>
      </nav>
      <FullScreen handle={handle} >
        <StateSample/>
      </FullScreen>
    </div>
  );

};