/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

// function add(){
//   //Add function here
// }
const sum = (a, b) => {
    return a + b
  }
  
  const sub = (a, b) => {
    return a - b
  }
  
  const div = (a, b) => {
    if(b === 0){
      console.log('Cannot divide by 0');
    } else {
    return a / b  
    }
  }
  
  const mul = (a, b) => {
    return a * b
  }
  
  console.log(sum(10, 4));
  console.log(sub(10, 4));
  console.log(div(10, 2));
  console.log(mul(10, 4));
  
  /*
    TODO: create a function that console logs the result of any of the above operations.
  */