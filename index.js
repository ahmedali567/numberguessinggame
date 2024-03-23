#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "please select a number",
    },
]);
if (answers.userguessednumber === randomNumber) {
    console.log("Congratulations you won.");
}
else {
    console.log("you guessed wrong number");
}
