/*
A game of table tennis almost always sounds like Ping! followed by Pong! 
Therefore, you know that Player 2 has won if you hear Pong! as the last sound (since Player 1 didn't return the ball back).

Given an array of Ping!, create a function that inserts Pong! in between each element. Also:

    - If win equals true, end the list with Pong!.
    - If win equals false, end with Ping! instead.

Notes:

    - You will always return the ball (i.e. the Pongs are yours).
    - Player 1 serves the ball and makes Ping!.
    - Return an array of strings.
    
*/

function pingPong(arr, win) {

    let newArr = [];

    for (let a = 0; a < arr.length; a++) {

        newArr.push(`Ping!`, `Pong!`);

    }

    if (!win)
        newArr.pop();

    return newArr

}

// pingPong(["Ping!", "Ping!", "Ping!"], true);
//! should return ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]
// pingPong(["Ping!", "Ping!"], false);
//! should return  ["Ping!", "Pong!", "Ping!"]);
// pingPong(["Ping!"], true);
//! should return  ["Ping!", "Pong!"]);