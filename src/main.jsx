import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./components/Home";
import "./index.css";
import { Testlabs } from "./testlabs/Testlabs";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/testlabs" element={<Testlabs />} />
    </Routes>
  </BrowserRouter>
);
