// pages/Chat.tsx
import { useParams } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/RightSidebar";

export default function Chat() {
  const { id } = useParams(); // Nombre del usuario desde la URL
  const [messages, setMessages] = useState([
    { sender: "María Gómez", text: "Hola, ¿cómo vas con el proyecto?", time: "10:00 AM" },
    { sender: "Tú", text: "Muy bien, avanzando 🚀", time: "10:02 AM" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    setMessages([
      ...messages,
      { sender: "Tú", text: newMessage, time: "Ahora" },
    ]);
    setNewMessage("");
  };

  return (
    <div className="flex bg-gray-900 min-h-screen">
      {/* Sidebar fijo */}
      <div className="sticky top-0 h-screen overflow-y-auto">
        <Sidebar />
      </div>

      {/* Chat principal */}
      <div className="flex-1 flex flex-col p-6 overflow-y-auto">
        {/* Encabezado del chat */}
        <div className="flex items-center gap-4 pb-4 border-b border-gray-700">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Usuario"
            className="w-12 h-12 rounded-full border-2 border-[#34D399]"
          />
          <h2 className="text-2xl font-bold text-white">{id}</h2>
        </div>

        {/* Mensajes */}
        <div className="flex-1 flex flex-col gap-3 mt-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "Tú" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg text-white ${
                  msg.sender === "Tú"
                    ? "bg-[#34D399] text-gray-900"
                    : "bg-[#1F2937]"
                }`}
              >
                <p>{msg.text}</p>
                <span className="block text-xs text-gray-400 mt-1">{msg.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Input para enviar mensajes */}
        <div className="flex mt-4">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Escribe un mensaje..."
            className="flex-1 px-4 py-2 rounded-l-lg bg-[#1F2937] text-white outline-none"
          />
          <button
            onClick={sendMessage}
            className="px-6 py-2 bg-[#34D399] text-gray-900 font-semibold rounded-r-lg hover:bg-[#22D3EE] transition"
          >
            Enviar
          </button>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="sticky top-0 h-screen overflow-y-auto">
        <RightSidebar />
      </div>
    </div>
  );
}
