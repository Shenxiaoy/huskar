/*

 */

const shell = require('shelljs')
const fs = require('fs')
const path = require('path')

const objectList = [
  {object: 'FE.gome.home', name: 'home'},
  {object: 'FE.gome.shop.manage', name: 'shopManage'},
  {object: 'FE.gome.stock.manage', name: 'stockManage'}
]
const hashObj = {}

// 更新远程仓库
objectList.forEach(item => {
  const str = 'gome/' + 'item.object'
  shell.cd('gome/FE.gome.home')
  shell.exec('git pull')
  shell.cd('..')
  shell.cd('..')
})
// 删除旧的代码文件
shell.rm('-rf', 'test')
shell.mkdir('test')
// 拉取gome项目dist构建后的文件，对应归类放入test文件夹中
objectList.forEach((item, sort) => {
  const root = shell.pwd().stdout
  const patha = 'gome/' + item.object + '/dist/'
  const newPath = 'test/' + item.name

  const distPath = root + '/' + patha + 'static/'
  getHash(item, distPath, sort)

  shell.cp('-R', patha, newPath)
})
// 进行压缩打包
shell.cd('test')
const batCode = `zip -q -r ../test1/gmscot-static-${+new Date}.zip ./*`
shell.exec(batCode)

// 提取hash码
function getHash (item, distPath, sort) {
  hashObj[item.name] = {}
  const pathCss = distPath + 'css/'
  const pathJs = distPath + 'js/'
  fs.readdir(pathJs, function (err, files) {
    files.forEach(l => {
      const leg = /.js$/
      if (leg.test(l)) {
        hashObj[item.name].js = l.split('.')[1]
      }
    })
  })
  fs.readdir(pathCss, function (err, files) {
    files.forEach(l => {
      const leg = /.css$/
      if (leg.test(l)) {
        hashObj[item.name].css = l.split('.')[1]
      }
    })
    if (sort >= objectList.length -1) {
      shell.cd('..')
      const root = shell.pwd().stdout
      const writePath = path.join(root, 'test1') + '/hash.txt'
      fs.writeFile(writePath, JSON.stringify(hashObj), function (err, data) {
      })
    }
  })

}