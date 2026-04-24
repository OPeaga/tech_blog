"use server";

import { postRepository } from "@/app/repositories/post-postgres-respository";
import { crudState } from "@/app/repositories/post-repository";
import { redirect } from "next/navigation";

export async function createPost(
  prevState: crudState,
  formData: FormData,
): Promise<crudState> {
  const result = await postRepository.createPost(prevState, formData);

  !!result.errors && redirect("/"); // sucesso

  return result;
}

export async function updatePost(
  prevState: crudState,
  formData: FormData,
): Promise<crudState> {
  return postRepository.updatePost(prevState, formData);
}
