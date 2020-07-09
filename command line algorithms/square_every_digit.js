const { stdin, stdout } = require('process');

const rl = require('readline').createInterface({
    input: stdin,
    output: stdout
});

const FirstQ = () => {

    rl.question("\nEnter a string of digits to have each converted into its square root form: ", convert);

};

const SecondQ = (res) => {

    res.substr(0, 1).toLowerCase() == 'y' ? FirstQ() : rl.close();

};

const convert = (string) => {

    const nums = string.split('').map(num => Number(num) * Number(num)).join('');

    console.log(`\nConverted nums: ${nums}`);

    rl.question("\nWould you like to convert another?\n(Y/N): ", SecondQ);

};

FirstQ();