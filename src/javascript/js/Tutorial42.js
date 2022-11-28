console.log("This is my Tutorial 42");

//btn with id myBtn
let myBtn = document.getElementById("myBtn");


//Div with id content
let content = document.getElementById("content");

function getData(){
    console.log("Started getData");
    url = "shankar.txt";
    fetch(url).then((response)=>{
        console.log("Inside first then")
        return response.text();
    }).then((data)=>{
        console.log("Inside second then")
        console.log(data);
    })
}
console.log("Before running get data");
getData()
console.log("After running get data");


