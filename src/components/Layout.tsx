import { ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
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
          create with ❤️ by AAM in Yogyakarta
        </footer>
      </div>
    </div>
  );
}
