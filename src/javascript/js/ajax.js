console.log("This is the full Ajax tutorial ");

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener("click", buttonClickHandler)

function buttonClickHandler(){

    console.log('You have clicked the fetchBtn');
    //Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //Open the object

    xhr.open('GET', 'shankar.txt', true);

    //What to do on progress

    xhr.onprogress = function(){
        console.log('on progress');
    }

    xhr.onload = function(){
        if(this.status === 200){

            console.log(this.responseText)
        }
    }

    //send the request

    xhr.send();

}



