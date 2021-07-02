/*
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/

const booWho = (bool) => {

    //todo if typeof bool === "boolen" return true
    //todo else return false

    // if (typeof bool === "boolean") return true
    // else return false

    return typeof bool === "boolean" ? true : false

};

console.log(booWho(true));
console.log(booWho(false));
console.log(booWho("true"));
console.log(booWho([true, false]));