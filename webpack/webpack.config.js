// 导入path模块
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require('glob');
const PurifyCSSWebpack = require('purifycss-webpack');
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  // 设置开发环境 
  mode: 'development', // development/production
  // 入口文件配置
  entry: {
    index: './src/index.js',
    // test: './src/test.js'
  },
  // 出口文件配置
  output: {
    // 当前的绝对路径
    path: path.resolve(__dirname, 'dist'),
    // 文件名称 
    filename: '[name].js',
    publicPath: 'http://localhost:8089/'
  },
  // 服务与热更新配置
  devServer: {
    // 设置基本目录结构
    contentBase: path.resolve(__dirname, 'dist'),
    // 配置ip地址，可以使用ip地址也可以使用localhost
    host: 'localhost',
    // 配置端口号
    port: 8089,
    // 服务是否开启压缩
    compress: true,
    // 是否自动打开浏览器
    open: true
  },
  plugins: [
    new HtmlPlugin({
      // 编译后的文件名称
      filename: 'index.html',
      // 页面标题
      title: '',
      // 引入的入口文件
      chunks: ['index'],
      minify: {
        removeAttributeQuotes:true
      },
      hash: true,
      template: './src/index.html'
    }),
    new ExtractTextPlugin('css/index.css'),
    new PurifyCSSWebpack({
      paths: glob.sync(path.join(__dirname, 'src/*.html'))
    }),
    new webpack.BannerPlugin('别抄我代码！！！！'),
    new webpack.ProvidePlugin({
      $: 'jquery'
    }),
    new CopyWebpackPlugin([
      {
        from: __dirname + '/src/public',
        to: './public'
      }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader']
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader:"css-loader",
            options: { 
              importLoaders: 1
            }
          },
          "postcss-loader"
          ]
        })
      },
      {
        test: /\.scss$/,
        // use: ['style-loader','css-loader','sass-loader']
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|gif|jpg|jpeg)/,
        use: [{
          loader: 'url-loader',
          options:{
            limit: 500,
            outputPath: 'images/'
          }
        }]
      },
      {
        test: /\.(htm|html)$/i,
        loader: 'html-withimg-loader'
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  }
}