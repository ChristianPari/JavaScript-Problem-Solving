/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

const chunkArr = (arr, size) => {

    // create new arrays with a length of size
    // each contains (in order) indexes from the "arr" parameter
    // if last of indexes of arr don't fill the size it's okay
    // create a nested array of the new arrays created
    // return nested array

    let newArr = []; // will store nested arrays

    do {

        const nest = arr.splice(0, size); // should create a new array each time of "size" length from beginning of the "arr" argument
        newArr.push(nest); // pushes the spliced array to newArr to be returned later

    } while (arr.length > 0);

    return newArr

};

console.log(chunkArr(["a", "b", "c", "d"], 2)); // [["a", "b"], ["c", "d"]]
console.log(chunkArr([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); // [[0,1],[2,3],[4,5],[6,7],[8]]
console.log(chunkArr([0, 1, 2, 3, 4, 5], 4)); // [[0,1,2,3], [4,5]]