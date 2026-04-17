import PostDetail from "../ui/post-details";
import { fetchPostById } from "@/app/lib/action";

export default async function Page({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;
  const post = await fetchPostById(postId);

  if (!post.data) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-12 text-slate-500">
        Post not found.
      </div>
    );
  }

  const data = post.data;

  return <PostDetail prop={data} />;
}
