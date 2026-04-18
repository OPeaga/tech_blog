import PostDetail from "../ui/post-details";
import { postRepository } from "@/app/repositories/post-json-repository";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;

  let post = null;
  try {
    post = await postRepository.findById(postId);
  } catch {
    notFound();
  }

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-12 text-slate-500">
        Post not found.
      </div>
    );
  }

  return <PostDetail prop={post} />;
}
