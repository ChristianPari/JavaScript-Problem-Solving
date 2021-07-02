/*
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
*/

//* First example will use split(), reverse(), join() methods
// seems most straight forward
function reverseString(str) {
    // step 1: use split() method to return a new array
    let splitStr = str.split(""); // aka let splitStr = "hello".split("");
    // output ["h", "e", "l", "l", "o"]

    // step 2: use reverse() method to reverse the new created array
    //* each time you are creating new variables to set the new data to
    let reverseArray = splitStr.reverse(); // aka let reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // output: ["o", "l", "l", "e", "h"]

    // step 3: use the join() method to join all the elements of the array into a string
    let joinArray = reverseArray.join(""); // aka let joinArray = ["o", "l", "l", "e", "h"].join("");
    // output: "olleh"

    console.log(joinArray); // log to console to check output

    // step 4: return the reversed string
    return joinArray; // "olleh"
    //! No code will run "unreachable code" if placed after a return statement in a function block. return ENDS all code in that block.
}

reverseString("hello");

/*
! a much more simplified and more pleasant to the eyes code is:
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");
* get used to doing the long way first when it comes to using methods, shows the flow of code a lot better and is easier to understand for a beginner. but once done with a project, try to shorten it and make it look better
*/