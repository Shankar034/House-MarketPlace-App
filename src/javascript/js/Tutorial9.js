console.log('We are at tutorial 9')

// General Loop:

//for loop

// for(let i=0;i<20;i++){
//     console.log(i)


// }


let j=0
while (j<10) {
    
    console.log(j +1)
    j++
}


console.log(" This is do While loop")
let k= 4
do {
    console.log(k)
    if(k ===9){
        k +=1
       continue
    }
    k++
} while (k<15);

console.log('done')



let arr = [ 2, 3, 4, 5, 6, 7]
arr.forEach(function(element, index, array){
    console.log(element, index, array )
});



let obj = {
    name:'Rohan Das',
    age:45,
    type:'Dangerous Programmer',
    os:"Ubunto"
}

for (let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`)
}
