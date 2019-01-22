'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {

  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    proxyTable: {
          '/item': {  //董伟  搜索
                  target: 'http://192.168.1.65:4003/', 
                changeOrigin: true,
                pathRewrite: {
                '^/item': ''
                }
            },
            '/user': {  //陈强  用户
              target: 'http://192.168.1.44:5000/', 
              changeOrigin: true, //可否跨域
              pathRewrite: {
              '^/user': ''
              }
            },
            // http://223.75.53.43:8005/comm/dict/10020/type
            '/network': {  //陈强 网办深度  事项详情
              target: 'http://223.75.53.43:8005/', 
              changeOrigin: true, //可否跨域
              pathRewrite: {
              '^/network': ''
              }
            },
            '/area': { //方丽 区划  http://223.75.53.43:8008/   http://192.168.1.111:4005/
              target: 'http://192.168.1.19:4005/', 
              changeOrigin: true, //可否跨域  
              pathRewrite: {
              '^/area': ''
            }
        },
    },
    // Various Dev Server settings
    host: 'localhost',//'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    /**
     * Source Maps
     */
    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
