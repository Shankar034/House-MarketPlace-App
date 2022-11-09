console.log(' This is function block')






const mygreet =  function greet(name, thank='Thank You') {

let msg =`  Happy birthday ${name}, Here’s to more life, love, and adventures with you to come! ${thank}`;

return msg;
}
let name = 'Bharati'


let val = mygreet(name, 'Thanks a lot')
console.log(val)



const myobj = {
    name :'Skilig',
    game: function(){
        return "GTA";
    }
}

console.log(myobj.game())


arr = ['Fruits', ' Vegetable', 'Furniture'];

arr.forEach(function(element, index, array) {
    console.log(element,  index)
});



//scope

var i =232
console.log(i)

function ui(name){
    var i = 9;
    console.log(i)
    return ` This is  a ${name} ui`
}

console.log(ui('Bharu'), i)
