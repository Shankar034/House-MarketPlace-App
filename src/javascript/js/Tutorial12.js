console.log('Welcome to Tutorial 12')

let a = document;

a = document.body;
a = document.forms;


Array.from(a).forEach(function(element){
    console.log(element)
})
console.log(a)

// console.log(typeof(a))



a = document.links;
console.log(a)