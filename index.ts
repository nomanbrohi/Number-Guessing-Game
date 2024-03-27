#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue("Welcome to Number Guessing Game"));
let points: number = 0;
let life: number = 3;
while (true) {
  const randomNumber = Math.floor(Math.random() * 6 + 1);
  const answer = await inquirer.prompt([
    {
      message: chalk.yellow("Guess a number between 1 and 6"),
      name: "number",
    },
  ]);

  if (answer.number === "exit") {
    console.log("you Exited the Game")
    console.log("Thank You for Your Playing")
    console.log("You Earn " + points + " Points. \nCome back again ")
    break;
  }

  if (parseInt(answer.number) === randomNumber) {
    points += 5;
    console.log(
      "You guessed the correct number. " +
        randomNumber +
        " You Won " +
        points +
        " Points."
    );
    const wantToPlayAgain = await inquirer.prompt([
      {
        message: "Do you want to play again?",
        name: "playAgain",
        type: "list",
        choices: ["Yes", "No"],
      },
    ]);
    if (wantToPlayAgain.playAgain === "Yes") {
      continue;
    } else {
      break;
    }
  } else if (parseInt(answer.number) != randomNumber) {
    life -= 1;
    console.log("You loss! " + randomNumber + " is the correct number.");
    if (life == 2 || life == 1) {
      console.log("Try again ");
      console.log("You have " + life + " life left");
    } else {
      console.log("You have just Earned " + points + " Points.")
        console.log("Game Over!!")
      break;
    }
  } else {
    console.log("Invalid input");
    console.log("Try again");
    break;
  }
}
