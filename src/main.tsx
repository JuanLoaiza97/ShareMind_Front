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
import Communities from "./pages/Communities"; 
import Community from "./pages/Community"; 
import EnConstruccion from "./pages/construccion";
import Notifications from "./pages/Notifications";
import MessagesProfile from "./pages/MessagesProfile";
import Chat from "./pages/Chat";
import MyProfile from "./pages/MyProfile";
import { AuthProvider } from "./context/AuthContext"; 


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider> 
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} /> 
          <Route path="/nosotros" element={<Nosotros />} /> 
          <Route path="/profilehome" element={<ProfileHome />} />
          
          <Route path="/profile" element={<Profile />} /> 
           <Route path="/myprofile" element={<MyProfile />} />

          <Route path="/post/:id" element={<PostPage />} /> 
          <Route path="/newpost" element={<NewPost />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/communities" element={<Communities />} />



        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
