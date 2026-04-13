import { fetchPosts } from "@/app/lib/data";
import { Post } from "./post";

export default async function Posts() {
  const posts = await fetchPosts();
  return (
    <div className="grid gap-4 p-6 max-w-xl mx-auto">
      {posts.data && posts.data.map((post) => <Post key={post.id} {...post} />)}
    </div>
  );
}
