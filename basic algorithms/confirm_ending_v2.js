/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

const confirmEnding = (str, target) => {

    // check if single word or if a sentence
    const sentRegExp = /\s/g;

    str = sentRegExp.test(str) ? str.split(" ").reverse() : str;

    // if sentence extract last word 
    const testWord = typeof str === "object" ? str[0] : str;

    // extract length of target from end of word and compare to target
    const targetLength = target.length;
    const testEnding = testWord.slice(testWord.length - targetLength, testWord.length);

    // true or false
    return testEnding === target;

};

console.log(confirmEnding("Basti an sdf", "nsdf"));