/*
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
*/

const repeat = (str, num) => {

    let answer = "";

    for (let a = 0; a < num; a++) { answer += str; };

    return answer;

};

console.log(repeat("abc", 3)); // abcabcabc