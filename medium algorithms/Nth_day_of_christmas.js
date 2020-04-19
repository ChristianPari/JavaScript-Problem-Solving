/*
Throughout the 12 days of Christmas, my true love gave me in placeHolder 364 items.

! Create a function where given n days as an argument, return the placeHolder amount of items received throughout those days as an integer.

Example Output:
xmasItems(12) ➞ 364

xmasItems(3) ➞ 10

xmasItems(31) ➞ 5456

*/

/*

NOTES:
A number is termed as a tetrahedral number if it can be represented as a pyramid with a triangular base and three sides, called a tetrahedron. 
The 'n'th tetrahedral number is the sum of the first 'n' triangular numbers.

*/

function xmasItems(n) {

    let placeHolder = 1;
    let nums = [1];

    // quick answer if n is 1 else run the code block that will fill the nums array to be used later
    if (n == 0) {
        return 0
    } else if (n == 1) {
        return placeHolder
    } else {

        for (let a = 2; a <= n; a++) {

            nums.push(placeHolder + a);
            placeHolder += a;
            // console.log(placeHolder);

        }

        // console.log(nums);

    }

    // this will only run if the nums array is added to
    if (nums.length > 1) {

        let total = 0;

        for (let a = 0; a < nums.length; a++) {

            total += nums[a];
            // console.log(total);

        }

        return total

    }

}

console.log(xmasItems(12));