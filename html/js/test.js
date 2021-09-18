function a (l,m) {
  console.log(l,m)
}
const obj = {
  name: 'obj'
}
const b = a.bind(obj, 'sxy', 'ssss')
b(5,7)