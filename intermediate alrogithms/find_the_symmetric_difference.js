/*
The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).
*/

const sym = (...args) => {

    // need to remove any similar numbers throughout the arrays
    // create a new array with the numbers that are found in only a single array
    // return new array

    let compared = [];

    const array1 = new Set(args[0]);
    const array2 = new Set(args[1]);

    for (const num of array1) {

        if (!array2.has(num)) {
            compared.push(num);
        }

    }

    for (const num of array2) {

        if (!array1.has(num)) {
            compared.push(num);
        }

    }

    for (let i = 2; i < args.length; i++) {

        const comparing = new Set(args[i]);

        for (const checkNum of comparing) {
            if (!compared.includes(checkNum)) {
                compared.push(checkNum)

            } else if (compared.includes(checkNum)) {

                const idx = compared.indexOf(checkNum);
                compared.splice(idx, 1);
            }

        }

    }

    const answer = compared.sort((a, b) => a - b);
    console.log(answer);
    return answer;

};

// sym([1, 2, 3], [5, 2, 1, 4]) // should return [3, 4, 5].

// sym([1, 2, 3, 3], [5, 2, 1, 4]) // should return [3, 4, 5].

// sym([1, 2, 3], [5, 2, 1, 4, 5]) // should return [3, 4, 5].

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) // should return [1, 2, 4, 5, 6, 7, 8, 9].

/*
3 3 3 2 5 - 2 1 5 7 = 1 3 7
1 3 7 - 3 4 6 6 = 1 7 4 6
1 7 4 6 - 1 2 3 = 7 2 4 6 3
7 2 4 6 3 - 5 3 9 8 = 2 4 5 6 7 8 9
2 3 4 5 6 7 8 9 - 1 = 1 2 4 5 6 7 8 9
*/