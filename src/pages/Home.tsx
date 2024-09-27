import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout>
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

      <div className="w-full max-w-md text-center py-10 px-2">
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-4">Al-Matsurat Online</h1>
        <p className="text-sm mb-8">
          Biasakan membaca almatsurat setiap pagi dan petang
        </p>

        {/* Links Section */}
        <div className="space-y-4 w-full">
          <button
            onClick={() => navigate("/sugro-pagi")}
            className="w-full border rounded-lg bg-gray-50 text-black py-3 font-semibold hover:bg-gray-200"
          >
            Sugro Pagi
          </button>
          <button
            onClick={() => navigate("/sugro-petang")}
            className="w-full bg-white text-black py-3 font-semibold hover:bg-gray-200"
          >
            Sugro Petang
          </button>
          <button
            onClick={() => navigate("/kubro-pagi")}
            className="w-full bg-white text-black py-3 font-semibold hover:bg-gray-200"
          >
            Kubro Pagi
          </button>
          <button
            onClick={() => navigate("/kubro-petang")}
            className="w-full bg-white text-black py-3 font-semibold hover:bg-gray-200"
          >
            Kubro Petang
          </button>
        </div>
      </div>
    </Layout>
  );
};
