/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*/

function destroy(arr) {

    for (const data of arguments) {

        if (typeof data !== "object") {

            do {

                const idx = arr.indexOf(data);

                arr.splice(idx, 1);

            } while (arr.includes(data));


        }

    }

    return arr

};

console.log(destroy([3, 5, 1, 2, 2], 2, 3, 5));