import { crudState } from "../repositories/post-repository";
import { createPostService } from "../services/post-service";
import { z } from "zod";

const postFormSchema = z.object({
  theme: z.string().min(1, "Theme is required."),
  subtheme: z.string().optional(), // optional() indica que o usuário pode não informar
  text: z.string().min(1, "Text is required."),
});

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
