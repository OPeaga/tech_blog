import { findAllPostsController } from "@/app/controllers/post-controller";
import { Post } from "./post";

export default async function Posts() {
  const posts = await findAllPostsController();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-6 py-8 max-w-5xl mx-auto w-full">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}
