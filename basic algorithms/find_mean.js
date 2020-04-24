/*
Create a function that returns the mean of all digits.

Example Outputs:
mean(42) ➞ 3

mean(12345) ➞ 3

mean(666) ➞ 6
*/

function mean(num) {

    let digits = num.toString().split(''),
        sum = 0,
        digitsLen = digits.length;

    digits.forEach(digit => { sum += Number(digit); });

    return mean = sum / digitsLen;

}