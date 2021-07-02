/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/

const diffArr = (arr1, arr2) => {

    // create a blank array to have not symtric vals pushed to
    // loop thorugh the arrays and compare values
    // if a value isnt within the other arr push to the array from step 1

    const notSym = [];

    arr1.forEach(elm => {

        if (!arr2.includes(elm)) notSym.push(elm);

    });

    arr2.forEach(elm => {

        if (!arr1.includes(elm)) notSym.push(elm);

    });

    return notSym;

};

console.log(diffArr([1, 2, 4, 9, 6, 8, 3, 5], [1, 2, 3, 5])); // returns [4]