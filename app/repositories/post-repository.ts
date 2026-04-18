import { post } from "../types/blog";

export interface PostRepository {
  findAll(): Promise<post[]>;
  findById(id: string): Promise<post>;
}
