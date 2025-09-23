// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.tsx'


// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import Login from "./pages/Login";
import Register from "./pages/Register"; 
import Nosotros from "./pages/Nosotros"; // 
import ProfileHome from "./pages/ProfileHome"; 
import PostPage from "./pages/PostPage";
import NewPost from "./pages/NewPost"; 

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<App />} />

        {/* Ruta de Login */}
        <Route path="/login" element={<Login />} />

        {/* Ruta de Registro */}
        <Route path="/registro" element={<Register />} /> 

        {/* Ruta de Nosotros */}
        <Route path="/nosotros" element={<Nosotros />} /> 

        {/* Ruta de Perfil */}
        <Route path="/profilehome" element={<ProfileHome />} />

        {/* Ruta de detalle del post */}
        <Route path="/postpage" element={<PostPage />} />

        {/* Ruta para crear un nuevo post */}
        <Route path="/newpost" element={<NewPost />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
