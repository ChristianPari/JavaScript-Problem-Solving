/*
    Pig Latin is a way of altering English Words. The rules are as follows:
    If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
    If a word begins with a vowel, just add "way" at the end.

    ! Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/

/*
    There are two types of regular expression syntax:
        1) literal: using the forward slashes new RegExp(/([a-z])([A-Z])/, `i`) or /([a-z])([A-Z])/i
            not for dynamic use
        2) object constructor: new RegExp(`([a-z])([A-Z])`, `i`)
            for dynamic use
*/

function translatePigLatin(str) {

    let vowelRe = /^[aeiou]\w{1,}/;
    let concRe = /^[^aeiou]{2,}\w{1,}/;

    if (vowelRe.test(str) === true) {

        str += `way`;

        return str

    } else {

        if (concRe.test(str) === true) {

            let conCluster = /^[^aeiou]{2,}/;
            let removed = str.match(conCluster)[0];
            let newStr = (str.slice(removed.length, str.length) + removed) + `ay`;
            return newStr


        } else {

            let newStr = str.slice(1, str.length) + (str[0] + `ay`);
            return newStr

        }

    }

}

translatePigLatin("consonant");