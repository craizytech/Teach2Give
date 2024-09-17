// ⦁	filterAndSort Function: Create a function called filterAndSort that takes an indefinite number of arguments. The first argument should be a filter function, and the remaining arguments should be numbers. The function should:
// ⦁	Use the rest operator to capture all arguments except the first one.
// ⦁	Filter the numbers using the provided filter function.
// ⦁	Sort the filtered numbers in ascending order.
// ⦁	Return the sorted array of numbers.

function filterAndSort(filterFn, ...numbers) {
    return numbers.filter(filterFn, numbers).sort();
}

const isEven = (num) => num % 2 === 0;
console.log(filterAndSort(isEven, 5, 3, 8, 6, 2)); // Output: [2, 6, 8]