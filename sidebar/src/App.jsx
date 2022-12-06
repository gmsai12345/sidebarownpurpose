import React from "react";
import Sidebar from "./Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
import Dashboard from "./Dashboard";
import Commentpage from "./Commentpage";
import Analytics from "./Analytics";
import Product from "./Product";
import Productlist from "./Productlist";
import About from "./About";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/About" element={<About />} />
            <Route path="/Commentpage" element={<Commentpage />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Productlist" element={<Productlist />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}
