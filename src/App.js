import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import NoteState from "./context/Notes/NoteStates";
import Home from "./components/Home";

function App() {
  return (
    <>
    <NoteState>
      <BrowserRouter>
      <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
