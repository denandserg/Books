const { override } = require('customize-cra');

const ignoreCssOrder = require('./ignoreCssOrder');
const addBundleAnalyzerPlugin = require('./addBundleAnalyzerPlugin');

module.exports = override(ignoreCssOrder, addBundleAnalyzerPlugin);
