/*
* Check if a value is classified as a boolean primitive.
! Return true or false.
? Boolean primitives are true and false.
*/

function booWho(bool) {
    if (typeof(bool) == "boolean") {
        return true;
        /*
         * typeOf() operator will return the type of variable or expression 
         * ...as a string; `number`, `string`, `boolean`
         */
        /*
        ^ this if statement is checking if the data being passed through the function
        ^ ...and if it's value is boolean then return true
        */
    } else {
        return false;
        //^ if the value is anything else but boolean then return false
    }
}

console.log(booWho(true));
console.log(booWho(1));