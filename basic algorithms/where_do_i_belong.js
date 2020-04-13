/*
* Return the lowest index at which a value (second argument) should be inserted into an array (first argument)
* once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0),
but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it
will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

function getIndexToIns(arr, num) {
    // if (arr.length == []) {
    //     arr.push(num);
    //     console.log(arr);
    //     return arr.indexOf(num);
    // } else {
    //     let sortedArr = arr.sort(function(a, b) { return a - b });
    //     console.log(sortedArr);
    //     let max = Math.max(...sortedArr);
    //     let min = Math.min(...sortedArr);
    //     for (let a = 0; a < sortedArr.length; a++) {
    //         if (sortedArr[a] == num || num <= min || num >= max) {
    //             sortedArr.push(num);
    //             console.log(sortedArr);
    //             sortedArr.sort(function(a, b) { return a - b });
    //             console.log(sortedArr);
    //             return sortedArr.indexOf(num);
    //         } else if (sortedArr[a] < num && sortedArr[a + 1] >= num) {
    //             sortedArr.push(num);
    //             console.log(sortedArr);
    //             sortedArr.sort(function(a, b) { return a - b });
    //             console.log(sortedArr);
    //             return sortedArr.indexOf(num);
    //         }
    //     }
    // }

    // you could do the above way, or just do the way below bc wayyy simpler lol
    arr.push(num);
    let sorted = arr.sort(function(a, b) { return a - b });
    let idx = sorted.indexOf(num);
    return idx;

}

console.log(getIndexToIns([4, 56, 2, 3, 14], 57));



























//! DONT CHEAT TRY TO REDO IT
// function getIndexToIns(arr, num) {
//     let sortedArr = arr.sort(function(a, b) {
//         return a - b;
//     });
//     let a = 0;
//     while (a <= sortedArr.length) {
//         if (num >= sortedArr[a]) {
//             if (num <= sortedArr[a + 1]) {
//                 sortedArr.splice(a + 1, 0, num);
//                 if (a > 0) {
//                     return a + 1;
//                 } else {
//                     return 0;
//                 }
//             } else {
//                 a++;
//             }
//         }
//     }
// }
// getIndexToIns([40, 60], 50);