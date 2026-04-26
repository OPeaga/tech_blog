import { notFound } from "next/navigation";
import { findPostByIdController } from "@/app/controllers/post-controller";
import EditPostForm from "../../ui/edit-post-form";

export default async function Page({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;

  let post = null;
  try {
    post = await findPostByIdController(postId);
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

  return <EditPostForm post={post} />;
}
