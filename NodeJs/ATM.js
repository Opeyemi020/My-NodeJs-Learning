const input = require('prompt-sync')();
displayMainMenu();
function displayMainMenu (){
  let welcomeMessage =
      "==================================\n"+
          "WELCOME TO SULTY BANK\n" +
      "INSERT YOUR CARD AND PRESS ENTER\n"+
    "===================================\n"
    input(welcomeMessage);
  censorPIN()
}
function censorPIN(secretNumber){
    secretNumber =("KINDLY ENTER YOUR SECRET NUMBER:\t")
    // return secretNumber.replace(/./g, '*');
}
function proceedMessage() {
  let message =
        "==========\n"+
        "WELCOME\n" +
        "==========\n"+
        "PRESS CASH TRANSACTION BUTTON TO PROCEED TO TRANSACTION MENU\n" +
        "->1 CASH TRANSACTIONS\n" +
        "->2 SELECT INSTANT\n" +
        "->3 UPDATE MOBILE NUMBER\n" +
        "PRESS CANCEL TO TERMINATE\n";
    input(message)

}
function cashTransaction() {
let message = 
    "SELECT TRANSACTIONS\n" +
    "PRESS CANCEL TO TERMINATE\n" +
    "->1 BALANCE\n" +
    "->2 CHANGE PIN\n" +
    "->3 WITHDRAWAL\n" +
    "->4 TRANSFER\n" +
    "->5 PAY ARENA";
    return input(message)
}

switch (input(cashTransaction).charAt(0)){
    case '1' :
        checkBalance();
    break;
    case '2' :
        changePin();
    break;
    case '3' :
        withdrawal();
    break;
    case '4' :
        transfer();
    break;
    default:
        break;

}
function amount (){
    const amount =
        "     ********************\n"+
        "       SELECT THE AMOUNT\n" +
        "     ********************\n"+
        "PRESS CANCEL TO TERMINATE TRANSACTION\n" +
        "\n" +
        "1-> #200 " +  " 5-> #10000\n" +
        "2-> #500 " +  " 6-> #20000\n"+
        "3-> #1000 "+  "7-> OTHERS (LESS #20000)\n"+
        "4-> #5000";
    input(amount);
}
function display(message){
    console.log(message)
}
function withdrawal() {
    accountType();
    receiptMessage();
    amount();
    display("TEMPORARILY UNABLE TO DISPENSE CASH");
    doneMessage();
}
function changePin(){
    let pin = "PIN SUCCESSFULLY CHANGED";
    input(pin);
}
function accountType(){
    const message =
        "1-> CURrENT ACCOUNT\n" +
        "2-> SAVING ACCOUNT\n" +
        "3-> FIXED ACCOUNT\n";
    input(message)
}
function doneMessage () {
    const message =
        "DO YOU WANT TO PERFORM ANOTHER TRANSACTION?\n\n" +
        "1-> YES\n" +
        "2-> NO";
    input(message);
    if (input(message).charAt(0)==='1'){
        proceedMessage();
    }else {
        display("TAKE YOUR CARD")
    }
}

function receiptMessage (){
    const message =
        "DO YOU WANT TO PERFORM ANOTHER TRANSACTION?\n\n" +
        "1-> YES\n" +
        "2-> NO\n";
    input(message);
}
function checkBalance(){
    accountType();
    receiptMessage();
}
function transfer(){
    let message =
        "PRESS CANCEL TO TERMINATE TRANSACTION\n" +
        "\n" +
        "1-> TO FIRST MONIE WALLET\n" +
        "2-> TO LINKED ACCOUNT\n" +
        "3-> TO OTHER BANK ACCOUNT";
    input(message);
    accountType();
    input("KINDLY ENTER THE DESTINATION ACCOUNT NUMBER\n");
    amount();
    doneMessage();
}