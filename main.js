// #! /usr/bin/env node
import inquirer from 'inquirer';
const answer = await inquirer.prompt([
    {
        message: "Enter your first number",
        name: "firstNamber",
        type: "number"
    },
    {
        message: "Enter your second number",
        name: "SecondNamber",
        type: "number"
    },
    {
        message: "what you perform the operator",
        name: "operator",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modules"]
    }
]);
if (answer.operator == "Addition") {
    console.log(answer.firstNamber + answer.SecondNamber);
}
else if (answer.operator == "Subtraction") {
    console.log(answer.firstNamber - answer.SecondNamber);
}
else if (answer.operator == "Multiplication") {
    console.log(answer.firstNamber * answer.SecondNamber);
}
else if (answer.operator == "Division") {
    console.log(answer.firstNamber / answer.SecondNamber);
}
else {
    console.log(answer.firstNamber % answer.SecondNamber);
}
