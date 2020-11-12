const { add, subtract, addAgain } = require('./myModule');

let name = "jeremy";
console.log(name);

const printName = (person) => {
    return `Hello ${person}!`
}

console.log(printName(name));
console.log(add(5, 50));
console.log(addAgain(9, 50));
console.log(subtract(60, 6));
