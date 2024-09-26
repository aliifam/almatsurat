import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white">
      <Helmet>
        <title>Al-Matsurat Online</title>
        <meta
          name="description"
          content="Al-Matsurat Online adalah aplikasi untuk membantu membaca Al-Matsurat setiap pagi dan petang"
        />
        <meta
          name="keywords"
          content="Al-Matsurat, Al-Matsurat Online, Al-Matsurat website, Al-Matsurat app, Al-Matsurat sugro, Al-Matsurat pagi, Al-Matsurat petang, Al-Matsurat kubro"
        />
      </Helmet>

      <div className="w-full max-w-md text-center py-10 px-6">
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-4">Al-Matsurat Online</h1>
        <p className="text-sm mb-8">
          Biasakan membaca almatsurat setiap pagi dan petang
        </p>

        {/* Links Section */}
        <div className="space-y-4 w-full">
          <button
            onClick={() => navigate("/sugro-pagi")}
            className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200"
          >
            Sugro Pagi
          </button>
          <button
            onClick={() => navigate("/sugro-petang")}
            className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200"
          >
            Sugro Petang
          </button>
          <button
            onClick={() => navigate("/kubro-pagi")}
            className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200"
          >
            Kubro Pagi
          </button>
          <button
            onClick={() => navigate("/kubro-petang")}
            className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200"
          >
            Kubro Petang
          </button>
        </div>

        {/* Footer */}
        <footer className="mt-10 text-gray-500 text-sm">
          create with ❤️ by AAM in Yogyakarta
        </footer>
      </div>
    </div>
  );
};
