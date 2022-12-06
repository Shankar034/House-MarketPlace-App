console.log('This is Tutorial 49');


//Character Classes
//\w - word character
let regex = /\wrry/;
str = "sha7r7r8r bhai rry"


let result = regex.exec(str);
console.log("The result from exec is ", result);


if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not matche the expression ${regex.source}`);
}