import React from "react";


const Hero: React.FC = () => {
  return (
    <section className="bg-[#1E293B] text-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Lado Izquierdo */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Bienvenido a <span className="text-[#34D399]">ShareMind</span>
          </h1>
          <p className="text-[#94A3B8] text-lg max-w-lg">
            Una red social donde el conocimiento se comparte y las ideas crecen.
            Conéctate con personas apasionadas, aprende nuevas habilidades y
            comparte tu mente con el mundo.
          </p>
          <div className="flex gap-4">
            <a
              href="/registro"
              className="px-6 py-3 rounded-lg bg-[#34D399] text-[#1E293B] font-medium hover:bg-[#22D3EE] transition-colors"
            >
              Comenzar ahora
            </a>
            <a
              href="#"
              className="px-6 py-3 rounded-lg border border-[#334155] text-[#F8FAFC] hover:border-[#22D3EE] hover:text-[#22D3EE] transition-colors"
            >
              Más información
            </a>
          </div>
        </div>

        {/* Lado Derecho */}
        <div className="relative flex justify-center">
          {/* Efecto glow */}
          <div className="absolute w-72 h-72 bg-[#22D3EE] opacity-20 blur-3xl rounded-full -z-10" />
          <img
            src="/img/Bombilla_know.png" 
            alt="Hero"
            className="w-96 h-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
