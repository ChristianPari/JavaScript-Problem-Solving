const readline = require('readline'),
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

FirstQuestion();

function FirstQuestion() {

    rl.question('\nEnter what you would converted into binary!\nEnter here: ', Convert);

};

function Convert(str) {

    str = str.trim().replace(/\s{2,}/g, ' ');
    let binaryArr = [];

    for (let a = 0; a < str.length; a++) {

        let decimal = str.charCodeAt(a),
            binary = decimal.toString(2);

        do {

            if (binary.length < 7) {

                binary = '0' + binary;

            }

        } while (binary.length < 7);

        binaryArr.push(binary);

    }

    const binaryStr = binaryArr.join(' ');

    console.log(`\nHere is the converted string!\nConverted: ${binaryStr}\n`);

    rl.question('Would you like to convert another string?\n(Y/N): ', SecondQuestion);

};

function SecondQuestion(answer) {

    answer = answer.substr(0, 1).toLowerCase();

    if (answer == 'y') {

        FirstQuestion();

    } else {

        rl.close();

    }

};