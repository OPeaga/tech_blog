import { Post } from "@/app/ui/post";
import { title, text, tag, btn } from "@/app/ui/templates/classnames";
import Link from "next/link";
import { findAllPostsController } from "@/app/controllers/post-controller";

const ME = {
  name: "Ph",
  email: "ph.ph365@gmail.com",
  id: "u1",
  img: null as string | null,
  bio: "Software developer writing about technology, career, and building things.",
  joinedAt: "2024-01-01",
};

export default async function PersonalPage() {
  const posts = await findAllPostsController();

  const myPosts = posts?.filter((p) => p.user.id === ME.id) ?? [];

  const initials = ME.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <main className="flex-1">
      <section className="py-14 px-6 border-b border-zinc-100 bg-white">
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-20 h-20 rounded-full bg-zinc-900 flex items-center justify-center text-2xl font-bold text-zinc-100 ring-4 ring-zinc-100 shrink-0">
            {initials}
          </div>

          <div className="flex flex-col gap-3 text-center sm:text-left flex-1">
            <div className="flex flex-col gap-1">
              <h1 className={title.page}>{ME.name}</h1>
              <p className={text.muted}>{ME.email}</p>
            </div>

            <p className={text.body}>{ME.bio}</p>

            <div className="flex items-center gap-3 justify-center sm:justify-start flex-wrap">
              <span className={tag.secondary}>
                {myPosts.length} {myPosts.length === 1 ? "post" : "posts"}
              </span>
              <span className={text.muted}>
                Member since{" "}
                {new Date(ME.joinedAt).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className={`${title.section} mb-6`}>My Posts</h2>

        {myPosts.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-20 text-center">
            <p className={text.lead}>You havent published any posts yet.</p>
            <Link href="/post/create" className={btn.secondary}>
              Write your first post
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {myPosts.map((post) => (
              <Post key={post.id} {...post} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
