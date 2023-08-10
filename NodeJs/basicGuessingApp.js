const prompt = require('prompt-sync')({sigint: true});

const numberToGuess = Math.floor(Math.random() * 10)+1;
let foundCorrectNumber = false;

while (!foundCorrectNumber){
    let guess = prompt('Guess a number from 1 to 10: ');
    guess = Number(guess); //convert the String to number

    if (guess === numberToGuess){
        console.log('Congrats, you got the correct number');
            foundCorrectNumber = true;
    }else {
        console.log('Sorry, guess again!!')
    }
}