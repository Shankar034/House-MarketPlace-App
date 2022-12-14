console.log("This is Tutorial 58 for sets in JavaScript");

//Set stores uniques values
//Initialize an empty set
const mySet = new Set();

console.log("Ths set looks like:", mySet);


//Adding values to this set
mySet.add('this');
mySet.add('My name');
mySet.add('That');
mySet.add('That');
mySet.add('Hello');
mySet.add(true);
mySet.add(34);

console.log('The set looks this now:',mySet );

let newSet = new Set([1, 34, 'This', false, {a:4, b:44}]);
console.log('The set looks this now:',newSet );

console.log(newSet.size);

console.log(newSet.has(34));
console.log('The set looks this now:',newSet );
console.log(newSet.delete(1));
console.log('The set looks this now:',newSet );
