const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// console.log(yargs.argv)

//add command
yargs.command(
    'add',
    'Add new note',
    {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    function(argv){
        notes.addNote(argv.title, argv.body)
        // console.log('title: ' + argv.title)
        // console.log('body: '  + argv.body)
    }
).help().argv

//remove command
yargs.command(
    'remove',
    'Remove a note',
    {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    function(argv){
        notes.removeNote(argv.title)
    }
).help().argv

//read command
yargs.command(
    'read',
    'Read a note',
    function(argv){
        console.log('Reading note')
    }
).help().argv


//list command
yargs.command(
    'list',
    'List notes',
    function(argv){
        console.log('Listing notes')
    }
).help().argv

