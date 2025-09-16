import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F172A] text-[#F8FAFC] py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        {/* Logo + descripción */}
        <div>
          <h2 className="text-2xl font-bold text-[#34D399]">ShareMind</h2>
          <p className="text-[#94A3B8] mt-3 text-sm">
            La red social donde las ideas crecen y el conocimiento se comparte.
            Únete y forma parte de una comunidad global.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navegación</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#34D399]">Inicio</a></li>
            <li><a href="#" className="hover:text-[#34D399]">Explorar</a></li>
            <li><a href="#" className="hover:text-[#34D399]">Comunidades</a></li>
            <li><a href="#" className="hover:text-[#34D399]">Acerca de</a></li>
            <li><a href="#" className="hover:text-[#34D399]">Contacto</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-[#22D3EE]"><FaTwitter /></a>
            <a href="#" className="hover:text-[#34D399]"><FaLinkedin /></a>
            <a href="#" className="hover:text-[#FBBF24]"><FaGithub /></a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-[#334155] mt-10 pt-6 text-center text-sm text-[#94A3B8]">
        © {new Date().getFullYear()} ShareMind. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
