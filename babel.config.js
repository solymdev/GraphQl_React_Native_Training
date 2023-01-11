module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            components: "./src/components",
            utils: "./src/utils",
            flows: "./src/flows",
            generated: "./src/generated",
          },
        },
      ],
    ],
  }
}
