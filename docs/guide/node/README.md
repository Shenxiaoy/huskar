# node

## ejs模板
通过接口路由导出html文档，进行浏览器渲染

一般来说响应内容为html文档字符串，响应头type为text/html的配置就可以简单实现；为了更灵活性我们使用ejs模板和插件方便、快捷的进行html处理渲染
```js
const koa = require('koa')
const router = require('koa-router')()
const views = require('koa-views')  // 使用此插件进行配置html文档输出

const app = new koa()
app.use(views('views', {  // 第一个参数为模板路径，
  extension: 'ejs'   // 此扩展为ejs模板渲染，需要install ejs，也可以为html，输出html文档
}))
router.get('/', async (ctx, next) => {
  let title = 'ejs---'
  await ctx.render('index', {title})  // 第一个参数为配置路径下文件名称，第二个参数为变量参数
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(3001, () => {console.log('3001')})

```


## 爬虫
> 通过 node 内置<code>http</code> 或<code>https</code> 模块去获取页面的html文档内容，通过buffer 或者二进制转化为字符串，去获取想要的内容，对html字符串可以使用<code>cheerio</code> 对其进行解析，可以使用juqey对html进行dom操作获取想要的信息。

### superagent
superagent是nodejs里一个非常方便的客户端请求代理模块(类似ajax)，当你想处理get,post,put,delete,head请求时,你就应该想起该用它了。[文档](https://www.npmjs.com/package/superagent)

### cheerio 
为服务器特别定制的，快速、灵活、实施的jQuery核心实现. [文档](https://www.npmjs.com/package/cheerio)

### iconv-lite
编码转换，比如在buffer 转字符串中乱码问题，可以通过 iconv-lite 进行转换解析

exam:
```js
/**
 * 简单爬虫，获取小说章节内容
*/
const https = require('https')
const cheerio = require('cheerio')
const iconv = require('iconv-lite')
let url = 'https://m.23txt.com/files/article/html/58/58362/26792987.html'

https.get(url, function (res) {
  const chunks = []
  let size = 0
  res.on('data', function (chunk) {
    chunks.push(chunk)
    size += chunk.length
  })

  res.on('end', function () {
    const data = Buffer.concat(chunks, size)
    const html = iconv.decode(data, 'gbk')
    const $ = cheerio.load(html)
    const contents = $('#nr1').text()
    console.log(contents, 'bbb')
  })
})
```

