import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch("http://localhost:4000/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Error al iniciar sesión");
        return;
      }

      // Guardar el token en localStorage (para usarlo después en peticiones protegidas)
      localStorage.setItem("token", data.token);

      // Redirigir al profile/home
      navigate("/profilehome");
    } catch (err) {
      setError("Error de conexión con el servidor");
    }
  };

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
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-[#94A3B8] mb-2">Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ejemplo@correo.com"
              className="w-full px-4 py-3 rounded-lg bg-[#1E293B] border border-[#475569] text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#34D399]"
            />
          </div>

          <div>
            <label className="block text-[#94A3B8] mb-2">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg bg-[#1E293B] border border-[#475569] text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#22D3EE]"
            />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

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

