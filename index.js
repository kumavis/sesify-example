// load some 3rd party code
const foe = require('foe')
const friend = require('friend')
const format = require('sesify-example-format')
const deep = require('sesify-example-deep')


console.log(format('hello'))
console.log(deep('hi there'))


// run their code
foe.action()
friend.action()
