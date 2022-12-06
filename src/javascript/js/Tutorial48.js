console.log("This is Tutorial 48");

//Regular Expression
//Basic Functions
//Metacharacter Symbols

// let regex = /^h/i;

// Character Sets
// const regex = /s[k-s]ankar/;
//can be an a, t or y

let regex = /s[^h]ankar/;

const str = "Shankar Bhai";


let result = regex.exec(str);
console.log("The result from exec is ", result);
if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not matche the expression ${regex.source}`);
}