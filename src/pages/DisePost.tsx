import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/RightSidebar";
import { Download, File, Video } from "lucide-react";

interface PostData {
  _id: string;
  title: string;
  imageUrl: string;
  summary: string;
  multimedia: { type: "image" | "video"; url: string }[];
  attachments: { name: string; url: string }[];
  content: string;
}

export default function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState<PostData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`http://localhost:4000/posts/${id}`);
        if (!res.ok) throw new Error("Error al obtener el post");
        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.error("❌ Error cargando post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="flex bg-gray-900 min-h-screen text-white justify-center items-center">
        <p className="text-gray-400">Cargando publicación...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex bg-gray-900 min-h-screen text-white justify-center items-center">
        <p className="text-gray-400">No se encontró la publicación.</p>
      </div>
    );
  }

  return (
    <div className="flex bg-gray-900 min-h-screen text-white">
      {/* Sidebar izquierdo */}
      <div className="sticky top-0 h-screen overflow-y-auto">
        <Sidebar />
      </div>

      {/* Contenido principal */}
      <div className="flex-1 p-8">
        <Link
          to="/profileHome"
          className="text-[#34D399] hover:text-[#22D3EE] transition mb-6 inline-block"
        >
          ← Volver a publicaciones
        </Link>

        {/* Título */}
        <h1 className="text-4xl font-bold mb-4 text-white">{post.title}</h1>

        {/* Imagen principal */}
        {post.imageUrl && (
          <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-96 object-cover"
            />
          </div>
        )}

        {/* Resumen */}
        <p className="text-lg text-gray-300 italic mb-8">{post.summary}</p>

        {/* Multimedia */}
        {post.multimedia && post.multimedia.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-[#34D399]">
              <Video className="w-6 h-6" /> Multimedia
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {post.multimedia.map((media, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-md bg-gray-800 border border-gray-700"
                >
                  {media.type === "video" ? (
                    <iframe
                      className="w-full h-60"
                      src={media.url}
                      title={`media-${index}`}
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <img
                      src={media.url}
                      alt={`media-${index}`}
                      className="w-full h-60 object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Archivos anexados */}
        {post.attachments && post.attachments.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-[#34D399]">
              <File className="w-6 h-6" /> Archivos anexados
            </h2>
            <ul className="space-y-3">
              {post.attachments.map((file, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between bg-gray-800 p-4 rounded-xl border border-gray-700 hover:bg-gray-700 transition"
                >
                  <span className="flex items-center gap-2 text-gray-200">
                    <File className="w-5 h-5 text-[#22D3EE]" />
                    {file.name}
                  </span>
                  <a
                    href={file.url}
                    download
                    className="flex items-center gap-1 text-[#34D399] hover:underline"
                  >
                    <Download className="w-4 h-4" /> Descargar
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Contenido */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-700">
          {post.content
            .split("\n")
            .filter((p) => p.trim() !== "")
            .map((p, index) => (
              <p key={index} className="mb-4 text-gray-200 leading-relaxed">
                {p}
              </p>
            ))}
        </div>
      </div>

      {/* Sidebar derecho */}
      <div className="sticky top-0 h-screen overflow-y-auto">
        <RightSidebar />
      </div>
    </div>
  );
}
