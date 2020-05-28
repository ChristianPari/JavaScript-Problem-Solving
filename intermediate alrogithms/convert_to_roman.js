/*
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {

    const romans = ['I', 'IV', 'V', 'IX', 'X', 'XLIX', 'L', 'XCIX', 'C', 'CD', 'D', 'CM', 'M'],
        regNums = [1, 4, 5, 9, 10, 49, 50, 99, 100, 400, 500, 900, 1000];

    let answer = "";

    for (let idx = regNums.length; idx > 0; idx--) {

        while (regNums[idx] <= num) {
            // at least one of the numbers in the regNums array will be less than the 'num' parameter so this will always be ran
            // unless 'num' is equal to or less than 0

            answer += romans[idx]; // adds the corresponding roman numerial letter to the answer string
            num -= regNums[idx]; // subtacts the regNum index value from the 'num' and continues to repeat till 'num' is 0 / regNums[idx] > num

        }

    }

    return answer != "" ? answer : "0 or less has no roman numerial";

}

console.log(convertToRoman(1250));