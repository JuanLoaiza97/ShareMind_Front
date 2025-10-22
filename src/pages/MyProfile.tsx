// pages/MyProfile.tsx
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";
import RightSidebar from "../components/RightSidebar";

// 🔹 Definimos el tipo del Post, igual que en Explore/ProfileHome
interface PostType {
  _id: string;
  title: string;
  shortDescription: string;
  content: string;
  image?: string;
  multimedia?: string;
  file?: string;
  author?: {
    _id?: string;
    name?: string;
    email?: string;
    avatar?: string;
  };
  createdAt?: string;
}

export default function MyProfile() {
  const { user } = useAuth();
  const [myPosts, setMyPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyPosts = async () => {
      if (!user?._id) return; // esperar a que haya usuario autenticado

      try {
        // ✅ Usamos el endpoint específico del backend para el perfil
        const res = await fetch(`http://localhost:4000/posts/user/${user._id}`);
        if (!res.ok) throw new Error("Error al obtener tus publicaciones");

        const data: PostType[] = await res.json();
        setMyPosts(data);
      } catch (error) {
        console.error("❌ Error cargando publicaciones del usuario:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyPosts();
  }, [user]);

  return (
    <div className="flex bg-gray-900 min-h-screen text-white">
      {/* Sidebar izquierdo */}
      <div className="sticky top-0 h-screen overflow-y-auto">
        <Sidebar />
      </div>

      {/* Contenido principal */}
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Información del perfil */}
        <div className="flex items-center mb-8">

          <div className="ml-6">
            <h2 className="text-3xl font-bold">
              {user ? `${user.firstName} ${user.lastName}` : "Cargando..."}
            </h2>
            <p className="text-gray-400 text-lg">
              {user?.username || user?.email || "Sin nombre de usuario"}
            </p>
          </div>
        </div>

        {/* Sección de publicaciones */}
        <h3 className="text-2xl text-white mb-4">Mis publicaciones</h3>

        {loading ? (
          <p className="text-gray-400">Cargando tus publicaciones...</p>
        ) : myPosts.length === 0 ? (
          <p className="text-gray-500">
            Aún no has realizado publicaciones. ¡Crea tu primer post! 🚀
          </p>
        ) : (
          <div className="space-y-6">
            {myPosts.map((post) => (
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
