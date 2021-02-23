const koa = require('koa')
const router = require('koa-router')()
const views = require('koa-views')
const fs = require('fs')
const path = require('path')

const app = new koa()
// 获取txt文本中内容，正则匹配出所有图片的url数组
let result = fs.readFileSync(path.resolve(__dirname, './picurls.txt'), 'utf-8')
const leg = /"(https:\/\/.+)"/g
let ary = result.match(leg).map( k => {
  return k.slice(1, k.length - 1)
})


app.use(views('views', {
  extension: 'ejs'
}))
router.get('/', async (ctx, next) => {
  let title = 'ejs---'
  await ctx.render('index', {title, ary})
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(3001, () => {console.log('3001')})