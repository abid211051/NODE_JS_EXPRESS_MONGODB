// Importing full module
const s1 = require('./test');
console.log(s1.myName());

// Importing single parameter from module by destructuring
const {myage} = require('./test')
console.log(myage);