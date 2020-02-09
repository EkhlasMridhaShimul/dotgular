import { PostModel } from "./post.model";

export interface ResModel {
  result: PostModel[];
  totalnotes: number;
  currentPage: number;
}
