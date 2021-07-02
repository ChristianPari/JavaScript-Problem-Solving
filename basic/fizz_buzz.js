/*
Write a method that returns array of all the numbers from 1 to an integer argument. But for multiples of three use “Fizz” instead of the number and for the multiples of five use “Buzz”. For numbers which are multiples of both three and five use “FizzBuzz”.

Example Outputs:

fizzBuzz(10) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]

fizzBuzz(15) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
*/

const fizzBuzz = (n) => {

    // FIRST ATTEMPT
    // const numArr = Array.from({ length: n }, (a, b) => b + 1),
    //     tested = numArr.map(num => {
    //         if (num % 3 === 0 && num % 5 === 0) {
    //             return num = 'FizzBuzz';
    //         } else if (num % 3 === 0) {
    //             return num = 'Fizz';
    //         } else if (num % 5 === 0) {
    //             return num = 'Buzz';
    //         } else {
    //             return num;
    //         }
    //     });

    // return tested;

    // SECOND ATTEMPT
    return Array.from({ length: n }, (a, b) => {
        let num = b + 1;

        if (num % 3 === 0 && num % 5 === 0) {
            return num = 'FizzBuzz';
        } else if (num % 3 === 0) {
            return num = 'Fizz';
        } else if (num % 5 === 0) {
            return num = 'Buzz';
        } else {
            return num;
        }

    });

};

fizzBuzz(15);