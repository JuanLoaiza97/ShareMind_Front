import { useNavigate } from "react-router-dom";

export default function NewPost() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí luego conectarás con la BD para guardar el post
    alert("Post publicado con éxito 🚀");
    navigate("/ProfileHome"); // redirige al home
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
              placeholder="Una breve descripción..."
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Contenido del artículo */}
          <div>
            <label className="block text-gray-300 mb-2">Contenido</label>
            <textarea
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
