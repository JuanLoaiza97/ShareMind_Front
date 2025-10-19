  // import { StrictMode } from 'react'
  // import { createRoot } from 'react-dom/client'
  // import App from './App.tsx'


  // createRoot(document.getElementById('root')!).render(
  //   <StrictMode>
  //     <App />
  //   </StrictMode>,
  // )

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import Login from "./pages/Login";
import Register from "./pages/Register"; 
import Nosotros from "./pages/Nosotros"; 
import ProfileHome from "./pages/ProfileHome"; 
import Profile from "./pages/Profile"; 
import PostPage from "./pages/PostPage";
import NewPost from "./pages/NewPost"; 
import Explore from "./pages/Explore"; 
import Community from "./pages/Community";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} /> 
        <Route path="/nosotros" element={<Nosotros />} /> 
        <Route path="/profilehome" element={<ProfileHome />} />
        <Route path="/my-profile" element={<Profile />} />
        <Route path="/postpage" element={<PostPage />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);