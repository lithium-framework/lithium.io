export async function createConfiguration( configFactory:( default_config ) => any ){

  let default_config = {
    dependencies : {
      "@lithium-framework/core": "latest",
    },
    devDependencies : {

    },
    entry: "/src/index.ts",
  };

  return {
    ...default_config,
    ...await configFactory( default_config )
  };

}