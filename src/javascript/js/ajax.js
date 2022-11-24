console.log("This is the full Ajax tutorial ");

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener("click", buttonClickHandler)

function buttonClickHandler(){

    console.log('You have clicked the fetchBtn');
    //Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //Open the object

    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    //Use this for post request
    xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');


    //What to do on progress

    xhr.onprogress = function(){
        console.log('on progress');
    }


    // xhr.onreadystatechange = function(){
    //     console.log('ready state is ', xhr.readyState)
    // }

    xhr.onload = function(){
        if(this.status === 200){

            console.log(this.responseText)
        }
        else{
            console.log("some error occured")
        }
    }

    //send the request

    params = 	"name = test & salary = 123 & age = 23";
    xhr.send(params);

    console.log("We are done");



}



