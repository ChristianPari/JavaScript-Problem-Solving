/*
Given a sorted array of numbers, remove any numbers that are divisible by 13. 
! Return the amended array.

Example Outputs:
unlucky13([53, 182, 435, 591, 637]) ➞ [53, 435, 591]
182 and 637 are divisible by 13.

unlucky13([24, 316, 393, 458, 1279]) ➞ [24, 316, 393, 458, 1279]
No numbers in the array are divisible by 13.

unlucky13([104, 351, 455, 806, 871]) ➞ []
All numbers in the array are divisible by 13.
*/

function unlucky13(nums) {

    let remainderRegEx = /\d{1,}\.\d{1,}/,
        numsArr = [...nums];

    for (let a = 0; a < [...nums].length; a++) {

        console.log(remainderRegEx.test(nums[a] / 13));

        if (remainderRegEx.test(nums[a] / 13) == false) {

            numsArr.splice(numsArr.indexOf(nums[a]), 1);

        }

    }

    return numsArr

}