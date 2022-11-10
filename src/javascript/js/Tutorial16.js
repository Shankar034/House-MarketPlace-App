console.log('This is the Tutorial 16')


let element = document.createElement('li');


//Add a class name to li element
//6.25 Minutes

let text = document.createTextNode('I am a text node')
element.appendChild(text)

element.className = 'childul'
element.id = 'createdli'
element.setAttribute('title', 'mytitle')

// element.innerText = ' Hello this is created by Shankar'

let ul = document.querySelector('ul.this')
ul.appendChild(element)

console.log(ul)
console.log(element)


let elem2 = document.createElement('h3')

elem2.id = 'elem2'
elem2.className= 'elem2'
let tnode = document.createTextNode('This is a created node for elem2')
elem2.appendChild(tnode)

element.replaceWith(elem2)


let myul = document.getElementById('myul');
myul.replaceChild( element, document.getElementById('fui') )

myul.removeChild(document.getElementById('lui'));



let pr = elem2.getAttribute('href')

elem2.removeAttribute('id')
console.log(elem2, pr)


//quick quiz