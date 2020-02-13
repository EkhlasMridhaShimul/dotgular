import { PostModel } from "./post.model";

export interface ResModel<Type> {
  result: Type[];
  totalnotes: number;
  currentPage: number;
}
