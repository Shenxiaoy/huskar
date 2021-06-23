const a = new Promise((res, rej) => {
  console.log(1)
  res(11)
}).then(res => {
  console.log(res)
}).then(() => {
  console.log(333)
  return Promise.resolve(32)
}).then(res => {
  console.log(res, 222)
})