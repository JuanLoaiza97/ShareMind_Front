import React, { useState } from "react";
import {
  UserGroupIcon,
  StarIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
  ChatBubbleLeftIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";

const Community= () => {
  const [joined, setJoined] = useState(false);
  const [likes, setLikes] = useState<Record<number, boolean>>({});

  const toggleLike = (postId: number): void => {
    setLikes((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const community = {
    name: "Arte Digital",
    description: "Comunidad de ilustración, diseño y arte conceptual",
    members: "9.1k",
    posts: "2.3k",
    founded: "Hace 1 año",
    banner: "https://source.unsplash.com/1200x300/?digital,art,design",
    icon: "🎨",
    moderators: [
      { name: "Sofia Martínez", role: "Fundadora", avatar: "https://i.pravatar.cc/150?img=1" },
      { name: "Carlos López", role: "Moderador", avatar: "https://i.pravatar.cc/150?img=2" },
    ],
  };

  const posts = [
    {
      id: 1,
      author: "Ana García",
      avatar: "https://i.pravatar.cc/150?img=10",
      title: "Ilustración digital paso a paso 🎨",
      description: "Te muestro mi proceso completo para crear este personaje. Desde sketch hasta coloreado final.",
      image: "https://source.unsplash.com/500x300/?illustration,character",
      timestamp: "Hace 2h",
      likes: 342,
      comments: 45,
    },
    {
      id: 2,
      author: "Marco Díaz",
      avatar: "https://i.pravatar.cc/150?img=11",
      title: "Paletas de color para digital art",
      description: "Las mejores combinaciones de colores que funcionan para cualquier ilustración digital.",
      image: "https://source.unsplash.com/500x300/?colors,palette",
      timestamp: "Hace 4h",
      likes: 289,
      comments: 67,
    },
    {
      id: 3,
      author: "Luna Rodríguez",
      avatar: "https://i.pravatar.cc/150?img=12",
      title: "Mi primer proyecto de concept art",
      description: "Después de 3 meses de práctica, finalmente completé mi primer proyecto profesional 💪",
      image: "https://source.unsplash.com/500x300/?concept,art",
      timestamp: "Hace 6h",
      likes: 512,
      comments: 89,
    },
  ];

  return (
    <div className="min-h-screen bg-[#1E293B] text-white">
      {/* Banner */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={community.banner}
          alt="Community banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1E293B]/40 to-[#1E293B]"></div>
      </div>

      {/* Contenedor principal */}
      <div className="max-w-6xl mx-auto px-6">
        {/* Header de comunidad */}
        <div className="flex flex-col md:flex-row gap-8 items-start -mt-16 mb-10 relative z-10">
          {/* Avatar */}
          <div className="text-7xl bg-[#0F172A] rounded-2xl p-4 border-4 border-[#1E293B] shadow-2xl">
            {community.icon}
          </div>

          {/* Info */}
          <div className="flex-1 pt-4">
            <h1 className="text-4xl font-bold text-[#34D399] mb-2">{community.name}</h1>
            <p className="text-[#94A3B8] text-lg mb-4">{community.description}</p>

            <div className="flex flex-wrap gap-6 mb-6 text-[#CBD5E1]">
              <div className="flex items-center gap-2">
                <UserGroupIcon className="h-5 w-5 text-[#34D399]" />
                <span>{community.members} miembros</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">📝</span>
                <span>{community.posts} posts</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">📅</span>
                <span>Fundada {community.founded}</span>
              </div>
            </div>

            {/* Botones */}
            <div className="flex gap-3">
              <button
                onClick={() => setJoined(!joined)}
                className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                  joined
                    ? "bg-[#334155] text-white hover:bg-[#475569]"
                    : "bg-[#34D399] text-[#0F172A] hover:bg-[#2ec589]"
                }`}
              >
                {joined ? "Miembro ✓" : "Unirse"}
              </button>
              <button className="px-6 py-3 rounded-lg bg-[#0F172A] border border-[#334155] text-white hover:border-[#34D399]/50 transition-all duration-300">
                Compartir
              </button>
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Posts */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold mb-6">Posts Recientes</h2>

            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-[#0F172A] rounded-2xl border border-[#334155] overflow-hidden hover:border-[#34D399]/50 transition-all duration-300"
              >
                {/* Header del post */}
                <div className="p-5 flex items-center justify-between border-b border-[#334155]">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.avatar}
                      alt={post.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-white">{post.author}</h3>
                      <p className="text-sm text-[#64748B]">{post.timestamp}</p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-[#1E293B] rounded-lg transition">
                    <EllipsisHorizontalIcon className="h-5 w-5 text-[#94A3B8]" />
                  </button>
                </div>

                {/* Contenido del post */}
                <div className="p-5">
                  <h4 className="font-bold text-lg mb-2 text-white hover:text-[#34D399] transition cursor-pointer">
                    {post.title}
                  </h4>
                  <p className="text-[#CBD5E1] mb-4">{post.description}</p>

                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                  )}

                  {/* Acciones */}
                  <div className="flex items-center justify-between text-[#94A3B8] pt-4 border-t border-[#334155]">
                    <div className="flex gap-6">
                      <button
                        onClick={() => toggleLike(post.id)}
                        className="flex items-center gap-2 hover:text-[#34D399] transition group"
                      >
                        {likes[post.id] ? (
                          <HeartSolidIcon className="h-5 w-5 text-[#F87171]" />
                        ) : (
                          <HeartIcon className="h-5 w-5 group-hover:text-[#F87171]" />
                        )}
                        <span className="text-sm">
                          {post.likes + (likes[post.id] ? 1 : 0)}
                        </span>
                      </button>

                      <button className="flex items-center gap-2 hover:text-[#34D399] transition">
                        <ChatBubbleLeftIcon className="h-5 w-5" />
                        <span className="text-sm">{post.comments}</span>
                      </button>

                      <button className="flex items-center gap-2 hover:text-[#34D399] transition">
                        <ShareIcon className="h-5 w-5" />
                        <span className="text-sm">Compartir</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Sobre la comunidad */}
            <div className="bg-[#0F172A] rounded-2xl p-6 border border-[#334155]">
              <h3 className="text-lg font-bold mb-4">Sobre la comunidad</h3>
              <p className="text-sm text-[#CBD5E1] mb-4">
                Un espacio para que artistas digitales compartan su trabajo, consejos y técnicas. Desde ilustración hasta concept art.
              </p>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-[#94A3B8]">Fundada</span>
                  <p className="text-white font-medium">{community.founded}</p>
                </div>
                <div>
                  <span className="text-[#94A3B8]">Miembros</span>
                  <p className="text-white font-medium">{community.members}</p>
                </div>
              </div>
            </div>

            {/* Moderadores */}
            <div className="bg-[#0F172A] rounded-2xl p-6 border border-[#334155]">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <StarIcon className="h-5 w-5 text-[#34D399]" />
                Moderadores
              </h3>
              <div className="space-y-3">
                {community.moderators.map((mod, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <img
                      src={mod.avatar}
                      alt={mod.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-white truncate">
                        {mod.name}
                      </p>
                      <p className="text-xs text-[#64748B]">{mod.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reglas */}
            <div className="bg-[#0F172A] rounded-2xl p-6 border border-[#334155]">
              <h3 className="text-lg font-bold mb-4">Reglas</h3>
              <ul className="space-y-2 text-sm text-[#CBD5E1]">
                <li className="flex gap-2">
                  <span className="text-[#34D399]">•</span>
                  <span>Respeto entre miembros</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#34D399]">•</span>
                  <span>Contenido original</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#34D399]">•</span>
                  <span>Sin spam ni autopromoción</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#34D399]">•</span>
                  <span>Feedback constructivo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;