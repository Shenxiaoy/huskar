class Da {
  constructor(type) {
   this.type = type
  }
  get age() {
   return 1
  }
  set age(val) {
   this.realAge = val
  }
  eat() {
   console.log('i am eat')
  }
 }
 let da1 = new Da('da1')
 console.log(da1.age)
 da1.age = 2
 console.log(da1.realAge)