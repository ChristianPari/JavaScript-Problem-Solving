/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

const titleCase = (str) => {

    //todo make str lowercase
    //todo breakdown the str => sepearte into an array
    //todo use a loop, find index 0, capitalize letter
    //todo join the array into a string
    //todo return new string

    // str = str.toLowerCase();
    // str = str.split(" ");

    str = str.toLowerCase().split(" ");

    for (let a = 0; a < str.length; a++) {

        str[a] = str[a].replace(str[a][0], str[a][0].toUpperCase());

    }

    // str = str.join(" ");

    return str.join(" ");

};

console.log(titleCase("HELLO HOW ARE YOU"));
// console.log(titleCase("i am good"));
// console.log(titleCase("tHat iS gReAt"));