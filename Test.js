
/*
const ps=require("prompt-sync")

const prompt=ps();

let name=prompt("enter your name");




let num1 = prompt("Enter your first number :");

let num2 = prompt("Enter your second number :");

let sum = num1+num2;

console.log(sum)

*/ 

/*

const prompt = require('prompt-sync')()

let inputF = parseFloat(prompt('Please enter a temperature in Fahrenheit: '));

let convertTemp = (inputF - 32) * 5/9

console.log(convertTemp)

const prompt = require('prompt-sync')()

let in1 = parseFloat(prompt('Please enter a number: '));
let in2 = parseFloat(prompt('Please enter a number: '));
let in3 = parseFloat(prompt('Please enter a number: '));
let in4 = parseFloat(prompt('Please enter a number: '));
let in5 = parseFloat(prompt('Please enter one last number!: '));

let newArray = [in1, in2, in3, in4, in5]

*/ 

/*
const prompt = require('prompt-sync')()

let get_selection = () => {
    const options = ['Please select your favourite from the following options:', '1. Pizza', '2. Ice cream', '3. Salad'].join('\n')
    const selection = prompt(options+'\n')
    console.log('you selected: ' + selection)
    return(selection)
}

*/ 


const prompt = require("prompt-sync")
let num1=prompt("Enter first number");
let input1=parseInt(num1);
let num2=prompt("Enter second number");
let input2=parseInt(num2)
let operator=prompt("Enter operator");
switch (operator){
    case '+':
      result = input1+input2;
      console.log(result)
      break;
    case '-':
        result = input1-input2;
        console.log(result)
      break;
    case '*':
        result = input1*input2;
        console.log(result)
      break;
    case '/':
        result = input1/input2; 
        console.log(result)
}