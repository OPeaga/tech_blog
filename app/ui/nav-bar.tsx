import Link from "next/link";
import { navLink } from "@/app/ui/templates/classnames";

export default function Navbar() {
  return (
    <nav className="bg-zinc-950 px-8 py-4 flex items-center justify-between sticky top-0 z-10 border-b border-zinc-800/60">
      <Link href="/" className={navLink.brand}>
        Tech Blog
      </Link>
      <div className="flex items-center gap-8">
        <Link href="/" className={navLink.base}>
          Home
        </Link>
        <Link href="/about" className={navLink.base}>
          About
        </Link>
        <Link href="/personal" className={navLink.base}>
          Profile
        </Link>
        <Link href="/login" className={navLink.base}>
          Login
        </Link>
        <Link href="/post/create" className={navLink.base}>
          Create a Post
        </Link>
      </div>
    </nav>
  );
}
