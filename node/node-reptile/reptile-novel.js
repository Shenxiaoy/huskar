/**
 * 简单爬虫，获取小说章节内容
*/
const https = require('https')
// cheerio 使用jquery 解析模板字符串
const cheerio = require('cheerio')
// 编码转换，在此针对 buffter 汉字乱码问题
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
    console.log('解析完毕')
    const data = Buffer.concat(chunks, size)
    const html = iconv.decode(data, 'gbk')
    const $ = cheerio.load(html)
    const contents = $('#nr1').text()
    console.log(contents, 'bbb')
  })
})

