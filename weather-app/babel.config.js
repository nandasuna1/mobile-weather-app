module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      ["module-resolver",
      {
        root: ["./src"],
        alias: {
          '@assets': "./src/assets",
          '@template': "./src/template",
          '@atoms': "./src/atoms",
          '@molecules': "./src/molecules",
          '@screens': './src/screens',
          '@storage': './src/storage',
          '@utils': './src/utils'
        },
      }]
    ]
  };
};
