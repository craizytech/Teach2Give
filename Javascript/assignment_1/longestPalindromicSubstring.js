import isPalindrome from "./check_palindrome"

function longestPalindrome(string) {
    start = 0;
    end = start + 1;
    
    palindromes = [];
    
    while (start < String.length) {
        while (end < string.length) {
            if (isPalindrome(string.substring(start, end))) {
                palindromes.push(string)
            }
        }
    }
}