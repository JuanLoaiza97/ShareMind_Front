// components/Post.tsx
import { Link } from "react-router-dom";

interface PostProps {
  post: {
    _id: string;
    author?: {
      firstName?: string;
      lastName?: string;
      avatar?: string;
    };
    createdAt?: string;
    title: string;
    shortDescription: string;
    image?: string;
  };
}

export default function Post({ post }: PostProps) {
  const authorName = post.author
    ? `${post.author.firstName || ""} ${post.author.lastName || ""}`.trim()
    : "Usuario anónimo";

  const formattedDate = post.createdAt
    ? new Date(post.createdAt).toLocaleString()
    : "Hace un momento";
  // console.log("🧩 Post renderizado:", post);
  return (
    <Link
      to={`/post/${post._id}`}
      className="block bg-[#1E293B] rounded-2xl shadow-md mb-6 hover:bg-[#243250] transition-colors p-5"
    >
      <div className="flex items-start justify-between gap-4">
        {/* Imagen del autor */}
        <div className="flex items-center gap-4">
          <img
            src={
              post.author?.avatar ||
              "https://i.pravatar.cc/150?img=5"
            }
            alt={authorName}
            className="w-12 h-12 rounded-full border border-gray-600"
          />
          <div>
            <h3 className="font-semibold text-white">{authorName}</h3>
            <p className="text-sm text-gray-400">{formattedDate}</p>
          </div>
        </div>

        {/* Botón Seguir */}
        <button className="px-4 py-1 bg-[#22D3EE] text-[#0F172A] font-medium rounded-full hover:bg-[#34D399] transition-colors">
          Seguir
        </button>
      </div>

      {/* Contenido principal */}
      <div className="mt-4 flex flex-col md:flex-row gap-4 items-center">
        {/* Imagen del post */}
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full md:w-2/5 h-48 object-cover rounded-lg shadow-md"
          />
        )}

        {/* Título y leyenda */}
        <div className="flex-1 text-left">
          <h2 className="text-xl font-bold text-[#22D3EE] mb-2">
            {post.title}
          </h2>
          <p className="text-gray-300 text-sm">
            {post.shortDescription || "Sin descripción disponible."}
          </p>
        </div>
      </div>
    </Link>
  );
}
