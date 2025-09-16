import React from "react";
import { motion } from "framer-motion";

interface Community {
  id: number;
  name: string;
  members: string;
  avatar: string;
}

const communities: Community[] = [
  {
    id: 1,
    name: "Programadores React",
    members: "12.4K",
    avatar: "/img/avatar_co.png",
  },
  {
    id: 2,
    name: "Mindfulness & Productividad",
    members: "8.9K",
    avatar: "/img/avatar_co.png",
  },
  {
    id: 3,
    name: "Data Science en Español",
    members: "15.2K",
    avatar: "/img/avatar_co.png",
  },
  {
    id: 4,
    name: "Emprendedores Digitales",
    members: "10.7K",
    avatar: "/img/avatar_co.png",
  },
  {
    id: 5,
    name: "Blockchain & Cripto",
    members: "6.5K",
    avatar: "/img/avatar_co.png",
  },
  {
    id: 6,
    name: "Filosofía y Sociedad",
    members: "4.3K",
    avatar: "/img/avatar_co.png",
  },
];

const TopCommunities: React.FC = () => {
  return (
    <section className="bg-[#1E293B] text-[#F8FAFC] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">
          Comunidades <span className="text-[#34D399]">Populares</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {communities.map((community) => (
            <motion.div
              key={community.id}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="bg-[#334155] rounded-xl p-6 flex flex-col items-center shadow-lg cursor-pointer"
            >
              {/* Avatar */}
              <img
                src={community.avatar}
                alt={community.name}
                className="h-16 w-16 rounded-full mb-4 border-2 border-[#22D3EE]"
              />

              {/* Nombre */}
              <h3 className="text-lg font-semibold text-center">
                {community.name}
              </h3>

              {/* Miembros */}
              <p className="text-[#94A3B8] text-sm mb-4">
                {community.members} miembros
              </p>

              {/* Botón */}
              <button className="px-4 py-2 rounded-lg bg-[#22D3EE] text-[#1E293B] font-medium hover:bg-[#34D399] transition-colors">
                Unirse
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCommunities;
