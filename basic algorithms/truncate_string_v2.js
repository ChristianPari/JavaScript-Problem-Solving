/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/

const truncate = (str, num) => {

    if (num < 1) return ""

    if (str.length === num || str.length < num) return str

    return str = str.slice(0, num).concat("...");

};

console.log(truncate("A-tisket a-tasket A green and yellow basket", -1));