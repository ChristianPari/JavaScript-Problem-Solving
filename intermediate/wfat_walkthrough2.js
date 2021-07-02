function whatIsInAName(collection, source) {

    // `matchedObjects` starts with all the objects within the collection array
    // created a COPY of collection
    let matchedObjects = [...collection];
    // created a const so that we cannot mess up the static passed in test data
    const sourceEntries = Object.entries(source);

    // loop/iterate through matchedObjects
    for (let a = 0; a < collection.length; a++) {

        console.log(`\nNow Testing:`, collection[a]);

        sourceEntries.forEach(pair => {

            console.log(`Being Compared:`, pair);

            // inside the loop preform a test on each object
            // does it include the key(s) and match the value(s)?
            if (!collection[a].hasOwnProperty(pair[0]) || collection[a][(pair[0])] != pair[1]) {

                console.log(`Doesnt Match:`, collection[a]);

                //! THIS IS ONLY WHERE MATCHED OBJECTS WILL BE REFERENCED AND FILTERED
                let idx = matchedObjects.indexOf(collection[a]);
                // console.log(matchedObjects.indexOf(collection[a]));
                matchedObjects.splice(idx, 1);
                //! ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

            }

        })

    }

    // by the end `matchedObjects` array should only contain the objects that matched `source`
    console.log(`\nMatched Objects:`, matchedObjects);
    // return matchedObjects

}

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
//! should return [{ first: "Tybalt", last: "Capulet" }].
// whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }); 
//! should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 3, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2, "apple": 3 }, { "bat": 2, "apple": 1 }], { "apple": 1, "bat": 2 });
//! should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }); 
//! should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 }); 
//! should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
// whatIsInAName([{ "a": 1, "b": 2, "c": 3 }], { "a": 1, "b": 9999, "c": 3 }); 
//! should return []