/*
* Create a function that looks through an array (first argument) and
! returns the first element in the array that passes a truth test (second argument).
! If no element passes the test, return undefined.
*/

function findElement(arr, func) {
    for (let a = 0; a < arr.length; a++) { // needed to cycle through each index
        if (func(arr[a]) === true) { // if the passed in function is evaluated to true then it will return the first array intger that passed the test
            return arr[a];
        }
    }
}

console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 9], num => num % 2 === 0));
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));