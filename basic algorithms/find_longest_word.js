// Return the length of the longest word in the provided sentence.
//! Your response should be a number.

function findLongestWordLength(str) {
    let arr = str.split(" "); // splits each string into its own section by commas in a array
    let arrNums = []; // created an empty array to push the separate string lengths in an array
    for (let a = 0; a < arr.length; a++) {
        arrNums.push(arr[a].length); // needed to push each string at a time
    }
    let longestStr = Math.max(...arrNums);
    return longestStr;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");