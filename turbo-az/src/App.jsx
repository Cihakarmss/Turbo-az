import React from "react";

import "./App.css";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Carddetails from "./Pages/CardDetails";


function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/details/:id" element={<Carddetails />} />
    </Routes>
  );
}

export default App;
