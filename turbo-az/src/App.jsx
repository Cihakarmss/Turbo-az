import React from "react";

import "./App.css";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Carddetails from "./Pages/CardDetails";
import Layout from "./layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<Carddetails />} />
      </Route>
    </Routes>
  );
}

export default App;
