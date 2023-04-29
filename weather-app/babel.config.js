module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      ["module:react-native-dotenv", {
        "envName": "APP_ENV",
        "moduleName": "@env",
        "path": ".env",
        "safe": false,
        "allowUndefined": true,
        "verbose": false
      }],
      ["module-resolver",
      {
        root: ["./src"],
        alias: {
          '@assets': "./src/assets",
          '@templates': "./src/components/templates",
          '@atoms': "./src/components/atoms",
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
