food = Number(prompt('how much was the food?'))
tipPercentage = Number(prompt('tip %?')) / 100
tipAmount = food * tipPercentage
total = food + tipAmount

console.log('tip amount', tipAmount)
console.log('total', total)