import { post } from "../types/blog";

export type crudState = {
  errors?: {
    theme?: string[];
    text?: string[];
  };
  message?: string | null;
};
export interface PostRepository {
  findAll(): Promise<post[]>;
  findById(id: string): Promise<post>;
  updatePost(Formdata: FormData): Promise<crudState>;
  createPost(Formdata: FormData): Promise<crudState>;
}
