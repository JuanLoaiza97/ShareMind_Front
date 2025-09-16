import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#1E293B] text-[#F8FAFC] shadow-md border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          Share<span className="text-[#34D399]">Mind</span>
        </h1>

        {/* Navegación */}
        <nav className="flex items-center gap-6">
          <Link to="/" className="hover:text-[#34D399] transition-colors">
            Inicio
          </Link>
          <Link to="/explorar" className="hover:text-[#34D399] transition-colors">
            Explorar
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg bg-[#34D399] text-[#1E293B] font-medium hover:bg-[#22D3EE] transition-colors"
          >
            Iniciar Sesión
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
