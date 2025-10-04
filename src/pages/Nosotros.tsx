import React from "react";

const Nosotros: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#1E293B] via-[#0F172A] to-[#1E293B] text-white min-h-screen overflow-hidden">
      {/* Contenedor principal */}
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        
        {/* Título */}
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-10">
          Conoce <span className="text-[#22D3EE]">ShareMind</span>
        </h1>
        
        {/* Intro */}
        <p className="text-center text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-20">
          En <span className="text-[#34D399] font-semibold">ShareMind</span> 
          creemos que el conocimiento es más valioso cuando se comparte. 
          Nuestra misión es crear un espacio donde las ideas crezcan, 
          las conexiones sean reales y el aprendizaje sea constante.
        </p>

        {/* Visión */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-6 text-[#FBBF24]">Nuestra Visión</h2>
          <p className="max-w-4xl mx-auto text-gray-300 leading-relaxed">
            Ser la red social de referencia para mentes inquietas, innovadoras y 
            apasionadas por aprender. Aquí, cada interacción tiene un propósito 
            y cada persona puede dejar huella.
          </p>
        </div>

        {/* Beneficios */}
        <h2 className="text-3xl font-bold text-center mb-12">
          Beneficios de unirte a <span className="text-[#34D399]">nuestra comunidad</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="bg-[#334155] p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-4 text-[#22D3EE]">🤝 Comunidad</h3>
            <p className="text-gray-300">
              Conecta con personas afines, comparte experiencias y haz parte 
              de algo más grande que tú.
            </p>
          </div>
          <div className="bg-[#334155] p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-4 text-[#FBBF24]">🚀 Crecimiento</h3>
            <p className="text-gray-300">
              Aprende de expertos, participa en debates y desarrolla nuevas 
              habilidades todos los días.
            </p>
          </div>
          <div className="bg-[#334155] p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-4 text-[#34D399]">🌍 Experiencias</h3>
            <p className="text-gray-300">
              Descubre historias inspiradoras de usuarios que transformaron 
              su vida con ShareMind.
            </p>
          </div>
        </div>

        {/* Testimonios */}
        <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros usuarios</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="bg-[#1E293B] p-6 rounded-2xl shadow-lg border border-[#22D3EE]/30">
            <p className="italic text-gray-300">
              “Desde que entré a ShareMind he encontrado personas increíbles y 
              aprendido cosas que nunca imaginé. ¡Es más que una red social!”
            </p>
            <span className="block mt-4 font-semibold text-[#22D3EE]">— Laura G.</span>
          </div>
          <div className="bg-[#1E293B] p-6 rounded-2xl shadow-lg border border-[#FBBF24]/30">
            <p className="italic text-gray-300">
              “Me encanta cómo aquí todos estamos dispuestos a ayudarnos y 
              compartir conocimiento. Es un espacio único.”
            </p>
            <span className="block mt-4 font-semibold text-[#FBBF24]">— Carlos M.</span>
          </div>
          <div className="bg-[#1E293B] p-6 rounded-2xl shadow-lg border border-[#FBBF24]/30">
            <p className="italic text-gray-300">
              “Que chimba de app, todo muy fluido todo muy melo, casi que no cierro sesion, pero se entiende.”
            </p>
            <span className="block mt-4 font-semibold text-[#FBBF24]">— Juliana L.</span>
          </div>
          <div className="bg-[#1E293B] p-6 rounded-2xl shadow-lg border border-[#FBBF24]/30">
            <p className="italic text-gray-300">
              “Gracias a esta red social termine mi tesis en gerencia de pollos nacionalizados, gracias y mi tesis en manofactura en arepas delgaditas.”
            </p>
            <span className="block mt-4 font-semibold text-[#FBBF24]">— Yurleidy P.</span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/registro"
            className="inline-block px-10 py-5 rounded-xl bg-[#22D3EE] text-[#1E293B] font-bold text-xl shadow-lg hover:bg-[#34D399] transition"
          >
            ¡Regístrate ahora!
          </a>
        </div>
      </div>

      {/* Efecto de destellos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-3 h-3 bg-[#22D3EE] rounded-full opacity-30 top-20 left-10 animate-ping"></div>
        <div className="absolute w-4 h-4 bg-[#FBBF24] rounded-full opacity-20 bottom-32 right-16 animate-ping delay-500"></div>
        <div className="absolute w-5 h-5 bg-white rounded-full opacity-25 top-1/2 left-1/3 animate-ping delay-1000"></div>
      </div>
    </section>
  );
};

export default Nosotros;
