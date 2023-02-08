const inputString = process.argv.slice(2).join(' ');
try{
    const vowels = /[aeiou]/gi;
    const vowelCount = (inputString.match(vowels)||[]).length;
    console.log(vowelCount);
} catch(error){
    console.log(error);
}