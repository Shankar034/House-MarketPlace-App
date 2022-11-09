console.log('Wlecome to Tutorial 5')


let muVar;
muVar = 35;

console.log(muVar,(typeof muVar))

let date = new Date()
console.log(date, (typeof date))


let arr= String(1, 2, 3,4 ,5)
console.log(arr.length, (typeof arr))


let i =8;
// console.log(i.toString())
let stri = Number("4343")
stri = Number(true)
console.log(stri, (typeof stri))


let number =parseFloat('343.545')

console.log(number.toFixed(2), (typeof number))



//Type Cowrcion

let mystr = Number('5343')
let mynum = 43
console.log(mynum +mystr)