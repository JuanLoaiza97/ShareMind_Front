import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/RightSidebar";
import Post from "../components/Post";

export default function Explore() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔹 Función para obtener posts desde el backend
  const fetchPosts = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:4000/posts");

      if (!res.ok)
        throw new Error(
          `Error ${res.status}: No se pudieron obtener las publicaciones`
        );

      const data = await res.json();
      console.log("✅ Posts cargados:", data);

      setPosts(Array.isArray(data) ? data : []);
    } catch (err: any) {
      console.error("❌ Error cargando posts:", err);
      setError("No se pudieron cargar las publicaciones.");
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Cargar todos los posts al inicio
  useEffect(() => {
    fetchPosts();
  }, []);

  // 🔹 Filtro local por categoría
  const filteredPosts = posts.filter((post) => {
    if (selectedCategory === "Todos") return true;
    return post.category === selectedCategory;
  });

  // 🔹 Filtro de búsqueda (por título o descripción)
  const searchedPosts = filteredPosts.filter((post) => {
    const term = search.toLowerCase();
    return (
      post.title?.toLowerCase().includes(term) ||
      post.shortDescription?.toLowerCase().includes(term) ||
      post.content?.toLowerCase().includes(term)
    );
  });

  return (
    <div className="flex bg-gray-900 min-h-screen">
      {/* Sidebar izquierdo */}
      <div className="sticky top-0 h-screen overflow-y-auto">
        <Sidebar />
      </div>

      {/* Contenido principal */}
      <div className="flex-1 p-8 overflow-y-auto">
        <h2 className="text-3xl font-bold text-white mb-6">Explorar</h2>

        {/* Barra de búsqueda */}
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

        {/* Contenido */}
        {loading ? (
          <p className="text-gray-400 text-lg">Cargando publicaciones...</p>
        ) : error ? (
          <p className="text-red-400 text-lg">{error}</p>
        ) : Array.isArray(searchedPosts) && searchedPosts.length > 0 ? (
          <div className="flex flex-col gap-6">
            {searchedPosts.map((post) =>
              post ? <Post key={post._id} post={post} /> : null
            )}
          </div>
        ) : (
          <p className="text-gray-400 text-lg">No se encontraron resultados.</p>
        )}
      </div>

      {/* Sidebar derecho */}
      <div className="sticky top-0 h-screen overflow-y-auto">
        <RightSidebar />
      </div>
    </div>
  );
}
