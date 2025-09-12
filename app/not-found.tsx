import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <h1 className="text-8xl md:text-9xl font-bold text-teal-300 opacity-50 mb-8">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Página No Encontrada
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Lo sentimos, la página que está buscando no existe.
          </p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-teal-600 to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-800 transition duration-300"
          >
            Volver a Inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
