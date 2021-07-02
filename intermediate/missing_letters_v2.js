/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

const fearNotLetter = (str) => {

    // using character codes
    // find each letters char code
    // which ever number jumps to 2 more instead of 1 more would be the missing letter
    // convert the char code into the character
    // return character

    //* LONG VERSION - EASY TO READ
    // loop through the "str" parameters' length
    for (let a = 0; a < str.length - 1; a++) {

        // character code of current index letter
        const curCharCode = str.charCodeAt(a);
        // character code of the following letter in the "str"
        const nextCharCode = str.charCodeAt(a + 1);

        // comparing the character code that would follow the current letters' code
        // if the next characters' code isn't equal to the (comment above) then (comment above) is the missing character code
        if (curCharCode + 1 !== nextCharCode) {

            // convert character code into character
            const missingCharCode = curCharCode + 1;
            const missingLetter = String.fromCharCode(missingCharCode);

            // return character
            return missingLetter

        }

    }

    //* CONDENCED VERSION - HARDER TO FOLLOW
    /*
    for (let a = 0; a < str.length; a++) {
        
        if (str.charCodeAt(a) + 1 !== str.charCodeAt(a + 1)) {
            
            return String.fromCharCode(str.charCodeAt(a) + 1)
            
        }
        
    }
    */

    //* MULTIPLE MISSING LETTERS VERSION
    /*
         let missingLetters = [];

        for (let a = 0; a < str.length - 1; a++) {

            const curCharCode = str.charCodeAt(a);
            const nextCharCode = str.charCodeAt(a + 1);

            if (curCharCode + 1 !== nextCharCode) {

                const missingCharCode = curCharCode + 1;
                const missingLetter = String.fromCharCode(missingCharCode);

                missingLetters.push(missingLetter);

            }

        }

        if (missingLetters.length === 1) {

            return `Missing Letter: ${missingLetters[0]}`

        } else if (missingLetters.length > 1) {

            const answer = missingLetters.join(", ");
            return `Missing Letters: ${answer}`

        } else {

            return "No Letters Missing from String"

        }
     */


}

console.log(fearNotLetter("abce"));; // returns "d"