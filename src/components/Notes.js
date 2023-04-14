import { useContext } from "react";
import noteContext from "../context/Notes/NotesContext";
import NotesItems from "./NotesItems";
const Notes = () => {
  const notes = useContext(noteContext);
  return (
    <>
    
      <div className="row my-3">
        {notes.notes.map((i, idx) => {
          return <NotesItems key={`${i}_${idx}`} id={i._id} notes={i}></NotesItems>;
        })}
      </div>
    </>
  );
};

export default Notes;
