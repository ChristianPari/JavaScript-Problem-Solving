/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

const longestWordLength = (str) => {

    // const strArr = str.split(" ");

    // for (let a = 0; a < strArr.length; a++) {

    //     strArr[a] = strArr[a].length;

    // };

    // strArr.sort((a, b) => b - a);

    // return strArr[0];

    // return str.split(" ").map(word => word.length).sort((a, b) => b - a)[0];

    return str.split(" ").sort((a, b) => b.length - a.length)[0];

};

console.log(longestWordLength("Hey Wood Oceans Pizza"));