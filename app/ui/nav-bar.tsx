import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-zinc-950 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
      <Link
        href="./"
        className="text-lg font-semibold tracking-tight text-zinc-100 hover:text-white transition-colors"
      >
        Tech Blog
      </Link>
      <div className="flex items-center gap-8">
        <Link
          href="./"
          className="text-zinc-400 font-medium hover:text-zinc-100 transition-colors text-sm uppercase tracking-wide"
        >
          Home
        </Link>
        <Link
          href="./about"
          className="text-zinc-400 font-medium hover:text-zinc-100 transition-colors text-sm uppercase tracking-wide"
        >
          About
        </Link>
        <Link
          href="./login"
          className="text-zinc-400 font-medium hover:text-zinc-100 transition-colors text-sm uppercase tracking-wide"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
