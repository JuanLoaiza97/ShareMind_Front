// pages/PostPage.tsx
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function PostPage() {
  const { id } = useParams(); // en el futuro podemos usarlo para traer post desde la BD

  // Simulación de datos (luego los traerás desde tu backend)
  const post = {
    user: "Juan Esteban",
    userImg: "https://i.pravatar.cc/150?img=3",
    articleImg: "https://source.unsplash.com/random/900x500?tech",
    description:
      "¡Bienvenido a ShareMind 🚀! Este es un post de prueba para mostrar cómo se vería la página de detalle.",
    time: "Hace 2h",
  };

  return (
    <div className="flex bg-[#0F172A] min-h-screen text-white">
      {/* Sidebar izquierdo */}
      <Sidebar />

      {/* Contenido principal */}
      <main className="flex-1 p-8 max-w-3xl mx-auto">
        {/* Encabezado */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <img
              src={post.userImg}
              alt={post.user}
              className="w-12 h-12 rounded-full border border-gray-600"
            />
            <div>
              <h3 className="font-semibold">{post.user}</h3>
              <p className="text-sm text-gray-400">{post.time}</p>
            </div>
          </div>
          <button className="px-4 py-1 bg-[#22D3EE] text-[#0F172A] font-medium rounded-full hover:bg-[#34D399] transition-colors">
            Seguir
          </button>
        </div>

        {/* Imagen principal */}
        <img
          src={post.articleImg}
          alt="Artículo"
          className="rounded-lg shadow-md w-full mb-4"
        />

        {/* Descripción */}
        <p className="text-gray-200 mb-6">{post.description}</p>

        {/* Botones de interacción */}
        <div className="flex items-center gap-6 mb-6 text-gray-400">
          <button className="hover:text-[#22D3EE]">👍 Me gusta</button>
          <button className="hover:text-[#22D3EE]">💬 Comentar</button>
          <button className="hover:text-[#22D3EE]">🔗 Compartir</button>
          <button className="hover:text-[#22D3EE]">💾 Guardar</button>
        </div>

        {/* Comentarios */}
        <div className="mt-6">
          <h4 className="text-lg font-semibold mb-4">Comentarios</h4>

          {/* Un comentario (ejemplo) */}
          <div className="flex items-start gap-4 mb-4">
            <img
              src="https://i.pravatar.cc/150?img=8"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm">
                <span className="font-semibold">María Gómez: </span>
                ¡Qué buen post, me encantó! 🚀
              </p>
            </div>
          </div>

          {/* Formulario para añadir comentario */}
          <form className="flex items-center gap-3 mt-4">
            <input
              type="text"
              placeholder="Escribe un comentario..."
              className="flex-1 px-4 py-2 rounded-lg bg-[#1E293B] border border-gray-600 focus:ring-2 focus:ring-[#22D3EE] outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#34D399] text-[#0F172A] rounded-lg font-medium hover:bg-[#22D3EE] transition-colors"
            >
              Publicar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
