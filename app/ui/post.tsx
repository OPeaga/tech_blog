import Image from "next/image";
import { post } from "@/app/types/blog";
import Link from "next/link";
import { text, tag } from "@/app/ui/templates/classnames";

export function Post({ user, theme, subtheme, text: postText, publishedAt, id }: post) {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Link href={`./${id}`}>
      <article className="flex flex-col gap-4 p-5 border border-zinc-200 rounded-2xl bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
        <header className="flex items-center gap-3">
          {user.img ? (
            <Image
              src={user.img}
              alt={user.name}
              width={40}
              height={40}
              className="rounded-full object-cover ring-2 ring-zinc-100"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-xs font-bold text-zinc-100 ring-2 ring-zinc-100">
              {initials}
            </div>
          )}
          <div className="flex flex-col gap-0.5">
            <span className={text.strong}>{user.name}</span>
            <span className={text.caption}>{publishedAt}</span>
          </div>
        </header>

        <p className={`text-sm ${text.body} line-clamp-3`}>{postText}</p>

        <footer className="flex gap-2 pt-1">
          <span className={tag.primary}>{theme}</span>
          {subtheme && <span className={tag.muted}>{subtheme}</span>}
        </footer>
      </article>
    </Link>
  );
}
