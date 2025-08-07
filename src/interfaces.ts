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