// Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.

function reverseKeysAndObjects(obj) {
    let keys = Object.values(obj);
    let values = Object.keys(obj);

    let result = {};
    keys.forEach((key, i) => {
        result[key] = values[i];
    })

    return result;
}

let obj = {
    "name": "Eammon",
    "Age": 21
};

console.log(reverseKeysAndObjects(obj));