import React from "react";
import { MagnifyingGlassIcon, FireIcon, UserGroupIcon, SparklesIcon, UsersIcon } from "@heroicons/react/24/outline";

const Explore = () => {
  const communities = [
    {
      id: 1,
      name: "Programadores",
      members: "10.5k",
      description: "Comunidad de desarrollo y código",
      image: "https://source.unsplash.com/200x200/?programming,code",
      category: "Tecnología"
    },
    {
      id: 2,
      name: "Diseño UX/UI",
      members: "7.2k",
      description: "Diseñadores y creativos visuales",
      image: "https://source.unsplash.com/200x200/?design,ui",
      category: "Diseño"
    },
    {
      id: 3,
      name: "Psicología",
      members: "5.8k",
      description: "Aprendizaje y salud mental",
      image: "https://source.unsplash.com/200x200/?psychology,brain",
      category: "Educación"
    },
    {
      id: 4,
      name: "Arte Digital",
      members: "9.1k",
      description: "Ilustración y arte conceptual",
      image: "https://source.unsplash.com/200x200/?digital,art",
      category: "Arte"
    },
    {
      id: 5,
      name: "Emprendedores",
      members: "12.3k",
      description: "Startups y negocios digitales",
      image: "https://source.unsplash.com/200x200/?startup,business",
      category: "Negocios"
    },
    {
      id: 6,
      name: "Data Science",
      members: "8.7k",
      description: "IA, ML y análisis de datos",
      image: "https://source.unsplash.com/200x200/?data,analytics",
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
    <div className="min-h-screen bg-[#1E293B] text-white">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#34D399] mb-2">Explorar</h1>
          <p className="text-[#94A3B8]">Descubre comunidades y contenido que te inspire</p>
        </div>

        {/* Barra de búsqueda */}
        <div className="flex items-center bg-[#1E293B] border border-[#334155] rounded-xl p-4 mb-8 shadow-lg hover:border-[#34D399]/50 transition">
          <MagnifyingGlassIcon className="h-6 w-6 text-[#34D399]" />
          <input
            type="text"
            placeholder="Buscar comunidades, personas o temas..."
            className="bg-transparent outline-none flex-1 px-3 text-sm placeholder:text-[#64748B]"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna principal - Comunidades */}
          <div className="lg:col-span-2">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <UserGroupIcon className="h-7 w-7 text-[#34D399]" />
                Comunidades Destacadas
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {communities.map((community) => (
                  <div
                    key={community.id}
                    className="bg-[#1E293B]/80 rounded-xl overflow-hidden border border-[#334155] hover:border-[#34D399]/50 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={community.image}
                        alt={community.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] to-transparent"></div>
                      <span className="absolute top-3 right-3 px-3 py-1 bg-[#334155]/90 rounded-full text-xs font-medium">
                        {community.category}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-1 text-white group-hover:text-[#34D399] transition">
                        {community.name}
                      </h3>
                      <p className="text-sm text-[#94A3B8] mb-3">{community.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-[#64748B]">
                          <UsersIcon className="h-4 w-4" />
                          <span className="text-sm">{community.members} miembros</span>
                        </div>
                        <button className="px-4 py-1.5 bg-[#34D399] text-[#0F172A] rounded-lg text-sm font-semibold hover:bg-[#2ec589] transition">
                          Unirse
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Posts recomendados */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <SparklesIcon className="h-7 w-7 text-[#34D399]" />
                Posts Recomendados
              </h2>
              <div className="space-y-4">
                {recommendedPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-[#1E293B]/80 p-5 rounded-xl border border-[#334155] hover:border-[#34D399]/50 transition-all duration-300 cursor-pointer"
                  >
                    <h3 className="font-semibold text-lg mb-2 hover:text-[#34D399] transition">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#94A3B8] mb-3">{post.description}</p>
                    <div className="flex items-center justify-between text-sm text-[#64748B]">
                      <span>Por {post.author}</span>
                      <span>❤️ {post.likes}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar derecho - Tendencias */}
          <div className="lg:col-span-1">
            <section className="bg-[#1E293B]/80 rounded-xl p-6 border border-[#334155] sticky top-6">
              <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
                <FireIcon className="h-6 w-6 text-[#F87171]" />
                Tendencias
              </h2>
              <ul className="space-y-4">
                {trending.map((item, idx) => (
                  <li
                    key={idx}
                    className="hover:text-[#34D399] cursor-pointer transition pb-3 border-b border-[#334155] last:border-0"
                  >
                    <div className="font-semibold">{item.tag}</div>
                    <div className="text-sm text-[#64748B] mt-1">{item.posts}</div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;