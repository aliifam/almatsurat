import { SubItem } from "../types/types";

interface NestedItemProps {
  subItem: SubItem; // Gunakan tipe SubItem
}

const NestedItem: React.FC<NestedItemProps> = ({ subItem }) => {
  return (
    <div className="mb-2">
      <h3 className="text-lg font-medium">{subItem.title}</h3>
      <p className="text-3xl leading-relaxed text-right text-gray-700 font-arabic">
        {subItem.arabic}
      </p>
      <p className="text-gray-500 italic">{subItem.latin}</p>
      <p className="text-gray-700">{subItem.translation}</p>
    </div>
  );
};

export default NestedItem;
