/*
Create a function that takes an array of numbers. Return the largest number in the array.

Example Outputs:
findLargestNum([4, 5, 1, 3]) ➞ 5

findLargestNum([300, 200, 600, 150]) ➞ 600

findLargestNum([1000, 1001, 857, 1]) ➞ 1001
*/

function findLargestNum(arr) {

    let sorted = arr.sort(function(a, b) { return a - b });
    return sorted[sorted.length - 1]

}