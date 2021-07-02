/*
We'll pass you an array of two numbers.
Return the sum of those two numbers plus the sum of all the numbers between them.
The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {

    let sorted = arr.sort(function(a, b) { return a - b });
    let total = 0;
    let start = sorted[0];
    while (start <= sorted[1]) {
        console.log(`start`, start);
        total += start;
        console.log(`total`, total);
        start++;
    }
    console.log(`ab tot`, total);
    return total;
}

console.log(sumAll([4, 1]));