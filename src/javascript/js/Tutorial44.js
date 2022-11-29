console.log('This is tutorial 44');


//Pretend this is coming from a server as response
let a = "Harry Bhai";
a = undefined;
if (a != undefined){
    throw new Error('This is not undefined')
    
}
else{
    console.log("This is undefined");
}

try {
    // foasidgoias
    console.log("We are inside try block");
    functionShankar();
    
} catch (error) {
    console.log("Are you oay?")
    console.log(error.name);
} finally{
    console.log("We will run this")
}