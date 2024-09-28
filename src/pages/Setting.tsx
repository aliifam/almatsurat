import { Helmet } from "react-helmet-async";
import { Fragment } from "react";
import {
  Switch,
  Listbox,
  ListboxButton,
  ListboxOptions,
  Transition,
  ListboxOption,
} from "@headlessui/react";
import {
  Cog6ToothIcon,
  CheckIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import Layout from "../components/Layout";
import { useThemeContext } from "../hooks/useThemeContext";

// Font size options
const fontSizes = [
  { name: "Small", value: "small", size: "text-2xl" },
  { name: "Medium", value: "medium", size: "text-3xl" },
  { name: "Large", value: "large", size: "text-4xl" },
];

export const Setting = () => {
  const {
    theme,
    toggleTheme,
    fontSize,
    changeFontSize,
    latinVisible,
    toggleLatin,
    translationVisible,
    toggleTranslation,
  } = useThemeContext(); // Use ThemeContext

  const selectedFontSize =
    fontSizes.find((size) => size.value === fontSize) || fontSizes[1]; // Default to Medium

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
          className={`mt-6 p-4 border rounded-lg ${
            theme === "dark"
              ? "bg-gray-800 text-white border-gray-700"
              : "bg-gray-50 text-black border-gray-200"
          }`}
        >
          <p className="font-bold">Preview Perubahan :</p>
          <p className={`text-right font-arabic ${selectedFontSize.size} mb-4`}>
            بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ
          </p>

          {latinVisible && (
            <p className="italic">Bismi llāhi ar-raḥmāni ar-raḥīm</p>
          )}

          {translationVisible && (
            <p>Dengan nama Allah Yang Maha Pengasih, Maha Penyayang</p>
          )}
        </div>

        {/* Settings Group */}
        <div
          className={`border rounded-lg divide-y divide-gray-200 ${
            theme === "dark" ? "bg-gray-700" : "bg-white"
          }`}
        >
          {/* Theme Toggle */}
          <div className="flex justify-between items-center py-4 px-4">
            <span>Dark Mode</span>
            <Switch
              checked={theme === "dark"} // Use theme from context
              onChange={toggleTheme}
              className={`${theme === "dark" ? "bg-blue-600" : "bg-gray-200"}
                relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200`}
            >
              <span
                className={`${
                  theme === "dark" ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>

          {/* Toggle Meaning Display */}
          <div className="flex justify-between items-center py-4 px-4">
            <span>Tampilkan Arti</span>
            <Switch
              checked={translationVisible}
              onChange={toggleTranslation} // Use toggleTranslation from context
              className={`${translationVisible ? "bg-blue-600" : "bg-gray-200"}
                relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200`}
            >
              <span
                className={`${
                  translationVisible ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>

          {/* Toggle Latin Display */}
          <div className="flex justify-between items-center py-4 px-4">
            <span>Tampilkan Latin</span>
            <Switch
              checked={latinVisible}
              onChange={toggleLatin} // Use toggleLatin from context
              className={`${latinVisible ? "bg-blue-600" : "bg-gray-200"}
                relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200`}
            >
              <span
                className={`${
                  latinVisible ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>

          {/* Font Size Selector */}
          <div className="flex justify-between items-center py-4 px-4">
            <span>Font Size</span>
            <Listbox
              value={selectedFontSize}
              onChange={(size) => changeFontSize(size.value)}
            >
              <div className="relative">
                <ListboxButton
                  className={`relative w-36 cursor-default rounded-lg py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white sm:text-sm ${
                    theme === "dark"
                      ? "bg-gray-800 text-white"
                      : "bg-white text-black"
                  }`}
                >
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

                {/* Transition for Listbox options */}
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="transform opacity-0 -translate-y-1"
                  enterTo="transform opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="transform opacity-100 translate-y-0"
                  leaveTo="transform opacity-0 -translate-y-1"
                >
                  <ListboxOptions
                    className={`absolute bottom-full mb-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ${
                      theme === "dark"
                        ? "bg-gray-800 text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    {fontSizes.map((size) => (
                      <ListboxOption
                        key={size.value}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-blue-600 text-white"
                              : theme === "dark"
                              ? "text-gray-300"
                              : "text-gray-900"
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
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>
      </div>
    </Layout>
  );
};
