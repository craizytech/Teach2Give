// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

function deleteObjectProperty(object, property) {
    delete object[property];
}

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};

console.log("Before Deletion");
console.log(student);
console.log("After Deletion");
deleteObjectProperty(student, "rollno");
console.log(student);
