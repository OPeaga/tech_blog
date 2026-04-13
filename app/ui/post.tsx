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
    <article className="flex flex-col gap-3 p-4 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
      <header className="flex items-center gap-3">
        {user.img ? (
          <Image
            src={user.img}
            alt={user.name}
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
        ) : (
          <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-600">
            {initials}
          </div>
        )}
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-gray-900">
            {user.name}
          </span>
          <span className="text-xs text-gray-400">{publishedAt}</span>
        </div>
      </header>

      <p className="text-sm text-gray-700 leading-relaxed">{text}</p>

      <footer className="flex gap-2">
        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
          {theme}
        </span>
        {subtheme && (
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
            {subtheme}
          </span>
        )}
      </footer>
    </article>
  );
}
