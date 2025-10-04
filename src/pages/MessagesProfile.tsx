// pages/Messages.tsx
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/RightSidebar";

export default function Messages() {
  return (
    <div className="flex bg-gray-900 min-h-screen">
      {/* Sidebar fijo */}
      <div className="sticky top-0 h-screen overflow-y-auto">
        <Sidebar />
      </div>

      {/* Lista de conversaciones */}
      <div className="flex-1 p-8 overflow-y-auto">
        <h2 className="text-3xl font-bold text-white mb-6">Mensajes</h2>

        <div className="flex flex-col gap-4">
          {/* Conversación 1 */}
          <Link
            to="/chat/maria-gomez"
            className="bg-[#1F2937] p-4 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer w-full flex items-center gap-4"
          >
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="Usuario"
              className="w-14 h-14 rounded-full border-2 border-[#34D399]"
            />
            <div className="flex-1">
              <h3 className="text-white font-semibold">María Gómez</h3>
              <p className="text-gray-400 text-sm truncate">
                Hola, ¿cómo vas con el proyecto?
              </p>
            </div>
            <p className="text-gray-500 text-xs">Hace 5 min</p>
          </Link>

          {/* Conversación 2 */}
          <Link
            to="/chat/carlos-lopez"
            className="bg-[#1F2937] p-4 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer w-full flex items-center gap-4"
          >
            <img
              src="https://i.pravatar.cc/150?img=8"
              alt="Usuario"
              className="w-14 h-14 rounded-full border-2 border-[#34D399]"
            />
            <div className="flex-1">
              <h3 className="text-white font-semibold">Carlos López</h3>
              <p className="text-gray-400 text-sm truncate">
                Recuerda la reunión mañana a las 10am.
              </p>
            </div>
            <p className="text-gray-500 text-xs">Hace 1h</p>
          </Link>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="sticky top-0 h-screen overflow-y-auto">
        <RightSidebar />
      </div>
    </div>
  );
}
