import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1E293B]">
      <div className="bg-[#334155] p-10 rounded-2xl shadow-lg w-full max-w-md">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-[#F8FAFC] text-center mb-6">
          Share<span className="text-[#34D399]">Mind</span>
        </h1>

        {/* Título */}
        <h2 className="text-xl text-[#F8FAFC] text-center mb-6">
          Inicia sesión en tu cuenta
        </h2>

        {/* Formulario */}
        <form className="space-y-5">
          <div>
            <label className="block text-[#94A3B8] mb-2">Correo electrónico</label>
            <input
              type="email"
              placeholder="ejemplo@correo.com"
              className="w-full px-4 py-3 rounded-lg bg-[#1E293B] border border-[#475569] text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#34D399]"
            />
          </div>

          <div>
            <label className="block text-[#94A3B8] mb-2">Contraseña</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg bg-[#1E293B] border border-[#475569] text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#22D3EE]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#34D399] hover:bg-[#10B981] text-[#1E293B] font-semibold py-3 rounded-lg transition"
          >
            Iniciar Sesión
          </button>
        </form>

        {/* Extras */}
        <div className="flex justify-between items-center mt-4">
          <Link to="/registro" className="text-[#22D3EE] hover:underline text-sm">
            Crear cuenta
          </Link>
          <button className="text-[#FBBF24] hover:underline text-sm">
            ¿Olvidaste tu contraseña?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
