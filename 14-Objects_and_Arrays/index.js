/* start strings, numbers and booleans */


// let age = 100; 
// let age2 = age; 
// console.log(age, age2) // => (100, 100);
// age = 200; 
// console.log(age, age2) // => (100, 200);


// let name = 'jared'
// let name2 = name; 
// console.log(name, name2); // => (jared, jared)
// name = 'j-rod'; 
// console.log(name, name2) // => (jared, j-rod)

/* let's see what would happen working with arrays */
// const drummers = ['grohl', 'weckl', 'gadd', 'bonham', 'peart'];

/* now we want to copy the array */
// const hallOfFame = drummers; 
// console.log(hallOfFame, drummers) // => (5) ["grohl", "weckl", "gadd", "bonham", "peart"] (5) ["grohl", "weckl", "gadd", "bonham", "peart"]

/* might think we can do something like this: */
// hallOfFame[3] = 'rodriguez'
// console.log(hallOfFame, drummers) // => (5) ["grohl", "weckl", "gadd", "rodriguez", "peart"] (5) ["grohl", "weckl", "gadd", "rodriguez", "peart"]


/* spread operator from ES6 to make a new copy without contaminating */
// const hallOfFame3 = [...drummers]
/* slice to make a copy to not contaminate original array */ 
// const hallOfFame2 = drummers.slice();
// hallofFame2[3] = 'bonzo';
// console.log(hallOfFame2)
/* Array.from method */ 
// const hallOfFame4 = Array.from(drummers);


/* Objects */ 
const person = {
    name: 'Durhmam Filbert', 
    age: 90
};

/* make a copy */
const person2 = Object.assign({}, person, { number: 911 }) // => instantiate an object, open with an empty object, the object you are wishing to copy, and the added properties or other desired mutations in the final argument
console.log(person2); // => {name: "Durhmam Filbert", age: 90, number: 911}
console.log(person); // => {name: "Durhmam Filbert", age: 90}


/* more on objects */ 
const detective = {
    name: 'molly', 
    age: 30, 
    social: {
        twitter: '@mollysolvescrimes',
        facebook: 'molly.detective'
    }
};

console.clear();
console.log(detective);
const detective2 = Object.assign({}, detective);
const detective3 = JSON.parse(JSON.stringify(detective2));

// console.log(detective3);




