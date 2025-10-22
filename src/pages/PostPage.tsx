import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'; 

export interface PostType { 
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
}

export default function PostPage() {
  const { id } = useParams<{ id: string }>(); 
  const [postData, setPostData] = useState<PostType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      
      // SIMULACIÓN DE CARGA (Reemplazar con tu lógica real de API/Firestore)
      setTimeout(() => {
        const fetchedPost: PostType = {
          _id: id,
          title: "Título de la Publicación",
          shortDescription: "Descripción breve del contenido.",
          content: "Contenido del post cargado dinámicamente.",
          author: {
            name: "Usuario Dinámico",
            avatar: "https://i.pravatar.cc/150?img=1",
          },
          createdAt: new Date().toISOString(),
          image: "https://placehold.co/800x400/1E293B/34D399?text=Post+ID+"+id,
        };
        setPostData(fetchedPost);
        setIsLoading(false);
      }, 500); 
    }
  }, [id]); 

  if (isLoading || !postData) {
    return <div className="p-8 text-white bg-[#0F172A] min-h-screen">Cargando post ID: {id}...</div>;
  }
  
  const post = postData; 
  
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
