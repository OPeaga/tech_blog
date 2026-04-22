import { post } from "@/app/types/blog";
import { crudState, PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  "app",
  "data",
  "blog-posts.json",
);

export class JsonPostRepository implements PostRepository {
  private async readFromFile() {
    const jsonFile = await readFile(JSON_POSTS_FILE_PATH, "utf-8");
    return JSON.parse(jsonFile) as post[];
  }

  async findAll() {
    const posts = await this.readFromFile();
    return posts;
  }

  async findById(id: string): Promise<post> {
    const posts = await this.readFromFile();
    const post = posts.find((post) => post.id === id);

    if (!post) {
      throw new Error(`Post não encontrado : ${id}`);
    }

    return post;
  }

  async updatePost(
    prevState: crudState,
    Formdata: FormData,
  ): Promise<crudState> {
    return {
      message: "",
      errors: {
        theme: [],
        text: [],
      },
    };
  }

  async createPost(
    prevState: crudState,
    Formdata: FormData,
  ): Promise<crudState> {
    return {
      message: "",
      errors: {
        theme: [],
        text: [],
      },
    } as crudState;
  }
}

export const postRepository: PostRepository = new JsonPostRepository();
