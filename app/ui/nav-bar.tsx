"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLink } from "@/app/ui/templates/classnames";
import { User, PenSquare, LogOut, ChevronDown, Code2 } from "lucide-react";
import { LoginContext } from "../contexts/context";
import { useContext } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function Navbar() {
  const { id, name, setLoginContext } = useContext(LoginContext);

  const path = usePathname();

  function signOut() {
    setLoginContext({ id: "", name: "" });
  }

  return (
    <nav className="bg-zinc-950 px-8 py-4 flex items-center justify-between sticky top-0 z-10 border-b border-zinc-800/60">
      <Link href="/" className={navLink.brand}>
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-700/60 text-zinc-100 shadow-[0_0_12px_rgba(255,255,255,0.05)]">
          <Code2 size={16} strokeWidth={2.5} />
        </div>
        Tech Blog
      </Link>
      <div className="flex items-center gap-8">
        <Link href="/" className={path === "/" ? navLink.active : navLink.base}>
          Home
        </Link>
        <Link
          href="/about"
          className={path === "/about" ? navLink.active : navLink.base}
        >
          About
        </Link>
        {!id && (
          <Link href="/login" className={navLink.base}>
            <div className="flex items-center gap-1.5">
              Login
              <User size={16} />
            </div>
          </Link>
        )}
        {id && (
          <Menu as="div" className="relative">
            <MenuButton className="flex items-center gap-2 rounded-xl px-3 py-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 transition-colors duration-150 cursor-pointer select-none">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300">
                <User size={14} />
              </div>
              <span className="text-sm font-medium tracking-wide">{name}</span>
              <ChevronDown
                size={14}
                className="text-zinc-500 ui-open:rotate-180 transition-transform duration-150"
              />
            </MenuButton>

            <MenuItems
              anchor="bottom end"
              className="mt-2 w-48 rounded-xl border border-zinc-700/50 bg-black backdrop-blur-md shadow-xl shadow-black/50 focus:outline-none z-50"
            >
              <div className="p-1">
                <MenuItem>
                  <Link
                    href="/post/create"
                    className="group flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-zinc-300 data-focus:bg-zinc-800 data-focus:text-zinc-100 transition-colors duration-100"
                  >
                    <PenSquare
                      size={14}
                      className="text-zinc-500 group-data-focus:text-zinc-300"
                    />
                    Create a Post
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    href="/personal"
                    className="group flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-zinc-300 group-data-focus:text-zinc-300 transition-colors duration-100"
                  >
                    <User
                      size={14}
                      className="text-zinc-500 group-data-focus:text-zinc-300"
                    />
                    Profile
                  </Link>
                </MenuItem>
              </div>
              <div className="border-t border-zinc-800 p-1">
                <MenuItem>
                  <button
                    onClick={signOut}
                    className="group flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-red-400 data-focus:bg-zinc-800 data-focus:text-red-300 transition-colors duration-100 cursor-pointer"
                  >
                    <LogOut
                      size={14}
                      className="text-red-500/70 group-data-focus:text-red-400"
                    />
                    Sign Out
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        )}
      </div>
    </nav>
  );
}
