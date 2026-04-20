"use client";
import Link from "next/link";
import { navLink } from "@/app/ui/templates/classnames";
import { User } from "lucide-react";
import { LoginContext } from "../context";
import { useContext } from "react";

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
        {!useContext(LoginContext).id && (
          <Link href="/login" className={navLink.base}>
            <div className="flex gap-1.5">
              Login
              <User />
            </div>
          </Link>
        )}
        {useContext(LoginContext).id && (
          <>
            <Link href="/personal" className={navLink.base}>
              Profile
            </Link>
            <Link href="/post/create" className={navLink.base}>
              Create a Post
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
