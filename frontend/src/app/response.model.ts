export interface ResModel<Type> {
  result: Type[];
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
