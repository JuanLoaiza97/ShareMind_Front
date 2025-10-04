// pages/Notifications.tsx
import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/RightSidebar";

export default function Notifications() {
  return (
    <div className="flex bg-gray-900 min-h-screen">
      {/* Sidebar fijo */}
      <div className="sticky top-0 h-screen overflow-y-auto">
        <Sidebar />
      </div>

      {/* Contenido principal */}
      <div className="flex-1 p-8 overflow-y-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Notificaciones</h2>

        {/* Lista de notificaciones */}
        <div className="space-y-6">
          {/* Notificación */}
          <div className="flex items-center bg-[#1E293B] p-4 rounded-lg shadow hover:bg-[#334155] transition">
            <img
              src="https://i.pravatar.cc/100?img=12"
              alt="User"
              className="w-12 h-12 rounded-full mr-4 border-2 border-[#34D399]"
            />
            <div className="flex-1 text-gray-200">
              <p>
                <span className="font-semibold text-white">María Gómez</span> le
                dio <span className="text-[#34D399]">like</span> a tu publicación.
              </p>
              <span className="text-sm text-gray-400">Hace 2h</span>
            </div>
          </div>

          <div className="flex items-center bg-[#1E293B] p-4 rounded-lg shadow hover:bg-[#334155] transition">
            <img
              src="https://i.pravatar.cc/100?img=15"
              alt="User"
              className="w-12 h-12 rounded-full mr-4 border-2 border-[#34D399]"
            />
            <div className="flex-1 text-gray-200">
              <p>
                <span className="font-semibold text-white">Carlos Pérez</span>{" "}
                comentó: “¡Gran aporte!” en tu publicación.
              </p>
              <span className="text-sm text-gray-400">Hace 5h</span>
            </div>
          </div>

          <div className="flex items-center bg-[#1E293B] p-4 rounded-lg shadow hover:bg-[#334155] transition">
            <img
              src="https://i.pravatar.cc/100?img=8"
              alt="User"
              className="w-12 h-12 rounded-full mr-4 border-2 border-[#34D399]"
            />
            <div className="flex-1 text-gray-200">
              <p>
                <span className="font-semibold text-white">Ana Torres</span> comenzó a seguirte.
              </p>
              <span className="text-sm text-gray-400">Hace 1 día</span>
            </div>
          </div>

          <div className="flex items-center bg-[#1E293B] p-4 rounded-lg shadow hover:bg-[#334155] transition">
            <img
              src="https://i.pravatar.cc/100?img=20"
              alt="User"
              className="w-12 h-12 rounded-full mr-4 border-2 border-[#34D399]"
            />
            <div className="flex-1 text-gray-200">
              <p>
                <span className="font-semibold text-white">Laura Ruiz</span> guardó tu publicación en sus favoritos.
              </p>
              <span className="text-sm text-gray-400">Hace 3 días</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar fijo */}
      <div className="sticky top-0 h-screen overflow-y-auto">
        <RightSidebar />
      </div>
    </div>
  );
}
