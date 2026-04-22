import { post } from "../types/blog";
import { crudState, PostRepository } from "./post-repository";

export class PostgressPostRepository implements PostRepository {
  findAll(): Promise<post[]> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<post> {
    throw new Error("Method not implemented.");
  }
  updatePost(prevState: crudState, Formdata: FormData): Promise<crudState> {
    throw new Error("Method not implemented.");
  }
  createPost(prevState: crudState, Formdata: FormData): Promise<crudState> {
    throw new Error("Method not implemented.");
  }
  
}