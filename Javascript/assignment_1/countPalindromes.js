function isPalindrome(string) {
    
    string = string.replace(/[^\w]|_/g, '').toLowerCase();

    let reversedString = string.split('').reverse().join('');

    return reversedString == string;
}

function countPalindromes(string) {
    let start = 0;
    let end = start + 1;
    
    let palindromes = [];
    
    while (start < string.length) {
        while (end <= string.length) {
            // get substring from start to the end
            let substring = string.substring(start, end + 1);

            if (isPalindrome(substring)) {
                palindromes.push(substring);
            }

            end++;
        }
        start++;
        end = start + 1;
    }
    console.log(palindromes)
    return palindromes.length;
}


console.log(countPalindromes('ababa'));
