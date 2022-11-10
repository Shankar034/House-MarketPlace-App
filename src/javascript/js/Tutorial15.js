console.log('Welcome to tutorial 15')

let cont = document.querySelector('.no')
cont = document.querySelector('.container')
// console.log(cont.childNodes);

// console.log(cont.children);



let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[1].nodeType;
// console.log(nodeType)
// console.log(nodeName)

//node Types 
// 1. element
// 2. Attribute
// 3.Text Node
// 8. Comment
// 9. document
// 10. Doc type


let container = document.querySelector('div.container');
// console.log(container.children[1].children[0].children)

console.log(container.firstChild)
console.log(container.firstElementChild)
console.log(container.lastChild)

console.log(container.lastElementChild)


//Count of Child Element
console.log(container.childElementCount)


console.log(container.firstElementChild.parentNode)

console.log(container.firstElementChild.nextSibling)

console.log(container.firstElementChild.nextElementSibling.nextElementSibling)














