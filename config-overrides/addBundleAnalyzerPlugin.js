const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = function addBundleAnalyzerPlugin(config) {
  if (process.env.BUNDLE_ANALYZER !== 'true') {
    return config;
  }

  config.plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      openAnalyzer: true
    })
  );

  return config;
};
