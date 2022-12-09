import React from "react";
import { Routes, Route } from "react-router-dom";
import CardFile from "./pages/root/card/CardFile";
import MainRoot from "./pages/MainRoot";

function App() {
  return (
    <div>
      <MainRoot />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/card" element={<CardFile />} />
      </Routes>
    </div>
  );
}

export default App;
