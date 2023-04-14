import noteContext from "./NotesContext";
import { useState } from "react";

const initialState = [
  {
      "_id": "6437ce82df6990f5d2036236",
      "title": "Documentary",
      "description": "Flow Boy Named Charlie Brown, A",
      "tag": "2011",
      "__v": 0
  },
  {
      "_id": "6437cec1df6990f5d2036238",
      "title": "Drama",
      "description": "Pippi on the Run (På rymmen med Pippi Långstrump)",
      "tag": "2011",
      "__v": 0
  },
  {
      "_id": "6437cfdedddf6990f5d203623a",
      "title": "Horton Hears a Who!",
      "description": "New York, New York",
      "tag": "2011",
      "__v": 0
  },
  {
      "_id": "6437cedddf6990f5d20362fdf3a",
      "title": "New York, New York",
      "description": "New York, New York",
      "tag": "2011",
      "__v": 0
  },
  {
      "_id": "6437cedddf6990f5d2dsf03623a",
      "title": "Horton Hears a Who!",
      "description": "New York, New York",
      "tag": "2011",
      "__v": 0
  },
  {
      "_id": "6437cedddf6990f5gdffd203623a",
      "title": "Horton Hears a Who!",
      "description": "New York, New York",
      "tag": "2011",
      "__v": 0
  },
  {
      "_id": "6437cedddf6990f5sdsdd203623a",
      "title": "Horton Hears a Who!",
      "description": "New York, New York",
      "tag": "2011",
      "__v": 0
  }
  
]
const NoteState = (props) => {

  const [notes, setNotes] = useState(initialState)

  const addNote = (note) => {
    setNotes(notes.concat(note))
  }
  const editNote = (id,note) => {

  }
  const deleteNote = (id) => {
    console.log("id is this",id)
    const newNotes= notes.filter((i)=>{
     return i._id!==id
    })
    setNotes(newNotes)
  }
  return (
    <>
      <noteContext.Provider value={{ notes, addNote,deleteNote }}>
        {props.children}
      </noteContext.Provider>
    </>
  );
};
export default NoteState;
