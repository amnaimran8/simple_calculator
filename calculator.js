#! /usr/bin/env node 
console.log("\t\tBASIC CALCULATOR\n \t\t================");
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "ENTER 1ST NUMBER FOR THE OPERATION : ", type: "number", name: "num_1", prefix: "*" },
    { message: "ENTER 2nd NUMBER FOR THE OPERATION : ", type: "number", name: "num_2", prefix: "*" },
    { message: "SELECT ANY OPERATORS", type: "list", name: "OPERATORS", choices: ["ADDITION", "SUBTARCTION", "MULTIPLICATION", "DIVISION"], prefix: "*" }
]);
console.log(answer);
if (answer.OPERATORS === "ADDITION") {
    console.log("\nSUM OF TWO DIGITS IS : %d ", answer.num_1 + answer.num_2);
}
else if (answer.OPERATORS === "SUBTARCTION") {
    console.log("\nDIFFERENCE OF TWO DIGITS IS : %d ", answer.num_1 - answer.num_2);
}
else if (answer.OPERATORS === "MULTIPLICATION") {
    console.log("\nPRODUCT OF TWO DIGITS IS : %d ", answer.num_1 * answer.num_2);
}
else if (answer.OPERATORS === "DIVISION") {
    console.log("\nQUOTIENT OF TWO DIGITS IS : %d ", answer.num_1 / answer.num_2);
}
else {
    console.log("INVALID OPERATION \nSELECT A VALID OPERATOR PLEASE");
}
