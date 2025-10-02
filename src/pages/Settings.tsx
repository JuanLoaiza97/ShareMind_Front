import React from "react";

const Settings: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1E293B] text-white p-8">
      <div className="max-w-4xl mx-auto bg-[#1E293B]/80 rounded-2xl p-8 border border-[#334155] shadow-lg">
        {/* Título */}
        <h1 className="text-3xl font-bold text-[#34D399] mb-8">Configuración</h1>

        {/* Datos de cuenta */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Cuenta</h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-1 text-sm text-[#94A3B8]">Nombre de usuario</label>
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-[#334155] focus:border-[#34D399] outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-[#94A3B8]">Correo electrónico</label>
              <input
                type="email"
                placeholder="tuemail@ejemplo.com"
                className="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-[#334155] focus:border-[#34D399] outline-none"
              />
            </div>
          </div>
        </section>

        {/* Preferencias */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Preferencias</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#94A3B8]">Notificaciones por correo</span>
              <input type="checkbox" className="h-5 w-5 accent-[#34D399]" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#94A3B8]">Tema oscuro</span>
              <input type="checkbox" defaultChecked className="h-5 w-5 accent-[#34D399]" />
            </div>
          </div>
        </section>

        {/* Seguridad */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Seguridad</h2>
          <div className="space-y-4">
            <button className="w-full px-6 py-3 rounded-xl bg-[#34D399] text-[#0F172A] font-bold hover:bg-[#22C55E] transition-colors">
              Cambiar contraseña
            </button>
            <button className="w-full px-6 py-3 rounded-xl bg-amber-700 text-white font-bold hover:bg-red-700 transition-colors">
              Eliminar cuenta
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Settings;
