/* 
🌟 Promises

What is a promise? 👇
========================================

- asking for data/information and it can come back to you or NOT.
- Compare it to a promise in real life.

Ex: 
    - You are at a restaurant and you order soup.
    - The waiter PROMISES YOU that he will bring back the soup you ordered
    - What are the outcomes of his promise?
    - He gets you the soup (Resolved)
    - OR He does NOT give you the soup(Rejected)

*/

//  Variables that describe the scenario
let YourTip = 15;
let waiterMoney = 0;
let badReview = false;

// ** Create a Promise object through javascript
let promise = new Promise((resolve, reject) => {
  let hasSoup = true;

  if (hasSoup == true) {
    resolve('Success!');
  } else {
    reject('Failed!');
  }
});

// What does this print IF hasSoup is true? What if it's false?
console.log(promise)


/* 

How do we handle a promise? 👇
========================================

- We just learned a promise can return value of resolved or rejected but we can then write code to do something with that return (resolved or rejected)
- Below is the real world example

Ex: 
    - The waiter resolves his promise and gives us soup, we will THEN thank him and give him a nice tip!

    - The waiter rejects his prmise and does NOT give us soup, we THEN complain and leave a bad review of the restaurant.
========================================

- You can handle promises with .then()
- .then() is a method that will handle a resolved promise
- .then() takes in an arrow function with WHAT you want to do with the resolved  promise!

- .catch() method can get called whenever an error is encountered at any point in the promise resulting in the promise getting rejected
- You can chain .catch() after a .then() if you want to handle for errors or log a message!


*/

// ** Get the promise variable again and handle the result by adding .then() after it

// promise.then(()=> {
//   console.log("Thank you here's a tip!")
//   return waiterMoney += YourTip
// }).catch(()=> {
//   console.log("This is terrible service!")
//   return badReview = true
// })

/* 

Async Await + Try Catch? 👇
========================================

- If this is making sense to you let's start to use real coding example now using a promise to get back data from an api

- async await is just "syntatical sugar" makes code easier to read/understand

*/

// Ex:
async function getUserData () {
  // instead of .then and .catch we can use try and catch
  try {
    const userData = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const user = await userData.json()

    // If you console log user what would get printed out?
    return user
  }

  catch (error) {
    console.error(error)
  }

}

console.log(getUserData())

//  ** Test what you understand about getUserData() **

// What part of this function is the promise?

// What part of this function is handling if the promise is resolved?

// What part of this function is handling if the promise is rejected?

// What does asynchronous mean and how does it affect the function?


