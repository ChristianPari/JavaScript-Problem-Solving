/*
You are given 2 out of 3 angles in a triangle, in degrees.

Write a function that classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees.

Example Outputs:
missingAngle(27, 59) ➞ "obtuse"

missingAngle(135, 11) ➞ "acute"

missingAngle(45, 45) ➞ "right"
*/

function missingAngle(a, b) {

    if (a + b > 90) {
        return `acute`
    } else if (a + b < 90) {
        return `obtuse`
    } else {
        return `right`
    }

}