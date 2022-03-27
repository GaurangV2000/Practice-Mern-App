import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./routes/Navbar";
import Register from "./routes/Register";
import StudentsInfo from "./routes/StudentsInfo";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/studentinfo" element={<StudentsInfo />} />
      </Routes>
    </>
  );
};

export default App;
