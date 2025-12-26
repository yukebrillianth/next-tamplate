// Common type definitions

/**
 * Generic API response type
 */
export type ApiResponse<T> = {
  success: boolean;
  data: T;
  message?: string;
};

/**
 * Pagination type
 */
export type Pagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

/**
 * Paginated response type
 */
export type PaginatedResponse<T> = {
  data: T[];
  pagination: Pagination;
};

/**
 * Make certain keys of T optional
 */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * Make certain keys of T required
 */
export type RequiredBy<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;

/**
 * Extract the resolved type of a Promise
 */
export type Awaited<T> = T extends Promise<infer U> ? U : T;

/**
 * Extract props type from a React component
 */
export type PropsOf<T extends React.ComponentType<unknown>> =
  T extends React.ComponentType<infer P> ? P : never;
