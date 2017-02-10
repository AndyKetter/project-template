//生产线上环境webpack配置文件
var path = require('path')
var webpack = require('webpack')
var UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false //remove all warnings
    },
    output: {
        comments: false //remove all comments
    }
})
// 引入css 单独打包插件
var ExtractTextPlugin = require("extract-text-webpack-plugin")
// 设置生成css 的路径和文件名，会自动将对应entry入口js文件中引入的CSS抽出成单独的文件
var packCSS = new ExtractTextPlugin('[name].min.css')
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('vendors','common.js')
var DefinePlugin = new webpack.DefinePlugin({
    'process.env': {
        'NODE_ENV': JSON.stringify('production')
    }
})
module.exports = {
  entry: {
    'vendors':['react','react-dom','react-router','react-redux','redux','react-router-redux'],
    'app':[
        './src/index'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/static/'
  },
  resolve: {
      extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),UglifyJsPlugin,commonsPlugin,DefinePlugin,packCSS
  ],
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loaders: [ 'react-hot','babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      },
      { test:/\.(css)$/,loader:ExtractTextPlugin.extract("style-loader","css-loader") },
      { test: /\.scss$/,loaders: ['style', 'css', 'sass'] },
    ]
  }
}
