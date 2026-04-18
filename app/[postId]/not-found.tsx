import Link from "next/link";
import { title, text, btn } from "@/app/ui/templates/classnames";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <span className="text-5xl font-extrabold text-zinc-200 select-none">
        404
      </span>
      <h2 className={title.section}>Post not found</h2>
      <p className={text.lead}>
        This post doesn&apos;t exist or may have been removed.
      </p>
      <Link href="/" className={btn.primary}>
        Back to Home
      </Link>
    </main>
  );
}
