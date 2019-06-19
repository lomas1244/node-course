const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes')

const msg = getNotes()
console.log(msg)

const successMsg = chalk.green('Success')
const errorMsg = chalk.red('Error')

console.log(successMsg)
console.log(errorMsg)











// console.log(validator.isURL('www.example.com'))
// const add = require('./utils')
// const sum = add(4, -2);
// console.log(sum)