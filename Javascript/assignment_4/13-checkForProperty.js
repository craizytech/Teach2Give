// Write a JavaScript function to check whether an object contains a given property.

function checkForProperties(object, property) {
    return Object.hasOwn(object, property)
}

const person = {
    name: 'John',
    surname: 'Doe',
    age: 41
};

console.log(checkForProperties(person, "age"));
console.log(checkForProperties(person, "nationality"));