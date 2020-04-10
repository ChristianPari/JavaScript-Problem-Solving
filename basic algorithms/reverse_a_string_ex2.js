/*
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
*/

//* Second example using a decrementing for loop
function reverseString(str) {

    // step 1: create an empty string that will host the new created string
    let newString = "";

    // step 2: create the FOR loop
    /* 
    the starting point of the loop will be (str.length - 1) which corresponds
    to the last character of the string, "o"
    as long as 'i' is greater than or equal to 0, the loop will go on
    we decrement 'i' after each iteration
    */
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i]; // aka newString = newString + str[i];

    }
    /*
        Here hello's length equals 5
            For each iteration: i = str.length - 1 and newString = newString + str[i]
            First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
            Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
            Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
            Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
            Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
        End of the FOR Loop
    */

    console.log(newString);

    // step 3: return the reversed string
    return newString; // output: "olleh"
}
reverseString("hello");