/*
Create a CLI algorithm to take in a ROT13cipher stirng and return to the user the decoded string
*/

const { stdin, stdout } = require("process");

const rl = require("readline").createInterface({
    input: stdin,
    output: stdout
});

const FirstQ = () => {

    rl.question("\nEnter a ROT13 encoded string to have it decoded!\n> ", convert);

};

const convert = (string) => {

    string = string.toUpperCase().replace(/\s+/g, " ").split("");

    const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    for (let a = 0; a < string.length; a++) {

        if (new RegExp("[^A-Z]").test(string[a])) {

            continue;

        } else {

            const origIdx = alpha.indexOf(string[a]);

            if (origIdx >= 13) {

                const newLetter = alpha[origIdx - 13];

                string[a] = newLetter;

            } else if (origIdx < 13) {

                const newLetter = alpha[origIdx + 13];

                string[a] = newLetter;

            }

        }

    };

    string = string.join("");

    console.log("\nDecoded String:", string);

    rl.question("\nWould like to have another string decoded?\n(Y/N):", SecondQ);

};

const SecondQ = (res) => {

    res = res.substr(0, 1).toLowerCase();

    res === 'y' ? FirstQ() : rl.close();

};

FirstQ();