/*
! Find the missing letter in the passed letter range and return it.
! If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {

    let alpha = `abcdefghijklmnopqrstuvwxyz`;
    let firstLet = str[0];
    let lastLet = str[str.length - 1];
    let beg = alpha.indexOf(firstLet);
    let end = alpha.indexOf(lastLet) + 1;
    let newAlpha = alpha.slice(beg, end);
    let answer = ``;

    if (newAlpha === str)
        return undefined

    else {

        let newAlpha2 = newAlpha.split(``);

        newAlpha2.forEach(letter => {

            if (!str.includes(letter))
                answer = letter;

        })

    }

    return answer

}

console.log(fearNotLetter("abcdefghiklmno"));