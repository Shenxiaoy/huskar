# node

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

