console.log('This is Tutorial 30')


const proto = {
    slogan: function(){
        return `This company is the best`
    },
    changeName: function(newName){
        this.name = newName
    }
}


const harry = Object.create(proto);
harry.name = "harry"
harry.role = "Programmer";
harry.changeName("harry")


//This creates harry objects
// const harry = Object.create(proto)
//     harry.name = "harry";
//     harry.role = "Programmer";
console.log(harry)

//This also creates harry object
const harry1 = Object.create(proto, {
    name: {value: "harry", writable:true},
    role: {value:"Programmer"},
})
harry1.changeName("Harry2")
console.log(harry1)



//Employee constructor

function Employee(name, salary, experience){
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

//Slogan
Employee.prototype.slogan = function(){
    return `This company is the best. Regards, ${this.name}`;
}