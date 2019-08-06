// 导入path模块
const path = require('path')

const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  // 设置开发环境 
  mode: 'production', // production
  // 入口文件配置
  entry: {
    index: './src/index.js',
    test: './src/test.js'
  },
  // 出口文件配置
  output: {
    // 当前的绝对路径
    path: path.resolve(__dirname, 'dist'),
    // 文件名称 
    filename: '[name].js'
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
    })
  ]
}