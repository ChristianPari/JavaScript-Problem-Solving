/*
! Return the provided string with the first letter of each word capitalized.
* Make sure the rest of the word is in lower case.
? For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
    let newString = str.split(` `);
    let fullStr = [];
    let capStrings = [];
    for (let a = 0; a < newString.length; a++) {
        capStrings.push(newString[a][0].toUpperCase() + newString[a].slice(1).toLowerCase());
    }
    fullStr = capStrings.join(` `);
    return fullStr;
}

console.log(titleCase("I'm a liTtle tea pot"));