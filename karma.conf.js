const webpackConfig = require('./webpack.config')

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      './test/*.spec.js'
    ],
    preprocessors: {
      './test/*.spec.js': ['webpack']
    },
    webpack: webpackConfig,
    reporters: ['mocha', 'nyan'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    singleRun: true,
    autoWatch: false,
    browsers: [
      'ChromeHeadless'
    ]
  })
}
