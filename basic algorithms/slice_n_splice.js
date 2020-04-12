/*
You are given two arrays and an index.
Use the array methods slice and splice to copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
!Return the resulting array. The input arrays should remain the same after the function runs.
*/

function frankenSplice(arr1, arr2, n) {
    let arr3 = arr2.slice();
    //^ using slice here to copy arr2 data to arr3
    for (let a = arr1.length - 1; a >= 0; a--) {
        //^ had to do a reverse for loop to get the numbers from arr1 to be added to arr3 in the correct low to high order
        arr3.splice(n, 0, arr1[a]);
        //^ splice(x,y,z); x: what index to start adding items, y: how many items to delete, z: what item to add
    }
    return arr3;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));