/*
Return an array consisting of the largest number from each provided sub-array.
For simplicity, the provided array will contain exactly 4 sub-arrays.
*/

function largestOfFour(arr) {
    let largestNums = [];
    for (let a = 0; a < arr.length; a++) {
        let nums = arr[a];
        largestNums.push(Math.max(...nums));
    }
    console.log(largestNums);
    return largestNums;
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);