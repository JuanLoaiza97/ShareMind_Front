
import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import {
  MagnifyingGlassIcon,
  FireIcon,
  UserGroupIcon,
  SparklesIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const Explore = () => {
  const communities = [
    {
      id: 1,
      name: "Programadores",
      members: "10.5k",
      description: "Comunidad de desarrollo y código",
      image: "img/coder.jfif",
      category: "Tecnología"
    },
    {
      id: 2,
      name: "Diseño UX/UI",
      members: "7.2k",
      description: "Diseñadores y creativos visuales",
      image: "img/UiDesign.jfif",
      category: "Diseño"
    },
    {
      id: 3,
      name: "Psicología para todos",
      members: "5.8k",
      description: "Aprendizaje y salud mental",
      image: "img/descarga (31).jfif",
      category: "Educación"
    },
    {
      id: 4,
      name: "Arte Digital",
      members: "9.1k",
      description: "Ilustración y arte conceptual",
      image: "img/descarga (32).jfif",
      category: "Arte"
    },
    {
      id: 5,
      name: "Emprendedores",
      members: "12.3k",
      description: "Startups y negocios digitales",
      image: "img/emprender.jfif",
      category: "Negocios"
    },
    {
      id: 6,
      name: "Data Science",
      members: "8.7k",
      description: "IA, ML y análisis de datos",
      image: "img/data_science.jfif",
      category: "Tecnología"
    }
  ];

  const trending = [
    { tag: "#React", posts: "2.3k posts" },
    { tag: "#TailwindCSS", posts: "1.8k posts" },
    { tag: "#IA", posts: "3.5k posts" },
    { tag: "#Startups", posts: "1.2k posts" },
    { tag: "#Python", posts: "2.9k posts" }
  ];

  const recommendedPosts = [
    {
      id: 1,
      title: "Nuevo update de React 19 🚀",
      description: "Se viene con mejoras en server components y suspense...",
      author: "María Dev",
      likes: 234
    },
  ];
return (
  <div className="flex min-h-screen">
    {/* Sidebar */}
    <Sidebar />
    
    <div className="ml-60 w-full bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A] min-h-screen">
      <div className="max-w-7xl mx-auto p-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#34D399] mb-2">Explorar</h1>
          <p className="text-[#94A3B8]">Descubre comunidades y contenido que te inspire</p>
        </div>

        {/* Barra de búsqueda */}
        <div className="flex items-center bg-[#090f1d] border border-[#334155] rounded-xl p-4 mb-10 hover:border-[#34D399]/50 transition-all duration-300">
          <MagnifyingGlassIcon className="h-6 w-6 text-[#34D399]" />
          <input
            type="text"
            placeholder="Buscar comunidades, personas o temas..."
            className="bg-transparent outline-none flex-1 px-3 text-sm placeholder:text-[#64748B]"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Columna principal - Comunidades y Posts */}
          <div className="lg:col-span-3 space-y-10">
            {/* Comunidades Destacadas */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <UserGroupIcon className="h-7 w-7 text-[#34D399]" />
                Comunidades Destacadas
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {communities.map((community) => (
                  <Link to="/community" key={community.id}>
                    <div className="bg-[#0F172A] rounded-2xl overflow-hidden border border-[#334155] hover:border-[#34D399]50 transition-all duration-300 cursor-pointer group">
                      <div className="relative h-38 overflow-hidden">
                        <img
                          src={community.image}
                          alt={community.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/5 to-transparent"></div>
                        <span className="absolute top-3 right-3 px-3 py-1 bg-[#334155]/90 rounded-full text-xs font-medium backdrop-blur-sm">
                          {community.category}
                        </span>
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-xl mb-2 text-white group-hover:text-[#34D399] transition">
                          {community.name}
                        </h3>
                        <p className="text-sm text-[#94A3B8] mb-4 leading-relaxed">
                          {community.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-[#64748B]">
                            <UsersIcon className="h-5 w-5" />
                            <span className="text-sm font-medium">
                              {community.members} miembros
                            </span>
                          </div>
                          <button className="px-5 py-2 bg-[#34D399] text-[#0F172A] rounded-lg text-sm font-bold hover:bg-[#2ec589] hover:scale-105 transition-all duration-300">
                            Unirse
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Posts Recomendados */}
            <section>
              <h2 className="text-2xl text-white font-bold mb-6 flex items-center gap-3">
                <SparklesIcon className="h-7 w-7 text-[#34D399]" />
                Posts Recomendados
              </h2>
              <div className="space-y-4">
                {recommendedPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-[#0F172A] p-6 rounded-2xl border border-[#334155] hover:border-[#34D399]/50 transition-all duration-300 cursor-pointer group"
                  >
                    <h3 className="font-bold text-xl text-white mb-3 group-hover:text-[#34D399] transition">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#94A3B8] mb-4 leading-relaxed">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#64748B]">Por <span className="text-[#94A3B8] font-medium">{post.author}</span></span>
                      <span className="text-[#64748B]">❤️ {post.likes}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar - Tendencias */}
          <div className="lg:col-span-1">
            <div className="bg-[#0F172A] rounded-2xl p-6 border border-[#334155] sticky top-6">
              <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                <FireIcon className="h-6 w-6 text-[#F87171]" />
                Tendencias
              </h2>
              <ul className="space-y-4">
                {trending.map((item, idx) => (
                  <li
                    key={idx}
                    className="cursor-pointer transition pb-4 border-b border-[#334155] last:border-0 hover:scale-105 duration-300"
                  >
                    <div className="font-bold text-white hover:text-[#34D399] transition">
                      {item.tag}
                    </div>
                    <div className="text-sm text-[#64748B] mt-1">{item.posts}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default Explore;