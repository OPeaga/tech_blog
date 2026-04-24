"use server";

import { postRepository } from "@/app/repositories/post-postgres-respository";
import { crudState } from "@/app/repositories/post-repository";

export async function createPost(
  prevState: crudState,
  formData: FormData,
): Promise<crudState> {
  return postRepository.createPost(prevState, formData);
}

export async function updatePost(
  prevState: crudState,
  formData: FormData,
): Promise<crudState> {
  return postRepository.updatePost(prevState, formData);
}
