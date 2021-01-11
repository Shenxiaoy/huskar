/**
 * 动态规划：经典三角形问题
 * 求顶端到低端一条路径上的最大值
 * 1、最笨办法递归遍历，计算递归逆过程
*/
const list = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]
const rows = list.length - 1
let i = 0
let j = 0
function solution () {
  let maxsum = getMaxSum(list, rows, i, j)
  return maxsum
}
function getMaxSum(list, rows, i, j) {
  if (i === rows) {
    return list[i][j]
  }
  let x = getMaxSum(list, rows, i+1, j)
  console.log(x, '11111')
  let y = getMaxSum(list, rows, i+1, j+1)
  return Math.max(x, y) + list[i][j]
}
const a = solution()
console.log(a, 'ffff')
