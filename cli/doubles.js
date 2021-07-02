// MUST ALSO USE THE PACKAGE.JSON FILE IN THIS REPO
//! RUN npm run createDB (creates the .txt file for database use)
//! RUN npm start (starts the game)

const readline = require('readline'),
    fs = require('fs'),
    textFile = 'highscores.txt',
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

if (fs.readFileSync(textFile, 'utf8') == "") { createBlankHS(); } // creates the simple object that stores the highscores

console.log('\nWelcome to Doubles!\n\nThe goal of this game is to get the highest score possible rolling 2 dice consecitively and adding their values, but if you roll doubles then you lose and your score is wiped out!');

// ######################### Global Variables #########################
let totalScore = 0;

Begin();

function Begin() {

    rl.question('\nTo begin, please press the Enter key!\nTo see highscores type H!: ', FirstQuestion);

};

function FirstQuestion(answer1) {

    if (answer1) {

        displayHighs();

        return;

    }

    let die1 = Math.floor((Math.random() * 6) + 1),
        die2 = Math.floor((Math.random() * 6) + 1);

    if (die1 == die2) {

        console.log(`\nOh no! You rolled ${die1}'s.\nGAME OVER\n`);

        rl.question('Would you like to play again?\n(Y/N): ', Restart);

    } else {

        const roll = die1 + die2;

        totalScore += roll;

        console.log(`\nYou rolled a ${die1} and ${die2}!\nScore: ${totalScore}\n`);

        rl.question("Press Enter to roll again unless you're scared!\nOtherwise, type S to end the game and save your score!: ", SecondQuestion);

    }

};

function SecondQuestion(answer3) {

    if (!answer3) {

        FirstQuestion();

        return;

    }

    answer3 = answer3.toUpperCase().substr(0, 1);

    if (answer3 == 'S') {

        console.log(`\nYou're total score was: ${totalScore}\n`);

        rl.question('Enter your name to save highscore: ', saveHS);

    } else {

        rl.question(`You entered ${answer3} which is not a valid command.\nPlease press the Enter key to roll again or type S to save you're score!: `, SecondQuestion);

    }

};

function displayHighs() {

    let highscores = getHS();

    if (highscores.length == 0) {

        rl.question('\nThere are currently no highscores, to start the game, press Enter!', FirstQuestion);

        return;

    }

    console.log(`\n-----------\nHigh Scores\n-----------`);

    highscores.forEach(highscore => {

        console.log(`${highscore.name}: ${highscore.score}`);

    });

    rl.question('\nTo start the game press Enter!', FirstQuestion);

};

function Restart(answer2) {

    answer2 = answer2.toUpperCase().substr(0, 1);

    if (answer2 == 'Y') {

        totalScore = 0;
        Begin();

    } else {

        rl.close();

    }

};

function getHS() {

    const rawData = fs.readFileSync(textFile, 'utf8'),
        parsedData = JSON.parse(rawData);

    return parsedData.highscores;

};

function saveHS(name) {

    const rawData = fs.readFileSync(textFile, 'utf8'),
        parsedData = JSON.parse(rawData);

    parsedData.highscores.push({
        name: name,
        score: totalScore
    });

    parsedData.highscores.sort((a, b) => (a.score < b.score) ? 1 : -1);

    let stringifiedHS = JSON.stringify(parsedData);

    fs.writeFileSync(textFile, stringifiedHS);

    rl.question('\nWould you like to play again?\n(Y/N): ', Restart);

};

function createBlankHS() {

    const setup = JSON.stringify({ "highscores": [] });

    fs.writeFileSync(textFile, setup);

};