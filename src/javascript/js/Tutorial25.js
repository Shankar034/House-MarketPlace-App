console.log('This is tutorial 25')

//Create a new element
let divElem = document.createElement('div')


let val = localStorage.getItem('text')
let text;
if(val == NULL){

    text = document.createTextNote('This is my element. Click to edit it')
}else{
    text = document.createTextNote(val)
}
divElem.appendChild(text);
divElem.setAttribute('id', 'elem');
divElem.setAttribute('style', 'border:2px solid black; width: 154px; margin:34px; padding:23px')

let container = document.querySelector('.container')


let first = document.getElementById('myfirst')

// Insert the element before element with id first

container.insertBefore(divElem, first)
divElem.appendChild(TextMetrics)

console.log(divElem, container, first)


divElem.addEventListener('click', function(){
    let noTextAreas = document.getElementsByClassName('textarea').length;

    if(noTextAreas ==0){
    let html = elem.innerHTML
    divElem.innerHTML=`<textarea class="form-control textarea" aria-label="With textarea" id="textarea" > ${html}</textarea>`;
}
let textarea = document.getElementById('textarea')
textarea.addEventListener('blur', function(){
    elem.innerHTML = textarea.value;
    localStorage.setItem('text', textarea.value)
})
})

