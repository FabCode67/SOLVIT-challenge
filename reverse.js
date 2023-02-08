
const inputString = process.argv.slice(2).join(" ");
const reversedString = inputString.split("").reverse().join("")||"Enter some string please";
console.log(reversedString);

