import React from "react";

interface Post {
  id: number;
  author: string;
  avatar: string;
  title: string;
  category: string;
  categoryColor: string; // tailwind color para la categoría
  likes: number;
  comments: number;
}

const posts: Post[] = [
  {
    id: 1,
    author: "Juan Pérez",
    avatar: "/img/avatar_us.png",
    title: "Mastering React Hooks",
    category: "Programación",
    categoryColor: "bg-[#34D399]",
    likes: 40,
    comments: 12,
  },
  {
    id: 2,
    author: "María López",
    avatar: "/img/avatar_us.png",
    title: "Mindfulness para la productividad",
    category: "Filosofía",
    categoryColor: "bg-[#22D3EE]",
    likes: 28,
    comments: 7,
  },
  {
    id: 3,
    author: "Carlos Gómez",
    avatar: "/img/avatar_us.png",
    title: "Inversión para principiantes",
    category: "Finanzas",
    categoryColor: "bg-[#FBBF24]",
    likes: 15,
    comments: 4,
  },
  {
    id: 4,
    author: "Laura Méndez",
    avatar: "/img/avatar_us.png",
    title: "Guía rápida de TypeScript",
    category: "Programación",
    categoryColor: "bg-[#34D399]",
    likes: 52,
    comments: 18,
  },
  {
    id: 5,
    author: "Andrés Torres",
    avatar: "/img/avatar_us.png",
    title: "Cómo organizar tu día con Notion",
    category: "Productividad",
    categoryColor: "bg-[#22D3EE]",
    likes: 33,
    comments: 11,
  },
  {
    id: 6,
    author: "Sofía Ramírez",
    avatar: "/img/avatar_us.png",
    title: "Principios básicos del Machine Learning",
    category: "Data Science",
    categoryColor: "bg-[#34D399]",
    likes: 61,
    comments: 20,
  },
  {
    id: 7,
    author: "Diego Hernández",
    avatar: "/img/avatar_us.png",
    title: "Cómo empezar en el mundo del Freelance",
    category: "Carrera",
    categoryColor: "bg-[#FBBF24]",
    likes: 25,
    comments: 6,
  },
  {
    id: 8,
    author: "Camila Ríos",
    avatar: "/img/avatar_us.png",
    title: "10 libros que cambiaron mi vida",
    category: "Filosofía",
    categoryColor: "bg-[#22D3EE]",
    likes: 47,
    comments: 14,
  },
  {
    id: 9,
    author: "Fernando Castillo",
    avatar: "/img/avatar_us.png",
    title: "Aprendiendo Git y GitHub desde cero",
    category: "Programación",
    categoryColor: "bg-[#34D399]",
    likes: 38,
    comments: 10,
  },
  {
    id: 10,
    author: "Isabella Vargas",
    avatar: "/img/avatar_us.png",
    title: "Hábitos para mantenerte motivado",
    category: "Productividad",
    categoryColor: "bg-[#22D3EE]",
    likes: 29,
    comments: 8,
  },
  {
    id: 11,
    author: "Mateo Salazar",
    avatar: "/img/avatar_us.png",
    title: "Blockchain explicado en simple",
    category: "Tecnología",
    categoryColor: "bg-[#FBBF24]",
    likes: 54,
    comments: 19,
  },
  {
    id: 12,
    author: "Valentina Ortiz",
    avatar: "/img/avatar_us.png",
    title: "El poder de la meditación diaria",
    category: "Filosofía",
    categoryColor: "bg-[#22D3EE]",
    likes: 32,
    comments: 9,
  },
];

const TrendingPosts: React.FC = () => {
  return (
    <section className="bg-[#1E293B] text-[#F8FAFC] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">
          Publicaciones <span className="text-[#34D399]">Destacadas</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-[#334155] rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
            >
              {/* Autor */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={post.avatar}
                  alt={post.author}
                  className="h-10 w-10 rounded-full"
                />
                <span className="text-sm font-medium">{post.author}</span>
              </div>

              {/* Título */}
              <h3 className="text-lg font-semibold mb-3">{post.title}</h3>

              {/* Categoría */}
              <span
                className={`inline-block px-3 py-1 text-xs rounded-full text-[#1E293B] font-medium ${post.categoryColor}`}
              >
                {post.category}
              </span>

              {/* Interacciones */}
              <div className="flex gap-6 mt-5 text-[#94A3B8] text-sm">
                <span>👍 {post.likes}</span>
                <span>💬 {post.comments}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingPosts;
