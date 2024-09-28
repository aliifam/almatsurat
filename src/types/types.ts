// types.ts
export interface SubItem {
  title: string;
  arabic: string;
  latin?: string;
  translation?: string;
}

export interface DzikirItemType {
  title: string;
  arabic: string;
  latin?: string;
  translation?: string;
  repeat: number;
  data?: SubItem[];
}

export const fontSizes = [
  { name: "Small", value: "small", size: "text-2xl" },
  { name: "Medium", value: "medium", size: "text-3xl" },
  { name: "Large", value: "large", size: "text-4xl" },
];
