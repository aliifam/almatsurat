import { ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeftIcon, HeartIcon } from "@heroicons/react/24/solid";
import { HeaderMenu } from "./HeaderMenu";

export default function Layout({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Check if user is on the home page
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen px-4 py-6 flex flex-col items-center">
      <div className="max-w-md w-full">
        <nav className="mb-6 flex items-center justify-between">
          {/* Back button only shown if not on the home page */}
          {!isHome && (
            <button
              onClick={() => navigate("/")}
              className="flex items-center text-gray-700 hover:text-black"
            >
              <ArrowLeftIcon className="h-6 w-6" />
              <span className="ml-2">Back</span>
            </button>
          )}
          {/* Ensure hamburger is always at the right */}
          <div className={`${isHome ? "ml-auto" : ""}`}>
            <HeaderMenu />
          </div>
        </nav>
        {children}
        <footer className="mt-10 text-gray-500 text-sm text-center">
          <p>
            created with{" "}
            <a
              href="https://aliifam.com" // Ganti dengan link yang diinginkan
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transform transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <HeartIcon className="h-5 w-5 inline text-red-500 hover:text-red-600" />
            </a>{" "}
            in Yogyakarta, Indonesia
          </p>
        </footer>
      </div>
    </div>
  );
}
