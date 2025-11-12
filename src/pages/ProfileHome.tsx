// pages/ProfileHome.tsx
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";
import RightSidebar from "../components/RightSidebar";
import { Link } from "react-router-dom";

export default function ProfileHome() {
  const { user } = useAuth();
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("http://localhost:4000/posts");
        if (!res.ok) throw new Error("Error al obtener los posts");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("❌ Error cargando posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex bg-gray-900 min-h-screen text-white">
      {/* Sidebar izquierdo */}
      <div className="sticky top-0 h-screen overflow-y-auto">
        <Sidebar />
      </div>

      {/* Contenido principal */}
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-6">
          Bienvenido,{" "}
          {user ? `${user.firstName} ${user.lastName}` : "Usuario"}
        </h2>

        {/* Botón crear post */}
        <Link
          to="/newpost"
          className="block w-full text-center py-3 mb-6 rounded-lg bg-[#34D399] text-[#1E293B] font-semibold hover:bg-[#22D3EE] transition-colors text-lg shadow-md"
        >
          ✍️ Realizar Post
        </Link>

        {/* Encabezado de publicaciones */}
        <h3 className="text-xl text-gray-200 mb-4">
          Últimas publicaciones
        </h3>

        {/* Estado de carga */}
        {loading ? (
          <p className="text-gray-400">Cargando publicaciones...</p>
        ) : posts.length === 0 ? (
          <p className="text-gray-500">Aún no hay publicaciones disponibles.</p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Post key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>

      {/* Sidebar derecho */}
      <div className="sticky top-0 h-screen overflow-y-auto">
        <RightSidebar />
      </div>
    </div>
  );
}