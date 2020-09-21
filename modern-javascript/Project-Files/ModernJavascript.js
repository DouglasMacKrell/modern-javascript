// console.log("Hello World")

//  VARIABLES

// var age = 26;
// age = 27
// age = age + 1

// var health = 0.65;

// var isAlive = true;
// isAlive = false;

// isAlive = 5 > 2

// const pi = 3.14159
// let numberOfLimbs = 4

// STRING VARIABLES

// var name = "Doug";
// var zenva = "Zenva";

// let concat = name + zenva

// let finalStr = `Hi! My name is ${name} and I'm taking a course on ${zenva}`

// API

// require('dotenv').config()

// console.log(process.env.API_KEY)

// ARRAYS AND OBJECTS

// var numbers = [1, 2, 3];
// numbers[0]

// var gems = {
//     ruby: 2,
//     emerald: 4,
//     diamond: 5
// }

// INTRO TO FUNCTIONS

// function sum(num1, num2 = 2) {
//     return num1 + num2
// }

// console.log(sum(5))

// const result = (num1, num2) => {
//     return num1 + num2
// }

// INTRO TO PROMISES

// const promise = new Promise((resolve, reject) => {
//     let number1 = 5
//     if (number1 === 5) {
//         resolve("Success!")
//     } else {
//         reject("Failure!")
//     }
// });

// promise.then((message) => {
//     console.log(message);
// }).catch((message) => {
//     console.log(message);
// })

// async function sum(num1, num2 = 2) {

//   return await num1 + num2; // fetch data here
// }

// FETCHING DATA FROM AN URL

const fetch = require('node-fetch');

let url =
  "http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=221380";

async function fetchData(url) {
    let response = await fetch(url);
    let jsonResponse = await response.json();
    console.log(JSON.stringify(jsonResponse));
}

fetchData(url).catch(() => { console.log("Oops, all errors!") })