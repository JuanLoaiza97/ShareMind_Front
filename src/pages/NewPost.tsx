import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function NewPost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [multimedia, setMultimedia] = useState<File | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      Swal.fire("⚠️", "Debes iniciar sesión para publicar.", "warning");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("shortDescription", shortDescription);
    formData.append("content", content);
    if (image) formData.append("image", image);
    if (multimedia) formData.append("multimedia", multimedia);
    if (file) formData.append("file", file);

    try {
      const res = await fetch("http://localhost:4000/posts", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (!res.ok) throw new Error("Error al publicar el post");

      Swal.fire("✅", "Post publicado con éxito 🚀", "success");
      navigate("/profileHome");
    } catch (error) {
      console.error(error);
      Swal.fire("❌", "No se pudo publicar el post", "error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="bg-gray-800 rounded-lg shadow-lg w-full max-w-2xl p-8">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          ¿Qué quieres compartir hoy?
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Nombre del artículo */}
          <div>
            <label className="block text-gray-300 mb-2">Nombre del artículo</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ejemplo: Introducción a NestJS"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Imagen principal */}
          <div>
            <label className="block text-gray-300 mb-2">Imagen principal</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              className="w-full px-3 py-2 rounded bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Pequeña leyenda */}
          <div>
            <label className="block text-gray-300 mb-2">Pequeña leyenda</label>
            <input
              type="text"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              placeholder="Una breve descripción..."
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Multimedia */}
          <div>
            <label className="block text-gray-300 mb-2">Multimedia</label>
            <input
              type="file"
              accept="image/*,video/*"
              onChange={(e) => setMultimedia(e.target.files?.[0] || null)}
              className="w-full px-3 py-2 rounded bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Archivos */}
          <div>
            <label className="block text-gray-300 mb-2">Archivos</label>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="w-full px-3 py-2 rounded bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Contenido */}
          <div>
            <label className="block text-gray-300 mb-2">Contenido</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Escribe aquí el contenido de tu post..."
              rows={6}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            ></textarea>
          </div>

          {/* Botones */}
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={() => navigate("/profileHome")}
              className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
            >
              Volver a Home
            </button>

            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-500"
            >
              Publicar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
