/*
* 添加a标签点击事件
* */
export const clickDownUrl = function (url, k) {
  const id = k || 'aiddownloadcomplete'
  const a = document.createElement('a')
  a.setAttribute('href', url)
  a.setAttribute('id', id)
  // if (document.getElementById(id)) {
  //   document.body.removeChild(document.getElementById(id))
  // }
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(document.getElementById(id))
}

/*
* 通过所有层级数据组合成树结构数据
* */
export const getTreeData = function (data, parentCode, categoryCode) {
  const run = function (data) {
    for(let i = 0; i < data.length; i++) {
      const cur = data[i]
      for(let j = 0; j < data.length; j++) {
        const after = data[j]
        
        if (cur[parentCode] === after[categoryCode]) {
          if (after.children) {
            after.children.push(cur)
          } else {
            after.children = [cur]
          }
          data.splice(i, 1)
          i--
        } else {
          if (after.children) {
            const result = runr(data, i, cur, after.children)
            if (result) {
              data.splice(i, 1)
              i--
            }
          }
        }
      }
    }
  }
  const runr = function (data, i, cur, list) {
    const result = list.find(item => {
      if (cur[parentCode] === item[categoryCode]) {
        if (item.children) {
          item.children.push(cur)
        } else {
          item.children = [cur]
        }
        return true
      } else if (item.children) {
        runr(data, i, cur, item.children)
      } else {
        return false
      }
    })
    return result
  }
  run(data)
}

// 将canvas转换成base64的文字图片
export const transformToImgFromText = (text, width = 80, height = 80) => {
  let fontsize = 24
  const cvs = document.createElement('canvas')
  const ctx = cvs.getContext('2d')
  if (ctx.measureText(text) && ctx.measureText(text).width) {
    fontsize = 24 * 30 / ctx.measureText(text).width
  }
  const cvsW = width
  const cvsH = height
  cvs.width = cvsW
  cvs.height = cvsH
  ctx.restore()
  ctx.fillStyle = '#6E52EE'
  // ctx.fillRect(0, 0, 100, 100)
  ctx.arc(cvsW / 2, cvsH / 2, cvsW / 2, 0, 2 * Math.PI)
  ctx.fill()
  ctx.save()
  ctx.restore()
  ctx.font = `${fontsize}px Verdana`
  ctx.fillStyle = 'white'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(text, cvsW / 2, cvsH / 2)
  const data = cvs.toDataURL('image/png', 1)
  return data
}