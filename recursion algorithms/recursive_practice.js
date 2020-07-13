// const noRecurFactorialize = (num) => {

//     if (num < 1) { return console.log('Number provided is less than 1'); }

//     let facotralize = 1;

//     for (let a = 1; a <= num; a++) {

//         facotralize *= a;

//     }

//     return facotralize;

// };

// console.log(noRecurFactorialize(10));

const recurFactorialize = (num) => {

    if (num > 1) {

        console.log(num > 1 ? num : '', num - 1 != 0 ? num - 1 : '');

        return num * recurFactorialize(num - 1);

    }

    return num

};

console.log(recurFactorialize(10));