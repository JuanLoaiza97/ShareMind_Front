import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewPost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState(""); 
  const [legend, setLegend] = useState(""); 
  const [content, setContent] = useState("");

  const handleSubmit =  async (e: React.FormEvent) => {
    e.preventDefault();
    const storedUser = localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;
    if (!user) { alert("Debes iniciar sesión."); return; }
    
    // Validamos que los estados tengan contenido antes de enviar
    if (!title || !legend || !content) {
        alert("Por favor, completa todos los campos del post.");
        return;
    }
    
    try {
        const response = await fetch("http://localhost:4000/posts", { 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            // Enviamos las variables de estado (title, legend, content)
            body: JSON.stringify({ 
                title, 
                legend, 
                content, 
                userId: user.id, 
                articleImg: "https://source.unsplash.com/random/800x400?code" // URL Temporal
            }),
        });

        if (!response.ok) throw new Error("Fallo al crear el post.");

        alert("Post publicado con éxito 🚀");
        navigate("/ProfileHome"); 
        
    } catch (error) {
        console.error("Error al publicar:", error);
        alert("Error de conexión o servidor. Asegúrate de que tu backend está corriendo.");
    }
  };
    
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="bg-gray-800 rounded-lg shadow-lg w-full max-w-2xl p-8">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          ¿Qué quieres compartir hoy?
        </h1>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Nombre del artículo */}
          <div>
            <label className="block text-gray-300 mb-2">Nombre del artículo</label>
            <input
              type="text"
              // ⬅️ CONEXIÓN VITAL 1/3
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ejemplo: Introducción a NestJS"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Imagen */}
          <div>
            <label className="block text-gray-300 mb-2">Imagen principal</label>
            <input
              type="file"
              accept="image/*"
              className="w-full px-3 py-2 rounded bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Pequeña leyenda */}
          <div>
            <label className="block text-gray-300 mb-2">Pequeña leyenda</label>
            <input
              type="text"
              // ⬅️ CONEXIÓN VITAL 2/3
              value={legend} 
              onChange={(e) => setLegend(e.target.value)}
              placeholder="Una breve descripción..."
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Contenido del artículo */}
          <div>
            <label className="block text-gray-300 mb-2">Contenido</label>
            <textarea
              // ⬅️ CONEXIÓN VITAL 3/3
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
              onClick={() => navigate("/ProfileHome")}
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
