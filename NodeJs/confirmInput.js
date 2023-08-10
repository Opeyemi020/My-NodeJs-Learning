const prompt = require('prompt-sync')({sigint: true})
const firstName = prompt("Enter first name :");
const lastName = prompt("Enter Last name :");
const otherName = prompt("Enter other name: ");
console.log(`your full name is : ${firstName} ${lastName} ${otherName}`);