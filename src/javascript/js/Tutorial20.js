console.log('This is Tutorail 20')

let impArray = ['Helo', 'Want', 'Pizza'];
//Add a key-value pair inside local Storage


localStorage.setItem('Name', 'Bharati');
// localStorage.setItem('Name', 'Bharati')


localStorage.setItem('Sabzi', JSON.stringify(impArray))

// localStorage.clear();

let name = localStorage.getItem('Name');
name = JSON.parse(localStorage.getItem('Sabzi'))
console.log(name)



sessionStorage.setItem('sessionName', 'sHarry');
sessionStorage.seItem('sessionName2', 'sRohan');
sessionStorage.setItem('sessionSabzi', JSON.stringify(impArray));





