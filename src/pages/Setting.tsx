import { Helmet } from "react-helmet-async";
import { useState } from "react";
import {
  Switch,
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import {
  Cog6ToothIcon,
  CheckIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import Layout from "../components/Layout";

// Font size options
const fontSizes = [
  { name: "Small", value: "small", size: "text-sm" },
  { name: "Medium", value: "medium", size: "text-base" },
  { name: "Large", value: "large", size: "text-lg" },
];

export const Setting = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMeaningVisible, setIsMeaningVisible] = useState(true);
  const [isLatinVisible, setIsLatinVisible] = useState(true);
  const [selectedFontSize, setSelectedFontSize] = useState(fontSizes[1]); // Default to Medium

  return (
    <Layout>
      <Helmet>
        <title>Setting Al-Matsurat Online</title>
        <meta name="description" content="Setting of Al-Matsurat Online" />
      </Helmet>

      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <Cog6ToothIcon className="w-6 h-6" />
          <h1 className="text-2xl font-bold">Setting</h1>
        </div>

        {/* Font Preview */}
        <div
          className={`mt-6 p-4 border rounded-lg bg-gray-50 ${selectedFontSize.size}`}
        >
          <p className="font-bold">Font Size Preview</p>
          <p>This is a preview of the selected font size.</p>
        </div>

        {/* Settings Group (without separated borders) */}
        <div className="border rounded-lg divide-y divide-gray-200">
          {/* Theme Toggle */}
          <div className="flex justify-between items-center py-4 px-4">
            <span>Dark Mode</span>
            <Switch
              checked={isDarkMode}
              onChange={setIsDarkMode}
              className={`${isDarkMode ? "bg-blue-600" : "bg-gray-200"}
                relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${
                  isDarkMode ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>

          {/* Toggle Meaning Display */}
          <div className="flex justify-between items-center py-4 px-4">
            <span>Tampilkan Arti</span>
            <Switch
              checked={isMeaningVisible}
              onChange={setIsMeaningVisible}
              className={`${isMeaningVisible ? "bg-blue-600" : "bg-gray-200"}
                relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${
                  isMeaningVisible ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>

          {/* Toggle Latin Display */}
          <div className="flex justify-between items-center py-4 px-4">
            <span>Tampilkan Latin</span>
            <Switch
              checked={isLatinVisible}
              onChange={setIsLatinVisible}
              className={`${isLatinVisible ? "bg-blue-600" : "bg-gray-200"}
                relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${
                  isLatinVisible ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>

          {/* Font Size Selector - Inline with Switch */}
          <div className="flex justify-between items-center py-4 px-4">
            <span>Font Size</span>
            <Listbox value={selectedFontSize} onChange={setSelectedFontSize}>
              <div className="relative">
                <ListboxButton className="relative w-36 cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">
                    {selectedFontSize.name}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </ListboxButton>
                {/* Display Listbox to open upwards */}
                <ListboxOptions className="absolute bottom-full mb-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {fontSizes.map((size) => (
                    <ListboxOption
                      key={size.value}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                        }`
                      }
                      value={size}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {size.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                              <CheckIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </div>
            </Listbox>
          </div>
        </div>
      </div>
    </Layout>
  );
};
