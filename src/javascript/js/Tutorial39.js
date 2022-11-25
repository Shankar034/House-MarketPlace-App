console.log("This is tutorial 39");


function func1(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            const error = true;
            if (!error){
                console.log("Function: Your promise has been resolved");
                resolve();

            }
            else {
                console.log('Function: Your promise has not been resolved')
                reject("Sorry not fulfilled");
            }
            
        }, 2000);
    })
}

func1().then(function(){
    console.log("Harry: Thanks for resolvling")
}).catch(function(error){
    console.log(" Very bad Bro. Reason :" + error)
})