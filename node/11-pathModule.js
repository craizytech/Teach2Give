const path = require('path');

// const myPath = '/mnt/c/Desktop/NodeJsTut/app.js'
const myPath = 'Desktop/NodeJsTut/app.js'

const pathInfo = {
    fileName: path.basename(myPath),
    folderName: path.dirname(myPath),
    fileExtention: path.extname(myPath),
    absoluteOrNot: path.isAbsolute(myPath),
    detailedInfo: path.parse(myPath)
}

console.log(pathInfo)