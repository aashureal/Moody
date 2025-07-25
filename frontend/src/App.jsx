import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <main className="w-screen  min-h-screen bg-black text-white px-5 py-24">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
