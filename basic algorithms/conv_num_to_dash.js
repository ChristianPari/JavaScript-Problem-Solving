/*
! Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.

Example Outputs:
Go(1) ➞ "-"

Go(5) ➞ "-----"

Go(3) ➞ "---"
*/

function Go(num) {

    let str = ``;

    for (let a = 0; a < num; a++) {

        str += `-`;

    }

    return str

}

console.log(Go(5));