(
  function test () {
    const a = {
      aa: {
        name: 'aa'
      }
    }
    const b = {
      bb: 'bb'
    }
    a.point = b
    b.point = a
    const ws = new WeakSet()
    function clone (obj) {
      if (!ws.has(obj)) {
        ws.add(obj)
      } else {
        return obj
      }
      const cloneObj = {}
      for (let k in obj) {
        if (typeof obj[k] === 'object') {
          cloneObj[k] = clone(obj[k])
        } else {
          cloneObj[k] = obj[k]
        }
      }
      return cloneObj
    }
    const c = clone(a)
    console.log(c)
  }()
)