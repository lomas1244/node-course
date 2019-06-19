const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes')
const yargs = require('yargs')
const fs = require('fs')

// Customise yargs version
yargs.version('1.1.0')

// Create 'add' command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (props) {
        console.log(chalk.yellow('Title: ' + props.title))
        console.log(chalk.yellow('Body: ' + props.body))
    }
})

// Create 'remove' command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log(chalk.red('Removing existing note...'))
    }
})

// Create 'list' command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function () {
        console.log(chalk.blue('Listing all notes...'))
    }
})

// Create 'read' command
yargs.command({
    command: 'read',
    describe: 'Read this note',
    handler: function () {
        console.log(chalk.yellow('Reading this note...'))
    }
})


console.log(yargs.parse())
// console.log(yargs.argv)






// const command = process.argv[2]
// const invalidArg = chalk.red('Please enter valid command')
// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// } else {
//     console.log(invalidArg)
// }

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