import React from "react";
import { Routes, Route } from "react-router-dom";
import MainRoot from "./pages/MainRoot";

function App() {
  return (
    <div>
      <MainRoot />
      <Routes>
        <Route path="/" element={<></>} />
      </Routes>
    </div>
  );
}

export default App;
