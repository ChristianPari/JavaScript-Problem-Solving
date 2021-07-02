const readline = require('readline'),
    rl = readline.createInterface({

        input: process.stdin,
        output: process.stdout

    });

FirstQuestion(); // Initiates the CLI

function FirstQuestion() {

    rl.question('\nEnter a ROT13 encoded string that you want decoded!\nString: ', answer1 => {

        let decoded = decode(answer1);

        console.log(`\nDecoded string: ${decoded}`);

        rl.question('\nWould you like to decode another string?\n(Y/N): ', SecondQuestion);

    });

};

function SecondQuestion(answer2) {

    answer2 = answer2.toUpperCase().substr(0, 1);

    if (answer2 == 'Y') {

        FirstQuestion();

    } else {

        rl.close();

    }

};

function decode(string) {

    const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        stringArr = string.toUpperCase().split(''),
        newStringArr = [],
        aplhaExp = /[a-zA-Z]/;

    for (let a = 0; a < stringArr.length; a++) {

        const letter = stringArr[a];

        if (aplhaExp.test(letter)) {

            let alphaIdx = alpha.indexOf(letter),
                decodedIdx,
                decodedLetter;

            if (alphaIdx > 12) {

                decodedIdx = alphaIdx - 13,
                    decodedLetter = alpha[decodedIdx];

            } else {

                decodedIdx = alphaIdx + 13,
                    decodedLetter = alpha[decodedIdx];

            }

            newStringArr.push(decodedLetter);

        } else {

            newStringArr.push(letter);

        }

    }

    const decodedStr = newStringArr.join('');

    return decodedStr;

};