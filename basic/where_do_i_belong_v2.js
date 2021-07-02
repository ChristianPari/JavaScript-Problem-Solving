/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

const getIndex = (arr, num) => {
    // push num to arr and then use the .sort() method, then return extract/indexOf num

    arr.push(num);
    return arr.sort((a, b) => a - b).indexOf(num);
    // sorts by lowest to highest and then returns the index value of the num parameter

};

console.log(getIndex([10, 30, 20, 40, 50], 35)); // return the number 3
console.log(getIndex([10, 20, 30, 40, 50], 30)); // return the number 2
console.log(getIndex([], 1)); // return the number 0