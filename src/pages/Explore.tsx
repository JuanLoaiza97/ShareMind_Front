// pages/Explore.tsx
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/RightSidebar";
import Post from "../components/Post";


export default function Explore() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // 🔹 Posts de ejemplo
  const posts = [
    {
      user: "Juan Esteban",
      userImg: "https://i.pravatar.cc/150?img=3",
      articleImg: "https://source.unsplash.com/random/800x400?technology",
      description: "Explorando el futuro de la Inteligencia Artificial 🤖",
      category: "Tecnología",
      time: "Hace 1h",
    },
    {
      user: "María Gómez",
      userImg: "https://i.pravatar.cc/150?img=5",
      articleImg: "https://source.unsplash.com/random/800x400?travel",
      description: "Un viaje inolvidable a la Patagonia 🌍",
      category: "Viajes",
      time: "Hace 2d",
    },
    {
      user: "Carlos López",
      userImg: "https://i.pravatar.cc/150?img=8",
      articleImg: "https://source.unsplash.com/random/800x400?food",
      description: "Nueva receta de pasta 🍝 ¡deliciosa!",
      category: "Gastronomía",
      time: "Hace 5h",
    },
  ];

  // 🔹 Filtro por búsqueda o categoría
  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.description
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "Todos" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex bg-gray-900 min-h-screen">
      {/* Sidebar fijo */}
      <div className="sticky top-0 h-screen overflow-y-auto">
        <Sidebar />
      </div>

      {/* Contenido principal */}
      <div className="flex-1 p-8 overflow-y-auto">
        <h2 className="text-3xl font-bold text-white mb-6">Explorar</h2>

        {/* Buscador */}
        <div className="mb-6 flex gap-4">
          <input
            type="text"
            placeholder="Buscar publicaciones..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg bg-[#1F2937] text-white outline-none"
          />
        </div>

        {/* Categorías */}
        <div className="mb-6 flex gap-3 flex-wrap">
          {["Todos", "Tecnología", "Viajes", "Gastronomía"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                selectedCategory === category
                  ? "bg-[#34D399] text-gray-900"
                  : "bg-[#1F2937] text-white hover:bg-[#374151]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Publicaciones */}
        <div className="flex flex-col gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <Post
                key={index}
                user={post.user}
                userImg={post.userImg}
                articleImg={post.articleImg}
                description={post.description}
                time={post.time}
              />
            ))
          ) : (
            <p className="text-gray-400 text-lg">No se encontraron resultados.</p>
          )}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="sticky top-0 h-screen overflow-y-auto">
        <RightSidebar />
      </div>
    </div>
  );
}

