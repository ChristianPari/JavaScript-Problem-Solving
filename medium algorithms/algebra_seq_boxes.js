/*
Create a function that takes a number (step) as an argument,
! returns the amount of boxes in that step of the sequence.

Step 0: Start w/ 0
Step 1: Add 3
Step 2: Subtract 1
REPEAT

Example Outputs:
boxSeq(0) ➞ 0

boxSeq(1) ➞ 3

boxSeq(2) ➞ 2

*/

function boxSeq(step) {

    let total = 0;

    if (step == 0) {

        return 0

    } else {

        for (let a = 1; a <= step; a++) {

            if (a % 2 != 0) {

                total += 3

            } else {

                total -= 1

            }

        }

    }

    return total

}

console.log(boxSeq(5));