import { createContext, useState, useEffect, ReactNode } from "react";

// Definisikan tipe untuk context value
interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
  fontSize: string;
  changeFontSize: (size: string) => void;
}

// Definisikan tipe untuk props provider
interface ThemeProviderProps {
  children: ReactNode;
}

// Membuat Context
export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export const ThemeContextProvider: React.FC<ThemeProviderProps> = ({
  children,
}) => {
  // Cek localStorage untuk tema dan ukuran font
  const getInitialTheme = (): string =>
    localStorage.getItem("theme") || "light";
  const getInitialFontSize = (): string =>
    localStorage.getItem("fontSize") || "medium";

  // State untuk tema dan ukuran font
  const [theme, setTheme] = useState<string>(getInitialTheme);
  const [fontSize, setFontSize] = useState<string>(getInitialFontSize);

  // Mengupdate localStorage setiap kali tema atau ukuran font berubah
  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("fontSize", fontSize);
  }, [theme, fontSize]);

  // Toggle tema antara light dan dark
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Mengatur ukuran font
  const changeFontSize = (size: string) => {
    setFontSize(size);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, fontSize, changeFontSize }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
