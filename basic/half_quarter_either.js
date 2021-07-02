/*
Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.

Example Outputs:
halfQuarterEighth(6) ➞ [3, 1.5, 0.75]

halfQuarterEighth(22) ➞ [11, 5.5, 2.75]

halfQuarterEighth(25) ➞ [12.5, 6.25, 3.125]
*/

function halfQuarterEighth(num) {

    return [num * 0.5, num * 0.25, num * 0.125];

};

console.log(halfQuarterEighth(6)); // [3, 1.5, 0.75]
console.log(halfQuarterEighth(22)); // [11, 5.5, 2.75]
console.log(halfQuarterEighth(25)); // [12.5, 6.25, 3.125]
console.log(halfQuarterEighth(18)); // [9, 4.5, 2.25]
console.log(halfQuarterEighth(98)); // [49, 24.5, 12.25]
console.log(halfQuarterEighth(14)); // [7, 3.5, 1.75]