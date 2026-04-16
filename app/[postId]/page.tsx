import PostDetail from "../ui/post-details";

export default async function Page({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;
  return <PostDetail id={postId} />;
}
