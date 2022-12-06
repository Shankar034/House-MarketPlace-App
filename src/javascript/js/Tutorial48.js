console.log("This is Tutorial 48");

//Regular Expression
//Basic Functions
//Metacharacter Symbols

// let regex = /^h/i;

// Character Sets
// const regex = /s[k-s]ankar/;
//can be an a, t or y

let regex = /s[^h]ankar/;





//Quantifiers 
//r can occur two times
// regex = /hur{2}y/
regex = /hur{0,2}y/

// const str = "Shankar Bhai";



// Groupings -we use paranthesis for grpupings 

regex = /(ar){1}/
regex = /(sha){1}([0-9]r){3}/

str = "sha7r7r8r bhai hurry"


let result = regex.exec(str);
console.log("The result from exec is ", result);


if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not matche the expression ${regex.source}`);
}