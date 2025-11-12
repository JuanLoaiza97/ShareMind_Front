// // pages/PostPage.tsx
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Sidebar from "../components/Sidebar";

// interface Post {
//   id: string;
//   title: string;
//   shortDescription: string;
//   content: string;
//   image?: string;
//   multimedia?: string;
//   files?: string;
//   createdAt?: string;
//   author?: string;
//   authorImg?: string;
// }

// export default function PostPage() {
//   const { id } = useParams();
//   const [post, setPost] = useState<Post | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         const res = await fetch(`http://localhost:4000/posts/${id}`);
//         if (!res.ok) throw new Error("Error al obtener el post");
//         const data = await res.json();
//         setPost(data);
//       } catch (error) {
//         console.error("❌ Error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPost();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-[#0F172A] text-white">
//         Cargando publicación...
//       </div>
//     );
//   }

//   if (!post) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-[#0F172A] text-white">
//         No se encontró la publicación 😕
//       </div>
//     );
//   }

//   return (
//     <div className="flex bg-[#0F172A] min-h-screen text-white">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Contenido principal */}
//       <main className="flex-1 p-8 max-w-3xl mx-auto">
//         {/* Encabezado */}
//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center gap-4">
//             <img
//               src={post.authorImg || "https://i.pravatar.cc/150?img=3"}
//               alt={post.author || "Autor"}
//               className="w-12 h-12 rounded-full border border-gray-600"
//             />
//             <div>
//               <h3 className="font-semibold">{post.author || "Usuario anónimo"}</h3>
//               <p className="text-sm text-gray-400">
//                 {post.createdAt
//                   ? new Date(post.createdAt).toLocaleString()
//                   : "Fecha desconocida"}
//               </p>
//             </div>
//           </div>

//           <button className="px-4 py-1 bg-[#22D3EE] text-[#0F172A] font-medium rounded-full hover:bg-[#34D399] transition-colors">
//             Seguir
//           </button>
//         </div>

//         {/* Título */}
//         <h1 className="text-3xl font-bold mb-4 text-[#22D3EE]">{post.title}</h1>

//         {/* Descripción corta */}
//         <p className="text-gray-300 mb-6 italic">{post.shortDescription}</p>

//         {/* Imagen principal */}
//         {post.image && (
//           <img
//             src={post.image}
//             alt={post.title}
//             className="rounded-lg shadow-md w-full mb-6"
//           />
//         )}

//         {/* Multimedia (video/audio) */}
//         {post.multimedia && (
//           <div className="mb-6">
//             {post.multimedia.endsWith(".mp4") ? (
//               <video controls className="w-full rounded-lg shadow-md">
//                 <source src={post.multimedia} type="video/mp4" />
//                 Tu navegador no soporta el video.
//               </video>
//             ) : (
//               <audio controls className="w-full">
//                 <source src={post.multimedia} />
//                 Tu navegador no soporta el audio.
//               </audio>
//             )}
//           </div>
//         )}

//         {/* Archivos adjuntos */}
//         {post.files && (
//           <div className="mb-6">
//             <a
//               href={post.files}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-[#34D399] underline hover:text-[#22D3EE]"
//             >
//               📎 Descargar archivo adjunto
//             </a>
//           </div>
//         )}

//         {/* Contenido */}
//         <div className="text-gray-200 leading-relaxed whitespace-pre-line mb-8">
//           {post.content}
//         </div>

//         {/* Botones de interacción */}
//         <div className="flex items-center gap-6 mb-6 text-gray-400">
//           <button className="hover:text-[#22D3EE]">👍 Me gusta</button>
//           <button className="hover:text-[#22D3EE]">💬 Comentar</button>
//           <button className="hover:text-[#22D3EE]">🔗 Compartir</button>
//           <button className="hover:text-[#22D3EE]">💾 Guardar</button>
//         </div>

//         {/* Comentarios */}
//         <div className="mt-6">
//           <h4 className="text-lg font-semibold mb-4">Comentarios</h4>

//           {/* Comentario de ejemplo */}
//           <div className="flex items-start gap-4 mb-4">
//             <img
//               src="https://i.pravatar.cc/150?img=8"
//               alt="User"
//               className="w-10 h-10 rounded-full"
//             />
//             <div>
//               <p className="text-sm">
//                 <span className="font-semibold">María Gómez: </span>
//                 ¡Qué buen post, me encantó! 🚀
//               </p>
//             </div>
//           </div>

//           {/* Formulario para comentar */}
//           <form className="flex items-center gap-3 mt-4">
//             <input
//               type="text"
//               placeholder="Escribe un comentario..."
//               className="flex-1 px-4 py-2 rounded-lg bg-[#1E293B] border border-gray-600 focus:ring-2 focus:ring-[#22D3EE] outline-none"
//             />
//             <button
//               type="submit"
//               className="px-4 py-2 bg-[#34D399] text-[#0F172A] rounded-lg font-medium hover:bg-[#22D3EE] transition-colors"
//             >
//               Publicar
//             </button>
//           </form>
//         </div>
//       </main>
//     </div>
//   );
// }



//otroooo// // pages/PostPage.tsx



// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { Download, File, Image as ImageIcon, Video } from "lucide-react";

// interface PostData {
//   id: string;
//   title: string;
//   imageUrl: string;
//   summary: string;
//   multimedia: { type: "image" | "video"; url: string }[];
//   attachments: { name: string; url: string }[];
//   content: string;
// }

// export default function PostPage() {
//   const { id } = useParams();
//   const [post, setPost] = useState<PostData | null>(null);

//   useEffect(() => {
//     // 🔹 Simulación de carga de datos (aquí conectarías con tu BD o API)
//     const mockPost: PostData = {
//       id: id || "1",
//       title: "El futuro de la innovación tecnológica",
//       imageUrl:
//         "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
//       summary:
//         "Exploramos cómo la inteligencia artificial, la automatización y la realidad aumentada están transformando la forma en que vivimos y trabajamos.",
//       multimedia: [
//         {
//           type: "video",
//           url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
//         },
//         {
//           type: "image",
//           url: "https://images.unsplash.com/photo-1581093588401-22e8b7f3f08f?auto=format&fit=crop&w=1000&q=80",
//         },
//       ],
//       attachments: [
//         { name: "Informe completo.pdf", url: "/files/informe.pdf" },
//         { name: "Presentación.pptx", url: "/files/presentacion.pptx" },
//       ],
//       content: `
//       La innovación tecnológica continúa siendo el motor principal de cambio en el siglo XXI. 
//       Desde el desarrollo de algoritmos inteligentes hasta la integración de sistemas en la nube, 
//       las organizaciones están redefiniendo sus procesos para adaptarse a un mundo cada vez más conectado.

//       A medida que la tecnología avanza, también lo hace nuestra capacidad para resolver problemas complejos. 
//       El futuro promete una sinergia entre humanos y máquinas que impulsará nuevas formas de creatividad, 
//       productividad y bienestar social.
//       `,
//     };

//     setPost(mockPost);
//   }, [id]);

//   if (!post)
//     return (
//       <div className="flex justify-center items-center h-screen text-gray-400 text-lg">
//         Cargando publicación...
//       </div>
//     );

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
//       {/* 🏷️ Título */}
//       <h1 className="text-4xl font-bold mb-4 text-gray-900">
//         {post.title}
//       </h1>

//       {/* 🌅 Imagen principal */}
//       <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
//         <img
//           src={post.imageUrl}
//           alt={post.title}
//           className="w-full h-80 object-cover"
//         />
//       </div>

//       {/* 📝 Resumen */}
//       <p className="text-lg text-gray-600 italic mb-8">{post.summary}</p>

//       {/* 🎬 Multimedia */}
//       {post.multimedia.length > 0 && (
//         <div className="mb-10">
//           <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
//             <Video className="w-6 h-6 text-indigo-500" /> Multimedia
//           </h2>
//           <div className="grid md:grid-cols-2 gap-6">
//             {post.multimedia.map((media, index) => (
//               <div
//                 key={index}
//                 className="rounded-xl overflow-hidden shadow-md bg-white"
//               >
//                 {media.type === "video" ? (
//                   <iframe
//                     className="w-full h-60"
//                     src={media.url}
//                     title={`media-${index}`}
//                     allowFullScreen
//                   ></iframe>
//                 ) : (
//                   <img
//                     src={media.url}
//                     alt={`media-${index}`}
//                     className="w-full h-60 object-cover"
//                   />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* 📎 Archivos descargables */}
//       {post.attachments.length > 0 && (
//         <div className="mb-10">
//           <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
//             <File className="w-6 h-6 text-indigo-500" /> Archivos anexados
//           </h2>
//           <ul className="space-y-3">
//             {post.attachments.map((file, index) => (
//               <li
//                 key={index}
//                 className="flex items-center justify-between bg-gray-50 p-4 rounded-xl hover:bg-indigo-50 transition"
//               >
//                 <span className="flex items-center gap-2 text-gray-700">
//                   <File className="w-5 h-5 text-indigo-500" />
//                   {file.name}
//                 </span>
//                 <a
//                   href={file.url}
//                   download
//                   className="flex items-center gap-1 text-indigo-600 hover:underline"
//                 >
//                   <Download className="w-4 h-4" /> Descargar
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* 📄 Contenido */}
//       <div className="prose max-w-none text-gray-800 leading-relaxed bg-white p-6 rounded-2xl shadow-md">
//         {post.content.split("\n").map((p, index) => (
//           <p key={index} className="mb-4">
//             {p}
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// }


// pages/PostPage.tsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/RightSidebar";

interface Post {
  _id: string;
  title: string;
  image?: string;
  shortDescription?: string;
  content?: string;
  multimedia?: string[];
  attachments?: string[];
  author?: {
    firstName?: string;
    lastName?: string;
    avatar?: string;
  };
  createdAt?: string;
}

export default function PostPage() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`http://localhost:4000/posts/${id}`);
        if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);
        const data = await res.json();
        console.log("📦 Post recibido:", data); // 👈 verifica esto en consola
        setPost(data);
      } catch (error) {
        console.error("❌ Error cargando publicación:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="flex bg-gray-900 min-h-screen text-white items-center justify-center">
        <p className="text-gray-400">Cargando publicación...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex bg-gray-900 min-h-screen text-white items-center justify-center">
        <p className="text-gray-400">No se encontró la publicación.</p>
      </div>
    );
  }

  const authorName = post.author
    ? `${post.author.firstName || ""} ${post.author.lastName || ""}`.trim()
    : "Usuario anónimo";

  const formattedDate = post.createdAt
    ? new Date(post.createdAt).toLocaleString()
    : "Hace un momento";

  return (
    <div className="flex bg-gray-900 min-h-screen text-white">
      {/* Sidebar izquierdo */}
      <div className="sticky top-0 h-screen overflow-y-auto">
        <Sidebar />
      </div>

      {/* Contenido principal */}
      <div className="flex-1 p-8">
        <Link
          to="/profilehome"
          className="inline-block mb-4 text-[#22D3EE] hover:underline"
        >
          ← Volver
        </Link>

        {/* Título */}
        <h1 className="text-3xl font-bold text-[#22D3EE] mb-4">{post.title}</h1>

        {/* Autor y fecha */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={post.author?.avatar || "https://i.pravatar.cc/150?img=5"}
            alt={authorName}
            className="w-12 h-12 rounded-full border border-gray-600"
          />
          <div>
            <p className="text-white font-medium">{authorName}</p>
            <p className="text-sm text-gray-400">{formattedDate}</p>
          </div>
        </div>

        {/* Imagen principal */}
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full rounded-lg mb-6 shadow-lg max-h-[400px] object-cover"
          />
        )}

        {/* Leyenda */}
        {post.shortDescription && (
          <p className="text-gray-300 italic mb-6">{post.shortDescription}</p>
        )}

        {/* Multimedia */}
        {post.multimedia && post.multimedia.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-[#34D399]">
              🎥 Multimedia
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {post.multimedia.map((media, index) => (
                <video
                  key={index}
                  src={media}
                  controls
                  className="rounded-lg shadow-md w-full"
                />
              ))}
            </div>
          </div>
        )}

        {/* Archivos adjuntos */}
        {post.attachments && post.attachments.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-[#34D399]">
              📎 Archivos adjuntos
            </h3>
            <ul className="list-disc list-inside space-y-2">
              {post.attachments.map((file, index) => (
                <li key={index}>
                  <a
                    href={file}
                    download
                    className="text-[#22D3EE] hover:text-[#34D399]"
                  >
                    Descargar archivo {index + 1}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Contenido principal */}
        <div className="prose prose-invert max-w-none leading-relaxed">
          {post.content ? (
            <p className="text-gray-200 whitespace-pre-line">{post.content}</p>
          ) : (
            <p className="text-gray-500 italic">
              Sin contenido disponible para este post.
            </p>
          )}
        </div>
      </div>

      {/* Sidebar derecho */}
      <div className="sticky top-0 h-screen overflow-y-auto">
        <RightSidebar />
      </div>
    </div>
  );
}
