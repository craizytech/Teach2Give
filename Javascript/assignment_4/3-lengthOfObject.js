// Write a JavaScript program to get the length of a JavaScript object.

function lengthOfObject(object) {
    return Object.keys(object).length;
}

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};

console.log(lengthOfObject(student));