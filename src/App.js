import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import "./App.css";
import Login from "./Components/Login";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Members from "./Components/Members"
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/members" element={<Members />}></Route>
      </Routes>
    </div>
  );
}

export default App;
