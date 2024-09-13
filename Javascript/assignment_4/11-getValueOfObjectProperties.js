// Write a JavaScript function to retrieve all the values of an object's properties.

function getValueOfObjectProperties(obj) {
    return Object.values(obj);
}

arr = [1, 2, 3, 4, "five"];

console.log(getValueOfObjectProperties(arr));