function isPalindrome(string) {
    
    string = string.replace(/[^\w]|_/g, '').toLowerCase();

    let reversedString = string.split('').reverse().join('');

    return reversedString == string;
}

function longestPalindrome(string) {
    let start = 0;
    let end = start + 1;
    
    let palindromes = [];
    
    while (start < string.length) {
        while (end <= string.length) {
            // get substring from start to the end
            let substring = string.substring(start, end);

            if (isPalindrome(substring)) {
                palindromes.push(substring);
            }

            end++;
        }
        start++;
        end = start + 1;
    }

    let longest = palindromes.sort((a, b) => b.length - a.length)[0] || '';

    return longest;
}

// Test Cases
console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));