// combineArrays Function: Create a function called combineArrays that takes multiple arrays as arguments. The function should:
// ⦁	Use the spread operator to combine all arrays into one.
// ⦁	Remove duplicate elements from the combined array.
// ⦁	Return the new array with unique elements.

function combineArrays(...arrays) {
    set = new Set(arrays.flat(Infinity));
    return Array.from(set);
}

// Test case
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
const arr3 = [5, 6, 7];

console.log(combineArrays(arr1, arr2, arr3))