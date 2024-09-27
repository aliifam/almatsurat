import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { SunIcon, MoonIcon, BookOpenIcon } from "@heroicons/react/24/solid"; // Import ikon yang diperlukan
import Layout from "../components/Layout";

export const Home = () => {
  const navigate = useNavigate();

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

      <div className="w-full max-w-md text-center py-10 px-2">
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
              className="w-full border rounded-lg bg-gray-50 text-black py-3 font-semibold hover:bg-gray-200 flex items-center justify-center"
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
