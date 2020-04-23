/*
! Create a function to multiply all of the values in an array by the amount of values in the given array.
Example Outputs:
multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]

multiplyByLength([4, 1, 1]) ➞ ([12, 3, 3])

multiplyByLength([1, 0, 3, 3, 7, 2, 1]) ➞  [7, 0, 21, 21, 49, 14, 7]

multiplyByLength([0]) ➞ ([0])
*/

function multiplyByLength(arr) {

    for (let a = 0; a < arr.length; a++) {

        arr.splice(a, 1, (arr[a] * arr.length));

    }

    return arr

}