// modules
const names = require('./4-names')
const sayHi = require('./5-utils')

const data = require('./6-alt-flavour')

require('./7-mind-blown')

console.log(data)
sayHi(names.john);
sayHi(names.peter);
sayHi(data.songlePerson.name);