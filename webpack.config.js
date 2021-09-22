'use strict';

const path = require('path');

module.exports = {
  entry:{
    index: './src/index.js',
    search: './src/search.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader'
      },
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader', // loader的调用是链式调用的，顺序是从右到左
          'less-loader'
        ]
      },
      {
        test: /.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader', // 也可以用file-loader
            options: {
              limit: 10240
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader'
      }
    ]
  },
  watch: true, // 监听通过轮训
  watchOptions: {
    ignored: /node_modules/, // 忽略需要监听的文件
    aggregateTimeout: 1000, // 在该配置时间内的更改都汇聚成一次变更
    poll: 1000
  }
}
