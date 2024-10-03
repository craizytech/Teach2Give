const path = require('path');

// suppose you're in '/users/student/projects'

// Using path.join():
console.log(path.join('folder1'), 'folder2');
// Output: 'folder1/folder2'
// It just combines the the paths no absolute path here

// Using path.resolve()
console.log(path.resolve('folder1', 'folder2'));
// Output: '/users/student/projects/folder1/folder2'
// It gives you the full absolute path from your current working directory
