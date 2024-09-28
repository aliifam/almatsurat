import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import Layout from "../components/Layout";
import { useThemeContext } from "../hooks/useThemeContext"; // Import ThemeContext

export const Error = () => {
  const { theme } = useThemeContext(); // Dapatkan tema dari context

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-full text-center">
        <ExclamationTriangleIcon className="h-24 w-24 text-yellow-400" />
        <h1
          className={`text-4xl font-bold ${
            theme === "dark" ? "text-white" : "text-gray-700"
          }`}
        >
          404
        </h1>
        <p
          className={`mt-2 text-xl ${
            theme === "dark" ? "text-gray-300" : "text-gray-500"
          }`}
        >
          Sorry, Not Found
        </p>
      </div>
    </Layout>
  );
};
