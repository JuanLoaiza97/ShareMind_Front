// pages/PostPage.tsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

interface Post {
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  image?: string;
  multimedia?: string;
  files?: string;
  createdAt?: string;
  author?: string;
  authorImg?: string;
}

export default function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`http://localhost:4000/posts/${id}`);
        if (!res.ok) throw new Error("Error al obtener el post");
        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.error("❌ Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0F172A] text-white">
        Cargando publicación...
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0F172A] text-white">
        No se encontró la publicación 😕
      </div>
    );
  }

  return (
    <div className="flex bg-[#0F172A] min-h-screen text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido principal */}
      <main className="flex-1 p-8 max-w-3xl mx-auto">
        {/* Encabezado */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <img
              src={post.authorImg || "https://i.pravatar.cc/150?img=3"}
              alt={post.author || "Autor"}
              className="w-12 h-12 rounded-full border border-gray-600"
            />
            <div>
              <h3 className="font-semibold">{post.author || "Usuario anónimo"}</h3>
              <p className="text-sm text-gray-400">
                {post.createdAt
                  ? new Date(post.createdAt).toLocaleString()
                  : "Fecha desconocida"}
              </p>
            </div>
          </div>

          <button className="px-4 py-1 bg-[#22D3EE] text-[#0F172A] font-medium rounded-full hover:bg-[#34D399] transition-colors">
            Seguir
          </button>
        </div>

        {/* Título */}
        <h1 className="text-3xl font-bold mb-4 text-[#22D3EE]">{post.title}</h1>

        {/* Descripción corta */}
        <p className="text-gray-300 mb-6 italic">{post.shortDescription}</p>

        {/* Imagen principal */}
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="rounded-lg shadow-md w-full mb-6"
          />
        )}

        {/* Multimedia (video/audio) */}
        {post.multimedia && (
          <div className="mb-6">
            {post.multimedia.endsWith(".mp4") ? (
              <video controls className="w-full rounded-lg shadow-md">
                <source src={post.multimedia} type="video/mp4" />
                Tu navegador no soporta el video.
              </video>
            ) : (
              <audio controls className="w-full">
                <source src={post.multimedia} />
                Tu navegador no soporta el audio.
              </audio>
            )}
          </div>
        )}

        {/* Archivos adjuntos */}
        {post.files && (
          <div className="mb-6">
            <a
              href={post.files}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#34D399] underline hover:text-[#22D3EE]"
            >
              📎 Descargar archivo adjunto
            </a>
          </div>
        )}

        {/* Contenido */}
        <div className="text-gray-200 leading-relaxed whitespace-pre-line mb-8">
          {post.content}
        </div>

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

          {/* Comentario de ejemplo */}
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

          {/* Formulario para comentar */}
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
