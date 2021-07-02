/*
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
*/

const finders = (arr, func) => {

    return arr.filter(num => {
        if (func(num) === true) return num
    })[0];

};

console.log(finders([1, 2, 3, 4], num => num % 2 === 0)); // 2