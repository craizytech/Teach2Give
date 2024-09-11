function areAnagrams(str1, str2) {
    // check if the strings have same length
    if (str1.length != str2.length) return false;

    str1Set = new Set(str1.split(''));
    str2Set = new Set(str2.split(''));

    return [...str1Set].every((char) => str2Set.has(char));
}

console.log(areAnagrams('listen', 'silent')); //true
console.log(areAnagrams('listenn', 'silent'));