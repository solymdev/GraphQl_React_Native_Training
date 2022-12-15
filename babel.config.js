module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            assets: "./assets",
            utils: "./src/utils/",
            components: "./src/components",
            flows: "./src/flows/",
            modules: "./src/modules",
            lib: "./src/lib",
            types: "./src/types",
            constants: "./src/constants",
          },
        },
      ],
    ],
  }
}
