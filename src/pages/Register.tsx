import React, { useState } from "react";

const Register: React.FC = () => {
  const [interests, setInterests] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);

  const handleInterestChange = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleLanguageChange = (lang: string) => {
    setLanguages((prev) =>
      prev.includes(lang)
        ? prev.filter((l) => l !== lang)
        : [...prev, lang]
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F172A] px-4">
      <div className="w-full max-w-2xl bg-[#1E293B] text-[#F8FAFC] rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Crear cuenta</h2>

        <form className="space-y-5">
          {/* Nombre completo */}
          <input
            type="text"
            placeholder="Nombre completo"
            className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-gray-600 focus:border-[#22D3EE] focus:ring-2 focus:ring-[#22D3EE] outline-none"
            required
          />

          {/* Nombre de usuario */}
          <input
            type="text"
            placeholder="Nombre de usuario"
            className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-gray-600 focus:border-[#22D3EE] focus:ring-2 focus:ring-[#22D3EE] outline-none"
            required
          />

          {/* Correo */}
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-gray-600 focus:border-[#22D3EE] focus:ring-2 focus:ring-[#22D3EE] outline-none"
            required
          />

          {/* Contraseña + Confirmación */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-gray-600 focus:border-[#22D3EE] focus:ring-2 focus:ring-[#22D3EE] outline-none"
              required
            />
            <input
              type="password"
              placeholder="Confirmar contraseña"
              className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-gray-600 focus:border-[#22D3EE] focus:ring-2 focus:ring-[#22D3EE] outline-none"
              required
            />
          </div>

          {/* País */}
          <input
            type="text"
            placeholder="Ciudad / País"
            className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-gray-600 focus:border-[#22D3EE] focus:ring-2 focus:ring-[#22D3EE] outline-none"
            required
          />

          {/* Idiomas */}
          <div>
            <p className="text-sm mb-2">Idiomas que hablas:</p>
            <div className="flex flex-wrap gap-3">
              {["Español", "Inglés", "Francés", "Alemán", "Portugués"].map(
                (lang) => (
                  <label key={lang} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={languages.includes(lang)}
                      onChange={() => handleLanguageChange(lang)}
                      className="h-4 w-4 text-[#22D3EE] rounded"
                    />
                    {lang}
                  </label>
                )
              )}
            </div>
          </div>

          {/* Intereses */}
          <div>
            <p className="text-sm mb-2">Selecciona tus intereses:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "Tecnología",
                "Ciencia",
                "Matemáticas",
                "Programación",
                "Arte",
                "Historia",
                "Idiomas",
                "Literatura",
              ].map((interest) => (
                <label key={interest} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={interests.includes(interest)}
                    onChange={() => handleInterestChange(interest)}
                    className="h-4 w-4 text-[#34D399] rounded"
                  />
                  {interest}
                </label>
              ))}
            </div>
          </div>

          {/* Biografía */}
          <textarea
            placeholder="Escribe una breve biografía..."
            className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-gray-600 focus:border-[#22D3EE] focus:ring-2 focus:ring-[#22D3EE] outline-none"
            rows={4}
          />

          {/* Botón */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#34D399] text-[#1E293B] font-semibold hover:bg-[#22D3EE] transition-colors text-lg"
          >
            Registrarse
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          ¿Ya tienes cuenta?{" "}
          <a href="/login" className="text-[#22D3EE] hover:underline">
            Inicia sesión aquí
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
