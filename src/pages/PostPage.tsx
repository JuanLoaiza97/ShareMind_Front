import React from "react";

export interface PostProps {
  post: {
    _id?: string;
    title: string;
    shortDescription: string;
    content: string;
    image?: string;
    multimedia?: string;
    file?: string;
    author?: {
      name?: string;
      avatar?: string;
      email?: string;
    };
    createdAt?: string;
  };
}

export default function Post({ post }: PostProps) {
  return (
    <div className="bg-[#1E293B] rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
      {/* Encabezado del usuario */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={post.author?.avatar || "https://i.pravatar.cc/150?img=1"}
          alt="Avatar"
          className="w-12 h-12 rounded-full object-cover border-2 border-[#34D399]"
        />
        <div>
          <h3 className="font-semibold text-white">
            {post.author?.name || "Usuario anónimo"}
          </h3>
          <p className="text-sm text-gray-400">
            {new Date(post.createdAt || "").toLocaleString()}
          </p>
        </div>
      </div>

      {/* Imagen principal */}
      {post.image && (
        <img
          src={post.image}
          alt="Imagen del post"
          className="w-full h-64 object-cover rounded-xl mb-4"
        />
      )}

      {/* Contenido del post */}
      <h2 className="text-xl font-bold text-[#34D399] mb-2">{post.title}</h2>
      <p className="text-gray-300 mb-3 italic">{post.shortDescription}</p>
      <p className="text-gray-400 text-sm leading-relaxed">{post.content}</p>

      {/* Multimedia y archivos opcionales */}
      {post.multimedia && (
        <video
          src={post.multimedia}
          controls
          className="w-full mt-4 rounded-lg shadow-lg"
        />
      )}

      {post.file && (
        <div className="mt-3">
          <a
            href={post.file}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#22D3EE] hover:underline"
          >
            📎 Ver archivo adjunto
          </a>
        </div>
      )}

      {/* Reacciones */}
      <div className="flex justify-between items-center mt-5 text-gray-400 text-sm">
        <div className="flex gap-4">
          <button className="hover:text-[#34D399] transition">
            👍 Me gusta
          </button>
          <button className="hover:text-[#34D399] transition">
            💬 Comentar
          </button>
        </div>
      </div>
    </div>
  );
}
