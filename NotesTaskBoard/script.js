// Form Elements



const NotesContainer = document.getElementById('notes-container')


// newNote assign
const getFormDetails = ()=>{


    let formNoteTextContent = document.getElementById('textarea1').value;
    let formNoteDate = document.getElementById(`staticDate`).value
    let formNoteTime = document.getElementById(`staticTime`).value

    if (formNoteTextContent && formNoteDate && formNoteTime){
        createNote(formNoteTextContent,formNoteDate,formNoteTime)
    }else{
        alert('Please fill all form inputs')
    }
    
}



// newNote Creation
const createNote = (noteText,noteDate,noteTime)=>{
    const pContentEl = document.createElement('p')
    const pDateEl = document.createElement('p')
    const pTimeEl = document.createElement('p')


    pContentEl.innerHTML = noteText
    pDateEl.innerHTML = noteDate
    pTimeEl.innerHTML = noteTime

    let noteDiv = document.createElement("div");
    noteDiv.classList.add('note-box')
    noteDiv.classList.add('col-4')

    noteDiv.appendChild(pContentEl)
    noteDiv.appendChild(pDateEl)
    noteDiv.appendChild(pTimeEl)

    NotesContainer.appendChild(noteDiv)

}


