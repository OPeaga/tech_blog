import Image from "next/image";
import Link from "next/link";
import { post } from "@/app/types/blog";

export default function PostDetails({ prop }: { prop: post }) {
  const { user, publishedAt, theme, subtheme, text: postText } = prop;

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex-1 bg-zinc-50 w-full py-12 sm:py-20 flex justify-center px-4 sm:px-6">
      <article className="w-full max-w-2xl bg-white border border-zinc-200 shadow-sm rounded-2xl p-8 sm:p-12 flex flex-col gap-8">
        {/* Header */}
        <header className="flex items-center gap-4">
          {user.img ? (
            <Image
              src={user.img}
              alt={user.name}
              width={56}
              height={56}
              className="rounded-full object-cover ring-1 ring-zinc-200"
            />
          ) : (
            <div className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center text-lg font-bold text-white ring-1 ring-zinc-200">
              {initials}
            </div>
          )}
          <div className="flex flex-col gap-0.5">
            <span className="font-semibold text-zinc-900 text-lg tracking-tight">
              {user.name}
            </span>
            <span className="text-xs font-medium text-slate-500 uppercase tracking-widest">
              {publishedAt}
            </span>
          </div>
        </header>

        {/* Content */}
        <div className="text-zinc-800 leading-relaxed text-lg font-medium whitespace-pre-wrap">
          {postText}
        </div>

        {/* Tags & Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-zinc-100 mt-2">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-md bg-zinc-100 text-zinc-700 border border-zinc-200">
              {theme}
            </span>
            {subtheme && (
              <span className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200">
                {subtheme}
              </span>
            )}
          </div>

          <Link
            href="./"
            className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-200 flex items-center justify-center w-6 h-6 rounded-full bg-zinc-100 group-hover:bg-zinc-200">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </span>
            Back to posts
          </Link>
        </div>
      </article>
    </div>
  );
}
