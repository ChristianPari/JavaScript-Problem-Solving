/*
Return the factorial of the provided integer (5).
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
Only integers greater than or equal to zero will be supplied to the function.
*/
//! FACTORIALIZE means to multiply each positive integer less than or equal to 'n' ex: n = 5 1*2*3*4*5
function Factorialize(num) {
    let total = 1;
    for (let a = 1; a <= num; a++) {
        // a equal to 1 so that it starts to multiply from the lowest positive integer
        total *= a; // set to the created variable in the loop b/c num[a] is to access a array
    }
    console.log(total);
    return total;
}
factorialize(5);