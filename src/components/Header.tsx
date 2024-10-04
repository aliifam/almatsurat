import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";
import { useThemeContext } from "../hooks/useThemeContext"; // Mengimpor ThemeContext untuk Dark Mode

export const Header = () => {
  const location = useLocation();
  const { theme } = useThemeContext(); // Mendapatkan tema dari context

  // Function to check if the current route matches the location
  const isActive = (path: string) => location.pathname === path;

  // Define menu items
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Setting", path: "/setting" },
  ];

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="flex items-center">
        <Bars3Icon
          className={`w-8 h-8 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        />
      </MenuButton>
      <MenuItems
        transition
        className={`origin-top-right transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 absolute right-0 mt-2 w-48 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-700"
        }`}
      >
        <div className="py-1">
          {menuItems.map((item) => (
            <MenuItem key={item.label}>
              {({ active }) => (
                <Link
                  to={item.path}
                  className={`${
                    isActive(item.path)
                      ? theme === "dark"
                        ? "bg-blue-800"
                        : "bg-blue-100"
                      : ""
                  } ${
                    active
                      ? theme === "dark"
                        ? "bg-gray-700"
                        : "bg-gray-100"
                      : ""
                  } block px-4 py-2 text-sm ${
                    theme === "dark" ? "text-white" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
};
