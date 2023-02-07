#!/usr/bin/env node

const inputString = process.argv[2];
const reversedString = inputString.split('').reverse().join('');
console.log(reversedString);
