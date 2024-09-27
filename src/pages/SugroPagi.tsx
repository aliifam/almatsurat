import { Helmet } from "react-helmet-async";
import Layout from "../components/Layout";
import { SunIcon } from "@heroicons/react/24/solid";
import data from "../data/sugro-pagi.json";

export const SugroPagi = () => {
  console.log(data);
  return (
    <Layout>
      <Helmet>
        <title>Almatsurat Sugro Pagi</title>
        <meta name="description" content="Almatsurat Sugro Pagi" />
        <meta name="keywords" content="Almatsurat Sugro Pagi" />
      </Helmet>
      {/* tampilkan matsurat */}
      <h1 className="text-3xl font-bold mb-4 text-center">
        Al-Matsurat Sugro Pagi
        <SunIcon className="h-8 w-8 inline-block ml-2" />
      </h1>
      {data.data.map((item, index) => (
        <div key={index} className="mb-6 p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
          {item.arabic && (
            <p className="text-lg font-bold text-right text-gray-700">
              {item.arabic}
            </p>
          )}
          {item.latin && (
            <p className="text-gray-500 italic mt-1">{item.latin}</p>
          )}
          {item.translation && (
            <p className="text-gray-700 mt-1">{item.translation}</p>
          )}

          {/* Check if there are nested items (like Surat Al-Fātiḥah) */}
          {item.data && (
            <div className="mt-4 pl-4 border-l-2 border-gray-300">
              {item.data.map((subItem, subIndex) => (
                <div key={subIndex} className="mb-2">
                  <h3 className="text-lg font-medium">{subItem.title}</h3>
                  <p className="text-lg font-bold text-right text-gray-700">
                    {subItem.arabic}
                  </p>
                  <p className="text-gray-500 italic">{subItem.latin}</p>
                  <p className="text-gray-700">{subItem.translation}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </Layout>
  );
};
