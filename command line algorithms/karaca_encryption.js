const { stdin, stdout } = require('process');

const rl = require('readline').createInterface({
    input: stdin,
    output: stdout
});

const FirstQ = () => { rl.question("\nEnter an alphanumeric string: ", convert); };

const alter = (char) => {

    switch (char.toLowerCase()) {
        case 'a':

            return '0';

        case 'e':

            return '1';

        case 'i' || 'o':

            return '2';

        case 'u':

            return '3';

    };

};

const convert = (res) => {

    res = res.split('').reverse();

    let newArr = [];

    res.forEach(char => {

        switch (char.toLowerCase()) {
            case 'a':

                newArr.push('0');

                break;

            case 'e':

                newArr.push('1');

                break;

            case 'i' || 'o':

                newArr.push('2');

                break;

            case 'u':

                newArr.push('3');

                break;

            default:

                newArr.push(char);

                break;

        };

    });

    const answer = newArr.join('').concat('aca');

    console.log(`\nConverted String: ${answer}`);

    rl.question("\nConvert another?\n(Y/N): ", delegate);

};

const delegate = (choice) => {

    choice.substr(0, 1).toLowerCase() == 'y' ? FirstQ() : rl.close();

};

FirstQ();