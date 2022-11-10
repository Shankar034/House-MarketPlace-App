console.log('Welcome to tutorial 14')

// const a = document.all

// console.log(a)

//Single element selector
//Multi Element selector

let element = document.getElementById('myfirst') ;

// element = element.className;
// element= element.childNodes;
// element= element.parentNode;
element.style.color = 'red';

element.innerText = 'He is a good boy'

element.innerHTML = '<b> He is a good man</b>'

// console.log(element);


let sel = document.querySelector('#myfirst')
sel = document.querySelector('.child')
sel = document.querySelector('div')

sel.style.color = 'green'

// console.log(sel)


//MUlti Element Selector


let elems = document.getElementsByClassName('child')


elems = document.getElementsByClassName('child')
console.log(elems[0].getElementsByTagName)


Array.from(elems).forEach(element => {
    console.log(element);
    element.style.color = 'Blue'
}); 


