/*
Create a function that takes a number 'a' and finds the missing exponent 'x' so that 'a' when raised to the power of 'x' is equal to 'b'.
! return 'x'

Example Outputs:
solveForExp(4, 1024) ➞ 5

solveForExp(2, 1024) ➞ 10

solveForExp(9, 3486784401) ➞ 10
*/

function solveForExp(a, b) {

    let x = 0;

    while (a <= b) {

        b = b / a;
        x++;

    };

    return x

}