// components/Post.tsx
import React from "react";

interface PostProps {
  user: string;
  userImg: string;
  articleImg: string;
  description: string;
  time: string;
}

export default function Post({
  user,
  userImg,
  articleImg,
  description,
  time,
}: PostProps) {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-md mb-6 overflow-hidden">
      {/* Encabezado */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <img
            src={userImg}
            alt={user}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-bold text-green-500">{user}</h3>
            <span className="text-xs text-gray-400">{time}</span>
          </div>
        </div>
        <button className="text-sm text-green-400 border border-green-400 px-3 py-1 rounded-full hover:bg-green-400 hover:text-white transition">
          Seguir
        </button>
      </div>

      {/* Contenido */}
      <div className="flex flex-col md:flex-row">
        <img
          src={articleImg}
          alt="Artículo"
          className="w-full md:w-2/3 object-cover max-h-[400px]"
        />
        <div className="p-4 flex flex-col justify-center md:w-1/3">
          <p className="text-gray-200">{description}</p>
        </div>
      </div>

      {/* Acciones */}
      <div className="flex justify-around items-center border-t border-gray-700 p-3 text-gray-400 text-sm">
        <button className="hover:text-green-400">👍 Me gusta</button>
        <button className="hover:text-green-400">💬 Comentar</button>
        <button className="hover:text-green-400">🔗 Compartir</button>
        <button className="hover:text-green-400">💾 Guardar</button>
      </div>
    </div>
  );
}




// para luego hacer la conexion
// {posts.map(post => (
//   <Post key={post.id} user={post.user} content={post.content} time={post.time} />
// ))}