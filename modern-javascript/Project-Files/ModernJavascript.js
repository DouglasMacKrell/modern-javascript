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

const fetch = require("node-fetch");

let url =
  "http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=221380";

class Achievement {
  constructor(name, percent) {
    this.name = name;
    this.percent = percent;
  }

  printValues() {
      if (this.percent === 0) {
        console.log(
            `No one has completed the achievement ${this.name}.`
        );
      } else {
        console.log(
           `${this.name} achievement has been completed by ${this.percent}% of people.`
        );
      }

  }
}

async function fetchData(url) {
  let response = await fetch(url);
  let jsonResponse = await response.json();
  printData(jsonResponse);
}

function printData(jsonData) {
  var achievementsArray = [];
  let jsonObject = jsonData["achievementpercentages"];
  let allAchievements = jsonObject["achievements"];

  for (let achievement of allAchievements) {
    let name = achievement["name"];
    let percent = achievement["percent"];
    let newAchievement = new Achievement(name, percent);
    newAchievement.printValues();
    achievementsArray.push(newAchievement);
  }
  console.log(achievementsArray.length);
  return achievementsArray;
}

fetchData(url).catch(function () {
  console.log("Oops, all errors!");
});

// INTRO TO FOR LOOPS

// var numbs = [1, 2, 3[;

// for (let num of numbs) {
//     console.log(num)
// }

// READING DATA WITH FOR LOOPS

// CREATING DATA CLASS

// STORING DATA IN OBJECTS

// CONDITIONALS

