import React from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BellIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const Sidebar: React.FC = () => {
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
          to="/profile"
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
          to="/search"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#0F172A] transition-colors"
        >
          <MagnifyingGlassIcon className="h-6 w-6 text-[#22D3EE]" />
          Buscar
        </Link>

        <Link
          to="/messages"
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
          to="/my-profile"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#0F172A] transition-colors"
        >
          <UserCircleIcon className="h-6 w-6 text-[#22D3EE]" />
          Mi Perfil
        </Link>

        <Link
          to="/settings"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#0F172A] transition-colors"
        >
          <Cog6ToothIcon className="h-6 w-6 text-[#22D3EE]" />
          Configuración
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
