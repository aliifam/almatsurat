import { Helmet } from "react-helmet-async";
import Layout from "../components/Layout";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useThemeContext } from "../hooks/useThemeContext"; // Import ThemeContext

export const About = () => {
  const { theme } = useThemeContext(); // Dapatkan tema dari context

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

      <p
        className={`leading-relaxed mb-4 p-4 border rounded-lg ${
          theme === "dark"
            ? "bg-gray-800 text-gray-300"
            : "bg-gray-50 text-gray-700"
        }`}
      >
        Al-Matsurat Online adalah progressive web app berupa website yang dapat
        diinstall juga layaknya aplikasi dan bekerja secara offline. Klik salah
        satu tombol untuk memilih dzikir yang ingin dibaca, lalu klik icon X
        untuk menambahkan hitungan.
      </p>

      <p
        className={`leading-relaxed mb-4 p-4 border rounded-lg ${
          theme === "dark"
            ? "bg-gray-800 text-gray-300"
            : "bg-gray-50 text-gray-700"
        }`}
      >
        Website ini open source, silahkan berkontribusi di{" "}
        <a
          href="https://github.com/aliifam/almatsurat" // Ganti dengan URL repo GitHub Anda
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          sini
        </a>
        , bila ada kesalahan dalam website terutama ayat dan doa nya mohon untuk
        segera melaporkan ke{" "}
        <a
          href="mailto:me@aliifam.com" // Ganti dengan email Anda
          className="text-blue-500 underline"
        >
          me@aliifam.com
        </a>
        . Jika setelah ada balasan email konfirmasi perbaikan namun belum
        terlihat perubahan, silahkan hapus uninstall website/hapus cache/hard
        reload website ini, terima kasih.
      </p>

      <p
        className={`leading-relaxed p-4 border rounded-lg ${
          theme === "dark"
            ? "bg-gray-800 text-gray-300"
            : "bg-gray-50 text-gray-700"
        }`}
      >
        Berikut sumber data yang digunakan dalam website ini:
        <ol className="list-decimal pl-8 mt-2">
          <li>
            <a
              href="https://quran.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              quran.com
            </a>
          </li>
          <li>
            <a
              href="https://almatsurat.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              almatsurat.net
            </a>
          </li>
        </ol>
      </p>
    </Layout>
  );
};
