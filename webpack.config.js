//开发环境webpack配置文件
var path = require('path')
var webpack = require('webpack')
var UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin()
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('vendors','common.js')
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    'vendors':['react','react-dom'],
    'app':[
        'webpack-hot-middleware/client',
        './src/index'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/static/'
  },
  resolve: {
      extensions: ['', '.js', '.jsx' ,'.scss' ,'.css']
  },
  plugins: [
     new webpack.HotModuleReplacementPlugin(),new webpack.optimize.OccurenceOrderPlugin(),UglifyJsPlugin,commonsPlugin
  ],
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loaders: [ 'react-hot','babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      },
      { test: /\.scss$/,loaders: ['style', 'css', 'sass'] },
      { test:/\.(css)$/,loader:'style-loader!css-loader' }
    ]
  }
}
