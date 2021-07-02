/*
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/

const falsyBouncer = (arr) => {

    let answer = [];

    for (let a = 0; a < arr.length; a++) {

        if (Boolean(arr[a]) === true) {
            answer.push(arr[a]);
        }

    }

    return answer

};

console.log(falsyBouncer([1, "hi", false, "", "people", 0, NaN, undefined, 8, null]));