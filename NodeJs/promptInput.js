const prompt = require('prompt-sync')({sigint: true});
const name = prompt('what is you name?');
console.log(`Hey there ${name}`);
