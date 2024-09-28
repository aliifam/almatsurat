import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { SunIcon, MoonIcon, BookOpenIcon } from "@heroicons/react/24/solid"; // Import ikon yang diperlukan
import Layout from "../components/Layout";
import { useThemeContext } from "../hooks/useThemeContext"; // Import ThemeContext

export const Home = () => {
  const navigate = useNavigate();
  const { theme } = useThemeContext(); // Mengambil tema dari context

  // Data untuk tombol
  const buttons = [
    {
      label: "Sugro Pagi",
      icon: <SunIcon className="h-5 w-5 mr-2" />,
      path: "/sugro-pagi",
    },
    {
      label: "Sugro Petang",
      icon: <MoonIcon className="h-5 w-5 mr-2" />,
      path: "/sugro-petang",
    },
    {
      label: "Kubro Pagi",
      icon: <SunIcon className="h-5 w-5 mr-2" />,
      path: "/kubro-pagi",
    },
    {
      label: "Kubro Petang",
      icon: <MoonIcon className="h-5 w-5 mr-2" />,
      path: "/kubro-petang",
    },
  ];

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

      <div
        className={`w-full max-w-md text-center py-10 px-2 transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        {/* Heading with Book Icon */}
        <h1 className="text-3xl font-bold mb-4">
          <BookOpenIcon className="h-8 w-8 inline-block mr-2" />
          Al-Matsurat Online
        </h1>
        <p className="text-sm mb-8">
          Biasakan membaca Al-Matsurat setiap pagi dan petang
        </p>

        {/* Links Section */}
        <div className="space-y-4 w-full">
          {buttons.map((button) => (
            <button
              key={button.label}
              onClick={() => navigate(button.path)}
              className={`w-full border rounded-lg py-3 font-semibold flex items-center justify-center transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
                  : "bg-gray-50 border-gray-200 text-black hover:bg-gray-200"
              }`}
            >
              {button.icon}
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </Layout>
  );
};
