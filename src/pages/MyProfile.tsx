// pages/MyProfile.tsx
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";
import RightSidebar from "../components/RightSidebar";

export default function MyProfile() {
  return (
    <div className="flex bg-gray-900 min-h-screen">
      {/* Sidebar fijo */}
      <div className="sticky top-0 h-screen overflow-y-auto">
        <Sidebar />
      </div>

      {/* Contenido principal con scroll */}
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Encabezado del perfil */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            {/* Foto de perfil */}
            <img
              src="https://i.pravatar.cc/150?img=10"
              alt="Foto de perfil"
              className="w-28 h-28 rounded-full border-4 border-[#34D399] shadow-lg"
            />

            {/* Información del usuario */}
            <div className="ml-6 text-white">
              <div className="flex items-center gap-4">
                <h2 className="text-3xl font-bold">Juan Esteban</h2>
                {/* Botón Editar perfil */}
                <button className="px-4 py-2 rounded-lg bg-[#475569] hover:bg-[#34D399] text-white font-semibold transition">
                  Editar perfil
                </button>
              </div>

              <div className="flex gap-6 mt-2 text-gray-300">
                <span>
                  <span className="font-semibold text-white">12</span>{" "}
                  Publicaciones
                </span>
                <span>
                  <span className="font-semibold text-white">340</span>{" "}
                  Seguidores
                </span>
                <span>
                  <span className="font-semibold text-white">180</span>{" "}
                  Seguidos
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Idiomas */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-[#34D399] mb-2">Idiomas</h3>
          <p className="text-gray-300">Español, Inglés, Francés</p>
        </div>

        {/* Intereses */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-[#34D399] mb-2">Intereses</h3>
          <p className="text-gray-300">
            Tecnología, Programación, Inteligencia Artificial
          </p>
        </div>

        {/* Descripción */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#34D399] mb-2">
            Sobre mí
          </h3>
          <p className="text-gray-300">
            Soy un apasionado por la tecnología y la innovación 🚀. Me gusta
            aprender cosas nuevas todos los días y compartir mis conocimientos
            con la comunidad.
          </p>
        </div>

        {/* Publicaciones del usuario */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-white mb-4">
            Mis publicaciones
          </h3>
          <Post
            user="Juan Esteban"
            userImg="https://i.pravatar.cc/150?img=10"
            articleImg="https://source.unsplash.com/random/800x400?technology"
            description="Hoy estuve aprendiendo sobre Docker y sus ventajas 💻🐳"
            time="Hace 1h"
          />
          <Post
            user="Juan Esteban"
            userImg="https://i.pravatar.cc/150?img=10"
            articleImg="https://source.unsplash.com/random/800x400?cloud"
            description="Probando despliegue en la nube con AWS ☁️"
            time="Hace 3h"
          />
        </div>

        {/* Publicaciones guardadas */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Publicaciones guardadas
          </h3>
          <Post
            user="María Gómez"
            userImg="https://i.pravatar.cc/150?img=5"
            articleImg="https://source.unsplash.com/random/800x400?database"
            description="Aprendiendo sobre bases de datos distribuidas 😍"
            time="Hace 2d"
          />
        </div>
      </div>

      {/* Right Sidebar con scroll independiente */}
      <div className="sticky top-0 h-screen overflow-y-auto">
        <RightSidebar />
      </div>
    </div>
  );
}
