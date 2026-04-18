import Image from "next/image";
import Link from "next/link";
import { post } from "@/app/types/blog";
import { link, text, tag } from "@/app/ui/templates/classnames";

export default async function PostDetails({ prop }: { prop: post }) {
  const { user, publishedAt, theme, subtheme, text: postText } = prop;

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="max-w-2xl mx-auto px-6 py-14 flex flex-col gap-8">
      <header className="flex items-center gap-4">
        {user.img ? (
          <Image
            src={user.img}
            alt={user.name}
            width={48}
            height={48}
            className="rounded-full object-cover ring-2 ring-zinc-200"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-sm font-bold text-zinc-100 ring-2 ring-zinc-200">
            {initials}
          </div>
        )}
        <div className="flex flex-col gap-0.5">
          <span className={text.strong}>{user.name}</span>
          <span className={text.caption}>{publishedAt}</span>
        </div>
      </header>

      <div className="flex gap-2">
        <span className={tag.primary}>{theme}</span>
        {subtheme && <span className={tag.muted}>{subtheme}</span>}
      </div>

      <p className={text.body}>{postText}</p>

      <Link href="./" className={link.back}>
        <span className="group-hover:-translate-x-0.5 transition-transform duration-150">←</span>
        Back to posts
      </Link>
    </article>
  );
}
