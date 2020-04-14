/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {

    let diffArr = [];

    for (let a = 0; a < arr1.length; a++) {

        let test1 = arr2.includes(arr1[a]);


        if (test1 === false) {

            diffArr.push(arr1[a]);

        }

    }

    for (let b = 0; b < arr2.length; b++) {

        let test2 = arr1.includes(arr2[b]);

        if (test2 === false) {

            diffArr.push(arr2[b]);

        }

    }

    return diffArr;

}

console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));