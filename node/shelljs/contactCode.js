/*

 */
const shell = require('shelljs')
// if (!shell.which('git')) {
//   shell.echo('sorry, this script requires git')
//   shell.exit(1)
// } else {
//   console.log('gggg')
// }
// shell.rm('-rf', 'test') // 删除文件夹
// shell.cp('-R', 'test1', 'test') // copy test1 到test； 如果test文件夹不存在，则新建test文件夹，把test1下所欲内容copy到test；如果test文件夹已存在，则把test1文件夹整体copy到test下。

// shell.cd('test1')
// shell.ls('*.vue').forEach(function (file) {
//   shell.sed('-i', 'aaaa', 'vvvvv', file)  // 把文件流中的aaaa 替换成 vvvvv
//   shell.sed('-i', 'ppp', shell.cat('marco.js'), file)
// })

shell.cd('test1')
shell.echo('111')
shell.exec('git clone git@code.ds.gome.com.cn:mulit/fe/FE.gome.home.git')
shell.echo('2222')
