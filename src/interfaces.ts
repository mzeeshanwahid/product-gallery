import type { ReactElement } from "react";

export interface PrimaryLayoutProps {
  children: ReactElement;
}

export interface MenuItemProps {
  name: string;
  path: string;
}

export interface PaginationComponentProps {
  count: number;
  pageSize: number;
  defaultPage: number;
  onPageChange: (e: any) => void;
}

export interface ProductInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  brand: string;
  availabilityStatus: string;
  images: string[];
  thumbnail: string;
}

export interface Pagination {
  pageNo: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

export interface ProductAPIResponse {
  data: ProductInfo[];
  pagination: Pagination;
}

export interface ProductCardProps {
  product: ProductInfo;
}

export interface RatingProps {
  value: number;
}

export interface CategoryProps {
  category: string;
  setCategory: (category: string) => void;
}

export interface TextPillProps {
  text: string;
  isSelcted: boolean;
  onClick: (category: string) => void;
}

export interface Sorting {
  id: string;
  value: string;
  order: string;
  name: string;
}

export interface SortingProps {
  sorting: Sorting | null;
  setSorting: (value: Sorting | null) => void;
}

export interface PriceRangeProps {
  price: number[];
  setPrice: (prices: number[]) => void;
}

export interface SearchProps {
  search: string;
  setSearch: (value: string) => void;
}

export interface ProductFiltersProps {
  onApply: (query: string | null) => void;
}

export interface SelectItem {
  label: string;
  value: string;
}

export interface ChakraSelectProps {
  items: SelectItem[];
  placeholder: string;
  category: string;
  setCategory: (value: string) => void;
}
