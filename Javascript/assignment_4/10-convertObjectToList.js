// Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

function convertObjectToList(arr) {
    return Array.from(Object.entries(arr));
}
let obj = {
    "name": "eammon",
    "age": 21
}

console.log(convertObjectToList(obj));
