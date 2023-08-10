const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Enter first name ", (userInput) => {
    console.log('your name is', userInput);
    rl.close();
});
