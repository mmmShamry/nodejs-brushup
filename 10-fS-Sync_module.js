const os = require('os')

// info about user

const user  = os.userInfo()
console.log(user)

console.log(`the time is ${os.uptime()}s`)

const currentOs = {
    name:os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs)