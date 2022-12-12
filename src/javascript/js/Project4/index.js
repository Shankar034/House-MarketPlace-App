console.log("This is Tutorial 50");


const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');


name.addEventListener('blur',()=>{
    console.log("Name is blurred");

    //Validate name here

    let regex = /^[a-zA-Z]([0-9a-zA-Z]){3,10}$/;
    let str = name.value;
    console.log(regex, str);

    if(regex.test(str)){
        console.log("Your name is valid");
        name.classList.remove('is-invalid');

    }else{
        console.log('Your name is not valid');
        name.classList.add('is-invalid');
    }
} )

email.addEventListener('blur',()=>{
    console.log("email is blurred");

    //Validate email here

    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.(a-zA-Z){2,14}$/;
    let str = email.value;
    console.log(regex, str);

    if(regex.test(str)){
        console.log("Your email is valid");
        email.classList.remove('is-invalid');

    }else{
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
    }
} )

phone.addEventListener('blur',()=>{
    console.log("Phone is blurred");

    //Validate phone here

    let regex = /^[0-9]{10}$/;
    let str = phone.value;
    console.log(regex, str);

    if(regex.test(str)){
        console.log("Your phone is valid");
        phone.classList.remove('is-invalid');

    }else{
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
    }
} )