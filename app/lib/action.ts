"use server";

import blogData from "@/app/data/blog-posts.json";
import { post } from "../types/blog";

export async function fetchPostById(id: string) : Promise<{data: post | null, message: string}> {
  try {
    const data: post[] = blogData;
    const post = data.find((p) => p.id === id) ?? null;
    return { data: post, message: "Fetch completed" };
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    console.log(`Failed to fetch post ${id}: ${message}`);
    return { data: null, message };
  }
}
