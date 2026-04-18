import Image from "next/image";
import { post } from "@/app/types/blog";
import Link from "next/link";

export function Post({ user, theme, subtheme, text, publishedAt, id }: post) {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Link href={`./${id}`}>
      <article className="flex flex-col gap-4 p-5 border border-zinc-200 rounded-2xl bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 border-l-4 border-l-zinc-300">
        <header className="flex items-center gap-3">
          {user.img ? (
            <Image
              src={user.img}
              alt={user.name}
              width={40}
              height={40}
              className="rounded-full object-cover ring-2 ring-zinc-200"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-sm font-bold text-zinc-600 ring-2 ring-zinc-200">
              {initials}
            </div>
          )}
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-zinc-900">
              {user.name}
            </span>
            <span className="text-xs text-zinc-400">{publishedAt}</span>
          </div>
        </header>

        <p className="text-sm text-zinc-600 leading-relaxed">{text}</p>

        <footer className="flex gap-2 pt-1">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600">
            {theme}
          </span>
          {subtheme && (
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-50 text-zinc-400 border border-zinc-200">
              {subtheme}
            </span>
          )}
        </footer>
      </article>
    </Link>
  );
}
