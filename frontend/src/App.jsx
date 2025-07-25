import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
