import Image from "next/image";
import Link from "next/link";
import { post } from "@/app/types/blog";

export default async function PostDetails({
  prop
} : { prop : post }) {
  const { user, publishedAt, theme, subtheme, text } = prop;

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="max-w-2xl mx-auto px-6 py-12 flex flex-col gap-6">
      <header className="flex items-center gap-4">
        {user.img ? (
          <Image
            src={user.img}
            alt={user.name}
            width={48}
            height={48}
            className="rounded-full object-cover ring-2 ring-slate-200"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-sm font-bold text-slate-600 ring-2 ring-slate-300">
            {initials}
          </div>
        )}
        <div className="flex flex-col leading-tight">
          <span className="font-semibold text-slate-900">{user.name}</span>
          <span className="text-sm text-slate-400">{publishedAt}</span>
        </div>
      </header>

      <div className="flex gap-2">
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-200 text-slate-700">
          {theme}
        </span>
        {subtheme && (
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-500">
            {subtheme}
          </span>
        )}
      </div>
      <p className="text-slate-700 leading-relaxed">{text}</p>
      <Link
        href="./"
        className="self-start text-sm font-medium text-slate-600 hover:text-slate-900 flex items-center gap-1 transition-colors"
      >
        ← Back
      </Link>
    </article>
  );
}
