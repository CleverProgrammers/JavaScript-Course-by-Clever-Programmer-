// console.log
// console.log("Ngu Helon");
// console.log("Journey to becoming a full stack web dev.");

// // variables (var, let, const)
// sentence = 'Becomeing a developer is not easy at all, by I will try hard to reach my goal';
// console.log(sentence);

// Advice : Don't use var instead use var or const

// let = use it if you are going to change the data
// const = use it if you know the data won't change

// operators
// fruit = prompt("what is your favorite fruit")

// console.log(fruit);

// * / ** + -

// can use Number in the place of parseInt

// food = parseInt(prompt("How much is the food?"))
// tipPercentage = parseInt(prompt("tip percentage")) / 100;
// tipAmount = food * tipPercentage
// total = food + tipAmount

// console.log('tip amount: ', tipAmount);
// console.log('total: ', total);
// alert(tipAmount);



// user input

// data type (strings, numbers)
/*
numbers -> 1, 3, 4, 2.5
strings -> 'hello', 'how are you'
arrays -> []
objects -> {}
boolean -> true / false (banks)
*/

// Math Operators
/*
Multiply *
Divide /
Exponents **
Modulo/Remainder % 5%2 = 1
Add +
Substract -
*/

// Math methods
/*
Floor - Rounds down = Math.floor(11.34) = 11
Ceil - Rounds up = Math.ceil(11.34) = 12
Random - gives any number between 0(inclusive) - 1(exclusive)
---- Tip to have a number b/n any range
---- so use Math.random() * 100: you will get any number b/n 0 and 100.
*/

// Baby weather app (very important = Conditionals)
/*
    if rain -> 'Grab your umbrella'
    else -> 'Wear your sunglasses'
*/

// let weather = prompt("how is the weather");

// if (weather == 'rainy') {
//     console.log('Grab your umbrella')
// } else {
//     console.log('Wear your sunglasses')
// }

//conditional operators
// ==, ===, >, <, <=, >=, !=, !==

//functions (very important in every language)
//this is a function called 'sayMyName' and it has zero arguments or parameters
//it prints out the name to the console
function sayMyName() {
    console.log("Ngu helon")
}

// sayMyName();

//Dynamic function
//this is a function called 'sayMyName2' it has 1 parameter called 'name' it logs out your name to the console
function sayMyName2(name) {
    console.log(name)
}

// sayMyName2("Ngu")
// sayMyName2("Helon")

function greeting(name) {
    //template literals
    let greet = `hi ${name}, Nice to meet you`
    console.log(greet)
}

//greeting('Helon')

function sum(a, b) {
    // return keyword : make a function to be reusable
    return a + b
}

// console.log(sum(1, 4))
// num1 = sum(1, 5)
// console.log(num1);

function calculateFoodTotal(food, tip) {
    const tipPercentage = tip / 100;
    const tipAmount = food * tipPercentage
    const total = sum(food, tipAmount)
    return total
}

// console.log(calculateFoodTotal(300, 20))

//ES6 -> Arrow functions
//Explicit return
const sumArrow1 = (a, b) => {
    return a + b
}

//Implicit return
//IMPORTANT: For implicit return, remove curly braces
const sumArrow3 = (a, b) => a + b

// console.log(sumArrow3(10, 50))

// Arrays
// Arrays allow you to hold multiple data
// const groceries = ['banana', 'apple', 'mango', 'pear'];
// console.log(groceries)

//Accessing a particular element in the array : known as indexing
// console.log(groceries[0]);
// console.log(groceries[1]);
// console.log(groceries[2]);
// console.log(groceries[3]);

// Array methods 
// ---- array.push
// groceries.push('cookie');
// groceries.push('chocolate');
// groceries.push('blueberries');
// console.log(groceries);

// ---- array.slice
// uses the array element from the start point to the end point where the start point is the first argument and the end point is second argument.
// console.log(groceries.slice(3, 6));
// console.log(groceries.slice(1, 4));

// array methods(slice, push, indexOf, length)
// console.log(groceries.indexOf('apple'));
// console.log(groceries.length)

// OBJECTS
// stores data in key value pairs
const person = {
    name: 'Leonardo',
    shirt: 'white'
}

// Accesing properties of an object
// Dot notation
// console.log(person.name);
// console.log(person.shirt);

//bracket notation
// console.log(person['name'])
// console.log(person['shirt'])

// assing a new property to an object
person.phone = '1-222-333-4444'
// console.log(person.phone)
// console.log(person)

// person 2
const person2 = {
    name: "Helon",
    shirt: "blue"
}

// console.log(person2['name']);
// console.log(person2.shirt);
// console.log(person2)

const introduction = (name, shirt) => {
    const person = {
        name: name,
        shirt: shirt,
        asset: 100000,
        liability: 50000,
        netWorth: function () {
            return this.asset - this.liability;
        }

    }
    const intro = `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt}and my net worth is $${person.netWorth()} USD`
    return intro;
}

// console.log(introduction('Helon', 'blue'));
// console.log(introduction('Leonardo', 'white'));

// For loops
const fruit = ['banana', 'apple', 'mango', 'pear', 'banana', 'apple', 'mango', 'pear', 'banana', 'apple', 'mango', 'pear', 'banana', 'apple', 'mango', 'pear'];

// for (let i = 0; i < fruit.length; i++) {
//     console.log(i, fruit[i]);
// }

// for (const friut of fruit) {
//     console.log(friut);
// }

const doubleFunction = (numbers) => {
    let result = [];
    for (const number of numbers) {
        result.push(number ** 2);
    }

    return result;
}

// console.log(doubleFunction([1, 2, 3, 4, 5, 6]));
// number = [1, 2, 3, 4, 5, 6];
// let result = [];
// for (var number of number) {
//     console.log(number * 2);
// }

// [2,4,6,8,10,12]
// for (var number of number) {
//     result.push(number * 2);
// }

// console.log(result);

const letterCounter = (phrase) => {

    phrase.length;

    //counter
    let result = 0;

    // for (const index in phrase) {
    //     console.log(Number(index) + 1);
    //     result = Number(index) + 1;
    // }

    return { result: phrase.length };
}

// const phrase = prompt("write your phrase here");
// console.log(letterCounter(phrase));

//sum up all numbers in an array
// const sumArrays = (numbers) => {
//     let result = 0;
//     for (const number of numbers) {
//         result = result + number;
//     }
//     //for loop
//     return { result }
// }

// console.log(sumArrays([1, 2, 3, 4]));

//Trying by myself

const sumArrays = (numbers) => {
    let result = 0;

    for (const number of numbers) {
        result = result + number;
    }

    return { result: result };
}

// const myarray = [1, 3, 5, 2];
// console.log(sumArrays(myarray));

// greatest number in an array
const maxNumber = (numbers) => {
    let result = numbers[0];

    for (const number of numbers) {
        if (result < number) {
            result = number;
            console.log(number)
        }
    }

    return { result };
}

// const myarray = [3, 1000000, 999999, 5, 2, 1];
// console.log(maxNumber(myarray));

const frequency = (phrase) => {
    // letterFrequency ('haha') -> {'h':2, 'a':2}
    //make a 'frequency' object {}
    let frequency = {};
    for (const letter of phrase) {
        //check if letter exist in frequency
        if (letter in frequency) {
            //increment value by 1
            //incremental operators : ++, --, += etc
            frequency[letter] += 1;
        } else {
            frequency[letter] = 1;
        }
    }

    return frequency;
}

const letters = "This is freaking amazing";
console.log(frequency(letters));