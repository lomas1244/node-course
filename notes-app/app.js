const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes')

const command = process.argv[2]
const invalidArg = chalk.red('Please enter valid command')

if (command === 'add') {
    console.log('Adding note!')
} else if (command === 'remove') {
    console.log('Removing note!')
} else {
    console.log(invalidArg)
}






// const msg = getNotes()
// console.log(msg)

// const successMsg = chalk.green('Success')
// const errorMsg = chalk.red('Error')

// console.log(successMsg)
// console.log(errorMsg)

// console.log(process.argv[2])

// console.log(validator.isURL('www.example.com'))
// const add = require('./utils')
// const sum = add(4, -2);
// console.log(sum)