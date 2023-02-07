const inputString = process.argv[2];
try{
    const vowels = /[aeiou]/gi;
    const vowelCount = (inputString.match(vowels));
    if (vowelCount){
        console.log(vowelCount.length+1);
    }
    else{
        console.log((vowelCount ||[]).length);
    }
} catch(error){
    console.log("Enter a string please!");
}
