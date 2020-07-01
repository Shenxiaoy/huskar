
function quiteSort (arr) {
  if (arr.length <= 1) {
    return arr
  }
  const ruleIndex = Math.floor(arr.length / 2)
  const ruleValue = arr.splice(ruleIndex, 1)[0]
  const left = []
  const right = []
  arr.forEach(k => {
    if (k < ruleValue) {
      left.push(k)
    } else {
      right.push(k)
    }
  })
  return quiteSort(left).concat([ruleValue], quiteSort(right))
}

const test = [2,1,56,45,8,87,32,5,678]
const result = quiteSort(test)
console.log(result, 'bbb')