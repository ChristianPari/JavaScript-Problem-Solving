/*
Write a function that splits an array (first argument)
into groups the length of size (second argument) and
returns them as a two-dimensional array.
*/


function chunkArrayInGroups(arr, size) {

    const length = Math.floor(arr.length / size);
    let main = arr;
    let newArr = [];

    console.log(main.length);


    if (main.length >= size) {

        for (let a = 0; a < length; a++) {

            newArr.push(main.splice(0, size));

        }

    }

    console.log(main.length);


    if (main.length < size && main.length != ``) {

        let newMain = main;
        newArr.push(newMain.splice(0, newMain.length));

    }

    console.log(newArr);

    return newArr;

}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);