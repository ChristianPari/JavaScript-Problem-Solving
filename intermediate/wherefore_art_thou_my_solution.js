/*
* Make a function that looks through an array of objects (first argument) and returns an array of all objects that
* ... have matching name and value pairs (second argument). Each name and value pair of the source object has to be
* ... present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
{ first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the
third object from the array (the first argument), because it contains the name and its value, that was passed on as
the second argument.
*/

function whatIsInAName(collection, source) {

    var arr = [];

    let originalData = [...collection];
    let testFor;
    if (Array.isArray(source))
        testFor = [...source];
    else
        testFor = source;
    console.log(`What we have:\n`, originalData, `\nWhat we're looking for:\n`, testFor);

    // created these outside the forEach loop so that they arent created every time it iterates through the collection array
    let testEnts = Object.entries(testFor);
    let testKeys = Object.keys(testFor);
    let testVals = Object.values(testFor);
    console.log(`\nSource Entries:\n`, testEnts, `\nSource Keys:\n`, testKeys, `\nSource Vals:\n`, testVals);

    collection.forEach(obj => {

        let objEnts = Object.entries(obj);
        let objKeys = Object.keys(obj);
        let objVals = Object.values(obj);
        console.log(`\nCollection Entries:\n`, objEnts, `\nCollection Keys:\n`, objKeys, `\nCollection Vals:\n`, objVals);

        let a = 0;

        while (a < testKeys.length) {

            if (!objKeys.includes(testKeys[a]) || obj[testKeys[a]] !== testVals[a]) {

                let removedObj = originalData.indexOf(obj);
                console.log(removedObj);
                console.log(originalData.slice(removedObj, removedObj + 1));
                delete originalData[removedObj];
                originalData.splice(removedObj, 1);
                console.log(originalData);
                arr = originalData;

            } else {
                arr = originalData;
            }

            a++;

        }

    })

    console.log(`\nAnswer:\n`, arr);
    return arr;

}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); // should return [{ first: "Tybalt", last: "Capulet" }].
// whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }); // should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
// whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }); // should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }); // should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 }); // should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
// whatIsInAName([{ "a": 1, "b": 2, "c": 3 }], { "a": 1, "b": 9999, "c": 3 }); // should return []