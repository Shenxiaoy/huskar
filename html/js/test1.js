const a = new Promise((res) => {
  setTimeout(() => {
    res(55)
    console.log('deee')
    res(55555)
  }, 0);
})

a.then((m, n) => {
  console.log(m, n, 'll')
})