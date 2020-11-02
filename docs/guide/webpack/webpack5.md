# webpack5
[官方文档](https://webpack.docschina.org/concepts/)

### 首先安装 webpack webpack-cli 插件
```js
npm install webpack webpack-cli -D
```
> 最新版本webpack-cli可能会与webpack-dev-server 4 不兼容，不能配置其命令；

### webpack 打包方式
1) 通过在package.json script中配置 webpack需要运行的配置文件；
```js
 "scripts": {
    "dev": "webpack --config ./build/webpack.base.config.js"
  },
```
2) node脚本运行 webpack api进行打包；
> [文档](https://www.webpackjs.com/api/node/)
```js
const path = require('path')
const webpack = require('webpack')
const obj = {
  entry: {
    app: path.resolve(__dirname, '../src/components/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  }
}

const compiler =  webpack(obj)
compiler.run((err, stats) => {
})
```

### 安装babel模块
1) 添加module 文件解析模块
```js
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
```

2) 根目录配置 .babelrc文件，配合babel解析各种配置和插件(也可以在rules解析模块配置项中去配置presets)。
```js
// .babelrc
{
  "presets": [
    "@babel/preset-env"
  ]
}
```
#### 对css样式的loader处理
安装：
```js
npm install css-loader mini-css-extract-plugin -D
```
css样式抽离
```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
plugins: [new MiniCssExtractPlugin()]
```
- css-loader 对css内容进行解析
- mini-css-extract-plugin 抽离css样式出单独文件 [具体参数配置](https://webpack.docschina.org/plugins/mini-css-extract-plugin/#root)

#### 对图片的loader处理
- file-loader 对图片进行打包，把图片存储到打包后的路径中，会是http请求的图片文件；
- url-loader  对图片进行打包，通过配置可以将小体积的图片转成base64存储于js中；
- 可通过配置 img-loader，对图片格式进行压缩处理。
```js
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // name: "[name].[hash:16].[ext]",
              limit: 1024 * 8,
              outputPath: 'assets/img',
              publicPath: 'assets/img'
            }
          }
        ]
      }
```
> 在这里容易犯的小错误的解析后图片获取不到，可能回执publicPath配置路径的不对；

#### 安装 cross-env ，设置node环境变量，为兼容windows 平台
```js
npm install -D cross-env 

  "scripts": {
    "test": "webpack-cli init",
    "dev": "cross-env NODE_ENV=development node ./webpack/webpack.dev.config.js",
    "build": "cross-env NODE_ENV=production webpack --config ./webpack/webpack.prod.config.js"
  },
```

### 安装htmlWebpackPlugin，打包出html文件
```js
npm install -D html-webpack-plugin

// 初级配置
  plugins: [
    new htmlWebpackPlugin({
      fileName: 'index.html',
      template: 'public/index.html',
      inject: 'body',
      title: 'webpack5 config',
      minify: {
        removeComments: true,  // 去掉注释
        collapseWhitespace: true  // 去掉空格
      }
    })
  ],
```

### 合并webpack对象和清空之前打包内容
```js
npm install webpack-merge clean-webpack-plugin -D
---------
const {merge} = require('webpack-merge')
module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'js/[name].[hash:8].bundle.js',
  },
--------------
const {CleanWebpackPlugin } = require('clean-webpack-plugin')
  plugins: [
    new CleanWebpackPlugin()
  ]
```

### 本地服务开发环境配置
[查看文档](https://webpack.docschina.org/guides/development/)
1) 可以用webpack-dev-server开箱即用，配置到devServer配置项，在package.json 中运行 webpack-dev-server命令执行webpack配置文件；
```js
  "scripts": {
    "dev": "webpack-dev-server --config ./webpack/webpack.dev.config.js",
  }
```

2) 也可以起一个node服务，如果你正在使用 webpack-dev-middleware，可以通过 webpack-hot-middleware 依赖包，在自定义 dev server 中启用 HMR。
```js
const path = require('path')
const express = require('express')
const app = express()
const webpack = require('webpack')
const baseConfig = require('./webpack.base.config')
const webpackDevMiddleware = require('webpack-dev-middleware')
const {merge} = require('webpack-merge')
const devConfig = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
const compiler = webpack(devConfig)
app.use(webpackDevMiddleware(compiler, {
  
}))
app.use(require("webpack-hot-middleware")(compiler))
app.listen(3000, function () {
  console.log("browser open in http://www.localhost:3000")
})
```
3) 通过webpack-dev-server 构建本地启动服务
```js
// 通过package.json 调用webpack-dev-sever命令去执行对应的webpack 配置文件；
// 在js中引入 webpack-dev-server 进行加载使用
const config = require('./webpack.config.js');const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost',};

webpackDevServer.addDevServerEntrypoints(config, options);const compiler = webpack(config);const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000');});
```

4) watch mode 观察模式，可以指示 webpack "watch" 依赖图中所有文件的更改。如果其中一个文件被更新，代码将被重新编译，所以你不必再去手动运行整个构建。
```js
  "scripts": {
    "dev": "webpack --watch --config ./webpack/webpack.dev.config.js"
  },
```

### Module Federation
webpack bundle 模块聚合、共享，也是我觉得webpack5最大的特色，提供了微前端的解决方案；
把多个应用模块最后聚合成一个程序，这些应用模块之间无任何依赖联系，可以单独开发和部署它们，这可以成为微前端。
[官方示例](https://github.com/module-federation/module-federation-examples)

先看一个配置示例：
```js
// module app1
        new ModuleFederationPlugin({
            filename: "remoteEntry.js",
            name: "app1",
            exposes: {
                './Header': "./src/components/Header.vue",
            }
          })
// module app2
        new ModuleFederationPlugin({
          name: "app2",
          remotes: {
            app1: "app1@http://localhost:3000/remoteEntry.js",
          }
        })
```
- filename： 暴露的模块文件名称，也可以说是配置打包后单独文件的入口；
- name： 模块全局唯一名称，对当前模块的标记；
- exposes：表示导出的模块，可以在别的bundle中引入使用；为了兼容一些版本，建议名称写成文件路径形式字符串；
- shared： 共享模块队列，配置此参数后，也会把配置的模块打包出单独文件；

模块之间共享代码片段，属于异步远程资源请求，所以在webpack配置入口文件需要异步加载，可以通过import 返回promise的方式去加载js文件；

### 配置解析vue
- 安装 vue vue-loader vue-template-compiler 插件
- rules中加入vue解析配置，{test: /\.vue$/, loader: 'vue-loader'}
- 引入vueloader插件：const VueLoaderPlugin = require('vue-loader/lib/plugin')  ；new VueLoaderPlugin();

### eslint
可选规范有'eslint-config-google''、'airbnb-base'、‘standard'(前端标准)，我们一般选择 <code>standard</code>;
- vue eslint [官方文档](https://eslint.vuejs.org/)
- eslint 配置项、配置参数：[参考文章](https://blog.csdn.net/qq_41257129/article/details/104839746)
- eslint-loader 配置：
```js
// 需安装的插件：
    "babel-eslint": "^10.1.0",
    "eslint": "^7.12.1",
    "eslint-config-standard": "^15.0.1",
    "eslint-friendly-formatter": "^4.0.1",
    "eslint-loader": "^4.0.2",
    "eslint-plugin-html": "^6.1.0",
    "eslint-plugin-import": "^2.22.1",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-promise": "^4.2.1",
    "eslint-plugin-standard": "^4.0.2",
    "eslint-plugin-vue": "^7.1.0",

// webpack.config.js
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },

.eslintrc.js
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
```
#### 官方推荐eslint-webpack-plugin 取代eslint-loader，但在配置vue eslint过程中出现很多问题；
```js
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const eslintConfig = {
  formatter: require('eslint-friendly-formatter'),
  emitWarning: true,
  fix: true
}

plugins: [new ESLintPlugin(eslintConfig)]
```





































