console.log('We are at Tutorial 6')

const name = 'Shankar'
const cast ='Bhandari'
console.log(name +' '+ cast)


let html;

html = "Hello who is there"
+
"I am the one "

console.log(html)

console.log(html.length)
console.log(html.toLocaleLowerCase())
console.log(html.toUpperCase())

console.log(html[0])


console.log(html.indexOf('this'))
console.log(html.indexOf('one'))
console.log(html.lastIndexOf("<"))

console.log(html.charAt(3))
console.log(html.includes('ggd'))

console.log(html.substring(0,3))

console.log(html.endsWith('Who is Fucked'))




console.log(html.slice(0,4))
console.log(html.split(' '))

console.log(html.replace('Hello', 'it'))



let fruit1 = 'orange'
let fruit2 = 'Apple'
let myHtml =`Hello ${name} 
<h1>This is heading</h1>
 <p>and you like ${fruit1} and ${fruit2}`

document.body.innerHTML = myHtml
