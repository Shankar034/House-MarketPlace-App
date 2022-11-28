console.log("This is Tutorial 41");


// function harry(){
//     console.log("This is the best person");
// }

const  harry = () =>{
    console.log("This is the best person");
}
// harry();

//converting it to an arrow function

//Function returning Something
// const greet = () =>{
//     return "Good Morning"
// }


//One liners do not require braces/return 
//Onle line will automatically return


// const greet = () => "Good Morning"
// const greet = () => ({ name: "Shankar"})


// const greet = (name) =>"Good Morning " +name;
const greet = (name, ending) =>"Good Morning " +name + ending;

//Single parameters do not need parenthesis
//but you will have to put parenthesis if there are multiple parameters


console.log(greet('Shankar', ' bye'));




