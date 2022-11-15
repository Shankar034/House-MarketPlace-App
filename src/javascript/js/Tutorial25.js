console.log('This is tutorial 25')


let divElem = document.createElement('div')
let text = document.createTextNote('This is my element. Click to edit it')
divElem.appendChild(text)
divElem.setAttribute('id', 'elem')
divElem.setAttribute('style', 'border:2px solid black; width: 154px; margin:34px; padding:23px')

let container = document.querySelector('.container')


let first = document.getElementById('myfirst')

// Insert the element before element with id first

container.insertBefore(divElem, first)
divElem.appendChild(TextMetrics)

console.log(divElem, container, first)