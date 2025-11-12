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



const boards = [
 
  {
    id: 2,
    title: "Plantillas de organización",
    img: "https://source.unsplash.com/400x300/?planner,notes",
  },
  
];


export default function MyProfile() {
  const { user } = useAuth();
  const [myPosts, setMyPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"posts" | "boards">("posts");

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
      <div className="flex-1 overflow-y-auto">
        {/* Banner con imagen de usuario */}
        <div className="relative h-64 overflow-hidden rounded-3xl mx-6 mt-6">
  <img 
    src={"/img/banner.jfif"} 
    alt="Banner" 
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-gray-900"></div>
</div>

        <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
            <div className="relative group">
              <img
                src={"/img/avatar_us.png"}
                alt={user?.firstName || "Usuario"}
                className="relative w-40 h-40 rounded-2xl border-4 border-gray-800 shadow-2xl object-cover"
              />
            </div>

            <div className="flex-1 text-white pt-4">
              <h1 className="text-4xl font-bold text-[#34D399] mb-2">
                {user ? `${user.firstName} ${user.lastName}` : "Cargando..."}
              </h1>
              <p className="text-gray-400 text-lg mb-4">
                @{user?.username || user?.email || "usuario"}
              </p>
              {/* Bio del usuario */}
              <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-6">
                {user?.bio || "💻 Miembro de ShareMind "}
              </p>

              {/* publicaciones, seguidores, siguiendo */}
              <div className="flex gap-8 mb-6">
                <div>
                  <span className="text-2xl font-bold text-white">{myPosts.length}</span>
                  <span className="text-gray-400 ml-2">Publicaciones</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">0</span>
                  <span className="text-gray-400 ml-2">Seguidores</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">0</span>
                  <span className="text-gray-400 ml-2">Siguiendo</span>
                </div>
              </div>

              
            </div>
          </div>

          {/* Sección de insignias  */}
          {user?.badges && user.badges.length > 0 && (
            <div className="bg-gray-800 rounded-2xl p-6 mb-8 border border-gray-700">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">🏆</span> Insignias
              </h2>
              <div className="flex gap-3 flex-wrap">
                {user.badges.map((badge: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-5 py-3 bg-[#34D399]/20 border border-[#34D399]/30 text-[#34D399] rounded-xl font-semibold hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/*  Sección de intereses  */}
          {user?.interests && user.interests.length > 0 && (
            <div className="bg-gray-800 rounded-2xl p-6 mb-8 border border-gray-700">
              <h2 className="text-xl font-bold text-white mb-4">Intereses</h2>
              <div className="flex gap-3 flex-wrap">
                {user.interests.map((interest: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-5 py-2.5 bg-gray-700 rounded-full text-gray-300 hover:bg-[#34D399] hover:text-gray-900 transition-all duration-300 cursor-pointer font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/*  Sistema de tabs */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setActiveTab("posts")}
              className={`px-6 py-3 rounded-lg font-medium transition ${
                activeTab === "posts"
                  ? "bg-[#34D399] text-gray-900"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
              }`}
            >
               Publicaciones
            </button>
            <button
              onClick={() => setActiveTab("boards")}
              className={`px-6 py-3 rounded-lg font-medium transition ${
                activeTab === "boards"
                  ? "bg-[#34D399] text-gray-900"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
              }`}
            >
              📌 Tableros
            </button>
          </div>

          {activeTab === "posts" ? (
            <div className="pb-12">
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
          ) : (
            // Tab de tableros
            <div className="pb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {boards.map((board) => (
                  <div
                    key={board.id}
                    className="group relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-[#34D399]/50 transition-all duration-300 cursor-pointer"
                  >
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={board.img}
                        alt={board.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-bold text-white text-lg drop-shadow-lg">
                        {board.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        
        
      </div>

      {/* Sidebar derecho */}
      <div className="sticky top-0 h-screen overflow-y-auto">
        <RightSidebar />
      </div>
    </div>
  );
}
