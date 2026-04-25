"use server";

import { postRepository } from "@/app/repositories/post-postgres-respository";
import { crudState } from "@/app/repositories/post-repository";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const postFormSchema = z.object({
  theme: z.string().min(1, "Theme is required."),
  subtheme: z.string().optional(), // optional() indica que o usuário pode não informar
  text: z.string().min(1, "Text is required."),
});

export async function createPostService(
  // prevState: crudState,
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

  // await postRepository.createPost(prevState, formData);
  await postRepository.createPost(formData);


  revalidatePath("/");
  redirect("/"); // sucesso
}

export async function updatePost(
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

  const result = await postRepository.updatePost(formData);

  if (!result.errors) {
    revalidatePath("/");
    redirect("/"); // sucesso
  }

  return result;
}
