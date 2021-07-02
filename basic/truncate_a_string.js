/*
*Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
!Return the truncated string with a ... ending.
*/

function truncateString(str, num) {
    let newString = ``;
    if (str.length > num) {
        newString = str.slice(0, num) + `...`;
        //^ slice is starting at index 0 and then will take all but not including (num) indexes
        //^ then adds ... to the end of that sliced out portion
    } else {
        return str;
    }
    return newString;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));