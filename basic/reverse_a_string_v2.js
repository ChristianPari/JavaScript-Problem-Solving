/*
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/

const reverseString = (str) => {

    return str.split("").reverse().join("");

};

console.log(reverseString("hello how are you"));