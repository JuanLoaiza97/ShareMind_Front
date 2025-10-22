import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    bio: "",
  });

  const [interests, setInterests] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const navigate = useNavigate();

  const cities = [
    "Medellín, Colombia",
    "Bogotá, Colombia",
    "Cali, Colombia",
    "Buenos Aires, Argentina",
    "Ciudad de México, México",
    "Madrid, España",
    "Barcelona, España",
    "París, Francia",
    "Berlín, Alemania",
    "Lisboa, Portugal",
    "Nueva York, USA",
    "Los Ángeles, USA",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "country") {
      if (value.length > 1) {
        setSuggestions(
          cities.filter((city) =>
            city.toLowerCase().includes(value.toLowerCase())
          )
        );
      } else {
        setSuggestions([]);
      }
    }
  };

  const handleInterestChange = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleLanguageChange = (lang: string) => {
    setLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  };

  const handleSelectSuggestion = (city: string) => {
    setFormData((prev) => ({ ...prev, country: city }));
    setSuggestions([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      // Reemplazado alert por console.error, ya que alert no funciona en iframes
      console.error("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          username: formData.username,
          email: formData.email,
          password: formData.password,
          country: formData.country,
          bio: formData.bio,
          interests,
          languages,
        }),
      });

      if (!response.ok) {
        throw new Error("Error en el registro");
      }

      console.log("Usuario registrado con éxito 🎉");
      navigate("/login");
    } catch (error) {
      console.error(error);
      console.error("Hubo un problema al registrar el usuario");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F172A] px-4">
      <div className="w-full max-w-2xl bg-[#1E293B] text-[#F8FAFC] rounded-2xl shadow-lg p-8 my-10">
        <h2 className="text-3xl font-bold text-center mb-6">Crear cuenta</h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Nombres y Apellidos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="Nombres"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-gray-600 focus:border-[#22D3EE] focus:ring-2 focus:ring-[#22D3EE] outline-none"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Apellidos"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-gray-600 focus:border-[#22D3EE] focus:ring-2 focus:ring-[#22D3EE] outline-none"
              required
            />
          </div>

          {/* Nombre de usuario */}
          <input
            type="text"
            name="username"
            placeholder="Nombre de usuario"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-gray-600 focus:border-[#22D3EE] focus:ring-2 focus:ring-[#22D3EE] outline-none"
            required
          />

          {/* Correo */}
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-gray-600 focus:border-[#22D3EE] focus:ring-2 focus:ring-[#22D3EE] outline-none"
            required
          />

          {/* Contraseña + Confirmación */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-gray-600 focus:border-[#22D3EE] focus:ring-2 focus:ring-[#22D3EE] outline-none"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmar contraseña"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-gray-600 focus:border-[#22D3EE] focus:ring-2 focus:ring-[#22D3EE] outline-none"
              required
            />
          </div>

          {/* Ciudad / País con autocompletar */}
          <div className="relative">
            <input
              type="text"
              name="country"
              placeholder="Ciudad / País"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-gray-600 focus:border-[#22D3EE] focus:ring-2 focus:ring-[#22D3EE] outline-none"
              required
            />
            {suggestions.length > 0 && (
              <ul className="absolute bg-[#1E293B] border border-gray-600 rounded-lg mt-1 w-full max-h-40 overflow-y-auto z-10">
                {suggestions.map((city, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelectSuggestion(city)}
                    className="px-4 py-2 cursor-pointer hover:bg-[#22D3EE] hover:text-[#1E293B]"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Idiomas */}
          <div>
            <p className="text-sm mb-3 font-medium">Idiomas que hablas:</p>
            <div className="flex flex-wrap gap-3">
              {[
                "Español",
                "Inglés",
                "Francés",
                "Alemán",
                "Portugués",
                "Italiano",
                "Chino",
                "Japonés",
                "Coreano",
              ].map((lang) => {
                const selected = languages.includes(lang);
                return (
                  <button
                    type="button"
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-md ${
                      selected
                        ? "bg-[#22D3EE] text-[#1E293B]"
                        : "bg-[#0F172A] text-[#94A3B8] border border-[#334155] hover:bg-[#1E293B] hover:text-[#F8FAFC]"
                    }`}
                  >
                    {lang}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Intereses */}
          <div>
            <p className="text-sm mb-3 font-medium">Selecciona tus intereses:</p>
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
                "Deportes",
                "Música",
                "Cine",
                "Viajes",
              ].map((interest) => {
                const selected = interests.includes(interest);
                return (
                  <button
                    type="button"
                    key={interest}
                    onClick={() => handleInterestChange(interest)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm ${
                      selected
                        ? "bg-[#34D399] text-[#1E293B]"
                        : "bg-[#0F172A] text-[#94A3B8] border border-[#334155] hover:bg-[#1E293B] hover:text-[#F8FAFC]"
                    }`}
                  >
                    {interest}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Biografía */}
          <textarea
            name="bio"
            placeholder="Escribe una breve biografía..."
            value={formData.bio}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-gray-600 focus:border-[#22D3EE] focus:ring-2 focus:ring-[#22D3EE] outline-none"
            rows={4}
          />

          {/* Botón Registrarse */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#34D399] text-[#1E293B] font-semibold hover:bg-[#22D3EE] transition-colors text-lg"
          >
            Registrarse
          </button>

          {/* Botón Regresar */}
          <Link
            to="/"
            className="block w-full text-center py-3 rounded-lg bg-[#334155] text-[#F8FAFC] font-medium hover:bg-[#22D3EE] hover:text-[#1E293B] transition-colors text-lg"
          >
            Regresar al inicio
          </Link>
        </form>

        <p className="text-center text-sm mt-6">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="text-[#22D3EE] hover:underline">
            Inicia sesión aquí
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;