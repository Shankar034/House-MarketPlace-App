console.log("This is my Tutorial 42");

//btn with id myBtn
let myBtn = document.getElementById("myBtn");


//Div with id content
let content = document.getElementById("content");

// function getData(){
//     console.log("Started getData");
//     url = "shankar.txt";
//     fetch(url).then((response)=>{
//         console.log("Inside first then")
//         return response.text();
//     }).then((data)=>{
//         console.log("Inside second then")
//         console.log(data);
//     })
// }


function getData(){
    console.log("Started getData");
    url = "https://api.github.com/users";
    fetch(url).then((response)=>{
        console.log("Inside first then")
        return response.json();
    }).then((data)=>{
        console.log("Inside second then")
        console.log(data);
    })
}

function postData(){
    
    url = "https://dummy.restapiexample.com/api/v1/create";
    data ='{"name":"Shankar034","salary":"123","age":"23"}';
    params = {
        method:"post",
        headers: {
            "Content-Type": 'application/json'
        },
        body:data
    }
    fetch(url, params).then((response)=>response.json())
    .then((data)=>console.log(data))
}


// console.log("Before running get data");
// getData()
// console.log("After running get data");


postData();

