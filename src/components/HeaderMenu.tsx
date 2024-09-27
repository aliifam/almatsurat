import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";

export const HeaderMenu = () => {
  const location = useLocation();

  // Function to check if the current route matches the location
  const isActive = (path: string) => location.pathname === path;
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="flex items-center">
        <Bars3Icon className="w-6 h-6 text-gray-700" />
      </MenuButton>
      <MenuItems
        transition
        className="origin-top-right transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div className="py-1">
          <MenuItem>
            {({ active }) => (
              <Link
                to="/"
                className={`${isActive("/") ? "bg-blue-100 font-bold" : ""} ${
                  active ? "bg-gray-100" : ""
                } block px-4 py-2 text-sm text-gray-700`}
              >
                Home
              </Link>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <Link
                to="/about"
                className={`${
                  isActive("/about") ? "bg-blue-100 font-bold" : ""
                } ${
                  active ? "bg-gray-100" : ""
                } block px-4 py-2 text-sm text-gray-700`}
              >
                About
              </Link>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <Link
                to="/setting"
                className={`${
                  isActive("/setting") ? "bg-blue-100 font-bold" : ""
                } ${
                  active ? "bg-gray-100" : ""
                } block px-4 py-2 text-sm text-gray-700`}
              >
                Setting
              </Link>
            )}
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};
