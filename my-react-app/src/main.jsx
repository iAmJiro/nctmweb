import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")).render(
  <Router>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer></Footer>
  </Router>
);
