import { ReactNode, Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeftIcon, HeartIcon } from "@heroicons/react/24/solid";
import { Header } from "./Header";
import { Transition } from "@headlessui/react"; // Import Transition
import { useThemeContext } from "../hooks/useThemeContext"; // Import ThemeContext untuk Dark Mode

export default function Layout({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useThemeContext(); // Mengambil theme dari context

  // Check if user is on the home page
  const isHome = location.pathname === "/";

  return (
    <div
      className={`min-h-screen px-4 py-6 flex flex-col items-center transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-md w-full">
        <nav className="mb-6 flex items-center justify-between">
          {/* Back button only shown if not on the home page */}
          {!isHome && (
            <button
              onClick={() => navigate(-1)}
              className={`flex items-center ${
                theme === "dark"
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              <ArrowLeftIcon className="h-6 w-6" />
              <span className="ml-2">Back</span>
            </button>
          )}
          {/* Ensure hamburger is always at the right */}
          <div className={`${isHome ? "ml-auto" : ""}`}>
            <Header />
          </div>
        </nav>

        {/* Transition for page content */}
        <Transition
          as={Fragment}
          appear={true}
          show={true}
          enter="transition-transform duration-500"
          enterFrom="transform scale-75"
          enterTo="transform scale-100"
          leave="transition-transform duration-500"
          leaveFrom="transform scale-100"
          leaveTo="transform scale-75"
        >
          <div>{children}</div>
        </Transition>

        <footer className="mt-10 text-sm text-center transition-colors duration-300">
          <p className={theme === "dark" ? "text-gray-400" : "text-gray-500"}>
            created with{" "}
            <a
              href="https://aliifam.com" // Ganti dengan link yang diinginkan
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transform transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <HeartIcon
                className={`h-5 w-5 inline ${
                  theme === "dark"
                    ? "text-red-500 hover:text-red-600"
                    : "text-red-500 hover:text-red-600"
                }`}
              />
            </a>{" "}
            in Yogyakarta, Indonesia
          </p>
        </footer>
      </div>
    </div>
  );
}
