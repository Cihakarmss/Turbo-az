import React from "react";

import "./App.css";
import HomePage from "./Pages/HomePage";
import {BrowserRouter as Route, Routes } from "react-router-dom";
import Carddetails from "./Pages/CardDetails";
import Layout from "./layout/Layout";
import Favoritezone from "./Pages/Favoritezone";
import FormPAge from "./Pages/FormPage/index.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<Carddetails />} />
        <Route path="/formpage" element={<FormPAge />} />
        <Route path="/favorites" element={<Favoritezone />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Route>
    </Routes>
    
  );
}

export default App;
