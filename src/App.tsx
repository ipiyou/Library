import React from "react";
import { Routes, Route } from "react-router-dom";
import CardFile from "./pages/root/card/CardFile";
import MainRoot from "./pages/MainRoot";
import RootPage from "./pages/root";
import CardAround from "./pages/root/card/CardAround";
import Mussen from "./pages/root/mussen/Mussen";
import Zoom from "./components/function/mussen/zoom";

function App() {
  return (
    <div>
      <MainRoot />
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="/card" element={<CardFile />} />
        <Route path="/card/cardAround" element={<CardAround />} />
        <Route path="/Mussen" element={<Mussen />} />
        <Route path="/Mussen/zoom" element={<Zoom />} />
      </Routes>
    </div>
  );
}

export default App;
