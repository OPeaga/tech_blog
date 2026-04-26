import { crudState } from "../repositories/post-repository";
import {
  createPostService,
  findAllPostsService,
  findPostByIdService,
  updatePostService,
} from "../services/post-service";
import { post } from "../types/blog";
import { z } from "zod";

const postFormSchema = z.object({
  theme: z.string().min(1, "Theme is required."),
  subtheme: z.string().optional(), // optional() indica que o usuário pode não informar
  text: z.string().min(1, "Text is required."),
});

export async function findAllPostsController(): Promise<post[]> {
  return findAllPostsService();
}

export async function findPostByIdController(id: string): Promise<post> {
  return findPostByIdService(id);
}

export async function createPostController(
  prevState: crudState,
  formData: FormData,
): Promise<crudState> {
  const validatedFields = postFormSchema.safeParse({
    theme: formData.get("theme"),
    subtheme: formData.get("subtheme"),
    text: formData.get("text"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Failed to create a new Post",
    };
  }

  const result = await createPostService(formData);

  return result;
}

export async function updatePostController(
  prevState: crudState,
  formData: FormData,
): Promise<crudState> {
  const validatedFields = postFormSchema.safeParse({
    theme: formData.get("theme"),
    subtheme: formData.get("subtheme"),
    text: formData.get("text"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Failed to update the Post",
    };
  }

  const result = await updatePostService(formData);

  return result;
}

