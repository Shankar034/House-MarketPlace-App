console.log("This is Tutorial 57");

// Maps in JavaScripts: We can use any type of key or value

const myMap = new Map();

const key1 = "myStr";
const key2 = {};
const key3 = function () {};

//Setting Map Values

myMap.set(key1, "This is a string");
myMap.set(key2, "This is a blank obj");
myMap.set(key3, "This is an empty function");

console.log(myMap);

//Getting the values from the map

let value1 = myMap.get(key3);
console.log(value1);

//Get teh size of the map

console.log(myMap.size);

//You can loop using for-of to get keys and values

for (let [key, value] of myMap) {
  console.log(key, value);
}


//Get only Keys 
for(let key of myMap.keys()){
    console.log('key is ', key);
}



//You can loop through a map using for each loop


myMap.forEach((value, key)=>{
    console.log('Key is ', key);
    console.log('Value is', value);

});


//Converting Map to an array

let myArray = Array.from(myMap);
console.log('Map to array is', myArray);

let myKeysArray = Array.from(myMap.keys());
console.log('Map to keys array is', myKeysArray);

let myValuesArray = Array.from(myMap.values());
console.log('Map to values array is', myValuesArray);


