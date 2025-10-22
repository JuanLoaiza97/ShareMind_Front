export default function EnConstruccion() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-green-500 mb-4">
          🚧 En Construcción 🚧
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Estamos trabajando para traerte esta funcionalidad muy pronto.
        </p>
        <a
          href="/profilehome"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg"
        >
          Volver al Home
        </a>
      </div>
    </div>
  );
}
