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
    </Layout>
  );
};
