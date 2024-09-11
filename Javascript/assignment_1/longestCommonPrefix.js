function longestCommonPrefix(arr) {
    if (arr.length == 1) return arr[0];

    let prefix = arr[0];

    while (prefix != "") {
        for (variable of arr) {
            if (!variable.startsWith(prefix)) {
                // reduce the prefix by removing the last character
                prefix = prefix.slice(0, -1);
                break;
            }
        }
    }


}