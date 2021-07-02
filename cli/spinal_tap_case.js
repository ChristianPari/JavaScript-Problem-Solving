const readline = require('readline'),
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

FirstQuestion();

function FirstQuestion() {

    rl.question('\nPlease type in a string you want converted to spinal tap case format!\nString: ', convert);

};

function convert(string) {

    const notAlpha = /[^a-zA-Z]/g;

    console.log(`\nOriginal: ${string}`);

    string = string.toLowerCase().replace(notAlpha, '-').replace(/-+/g, '-').replace(/-$/, '');

    console.log(`Spinal Tap: ${string}\n`);

    rl.question('Do you want to convert another string?\n(Y/N): ', SecondQuestion);

};

function SecondQuestion(answer) {

    answer = answer.toLowerCase().substr(0, 1);

    if (answer == 'y') {

        FirstQuestion();

    } else {

        rl.close();

    }

};