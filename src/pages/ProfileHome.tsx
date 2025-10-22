import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";
import RightSidebar from "../components/RightSidebar";

// Definición de la interfaz para el post que se espera del backend
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

export default function ProfileHome() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:4000/posts");
      if (!response.ok) throw new Error("Fallo al cargar los posts.");
      
      const data: PostType[] = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error cargando posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      fetchPosts();
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="flex bg-gray-900 min-h-screen">
      <Sidebar />

      <div className="ml-63 flex-1 flex">
        {/* Muro */}
        <div className="flex-1 max-w-[962px] p-10">
          <h2 className="text-2xl font-bold text-white mb-6">Muro</h2>

          {/* Botón Realizar Post */}
          <Link
            to="/newpost"
            className="block w-full text-center py-3 mb-6 rounded-lg bg-[#34D399] text-[#1E293B] font-semibold hover:bg-[#22D3EE] transition-colors text-lg shadow-md"
          >
            Realizar Post
          </Link>

          {/* Publicaciones Dinámicas */}
          {loading ? (
            <p className="text-gray-400">Cargando publicaciones...</p>
          ) : posts.length === 0 ? (
            <p className="text-gray-400">No hay publicaciones disponibles en el muro.</p>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <Post 
                  key={post._id} 
                  post={post}
                />
              ))}
            </div>
          )}

        </div>

        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </div>
  );
}
