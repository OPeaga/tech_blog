import { fetchPosts } from "@/app/lib/data";
import { Post } from "./post";

export default async function Posts() {
  const posts = await fetchPosts();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-6 py-8 max-w-5xl mx-auto w-full">
      {posts.data && posts.data.map(
        (post) => 
        {return <Post key={post.id} {...post} />}
      )}
    </div>
  );
}
