console.log('This is Tutorial 60 For Destructuring in JavaScript');

let a , b;
[a , b ]= [54, 6454];
// console.log(a, b);

[a, b, c, ...d] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)


//Array Destructuring
({a, b, c, d} = {a:43, b:54, c: 64353, d : 5353})
// console.log(a, b, c, d);

const fruits = [ 'Apples', 'Bananas', 'Mangoes'];
[a, b,c]= fruits;
console.log(a,b,c);


//Object Destructuring

laptop = {
    model: "Dell Vostro",
    age: "2 Months",
    price:" 90000",
    start: function(){console.log('Started')}
}

 const {model, age, price, start} = laptop;
console.log(model, age, price);


start();