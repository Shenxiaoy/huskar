
const a = {relax: 'gaoshou', c: {cc: 'cc'}}
const handler = {
  get(target, key, receiver) {
    let res = Reflect.get(target, key, receiver)
    console.log(res, 'get--------')
    return 'res'
  },
  set(target, key, value, receiver) {
    let result = Reflect.set(target, key, value, receiver)
    return result
  }
}
const s = new Proxy(a, handler)
