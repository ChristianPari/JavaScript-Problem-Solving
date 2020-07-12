/*
Create a function that takes a number and return a string with the number in expanded notation (AKA expanded form). See the resources tab for details on expanded notation.

Example Outputs:

expand(13) ➞ "10 + 3"

expand(86) ➞ "80 + 6"

expand(17000000) ➞ "10000000 + 7000000"

expand(5325) ➞ "5000 + 300 + 20 + 5"
*/

const expanded = (n) => {

    const arr = n.toString().split(''),
        arrL = arr.length;

    for (let a = 0; a < arr.length; a++) {

        if (arr[a] == 0) {

            continue

        } else {

            arr[a] += '0'.repeat(arrL - (a + 1));

        }

    }

    const filterZero = arr.filter(num => Number(num) != 0),
        endString = filterZero.join(" + ");

    return endString

};

expanded(15);
expanded(135);
expanded(1354);
expanded(7500000);