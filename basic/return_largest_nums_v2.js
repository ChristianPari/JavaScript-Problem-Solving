/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

const largestNums = (arr) => {

    // let answer = [];

    // arr.forEach(sub => {

    //     sub.sort((a, b) => b - a);

    //     answer.push(sub[0]);

    // });

    // return answer

    return arr.map(sub => sub.sort((a, b) => b - a)[0]);

};

console.log(largestNums([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]));