import PostDetail from "../ui/post-details";
import { findPostByIdController } from "@/app/controllers/post-controller";
import { notFound } from "next/navigation";
import { Suspense } from "react";

async function PostFetcher({ id }: { id: string }) {
  let post = null;
  try {
    post = await findPostByIdController(id);
  } catch {
    notFound();
  }

  return <PostDetail prop={post} />;
}

export default async function Page({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;

  return (
    <Suspense
      fallback={
        <div className="flex justify-center p-12 text-zinc-500">
          Loading post...
        </div>
      }
    >
      <PostFetcher id={postId} />
    </Suspense>
  );
}
