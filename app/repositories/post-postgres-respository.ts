import { post } from "../types/blog";
import { crudState, PostRepository } from "./post-repository";
import { prisma } from "@/app/lib/prisma";

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export class PostgressPostRepository implements PostRepository {
  async findAll(): Promise<post[]> {
    const posts = await prisma.post.findMany({
      include: { user: true },
      orderBy: { publishedAt: "desc" },
    });

    return posts.map((p) => ({
      id: p.id,
      theme: p.theme,
      subtheme: p.subtheme ?? undefined,
      text: p.text,
      publishedAt: formatDate(p.publishedAt),
      user: {
        id: p.user.id,
        name: p.user.name,
        img: p.user.img,
        bio: p.user.bio ?? undefined,
        createdAt: formatDate(p.user.createdAt),
      },
    }));
  }

  async findById(id: string): Promise<post> {
    const p = await prisma.post.findUnique({
      where: { id },
      include: { user: true },
    });

    if (!p) {
      throw new Error(`Post not found: ${id}`);
    }

    return {
      id: p.id,
      theme: p.theme,
      subtheme: p.subtheme ?? undefined,
      text: p.text,
      publishedAt: formatDate(p.publishedAt),
      user: {
        id: p.user.id,
        name: p.user.name,
        img: p.user.img,
        bio: p.user.bio ?? undefined,
        createdAt: formatDate(p.user.createdAt),
      },
    };
  }

  async updatePost(
    // prevState: crudState,
    formData: FormData,
  ): Promise<crudState> {
    const id = formData.get("id") as string;
    const theme = formData.get("theme") as string;
    const text = formData.get("text") as string;
    const subtheme = (formData.get("subtheme") as string) || undefined;

    const errors: crudState["errors"] = {};

    if (!theme || theme.trim().length === 0) {
      errors.theme = ["Theme is required."];
    }
    if (!text || text.trim().length === 0) {
      errors.text = ["Text is required."];
    }

    if (errors.theme || errors.text) {
      return { errors, message: "Validation failed." };
    }

    await prisma.post.update({
      where: { id },
      data: { theme, text, subtheme: subtheme ?? null },
    });

    return { message: "Post updated successfully.", errors: {} };
  }

  async createPost(
    // prevState: crudState,
    formData: FormData,
  ): Promise<crudState> {
    // const userId = formData.get("userId") as string;
    const userId = "cmobl6wop00064w72n8swvrn5";
    const theme = formData.get("theme") as string;
    const text = formData.get("text") as string;
    const subtheme = (formData.get("subtheme") as string) || undefined;

    const errors: crudState["errors"] = {};

    if (!theme || theme.trim().length === 0) {
      errors.theme = ["Theme is required."];
    }
    if (!text || text.trim().length === 0) {
      errors.text = ["Text is required."];
    }

    if (errors.theme || errors.text) {
      return { errors, message: "Validation failed." };
    }

    await prisma.post.create({
      data: {
        userId,
        theme,
        text,
        subtheme: subtheme ?? null,
      },
    });

    return { message: "Post created successfully.", errors: {} };
  }
}

export const postRepository = new PostgressPostRepository();
