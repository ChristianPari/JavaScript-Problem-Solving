/*
!Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.
*/

function bouncer(arr) {
    let newArr = [];
    for (let a = 0; a < arr.length; a++) {
        if (Boolean(arr[a]) == true) {
            newArr.push(arr[a]);
        }
    }
    return newArr;
}
console.log(bouncer([7, null, "ate", "", false, 9]));