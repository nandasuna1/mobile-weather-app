module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      'module:metro-react-native-babel-preset',
    ],
    "plugins": [
      ["module-resolver",
      {
        root: ["./src"],
        alias: {
          '@assets': "./src/assets",
          '@templates': "./src/components/templates",
          '@atoms': "./src/components/atoms",
          '@organisms': "./src/components/organisms",
          '@molecules': "./src/components/molecules",
          '@screens': './src/components/screens',
          '@storage': './src/storage',
          '@services': './src/services',
          '@store': './src/store',
          '@utils': './src/utils'
        },
      }]
    ]
  };
};
