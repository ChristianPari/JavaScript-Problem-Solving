/*
* This Triangular Number Sequence is generated from a pattern of dots that form a triangle.
* The first 5 numbers of the sequence, or dots, are: 1, 3, 6, 10, 15.
! Write a function that converts 'n' number of places with its corresponding number.

Example Outputs:
triangle(1) ➞ 1

triangle(6) ➞ 21

triangle(215) ➞ 23220

*/

function triangle(n) {

    // used to store the answer
    let total = 1;

    // 1 is 1
    if (n == 1) {
        return total
    } else {
        // iterating 'n' times to get the amount of dots
        for (let a = 2; a <= n; a++) {

            // find a way to get 1 to 3 to 6 ect.
            // total + 2 = 3 + 3 = 6 + 4 = 10 ...
            total += a;

        }

    }

    return total

}

console.log(triangle(12));