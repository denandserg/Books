/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-ignore
const proxy = require('http-proxy-middleware');
const pkg = require('../package.json');

const target = process.env.PROXY || pkg.proxy;
const apiPrefix = process.env.REACT_APP_API_BASE;

module.exports = app =>
  target && app.use(proxy(apiPrefix, { target, changeOrigin: true }));
