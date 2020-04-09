/*
* Return true if the string in the first element of the array contains all of the letters of
* the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second
string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not
contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are
present in "Alien".
*/

/*
    1). What type of data am i working with?
    single demionsal array

    2). What type of data structure is my input data and output data?
    booleans; true or false

    3). Will i need to use any loops? If so, what kind of loop(s)
    yeah, probably a for loop to cycle through both indexes in the array param

    4). Can this problem be applied to a real life situation, how would I solve in
        IRL?
    i would compare if each letter of the second phrase is in the first phrase

    5). Do I need more variables to solve this problem? What kind? How many?
    maybe a few, can't think of what theyd be till i start doing the code

    6). Give at least one more way to solve the problem (even if it is inefficient)
    not sure, i gotta solve it once lol

    7). Write the solution out in pseudocode

*/

function mutation(arr) {

    let fixed = arr[0].toLowerCase();
    let fixedIdxs = fixed.split(``);
    let test = arr[1].toLowerCase();
    let testIdxs = test.split(``);
    let trueData = [];
    let str = ``;


    for (let a = 0; a < testIdxs.length; a++) {

        if (fixedIdxs.includes(testIdxs[a])) {

            str += test[a];
            console.log(str);

        }



    }

    trueData.push(str);
    console.log(trueData);

    if (trueData[0] === test) {

        return true;

    } else {

        return false;

    }

}

console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));