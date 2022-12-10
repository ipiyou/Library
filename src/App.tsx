import React from "react";
import { Routes, Route } from "react-router-dom";
import CardFile from "./pages/root/card/CardFile";
import MainRoot from "./pages/MainRoot";
import RootPage from "./pages/root";
import CardAround from "./pages/root/card/CardAround";

function App() {
  return (
    <div>
      <MainRoot />
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="/card" element={<CardFile />} />
        <Route path="/card/cardAround" element={<CardAround />} />
      </Routes>
    </div>
  );
}

export default App;
