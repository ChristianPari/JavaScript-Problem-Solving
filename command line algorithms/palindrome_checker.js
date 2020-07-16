const rl = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    }),

    FirstQ = () => {

        rl.question("\nPlease enter the string you want to check: ", check);

    },

    check = (string) => {

        const nonAlpha = /[^a-zA-Z]/g;

        string = string.toLowerCase().replace(nonAlpha, "");

        const reversedStr = string.split("").reverse().join("");

        if (string === reversedStr) {

            console.log("\nThat's a valid Palindrome!");

        } else { console.log("\nThat is not a Palidrome."); }

        rl.question("\nCheck another?\n(Y/N): ", SecondQ);

    },

    SecondQ = (ans) => {

        ans = ans.substr(0, 1).toLowerCase();

        if (ans === 'y') {

            FirstQ();

        } else { rl.close(); };

    };

FirstQ();