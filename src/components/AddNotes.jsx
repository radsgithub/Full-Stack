import { useState, useContext } from "react";
import noteContext from "../context/Notes/NotesContext";
import Notes from "./Notes";
const AddNotes = () => {
  const context = useContext(noteContext);
  const [notes, setNotes] = useState({title:"",description:""})
  const { addNote } = context

  const addNoteHandler = e => {
    e.preventDefault();
    addNote(notes)
    setNotes({title:"",description:""})
  }

  return (
    <>
      <div className="container my-5">
        <h1>Add a Note</h1>
        <form onSubmit={addNoteHandler}>
          <div className="mb-3">
            Title
            <input
              type="title"
              className="form-control"
              name="title"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              autoComplete="on"
              onChange={(e) => setNotes({...notes,[e.target.name]:e.target.value})}
              value={notes.title}
            />
            <div id="description" className="form-text"></div>
          </div>
          <div className="mb-3">
            Description
            <input
              type="description"
              className="form-control"
              id="description"
              autoComplete="current-password"
              name="description"
              onChange={(e) => setNotes({...notes,[e.target.name]:e.target.value})}
              value={notes.description}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            Check me out
          </div>
          <button type="submit" className="btn btn-primary">
            Add Notes
          </button>
        </form>
        <br />
        <h2>Your Notes</h2>

        <Notes key={Math.random()}></Notes>
        {/* })} */}
      </div>
    </>
  );
};

export default AddNotes;
