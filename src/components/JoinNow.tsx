import React from "react";

const JoinNow: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Fondo verde degradado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#34D399] via-[#10B981] to-[#059669]" />

      {/* Destellos dinámicos */}
      <div className="absolute inset-0">
        {/* Repetimos varios destellos pequeños distribuidos en distintos lugares */}
        <div className="absolute w-6 h-6 bg-[#22D3EE] rounded-full opacity-30 top-10 left-12 animate-ping"></div>
        <div className="absolute w-4 h-4 bg-[#FBBF24] rounded-full opacity-30 top-1/4 left-1/3 animate-ping delay-200"></div>
        <div className="absolute w-5 h-5 bg-white rounded-full opacity-20 top-1/2 left-20 animate-ping delay-500"></div>
        <div className="absolute w-6 h-6 bg-[#22D3EE] rounded-full opacity-25 bottom-16 right-10 animate-ping delay-700"></div>
        <div className="absolute w-4 h-4 bg-[#FBBF24] rounded-full opacity-30 bottom-1/3 right-1/4 animate-ping delay-1000"></div>
        <div className="absolute w-5 h-5 bg-white rounded-full opacity-20 top-1/3 right-1/5 animate-ping delay-1500"></div>
        <div className="absolute w-6 h-6 bg-[#22D3EE] rounded-full opacity-25 bottom-1/4 left-1/2 animate-ping delay-2000"></div>
      </div>

      {/* Contenido */}
      <div className="relative max-w-4xl mx-auto px-6 text-center text-[#1E293B]">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Únete a <span className="text-[#1E293B]">ShareMind</span> hoy
        </h2>

        <p className="text-lg md:text-xl mb-10 text-[#1E293B]/80">
          Conecta con miles de personas, comparte tus ideas y haz crecer tu
          conocimiento en la red social donde tu mente importa.
        </p>

        <a
          href="/registro"
          className="inline-block px-8 py-4 rounded-lg bg-[#22D3EE] text-[#1E293B] font-semibold hover:bg-[#FBBF24] transition-colors text-lg shadow-lg"
        >
          Crear cuenta gratis
        </a>
      </div>
    </section>
  );
};

export default JoinNow;
