'use strict'
const glob = require('glob')
const _ = require('lodash')
const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')

const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
const scope = { window: {} }
// const routes = require('./routes').map(r => {
//   return r.path
// })

const cwd = process.cwd()
const assets = _.concat(
  'jquery',
  'font-awesome-sass-loader',
  glob.sync(`${__dirname}/static/scss/*.scss`),
  glob.sync(`${__dirname}/static/js/*.js`), // lander scripts
  glob.sync(`${cwd}/www/js/*.js`) // users scripts
)

module.exports = [ {
  entry: {
    main: `${__dirname}/entry.js`,
    bundle: assets
  },
  output: {
    path: `${cwd}/www/dist`,
    filename: "[name].js",
    libraryTarget: 'umd'
  },
  resolveLoader: {
    // tell webpack where to look for loaders
    root: [
      path.resolve(__dirname, './loaders'),
      path.resolve(__dirname, '../node_modules')
    ]
  },
  postcss: [ autoprefixer ],
  resolve: {
    extensions: [
      '',
      '.js',
      '.json',
      '.scss'
    ],
    alias: {
      lander: `${__dirname}/components`,
      www: path.join(cwd, '/www'),
      config: `${cwd}/lander.conf.js`,
      helpers: `${__dirname}/helpers.js`
    }
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      },

      /*
      Bootstrap 4
      */
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /bootstrap\/js\/src\/.*\.js$/,
        loaders: [
          'imports?jQuery=jquery,Tether=tether',
          'babel?babelrc=true'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=/[name].[ext]'
      },
      {
        test: /\.md$/,
        loader: 'md'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    inline: true
  },
  plugins: [
    new StaticSiteGeneratorPlugin('main', [ '/' ], scope),
    new ExtractTextPlugin('bundle.css  '),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Tether: 'tether',
      'window.Tether': 'tether'
    })
  ]
} ]
