import React from "react";

interface SuggestedUser {
  id: number;
  name: string;
  username: string;
  avatar: string;
}

const suggestedUsers: SuggestedUser[] = [
  {
    id: 1,
    name: "María Gómez",
    username: "@mariag",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 2,
    name: "Carlos Pérez",
    username: "@carlosp",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 3,
    name: "Laura Martínez",
    username: "@lauram",
    avatar: "https://i.pravatar.cc/150?img=28",
  },
];

const RightSidebar: React.FC = () => {
  return (
    <aside className="w-72 bg-[#1E293B] text-[#F8FAFC] p-6 rounded-xl shadow-lg mt-8 h-fit">
      <h3 className="text-lg font-bold mb-4">Sugerencias para ti</h3>

      <div className="space-y-4">
        {suggestedUsers.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between gap-3"
          >
            {/* Avatar + Info */}
            <div className="flex items-center gap-3">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full border border-gray-600"
              />
              <div>
                <p className="text-sm font-semibold">{user.name}</p>
                <p className="text-xs text-gray-400">{user.username}</p>
              </div>
            </div>

            {/* Botón Seguir */}
            <button className="px-3 py-1 bg-[#34D399] text-[#1E293B] text-xs font-medium rounded-lg hover:bg-[#22D3EE] transition">
              Seguir
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default RightSidebar;
