const a = 'fanxianfeng'
a.replace(/n(f)(e)/g, function(a,b,c,d) {
  console.log(arguments, 'bbb')
  console.log(a)
  console.log(b)
  console.log(c)
  console.log(d)
})