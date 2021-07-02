/*
Convert a string to spinal case. 
Spinal case is all-lowercase-words-joined-by-dashes.
Ex. (`The Words Here) should be (`the-words-here`)
*/

function spinalCase(str) {

    /*
        needed to use regular expressions to get this one
        ... look more into them bc they seem beyond helpful
    */

    str = str.replace(/([a-z])([A-Z])/g, `$1 $2`).toLowerCase();
    /*
        1/ replace (/where there is a lowercase letter touching an uppercase letter/`g`lobally)
        2/ (^above before the coma^, the $1 and $2 refer to the characters that we just specified above
            ... and by putting a space between them within the string, tells the computer to space them out);
        3/ .toLowerCase() to make all the letters lowercase        
    */

    return str.replace(/\s|_/g, `-`);
    // replace (/where there is a space `\s` OR `|` and underscore `_`/`g`lobally, replace them with a hyphen `-`);

}

spinalCase('thisIsSpinalTap');