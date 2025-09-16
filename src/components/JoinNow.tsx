import React from "react";

const JoinNow: React.FC = () => {
  return (
    <section className="bg-[#34D399] text-[#1E293B] py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Únete a <span className="text-[#1E293B]">ShareMind</span> hoy
        </h2>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl mb-10 text-[#1E293B]/80">
          Conecta con miles de personas, comparte tus ideas y haz crecer tu
          conocimiento en la red social donde tu mente importa.
        </p>

        {/* Botón CTA */}
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
