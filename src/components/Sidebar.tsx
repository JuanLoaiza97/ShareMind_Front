import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  HomeIcon,
  GlobeAltIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BellIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Eliminar token y cualquier dato de sesión
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    // Redirigir al login
    navigate("/login");
  };

  return (
    <aside className="h-screen w-64 bg-[#1E293B] text-[#F8FAFC] flex flex-col shadow-lg">
      {/* Logo */}
      <div className="flex items-center justify-center h-20 border-b border-gray-700">
        <h1 className="text-2xl font-bold">
          <span className="text-white">Share</span>
          <span className="text-[#34D399]">Mind</span>
        </h1>
      </div>

      {/* Menú principal */}
      <nav className="flex-1 px-4 py-6 space-y-3">
        <Link
          to="/profilehome"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#0F172A] transition-colors"
        >
          <HomeIcon className="h-6 w-6 text-[#22D3EE]" />
          Inicio
        </Link>

        <Link
          to="/explore"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#0F172A] transition-colors"
        >
          <GlobeAltIcon className="h-6 w-6 text-[#22D3EE]" />
          Explorar
        </Link>

        <Link
          to="/mensajes"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#0F172A] transition-colors"
        >
          <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 text-[#22D3EE]" />
          Mensajes
        </Link>

        <Link
          to="/notifications"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#0F172A] transition-colors"
        >
          <BellIcon className="h-6 w-6 text-[#22D3EE]" />
          Notificaciones
        </Link>
      </nav>

      {/* Menú inferior */}
      <div className="px-4 py-6 space-y-3 border-t border-gray-700">
        <Link
          to="/myprofile"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#0F172A] transition-colors"
        >
          <UserCircleIcon className="h-6 w-6 text-[#22D3EE]" />
          Mi Perfil
        </Link>

        {/* 🔴 Cerrar sesión */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-[#0F172A] transition-colors text-left"
        >
          <ArrowRightOnRectangleIcon className="h-6 w-6 text-[#22D3EE]" />
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
