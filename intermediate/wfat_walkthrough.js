/*
* Make a function that looks through an array of objects (first argument) and returns an array of all objects that
* ... have matching name and value pairs (second argument). Each name and value pair of the source object has to be
* ... present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
{ first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the
third object from the array (the first argument), because it contains the name and its value, that was passed on as
the second argument.
*/

//! THIS WAS THE WALKTHROUGH, HELPED ME BETTER UNDERSTAND .FILTER() AND THE PROCESS
//! ... OF THIS ALGORTHIM SO I THEN WENT BACK TO MY SECOND ATTEMPT AND WAS ABLE TO
//! ... EDIT ONLY 2 LINES TO MAKE IT WORK!!

function whatIsInAName(collection, source) {
    // var arr = [];
    //^ using filter() instead of looping
    // Only change code below this line

    let sourceKeys = Object.keys(source);

    return collection.filter(function(obj) {
        /*
        ^ filter() creates function to test aganist a new variable which is created
        ^ ... from another array
        * we are returning `collection.filter(###)`, which is extracting or holding onto whatever we tell it
        * ... to within our filter(), literally filtering out what we want and dont want by way of `return`
        */

        /*
            `obj` will take the form of each object that is within the array
            ... of `collection`

            example/ 
            array = [1,2,3,4,5];
            array.filter(function(num) {
                /
                code
                /
            });
            `num` will become each index `1,2,3,4,5` and the code withing the filter
            ... function will be `tested` aganist that variable
        */

        for (let key of sourceKeys) {
            /*
                key: will be equivalent to each index of the array its `of`,
                ... so in this case its getting its data from the sourceKeys array

                1 index, loops once; 2 indexs, loops twice; and so on like a normal
                ... for loop

                by logging `key` you will get an output of the `key values` of the source
                ... which we made into an array with `sourceKeys`
            */

            if (!obj.hasOwnProperty(key) || obj[key] !== source[key]) {
                /*
                    if (obj doesnt have the property `key` OR obj[key] "ex/ obj.key" isnt equal to source[key] "ex/ source.key")
                */

                return false

                // if the `obj` falls into the IF statement then it wont be included in the final array; false

            }

        }

        return true

        // if the `obj` does not fall into the IF statement, then it returns `true` and is included in the final array

    });


    // Only change code above this line
    // return arr;
    //^ dont need bc used filter()
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));