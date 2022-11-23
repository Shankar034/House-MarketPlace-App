console.log("This is index js")


//Constructor
function Book(name, author, Type){
    this.name = name;
    this.author = author;
    this.type = type;
}

//Display Constructor

function Display(){

}

//Add methods to display 

//Add submit event listener to libraryForm

let libraryForm = document.getElementById('libraryForm')
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(){
    console.log("you have submitted ")
}