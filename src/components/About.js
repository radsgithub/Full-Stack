import { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import noteContext from "../context/Notes/NotesContext";
const About = () => {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
  }, []);

  return (
    <>    
    <div className="container">
      <h1> This is About page {a.state.name}</h1>
    </div>
     
    </>
  );
};

export default About;
