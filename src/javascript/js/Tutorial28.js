console.log(' This is Tutorial 28')


//Object literal: object.protypes
let obj = {
    name: "Bharati",
    channel:"Code with Bharu",
    address:"Dhangadi"
}


function Obj(givenName){
    this.name = givenName
}

Obj.prototype.getName = function(){
    return this.name;
}

Obj.prototype.setName = function(newName){
     this.name = newName;
}
let obj2 = new Obj("Shankar")
console.log(obj2)