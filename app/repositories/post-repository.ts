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
  updatePost(prevState: crudState, Formdata: FormData): Promise<crudState>;
  createPost(prevState: crudState, Formdata: FormData): Promise<crudState>;
}
