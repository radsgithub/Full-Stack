import noteContext from "../context/Notes/NotesContext";
import { useContext } from "react";
const NotesItems = (props) => {
  const { notes } = props;
 const context = useContext(noteContext)
 const {deleteNote}=context
  return (
    <>
      <div className="col-md-3">
        <div className="card my-3">
          <div className="card-body">
            <div className="d-flex flex-row bd-highlight mb-3">
              <h5 className="card-title">{notes.title}</h5>{" "}
                <i className="fa-sharp fa-solid fa-trash mx-3 my-1 " onClick={()=>{deleteNote(props.notes._id)}}></i>
                <i className="fa-solid fa-pen-to-square my-1"></i>{" "}
              </div>{" "}
            <p className="card-text">{notes.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotesItems;
