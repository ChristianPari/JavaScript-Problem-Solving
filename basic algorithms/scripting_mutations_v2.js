/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

const mutation = (arr) => {

    // extract both indexes into own variables
    // compare second variable to first variables letters
    // use .includes if false return false, if all true return true

    const str1 = arr[0].toLowerCase(),
        str2 = arr[1].toLowerCase().split("");

    let passed = true;

    str2.forEach(letter => {

        if (!str1.includes(letter)) passed = false;

    });

    return passed;

};

console.log(mutation(["hello", "HelLo"])); // returns true
console.log(mutation(["qwerty", "tweri"])); // returns false
console.log(mutation(["ASDWertQ", "at"])); // returns true