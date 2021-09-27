const list =[
  {
    label: '原供价',
    value: 23,
    sort: 1
  },
  {
    label: '1',
    value: 23,
    sort: 0
  }

]
const obj1 = {
  skuName: '斗罗大陆'
}
// Object.freeze(obj1)
obj1.price = 5
console.log(obj1, 'obj1')