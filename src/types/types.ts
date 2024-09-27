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
