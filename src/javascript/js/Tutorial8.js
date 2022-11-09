

const age = 18
const vari = 23

if (age==19){
    console.log('Age is not 19')
}

else if(age !== 68)
{
    console.log('Age is 68')
}
else{
    console.log("Age is not 19")
}


if (typeof vari !== 'undefined')
{
    console.log('Vari is defined')
}
else {
    console.log('Vari is not defined')
}

const doesDrive = false

if (doesDrive || age>18){
    console.log ("You can drive")

}else{
    console.log("you can not drive")
}


console.log(age==45? "age id 45" : "Age is not 45")




switch (age) {
    case 18:
        console.log('you are 18')
        break;
        case 45:
        console.log('you are 45')
        break;
        case 90:
        console.log('you are 90')
        break;

    default:
        console.log('your age is unknown')
        break;
}



