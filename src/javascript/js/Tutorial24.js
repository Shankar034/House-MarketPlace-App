console.log('This is tutorial 24');

let today = new Date()
// console.log(typeof today)
let otherDate = new Date("8-4-2003 04:34:04")

otherDate = new Date('09/16/1998')
// console.log(otherDate)
let a;
a = otherDate.getDay()

a = otherDate.getDate()
a = otherDate.getHours()
a = otherDate.getMinutes()
a = otherDate.getSeconds()



console.log(a)

otherDate.setDate(23)
otherDate.setMonth(1)
otherDate.setFullYear(2006)
otherDate.setMinutes(30)
otherDate.setHours(3)
otherDate.setSeconds(23)
console.log(otherDate)





