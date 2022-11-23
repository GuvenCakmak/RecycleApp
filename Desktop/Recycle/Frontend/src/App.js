import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Store from "./pages/Store";
import Recycle from "./pages/Recycle";
import Cart from "./pages/Cart";
import CheckoutSucess from "./pages/CheckoutSuccess";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Recycle" element={<Recycle />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/FAQ" element={<Faq />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/checkout-success" element={<CheckoutSucess />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
