const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function collectInputs(){
    rl.question('Enter first name (or type "sultan" to finish): ', (input) => {
        if (input.toLowerCase()==='sultan') {
            rl.close();
            processInputs(inputs);
        }else {
            inputs.push(input);
            collectInputs();
        }
    });
}
const inputs = [];

function processInputs(inputs){
    console.log('you enter the following value: ');
    inputs.forEach((input, index) => {
        console.log(`${index + 1}. ${index}`);
    });
}
collectInputs();