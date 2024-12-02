// import './App.css';
import React from "react";
import {Route,Routes} from 'react-router-dom'
import Home  from "./components/Home";
import About from "./components/About";
import Create from "./components/Create";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/create" element={<Create/>}/>
      </Routes>
    </div>
  );
}

export default App;
