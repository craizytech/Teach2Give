// Write a JavaScript function to retrieve all the names of an object's own and inherited properties.

function getAllProperties(obj) {
    let properties = new Set();

    // Traverse the prototype chain
    while (obj) {
        // add own properties of the current object
        Object.getOwnPropertyNames(obj).forEach(prop => properties.add(prop));
        obj = Object.getPrototypeOf(obj);
    }

    return Array.from(properties); // convert set to array and return
}

let arr = [1, 2, 3];
console.log(getAllProperties(arr));