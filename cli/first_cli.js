//! THIS FILE IS USING NODE.JS

const readline = require('readline'),
    rl = readline.createInterface({

        input: process.stdin,
        output: process.stdout

    });

FirstQuestion(); // starts the CLI

function FirstQuestion() {

    rl.question('\nEnter a string you want to see reversed!\nString: ', answer1 => {

        const reversedStr = answer1.split('').reverse().join('');

        console.log(`\nOriginal: ${answer1}\nReversed: ${reversedStr}\n`);

        rl.question('Would you like to reverse another string?\n(Y/N): ', SecondQuestion);

    });

};

function SecondQuestion(answer2) {

    answer2 = answer2.toUpperCase().substr(0, 1);

    if (answer2 == 'Y')

        FirstQuestion();

    else

        rl.close();

};