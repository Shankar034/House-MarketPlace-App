console.log('This is Tutorial 49');


//Character Classes
//\w - word character
// let regex = /\wrry/;
let regex = /number \d999/;    //\d means digit
 regex = /number \d+/;   //\d + means more than one digit
 regex = /\ska number/;     //Match whitespace character
 regex = /\s+ka number/;    //s+ means Match than one or more than one  whitespace character

 regex = /\Ska number/;     //Match non whitespace character


 regex = /\S+ka number/;     //Match one or more than one non whitespace character

 regex = /7r8r\b/;     //Match one or more than one non whitespace character

 //Assertions

 regex = /s(?:h)/;
 regex = /s(?!h)/;



str = "sha7r7r8r%%%$&$ bhai rry ika number 89999999"





let result = regex.exec(str);
console.log("The result from exec is ", result);


if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not matche the expression ${regex.source}`);
}
