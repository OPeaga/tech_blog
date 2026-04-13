import { post } from "@/app/types/blog";
import postsData from "@/app/data/blog-posts.json";

export function fetchPosts() {
  try {
    const data: post[] = postsData;
    return { data, message: "Fetch completed" };
  } catch (reason) {
    console.log(`Failed to fetch blog posts ${reason}`);
    return { data: null, message: reason };
  }
}
