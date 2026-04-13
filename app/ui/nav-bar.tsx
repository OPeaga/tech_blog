import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-400 shadow-md px-8 py-4 flex items-center justify-between sticky top-0 z-10">
      <Link
        href="./"
        className="text-xl tracking-tight text-slate-900 hover:text-slate-200 transition-colors"
      >
        Tech Blog
      </Link>
      <div className="flex items-center gap-8">
        <Link
          href="./"
          className="text-slate-800 font-medium hover:text-slate-200 transition-colors text-sm uppercase tracking-wide"
        >
          Home
        </Link>
        <Link
          href="./about"
          className="text-slate-800 font-medium hover:text-slate-200 transition-colors text-sm uppercase tracking-wide"
        >
          About
        </Link>
      </div>
    </nav>
  );
}
