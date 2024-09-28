import { fontSizes, SubItem } from "../types/types";
import { useThemeContext } from "../hooks/useThemeContext"; // Import the ThemeContext

interface NestedItemProps {
  subItem: SubItem; // Gunakan tipe SubItem
}

const NestedItem: React.FC<NestedItemProps> = ({ subItem }) => {
  const { theme, fontSize, latinVisible, translationVisible } =
    useThemeContext(); // Access the theme, fontSize, latinVisible, and translationVisible from context
  const selectedFontSize =
    fontSizes.find((size) => size.value === fontSize) || fontSizes[1]; // Default to medium if fontSize is not set

  return (
    <div className="mb-2">
      <h3
        className={`text-lg font-medium ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        {subItem.title}
      </h3>

      {/* Arabic text with dynamic font size */}
      <p
        className={`leading-relaxed text-right font-arabic ${
          selectedFontSize.size
        } ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
      >
        {subItem.arabic}
      </p>

      {/* Conditionally show Latin text based on latinVisible */}
      {latinVisible && subItem.latin && (
        <p
          className={`text-gray-500 italic ${
            theme === "dark" ? "text-gray-300" : "text-gray-500"
          }`}
        >
          {subItem.latin}
        </p>
      )}

      {/* Conditionally show translation text based on translationVisible */}
      {translationVisible && subItem.translation && (
        <p
          className={`${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
        >
          {subItem.translation}
        </p>
      )}
    </div>
  );
};

export default NestedItem;
