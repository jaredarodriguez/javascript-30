const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log('hello')

// Interpolated
console.log('Hello I am a %s string!', 'lol')

// Styled
console.log('%cI am some great text', 'font-size: 50px; background: red')

// warning!
console.warn('woooooo')

// Error :|
console.error('shit!')

// Info
console.info('test')

// Testing
console.assert(1 === 1, 'that is wrong!'); 

// clearing
// console.clear();

// Viewing DOM Elements
// console.dir(p); 

console.clear()
// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`)
    console.log(`this is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`)
    console.groupEnd(`${dog.name}`)
})


// counting
console.count()

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data); 
    })

    
// table 
console.table(dogs);