/*
Given a censored string and a string of the censored vowels,
! return the original uncensored string.

Example Outputs:
uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo") ➞ "Where did my vowels go?"

uncensor("abcd", "") ➞ "abcd"

uncensor("*PP*RC*S*", "UEAE") ➞ "UPPERCASE"
*/

function uncensor(str, vowels) {

    let vowelsArr = vowels.split(``);

    vowelsArr.forEach(vowel => {

        let regex = /\*/;
        str = str.replace(`*`, vowel);

    });

    return str

}