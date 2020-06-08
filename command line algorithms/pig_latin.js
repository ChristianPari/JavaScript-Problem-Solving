const readline = require('readline'),
    rl = readline.createInterface({

        input: process.stdin,
        output: process.stdout

    });

FirstQuestion();

function FirstQuestion() {

    rl.question("\nPlease enter a string that you would like to have converted to Pig-Latin!\nString: ", Convert);

};

function Convert(str) {

    if (str.length == 0) {

        return rl.question("\nString cannot be blank, please enter a string!\nString: ", Convert)

    }

    str = str.trim().replace(/\s{2,}/g, ' ');

    let strArr = str.split(' '),
        vowRegExp = /[aeiou]/,
        convertedArr = [];

    strArr.forEach(word => {

        if (vowRegExp.test(word[0])) {

            word += 'way';

            convertedArr.push(word);

            return;

        } else {

            for (let a = 1; a < word.length; a++) {

                if (vowRegExp.test(word[a])) {

                    const conc = word.slice(0, a);

                    let converted = word.slice(a, word.length);

                    converted += (conc + 'ay');

                    convertedArr.push(converted);

                    return;

                }

            }

        }

    });

    const answer = convertedArr.join(' ').replace(/,/g, ' ');

    console.log(`\nConverted String: ${answer}\n`);

    rl.question("Would you like to convert another string?\n(Y/N): ", SecondQuestion);

};

function SecondQuestion(answer) {

    answer = answer.substr(0, 1).toLowerCase();

    if (answer == 'y') {

        FirstQuestion();

    } else {

        rl.close();

    }

};