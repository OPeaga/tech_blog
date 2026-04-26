"use server";

import { postRepository } from "@/app/repositories/post-postgres-respository";
import { crudState } from "@/app/repositories/post-repository";
import { post } from "@/app/types/blog";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function findAllPostsService(): Promise<post[]> {
  return postRepository.findAll();
}

export async function findPostByIdService(id: string): Promise<post> {
  return postRepository.findById(id);
}

export async function createPostService(
  formData: FormData,
): Promise<crudState> {
  await postRepository.createPost(formData);

  revalidatePath("/");
  redirect("/"); // sucesso
}

export async function updatePostService(
  formData: FormData,
): Promise<crudState> {
  await postRepository.updatePost(formData);

  revalidatePath("/");
  redirect("/"); // sucesso
}
