const fs = require("fs");
// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

// Load the data
const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
// Parse the data
const user = JSON.parse(dataJSON);
// Update the current info
user.name = "James";
user.planet = "Titan";
user.age = 24;
// Stringify and update the original
const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);
