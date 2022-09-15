// Test you code by forking this repl: 
// 👉 


// Write a function that takes in an array and sort the numbers inside from least to greatest

function sortArray(array) {
    let swap;
    for (let number of array) {
        for (let number2 of array) {
            if (number < number2) {
                swap = number2;
                number2 = number;
                number = swap;
            }
        }
        array.push(number);
    }

    return array;

}

console.log(sortArray([5, 22, 2, 32, 90, 35, 71, 10]));

// BONUS sort the array without using .sort()

