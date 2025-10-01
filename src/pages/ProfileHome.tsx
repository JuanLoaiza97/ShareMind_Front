// pages/ProfileHome.tsx
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";
import RightSidebar from "../components/RightSidebar";

export default function ProfileHome() {
  return (
    <div className="flex bg-gray-900 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Muro */}
    <div className="flex-1 max-w-[962px] p-8">
        {/* Botón Realizar Post */}
        <Link
          to="/newpost"
          className="block w-full text-center py-3 mb-6 rounded-lg bg-[#34D399] text-[#1E293B] font-semibold hover:bg-[#22D3EE] transition-colors text-lg shadow-md"
        >
          Realizar Post
        </Link>

        <h2 className="text-2xl font-bold text-white mb-6">Muro</h2>

        {/* Publicaciones */}
        <Post
          user="Juan Esteban"
          userImg="https://i.pravatar.cc/150?img=3"
          articleImg="https://source.unsplash.com/random/800x400?tech"
          description="¡Bienvenido a ShareMind 🚀! Este es mi primer post con imagen."
          time="Hace 2h"
        />

        <Post
          user="María Gómez"
          userImg="https://i.pravatar.cc/150?img=5"
          articleImg="https://source.unsplash.com/random/800x400?code"
          description="Hoy aprendí algo nuevo sobre NestJS y MongoDB 😍."
          time="Hace 5h"
        />
      </div>

      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
}
