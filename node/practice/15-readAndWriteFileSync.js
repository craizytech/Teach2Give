const fs = require('fs');

try {
    // write to file synchronously
    const data = "Ipsum ut quis ea nisi eiusmod ullamco sint dolore proident magna ex esse. Mollit ea occaecat amet aute sunt aliquip velit commodo aute. Nostrud ea amet reprehenderit id cillum adipisicing."

    fs.writeFileSync('myFileSync.txt', data);

    console.log("Write Operation Successful");

    // read the data synchronously
    const fileData = fs.readFileSync('myFileSync.txt', 'utf-8');
    console.log('Read operation successful here is the data: ')
    console.log(fileData);
} catch(err) {
    console.log('Error Occured');
    console.log(err);
}