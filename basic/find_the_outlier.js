/* You are given an array (which will have a length of at least 3, but could be very large) containing integers.
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
Write a method that takes the array as an argument and returns this "outlier" N.
*/


function findOutlier(arr) {

    let odds = [],
        evens = [];

    arr.forEach(num => {
        if (num % 2 == 0) {
            evens.push(num);
        } else {
            odds.push(num);
        }
    });

    return odds.length > evens.length ? evens[0] : odds[0];

};

//* Outputs:
findOutlier([0, 1, 2]);
//! returns 1
findOutlier([1, 2, 3]);
//! returns 2
findOutlier([2, 6, 8, 10, 3]);
//! returns 3
findOutlier([0, 0, 3, 0, 0]);
//! returns 3
findOutlier([1, 1, 0, 1, 1]);
//! returns 0