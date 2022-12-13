import React from "react";
import { Routes, Route } from "react-router-dom";
import CardFile from "./pages/root/card/CardFile";
import MainRoot from "./pages/MainRoot";
import RootPage from "./pages/root";
import CardAround from "./pages/root/card/CardAround";
import Mussen from "./pages/root/mussen/Mussen";
import Zoom from "./components/function/mussen/zoom";
import ColorPicker from "./components/function/mussen/pickcolor";

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
        <Route path="/Mussen/pickcolor" element={<ColorPicker />} />
      </Routes>
    </div>
  );
}

export default App;
