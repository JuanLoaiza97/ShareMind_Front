// pages/MyProfile.tsx
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";
import RightSidebar from "../components/RightSidebar";

export default function MyProfile() {
  const { user } = useAuth();
  const [myPosts, setMyPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyPosts = async () => {
      if (!user?._id) return; // esperar a que haya usuario autenticado

      try {
        const res = await fetch("http://localhost:4000/posts");
        if (!res.ok) throw new Error("Error al obtener publicaciones");
        const data = await res.json();

        // Filtramos solo los posts del usuario autenticado
        const userPosts = data.filter(
          (post: any) => post.author?._id === user._id
        );
        setMyPosts(userPosts);
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
          <img
            src="https://i.pravatar.cc/150?img=10"
            alt="Foto de perfil"
            className="w-28 h-28 rounded-full border-4 border-[#34D399] shadow-lg"
          />
          <div className="ml-6">
            <h2 className="text-3xl font-bold">
              {user ? `${user.firstName} ${user.lastName}` : "Cargando..."}
            </h2>
            <p className="text-gray-400 text-lg">
              {user?.username || "Sin nombre de usuario"}
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
