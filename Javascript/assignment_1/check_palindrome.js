function isPalindrome(string) {
    
    string = string.replace(/[^\w]|_/g, '').toLowerCase();

    reversedString = string.split('').reverse().join('');

    return reversedString == string;
}

module.export(isPalindrome);
// test the function
console.log(isPalindrome("A man, a plan, a canal, Panama")); //true
console.log(isPalindrome('Was it a car or a cat I saw?')); //true
console.log(isPalindrome('Hello, World!')); //false