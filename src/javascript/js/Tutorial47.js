console.log("This is Tutorial 47");



let regex = /shankar/;


//Lets look inito some metacharacter symblos


//^ means expression will match if string starts with
regex = /^sh/;


//$ at the end of the string means "String ends with"
regex = /kar$/; 
// regex = /karr$/;


//Matches any one character
regex = /s.hankar/;

//Matches any zero on more characters
regex = /s*hankar/;


//Matches any zero on more characters
regex = /s?hankar?/;


let str = "shankar is a good boy and shankar is code with shankar";

str = "shankab "
let result = regex.exec(str);
console.log("The result from exec is ", result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not matche the expression ${regex.source}`);
}