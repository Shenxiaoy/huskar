function getMaxStr (str) {
  let maxStr = ''
  let maxLength = 0
  let ary = []
  for(let i = 0; i < str.length; i++) {
    const curStr = str[i]
    const result = ary.indexOf(curStr)
    if(result > -1) {
      if(ary.length > maxLength) {
        maxLength = ary.length
        maxStr = ary.join('')
      }
      ary.push(curStr)
      ary.splice(0, result + 1)
    } else {
      ary.push(curStr)
    }
  }
  if(ary.length > maxLength) {
    maxLength = ary.length
    maxStr = ary.join('')
  }
  return maxStr
}
console.log(getMaxStr('abcdefghbhjklmnopqrstuvwxyz'))