import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainMenu from './pages/mainMenu'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LocalPage from './pages/localPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainMenu />} />
      <Route path="/local" element={<LocalPage />} />      
    </Routes>
  </BrowserRouter>
)
