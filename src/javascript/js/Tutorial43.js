console.log('This is Tutorial 43');

async function shankar(){
    console.log("Inside shankar")
    const response = await fetch('https://api.github.com/users');

    console.log('Before Response');

    const users = await response.json();
    console.log('Users resolved');

    return users;
    // return "Shankar";
}


console.log("Before calling shankar")
let a = shankar();
console.log("After calling shankar")
console.log(a);
a.then(data=> console.log(data))

console.log("Last line of this js file")