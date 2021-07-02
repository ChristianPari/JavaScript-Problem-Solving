const factorial = (n) => {

    if (n === 1 || n === 0) {

        return 1;

    } else {

        console.log('Stack', n, '*', `factorial(${n} - 1)`);
        return n * factorial(n - 1);

    }

    /*
    RECURSION PROCESS:

    5 > 1 & 0
        return 5 * factorial(n - 1) OR factorial(5 - 1 aka 4)

        4 > 1 & 0
            return 4 * factorial(4 - 1 aka 3)

            3 > 1 & 0
                return 3 * factorial(3 - 1 aka 2)

                2 > 1 & 0
                    return 2 * facotrial(2 - 1 aka 1)

                    1 = 1
                        return 1
                        and no buble back up the process
                        where each factor from the expression is used in
                        the recursive call location
                    
                    2 * 1 = 2
                    3 * 2 = 6
                    4 * 6 = 24
                    5 * 24 = 120

    VALUE CAN BE ASSIGNED TO A VARIABLE OR USED IN AN EXPRESSION

    */

};

console.log('Factorial:', factorial(5));

console.log('\n'); // space out function logs

const countDown = (num) => {

    if (num <= 0)
        return console.log("All Done!");

    console.log(num);
    countDown(--num);

    /*
    RECURSION PROCESS:
    
    num > 0
        console log num
        subtract 1 from num
        recursive call with num - 1
        repeat until num <= 0

    num <= 0
        console log "All Done!"
        ends function

    */

};

countDown(5);

console.log('\n');