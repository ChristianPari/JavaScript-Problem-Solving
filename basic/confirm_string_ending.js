/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

let confirmEnding = (str, target) => {
    /* EXPLANATION COMMENT
        1) we want to use the slice() method to copy a portion of the 'str' to another string variable
        2) we do this b/c then we can check if that new string variable is equal to the target
        let newStr = str.slice(str.length - target.length);
        ^ we subtract the target length from the str length in the first parameter of the slice method which sets which index to begin 'slicing at'
        ^ so now str.slice(9) will move to the 9th index 'a' and then copy everything after it; 'n'. so newStr = `n`
        3) now check if `newStr` is equal to `target`
            if (newStr === target) {
                return true;
            }
    */
    return str.slice(str.length - target.length) === target;
    //^ shorthand version
}
console.log(confirmEnding("Bastian", "n")); // returns true
console.log(confirmEnding(`Hi, I'm Paul`, `Steve`)); // returns false