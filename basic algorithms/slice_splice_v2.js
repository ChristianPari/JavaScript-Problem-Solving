/*
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/

const frankSplice = (arr1, arr2, n) => {

    //todo splice at "n" and delete nothing but insert each element from arr1

    let answerArr = [...arr2];

    for (let a = arr1.length - 1; a >= 0; a--) {

        answerArr.splice(n, 0, arr1[a]);

    }

    return answerArr

};

console.log(frankSplice([1, 2, 3], [4, 5, 6], 1)); // [4,1,2,3,5,6]