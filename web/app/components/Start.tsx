import { Link } from "@remix-run/react";

export default function Start({ user }: { user: any }) {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/img/image1.png')",
          backgroundPosition: "20% center", 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/20 to-black/70" />
      </div>
      <div className="relative z-10 flex justify-end items-center h-full px-6 md:pr-20 w-full">
        <div className="bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-2xl max-w-lg animate-fade-in">
          <p className="text-blue-600 text-lg font-semibold">
            🌍 En el corazón de los viajes
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-2">
            Descubre tu próximo destino con Amadeus
          </h2>
          <p className="text-gray-700 mt-4">
            La tecnología de Amadeus transforma la industria de los viajes y
            el turismo en todo el mundo, ayudándote a encontrar el destino
            perfecto para tus vacaciones.
          </p>
          <p className="text-gray-700 mt-4">
            ✈️ <strong>¿No sabes a dónde ir?</strong>
            <br />
            No te preocupes, nosotros te guiamos para que disfrutes una
            experiencia inolvidable.
          </p>
          <p className="text-gray-700 mt-4">
            Tu próxima aventura está a un clic de distancia.
          </p>
          <Link
            to={user ? "/question" : "/login"}
            className="mt-6 inline-block bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700 transition shadow-md"
          >
            {user ? "Comenzar cuestionario →" : "Vamos a viajar →"}
          </Link>
        </div>
      </div>
    </div>
  );
}
