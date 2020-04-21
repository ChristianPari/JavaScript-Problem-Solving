/*

The DNA strand is missing the pairing element. 
Base pairs are a pair of AT and CG. 
Match the missing element to the provided character.

! Take each character, get its pair, and return the results as a 2d array.
! Return the provided character as the first element in each array.

* For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

* The character and its pair are paired up in an array, 
* ... and all the arrays are grouped into one encapsulating array.

*/

function pairElement(str) {

    let strArr = str.split(``);

    strArr.forEach(function(letter) {

        let idx = strArr.indexOf(letter);

        switch (letter) {

            case `A`:
                strArr[idx] = [`A`, `T`];
                break;

            case `T`:
                strArr[idx] = [`T`, `A`];
                break;

            case `C`:
                strArr[idx] = [`C`, `G`];
                break;

            case `G`:
                strArr[idx] = [`G`, `C`];
                break;

        }

    })

    console.log(strArr);
    return strArr;
}

pairElement("TTGAG");