import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainMenu from "./pages/mainMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/productsPage";
import ContactUs from "./pages/contactUs";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainMenu />} />
      <Route path="/produtos" element={<ProductsPage />} />
      <Route path="/fale-conosco" element={<ContactUs />} />
    </Routes>
  </BrowserRouter>
);
