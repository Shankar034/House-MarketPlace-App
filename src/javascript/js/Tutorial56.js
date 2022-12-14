console.log("This is Tutorial 56 on for-in and for-of loops" );


let people = ['Harry', 'Rohan', 'Andrew', 'Messi', 'Ronaldo'];

// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);
    
// }



//For in loops
//1. ITERATING AN OBJECT

let obj = {
    name:"harry",
    language:"JavaScript",
    hobbies: "Android app development "
}
// console.log(obj);


//Iterating an Object using traditional for loop

// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);
// }


//1.2Iterating an object using for In loops:

for (let key in obj){
    console.log(obj[key]);
}

//2. Iterating a String

mystring = "This is my string";
for (let char in mystring){
    console.log(mystring[char]);
}



//For-Of loop 


people = ['Harry', 'Rohan', 'Andrew', 'Messi', 'Ronaldo'];

console.log("**********For Of loop starts here*********")
for(let name of people){
    console.log(name);
}

