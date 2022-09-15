/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

function add(num1, num2) {
  return num1 + num2;
}

const sub = (num1, num2) => num1 - num2;

function div(num1, num2) {
  if (num2 == 0) {
    return "cannot divide by zero";
  } else {
    return num1 / num2;
  }
}

const mul = (num1, num2) => num1 * num2;

console.log('hello from the SUM exercise')
/* 
  TODO: create a function that console logs the result of any of the above operations.
*/

const consoleLog = (func) => {
  console.log(func);
}

consoleLog(add(10, 20));
consoleLog(sub(20, 10));
consoleLog(div(0, 10));
consoleLog(mul(12, 14));