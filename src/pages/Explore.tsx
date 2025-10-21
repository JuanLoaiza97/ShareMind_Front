// pages/Explore.tsx
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/RightSidebar";
import Post from "../components/Post";

interface PostType {
  _id: string;
  title: string;
  shortDescription: string;
  content: string;
  image?: string;
  multimedia?: string;
  file?: string;
  author?: {
    name?: string;
    email?: string;
    avatar?: string;
  };
  createdAt?: string;
}

export default function Explore() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [loading, setLoading] = useState(true);

  // 🔹 Cargar posts reales desde el backend
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("http://localhost:4000/posts");
        if (!res.ok) throw new Error("Error al obtener publicaciones");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("❌ Error al cargar posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // 🔹 Filtrar por búsqueda y categoría
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
      post.content.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "Todos" ||
      post.shortDescription.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      post.content.toLowerCase().includes(selectedCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex bg-gray-900 min-h-screen text-white">
      {/* Sidebar izquierdo */}
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
          {["Todos", "Tecnología", "Educación", "Ciencia", "Arte"].map((category) => (
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
        {loading ? (
          <p className="text-gray-400 text-lg">Cargando publicaciones...</p>
        ) : filteredPosts.length > 0 ? (
          <div className="flex flex-col gap-6">
            {filteredPosts.map((post) => (
              <Post key={post._id} post={post} />

            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-lg">No se encontraron publicaciones.</p>
        )}
      </div>

      {/* Sidebar derecho */}
      <div className="sticky top-0 h-screen overflow-y-auto">
        <RightSidebar />
      </div>
    </div>
  );
}
