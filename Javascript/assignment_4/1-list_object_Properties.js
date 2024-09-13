// Write a JavaScript program to list the properties of a JavaScript object.

function listObjectProperties(object) {
    return Object.keys(object);
}

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};

console.log(listObjectProperties(student));