// Write a JavaScript program that returns a subset of a string.

function subsetOfStrings(string) {
    let subsets = [];

    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j < string.length; j++) {
            subsets.push(string.slice(i, j))
        }
    }

    return subsets;
}



console.log(subsetOfStrings("dogs"));