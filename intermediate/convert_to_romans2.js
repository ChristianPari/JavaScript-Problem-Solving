const convertToRomans = (num) => {

    // create an array of romans
    const romans = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'XLIX', 'L', 'XC', 'XCIX', 'C', 'CD', 'D', 'CM', 'M'],
        numerical = [1, 4, 5, 9, 10, 40, 49, 50, 90, 99, 100, 400, 500, 900, 1000],
        answer = [];

    // if num is less than 1 return 0
    if (num === 0) return "Zero cannot be converted to Roman Numerals";

    // using afor loop  with nested while loop check and subtract roman values and create new string

    for (let a = romans.length - 1; a >= 0; a--) {

        while (num >= numerical[a]) {

            console.log("val", num, "number", numerical[a], "total", num);

            num -= numerical[a];
            answer.push(romans[a]);

        }

    }

    return answer.join("");

};

// console logs/tests
console.log(convertToRomans(1010));