import React from "react";
import { Routes, Route } from "react-router-dom";
import MainRoot from "./pages/MainRoot";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainRoot />} />
      </Routes>
    </div>
  );
}

export default App;
