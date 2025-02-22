import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PasswordGenerator from "./projects/PasswordGenerator/PasswordGenerator";
import About from "./pages/About";
import Allprojects from "./pages/Allprojects";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path= "/Allprojects" element={<Allprojects />} />
            <Route path="/password-generator" element={<PasswordGenerator />} />
            
            {/* Add more project routes here */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;