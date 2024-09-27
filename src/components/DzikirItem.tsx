import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import NestedItem from "./NestedItem";
import { DzikirItemType, SubItem } from "../types/types";

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
  return (
    <div className="mb-6 p-4 rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
      {item.arabic && (
        <p className="text-lg font-bold text-right text-gray-700">
          {item.arabic}
        </p>
      )}
      {item.latin && <p className="text-gray-500 italic mt-1">{item.latin}</p>}
      {item.translation && (
        <p className="text-gray-700 mt-1">{item.translation}</p>
      )}

      {item.data && (
        <div className="mt-4 pl-4 border-l-2 border-gray-300">
          {item.data.map((subItem: SubItem, subIndex: number) => (
            <NestedItem key={subIndex} subItem={subItem} />
          ))}
        </div>
      )}

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
          <span className="mt-2 text-gray-600">
            Tap Count: {counts[index]} / {item.repeat}
          </span>
        </button>
      </div>
    </div>
  );
};

export default DzikirItem;
