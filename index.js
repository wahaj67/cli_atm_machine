#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 9700000;
let myPin = 2345;
const anspin = await inquirer.prompt([{
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }]);
if (anspin.pin === myPin) {
    console.log("correct pin code ");
    let operationans = await inquirer.prompt([{
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "checkbalance", "fastcash",]
        }]);
    if (operationans.operation === "withdraw") {
        let amountans = await inquirer.prompt([{
                name: "amount",
                message: "enter your amount",
                type: "number"
            }]);
        if (amountans.amount > myBalance) {
            console.log("insufficent balance");
        }
        else {
            myBalance -= amountans.amount;
            console.log(`your remaining balance is ${myBalance}`);
        }
    }
    else if (operationans.operation === "fastcash") {
        let fastcashans = await inquirer.prompt([{
                name: "fastcash",
                message: "selct any one withdrawl option",
                type: "list",
                choices: [500, 1000, 5000, 10000]
            }]);
        myBalance -= fastcashans.fastcash;
        console.log(`you have sucessfully withdrawl  ${fastcashans.fastcash}`);
    }
    else if (operationans.operation === "checkbalance") {
        console.log(`your current balance is ${myBalance}`);
    }
}
else {
    console.log("incorrect pin ");
}
