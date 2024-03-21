#! /usr/bin/env node

import * as readline from "readline"

function user_input():void{
    const rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout
    })

    rl.question("Enter Your Number: ", (userInputs:string) => {
        const usernumber:number = parseInt(userInputs);
        const randomNumber = Math.floor(Math.random() * 100)

        if (randomNumber === usernumber){
            console.log("Your Win." + " " + randomNumber + " is the correct number")
        }
        else{
            console.log("Your Fail." + " " + randomNumber + " is the correct number")
        }
    rl.close()

    })

    }    

user_input()