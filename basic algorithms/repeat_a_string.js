// Repeat a given string str (first argument) for num times (second argument).
// Return an empty string if num is not a positive number.

let repeatStringNumTimes = (str, num) => {
    if (num < 0) {
        return ``;
    } else {
        // console.log(str.repeat(num));
        // return str.repeat(num);
        // //^ .repeat() is a function used to repeat a string which creates a new string
        let n = 1;
        let newStr = ``;
        while (n <= num) {
            newStr += str;
            n++;
        }
        return newStr;
    }
}

console.log(repeatStringNumTimes(`abc`, 3));