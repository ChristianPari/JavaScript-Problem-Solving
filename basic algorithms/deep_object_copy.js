// Return a deep copy of an object using a function
function deepCopy(obj) {

    const { a, b, c, f } = obj,
    newObj = { a, b, c, f };

    return newObj;

};

deepCopy({
    a: "test",
    b: 3,
    c: { d: "testing", e: 7 },
    f: { nested: { deep: "this is deep" } }
});