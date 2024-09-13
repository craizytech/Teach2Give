// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

function displayReadingStatus(object) {
    for (variable of object) {
        console.log("Book Author:", variable.author);
        console.log("Book Title:", variable.title);
        console.log("Book readingStatus:", variable.readingStatus);
        console.log()
    }
}


var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];


    displayReadingStatus(library);