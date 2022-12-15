console.log('This is tutorial 59 which is for the Symbols in JavaScripts');

//Symbols


const sym1 = Symbol('My identifier');
const sym2 = Symbol('My identifier');

// console.log('Symbol is ', sym1);
// console.log('Type of Symbol is ', typeof sym1);

console.log(sym1 ===sym2);

const a = 'Hero is ram';
const b = 'Hero is ram';

console.log(a===b);
console.log(null===null);
console.log(undefined===undefined);



const k1 = Symbol('Identifier for k1');
const k2 = Symbol('for k2');

myObj = {};
myObj[k1] = "Shankar";
myObj[k2] ="Narendra";
myObj["name" ]= "Good boy"

console.log(myObj[k1]);
console.log(myObj[k2]);
console.log(myObj.k2); //Cannot do this to get Rohan because it is same as myObj["k2"]

console.log(myObj);



//Symbols are ignored in for in loop
for (key in myObj){
    console.log(key, myObj[key]);
}



console.log(JSON.stringify(myObj));
