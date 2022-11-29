console.log('This is tutorial 46');

//Regular expression literal in js
// let reg = /shankar/g;
//g means global flag

let reg = /shankar/;
// let reg = /shankar/i;
//i means case insensitive
console.log(reg);
console.log(reg.source);


let s ="This is great code with shankar and also shankar vai ";


//Function to match expressions

//1. exec() - This function will return an array for match or null for no match



// let result = reg.exec(s);
// console.log(result);

// result = reg.exec(s);
// console.log(result);


// result = reg.exec(s);
// console.log(result);


//2. test() - Returns true or false

let result = reg.test(s);
console.log(result)
