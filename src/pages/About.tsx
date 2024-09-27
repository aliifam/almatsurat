import { Helmet } from "react-helmet-async";
import Layout from "../components/Layout";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>Tentang Al-Matsurat Online</title>
        <meta name="description" content="About page of Al-Matsurat Online" />
      </Helmet>
      <div className="flex items-center space-x-2 mb-5">
        <InformationCircleIcon className="w-6 h-6" />
        <h1 className="text-2xl font-bold">About</h1>
      </div>
      <p className="leading-relaxed mb-4 p-4 border rounded-lg bg-gray-50">
        Al-Matsurat Online adalah website yang dapat memudahkan pengguna dalam
        membaca dzikir Al-Matsurat harian. data dzikir yang ada di website ini
        diambil dari buku Al-Matsurat yang ditulis oleh Imam Hasan Al-Banna.
      </p>
      <p className="leading-relaxed p-4 border rounded-lg bg-gray-50">
        Website ini open source, silahkan berkontribusi di , bila ada kesalahan
        dalam website terutama ayat dan doa nya mohon untuk segera melaporkan di{" "}
      </p>
    </Layout>
  );
};
