
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
import EnConstruccion from "./pages/construccion";
import MyProfile from "./pages/MyProfile";
import Notifications from "./pages/Notifications";
import MessagesProfile from "./pages/MessagesProfile";
import Chat from "./pages/Chat";
import Explore from "./pages/Explore";
import { AuthProvider } from "./context/AuthContext";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
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
          <Route path="/post/:id" element={<PostPage />} />

          {/* Ruta para crear un nuevo post */}
          <Route path="/newpost" element={<NewPost />} />

          {/* Ruta en construcción */}
          <Route path="/construccion" element={<EnConstruccion />} />
          
          {/* Ruta de Mi Perfil */}
          <Route path="/myprofile" element={<MyProfile />} />

          {/* Ruta de Notificaciones */}
          <Route path="/notifications" element={<Notifications />} />

          {/* Ruta de Mensajes */}
          <Route path="/mensajes" element={<MessagesProfile />} />

          {/* Ruta de Chat */}
          <Route path="/chat/:id" element={<Chat />} />

          {/* Ruta de Explorar */}
          <Route path="/explore" element={<Explore />} />
          



        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
