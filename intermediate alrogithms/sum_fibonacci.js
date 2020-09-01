/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

const sumFibs = (num) => {

    // need access numbers within the range of the "num"
    // find each fibo number by adding current and preceding numbers together each time and then jump to their sum 
    // ? for loop to continue fibo sequence
    // ? or do while loop
    // push each fibo to an array
    // then grab all odds fibos
    // return odd fibos

    let fibos = [];

    let curNum = 1;
    let prevNum = 1;
    do {

        if (curNum === 1) {
            fibos.push(curNum)
            fibos.push(prevNum)
        }

        // console.log("cur", curNum, "prev", prevNum);

        const newNum = curNum + prevNum;
        fibos.push(newNum)
            // console.log("new", newNum);
        prevNum = curNum;
        // console.log("prev", prevNum);
        curNum = newNum;
        // console.log("cur", curNum);

        if (newNum > num) {
            fibos.pop()
        }

    } while (curNum <= num);

    // console.log(fibos);

    const oddFibos = [];

    fibos.forEach(number => {

        if (number % 2 !== 0) oddFibos.push(number)

    });

    // console.log(oddFibos);

    let sum = 0;

    oddFibos.forEach(number => {

        sum += number

    })

    return sum

}

console.log(sumFibs(10)); //should return 10
console.log(sumFibs(4000000)); //should return 4613732
console.log(sumFibs(75025)); //should return 135721