const http = require('http');
const formidable = require('formidable');
const fs = require('fs');

http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('Error during file upload');
                return res.end();
            }

            // Access the first file in the filetoupload array
            const uploadedFile = files.filetoupload[0];
            const oldpath = uploadedFile.filepath;
            const newpath = '/home/craizy/Teach2Give/node/' + uploadedFile.originalFilename;

            if (!oldpath) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('File path is undefined. File upload failed.');
                return res.end();
            }

            // Rename and move the file to the new path
            fs.rename(oldpath, newpath, function (err) {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.write('File Upload Failed');
                    return res.end();
                }
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="/fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);
