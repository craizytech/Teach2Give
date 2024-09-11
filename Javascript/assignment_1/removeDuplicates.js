function removeDuplicates(string) {
    let result = new Set(string.split(''));

    return [...result].join('')
}

// TestCase
console.log(removeDuplicates('Hello World'));

