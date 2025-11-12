import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";


const boards = [
  {
    id: 1,
    title: "Apuntes de React",
    img: "https://source.unsplash.com/400x300/?code,react",
  },
  {
    id: 2,
    title: "Plantillas de organización",
    img: "https://source.unsplash.com/400x300/?planner,notes",
  },
  {
    id: 3,
    title: "Psicología educativa",
    img: "https://source.unsplash.com/400x300/?psychology,brain",
  },
  {
    id: 4,
    title: "Arte digital",
    img: "https://source.unsplash.com/400x300/?art,digital",
  },
  {
    id: 5,
    title: "UX/UI Design",
    img: "https://source.unsplash.com/400x300/?design,ui",
  },
  {
    id: 6,
    title: "Ilustraciones",
    img: "https://source.unsplash.com/400x300/?illustration,art",
  },
];

const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login"); // Redirige al login si no hay usuario logueado
    }
  }, [navigate]);

  if (!user) return <p className="text-white p-6">Cargando usuario...</p>;
  const firstName = user.firstName || user.username;




  return (
    <div className="flex min-h-screen bg-gray-900">
    {/* Sidebar */}
    <div className="sticky top-0 h-screen overflow-y-auto">
      <Sidebar />
    </div>

<div className="flex-1 bg-gray-900 min-h-screen">
        {/* Banner con overlay */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={user.banner || "/img/banner.jfif"} 
          alt="Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1E293B]/40 to-[#1E293B]"></div>
      </div>

      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto px-12 -mt-20 relative z-10">
        {/* Header del perfil */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
          {/* Avatar */}
          <div className="relative group">
            <img
              src={user.avatar || "/img/avatar_us.png"}
              alt={firstName}
              className="relative w-40 h-40 rounded-2xl border-4 border-[#1E293B] shadow-2xl object-cover"
            />
          </div>

          {/* Info del usuario */}
          <div className="flex-1 text-white pt-4">
            <div className="flex items-center gap-4 mb-2">
              <h1 className="text-4xl font-bold text-[#34D399]">
                {firstName}
              </h1>
              <span className="px-3 py-1 bg-[#34D399]/20 text-[#34D399] rounded-full text-sm font-medium">
                Pro
              </span>
            </div>
            <p className="text-[#94A3B8] text-lg mb-4">{user.username}</p>
            <p className="text-[#CBD5E1] text-lg max-w-2xl leading-relaxed mb-6">{user.bio}</p>

            {/* Stats inline */}
            <div className="flex gap-8 mb-6">
              <div>
                <span className="text-2xl font-bold text-white">{user.stats?.posts || 0}</span>
                <span className="text-[#94A3B8] ml-2">Publicaciones</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-white">{user.stats?.followers || 0 }</span>
                <span className="text-[#94A3B8] ml-2">Seguidores</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-white">{user.stats?.following || 0}</span>
                <span className="text-[#94A3B8] ml-2">Siguiendo</span>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex gap-3">
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#34D399] to-[#22D3EE] text-[#0F172A] font-bold hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300">
                Editar perfil
              </button>
              <button className="px-6 py-3 rounded-xl bg-[#334155] text-white font-semibold hover:bg-[#475569] transition-all duration-300">
                Compartir
              </button>
            </div>
          </div>
        </div>

        {/* Insignias */}
        <div className="bg-[#1E293B]/80 rounded-2xl p-6 mb-8 border border-[#334155]">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-2xl">🏆</span> Insignias
          </h2>
          <div className="flex gap-3 flex-wrap">
            {user.badges?.map((badge: string, idx: number) => (
              <span
                key={idx}
                className="px-5 py-3 bg-gradient-to-r from-[#34D399]/20 to-[#22D3EE]/20 border border-[#34D399]/30 text-[#34D399] rounded-xl font-semibold hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Intereses */}
        <div className="bg-[#1E293B]/80 rounded-2xl p-6 mb-8 border border-[#334155]">
          <h2 className="text-xl font-bold text-white mb-4">Intereses</h2>
          <div className="flex gap-3 flex-wrap">

            {user.interests?.map((interest: string, idx: number) => (
              <span
                key={idx}
                className="px-5 py-2.5 bg-[#334155] rounded-full text-[#CBD5E1] flex items-center gap-2 hover:bg-[#34D399] hover:text-[#0F172A] transition-all duration-300 cursor-pointer font-medium"
              >
                 {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Galería / Tableros */}
        <div className="pb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-3xl">📌</span> Mis Tableros
            </h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-lg bg-[#334155] text-white text-sm font-medium hover:bg-[#475569] transition">
                Todo
              </button>
              <button className="px-4 py-2 rounded-lg bg-[#334155]/50 text-[#94A3B8] text-sm font-medium hover:bg-[#334155] hover:text-white transition">
                Reciente
              </button>
              <button className="px-4 py-2 rounded-lg bg-[#334155]/50 text-[#94A3B8] text-sm font-medium hover:bg-[#334155] hover:text-white transition">
                Popular
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boards.map((board) => (
              <div
                key={board.id}
                className="group relative bg-[#1E293B] rounded-2xl overflow-hidden border border-[#334155] hover:border-[#34D399]/50 transition-all duration-300 cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={board.img}
                    alt={board.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-bold text-white text-lg drop-shadow-lg">
                    {board.title}
                  </h3>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 rounded-lg bg-[#1E293B]/90 text-white hover:bg-[#34D399] transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>

    
  );
};

export default Profile;
