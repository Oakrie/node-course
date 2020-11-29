const fs  = require('fs')

const getNotes = function(){
    return 'This is a note that is returned'
}


const addNote = function(title, body){
    const notes = loadNotes()

    const dupNotes = notes.filter(function (note) {
        return note.title === title
    })

    if(dupNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('No dulpicates found, saving note...')
    } else {
        console.log('Found deplicate.')
    }
}


const removeNote = function(title){
    console.log("removing note with title"+title)

    const notes = loadNotes()
    const fliteredNotes = notes.filter(function (note) {
        return note.title != title
    })
    if(fliteredNotes.length !== notes.length ){
        console.log('Note ' + title + ' found and removed')
        saveNotes(fliteredNotes)

    } else {
        console.log('Note ' + title + ' not found.')
    }
}

const readNote = function(title){
    console.log('reading note...')
    const notes = loadNotes()
    const selectedNote = notes.filter(function (note){
        return note.title == title
    })
    if (selectedNote.length > 0) {
        console.log(selectedNote['body'])
    } else {
        console.log('Note ' + title + ' not found')
    }
}


const saveNotes = function(notes){
    const datajson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', datajson)
}

const loadNotes = function() {
    try{
        const databuf = fs.readFileSync('notes.json')
        const datajson = databuf.toString()
        return JSON.parse(datajson)
    } catch(e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote
}

