const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function ignoreCssOrder(config) {
  const pluginIndex = config.plugins.findIndex(
    plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
  );

  if (pluginIndex > -1) {
    config.plugins.splice(
      pluginIndex,
      1,
      new MiniCssExtractPlugin({
        ...config.plugins[pluginIndex].options,
        ignoreOrder: true
      })
    );
  }

  return config;
};
