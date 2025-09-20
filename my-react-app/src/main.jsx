import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Marquee from "./components/Navigations/Marquee";
import Navbar from "./components/Navigations/Navbar";
import NavbarTwo from "./components/Navigations/NavbarTwo";

import Home from "./components/Home";
import Faq from "./components/Faq";

import Footer from "./components/Footer";

createRoot(document.getElementById("root")).render(
  <Router>
    <Marquee></Marquee>
    <Navbar></Navbar>
    {/* <NavbarTwo></NavbarTwo> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<Faq />} />
    </Routes>
    <Footer></Footer>
  </Router>
);
