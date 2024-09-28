import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import NestedItem from "./NestedItem";
import { DzikirItemType, fontSizes, SubItem } from "../types/types";
import { useThemeContext } from "../hooks/useThemeContext"; // Import the ThemeContext

interface DzikirItemProps {
  item: DzikirItemType; // Gunakan tipe DzikirItemType
  index: number;
  counts: number[];
  showNumber: boolean[];
  onIconClick: (index: number) => void;
}

const DzikirItem: React.FC<DzikirItemProps> = ({
  item,
  index,
  counts,
  showNumber,
  onIconClick,
}) => {
  const { theme, fontSize, translationVisible, latinVisible } =
    useThemeContext(); // Access the theme, fontSize, translationVisible, and latinVisible from context

  const selectedFontSize =
    fontSizes.find((size) => size.value === fontSize) || fontSizes[1]; // Default to Medium

  return (
    <div
      className={`mb-6 p-4 rounded-lg shadow-lg border hover:shadow-xl ${
        theme === "dark"
          ? "bg-gray-800 border-gray-700"
          : "bg-gray-50 border-gray-200"
      }`}
    >
      <h2
        className={`text-xl font-semibold mb-2 ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        {item.title}
      </h2>

      {/* Arabic text with dynamic font size */}
      {item.arabic && (
        <p
          className={`leading-relaxed text-right font-arabic ${
            selectedFontSize.size
          } ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
        >
          {item.arabic}
        </p>
      )}

      {/* Conditionally show Latin text */}
      {latinVisible && item.latin && (
        <p
          className={`italic mt-1 ${
            theme === "dark" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {item.latin}
        </p>
      )}

      {/* Conditionally show translation text */}
      {translationVisible && item.translation && (
        <p
          className={`mt-1 ${
            theme === "dark" ? "text-gray-200" : "text-gray-700"
          }`}
        >
          {item.translation}
        </p>
      )}

      {/* Display nested items if available */}
      {item.data && (
        <div
          className={`mt-4 pl-4 border-l-2 ${
            theme === "dark" ? "border-gray-600" : "border-gray-300"
          }`}
        >
          {item.data.map((subItem: SubItem, subIndex: number) => (
            <NestedItem key={subIndex} subItem={subItem} />
          ))}
        </div>
      )}

      {/* Display counts and icons */}
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={() => onIconClick(index)}
          className="flex flex-col items-center"
        >
          {showNumber[index] ? (
            <span className="h-10 w-10 flex items-center justify-center text-xl text-blue-500">
              {counts[index]}
            </span>
          ) : counts[index] >= item.repeat ? (
            <CheckCircleIcon className="h-10 w-10 text-green-600" />
          ) : (
            <XCircleIcon className="h-10 w-10 text-gray-400" />
          )}
          <span
            className={`mt-2 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Tap Count: {counts[index]} / {item.repeat}
          </span>
        </button>
      </div>
    </div>
  );
};

export default DzikirItem;
