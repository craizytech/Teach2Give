// extractProperties Function
// Create a function named extractProperties that accepts the following:
// ⦁	An array of objects.
// ⦁	A list of property names.
// The function should:
// ⦁	Use the spread operator to create a new array of objects with only the specified properties.
// ⦁	Return the new array of objects.

function extractProperties(objects, ...properties) {
    return objects.map((obj) => {
        let newObj = {};

        properties.forEach(property => {
            if (obj.hasOwnProperty(property)) {
                newObj[property] = obj[property];
            }
        });

        return newObj;
    })
}

// Test Case
const objects = [{a: 1, b: 2, c: 3}, {a: 4, b: 5, c: 6}]
console.log(extractProperties(objects, 'a', 'c')); // Output: [{ a: 1, c: 3 }, { a:4, c: 6 }]