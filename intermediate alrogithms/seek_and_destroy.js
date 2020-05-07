/*
You will be provided with an initial array (the first argument in the destroyer function),
followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments.
*/

function destroyer(...args) {

    let arr = [...args[0]];

    let testData = [];
    for (let a = 1; a < args.length; a++) {
        testData.push(args[a]);
    }

    let answer = [];

    for (let b = 0; b < arr.length; b++) {

        for (let a = 0; a < testData.length; a++) {

            if (arr.includes(testData[a])) {

                let num = arr.indexOf(testData[a]);
                arr.splice(num, 1);
                answer = arr;
            }

        }

    }

    return answer

}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);