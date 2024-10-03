const os = require('os');

// os uptime
const systemUptime = os.uptime();

// os userInfo
const userInfo = os.userInfo();

// store some information about the os as an object
const otherInfo = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

// get the results
console.log(systemUptime)
console.log(userInfo)
console.log(otherInfo)