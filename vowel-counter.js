const inputString = process.argv[2];
const vowels = /[aeiou]/gi;
const vowelCount = (inputString.match(vowels) || []).length;
console.log(vowelCount);
