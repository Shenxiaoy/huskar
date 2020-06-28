/*
 */
const shell = require('shelljs')
const gomeRepository = [
  'git@code.ds.gome.com.cn:mulit/fe/FE.gome.home.git',
  'git@code.ds.gome.com.cn:mulit/fe/FE.gome.shop.manage.git',
  'git@code.ds.gome.com.cn:mulit/fe/FE.gome.stock.manage.git'
]

shell.cd('gome')
shell.echo('准备下载远程仓库 ...')
gomeRepository.forEach(item => {
  const name = item.split('/').pop()
  shell.exec(`git clone ${item}`)
  shell.echo(`${name} 下载完毕。\n`)
})
// shell.echo('正在下载 home repository ...')
// shell.exec('git clone git@code.ds.gome.com.cn:mulit/fe/FE.gome.home.git')
// shell.echo('home repository 100%')
// shell.echo('正在下载 shop-manage repository ...')
// shell.exec('git clone git@code.ds.gome.com.cn:mulit/fe/FE.gome.shop.manage.git')
// shell.echo('shop-manage repository 100%')
// shell.echo('正在下载 stock-manage repository ...')
// shell.exec('git clone git@code.ds.gome.com.cn:mulit/fe/FE.gome.stock.manage.git')
// shell.echo('stock-manage repository 100%')
// shell.echo('都已下载完毕！')
