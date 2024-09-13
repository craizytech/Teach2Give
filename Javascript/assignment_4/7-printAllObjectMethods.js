//  Write a JavaScript function to print all the methods in a JavaScript object.

function printAllObjectMethods(object) {
    return Object.getOwnPropertyNames(object).filter(function(property) {
        return typeof object[property] == "function";
    });
}

console.log(printAllObjectMethods(Array));