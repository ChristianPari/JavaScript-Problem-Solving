/*

! Perform a search and replace on the sentence using the arguments provided and return the new sentence.

* First argument is the sentence to perform the search and replace on.

* Second argument is the word that you will be replacing (before).

* Third argument is what you will be replacing the second argument with (after).

* Note
Preserve the case of the first character in the original word when you are replacing it. 
For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

*/

function myReplace(str, before, after) {

    console.log(str);
    let strArr = str.split(` `);
    console.log(strArr);
    let idx = strArr.indexOf(before);
    console.log(idx);
    let newStr = ``;

    if (strArr[idx][0] == strArr[idx][0].toUpperCase()) {

        let newAfter = after[0].toUpperCase();
        console.log(newAfter);
        newAfter += after.slice(1, after.length);
        console.log(newAfter);
        strArr[idx] = newAfter;
        console.log(strArr);
        newStr = strArr.join(` `);
        console.log(newStr);

        return newStr

    }

    strArr[idx] = after;
    console.log(strArr);
    newStr = strArr.join(` `);
    console.log(newStr);

    return newStr;
}

myReplace("He is sleeping on the couch", "sleeping", "sitting");
myReplace("He is Sleeping on the couch", "Sleeping", "standing");