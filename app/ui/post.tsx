import Image from "next/image";
import { post } from "@/app/types/blog";

export function Post({ user, theme, subtheme, text, publishedAt }: post) {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="flex flex-col gap-4 p-5 border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 border-l-4 border-l-slate-400">
      <header className="flex items-center gap-3">
        {user.img ? (
          <Image
            src={user.img}
            alt={user.name}
            width={40}
            height={40}
            className="rounded-full object-cover ring-2 ring-slate-200"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-sm font-bold text-slate-600 ring-2 ring-slate-300">
            {initials}
          </div>
        )}
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-slate-900">
            {user.name}
          </span>
          <span className="text-xs text-slate-400">{publishedAt}</span>
        </div>
      </header>

      <p className="text-sm text-slate-700 leading-relaxed">{text}</p>

      <footer className="flex gap-2 pt-1">
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-200 text-slate-700">
          {theme}
        </span>
        {subtheme && (
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-500">
            {subtheme}
          </span>
        )}
      </footer>
    </article>
  );
}
