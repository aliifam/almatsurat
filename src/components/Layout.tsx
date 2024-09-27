import { ReactNode } from "react"; // Import hamburger icon
import { useNavigate } from "react-router-dom";
import { HeaderMenu } from "./HeaderMenu";

export default function Layout({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-4 py-6 flex flex-col items-center">
      <div className="max-w-md w-full">
        <nav className="mb-6 flex justify-end">
          <HeaderMenu />
        </nav>
        {children}
        <footer className="mt-10 text-gray-500 text-sm text-center">
          create with ❤️ by AAM in Yogyakarta
        </footer>
      </div>
    </div>
  );
}
