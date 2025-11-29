"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "classnames";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-900/60">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-2xl bg-brand-soft border border-brand/40 flex items-center justify-center group-hover:scale-110 transition">
            <span className="text-brand-dark font-black text-lg">R</span>
          </div>
          <span className="font-semibold text-lg tracking-tight">
            Rezuvi<span className="text-brand ml-1">AI</span>
          </span>
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <Link
            href="/"
            className={clsx(
              "px-3 py-1.5 rounded-full transition",
              pathname === "/"
                ? "bg-slate-900/80 text-white"
                : "text-slate-300 hover:bg-slate-900/40"
            )}
          >
            Home
          </Link>
          <Link
            href="/create-resume"
            className={clsx(
              "px-4 py-1.5 rounded-full text-sm font-medium transition",
              pathname.startsWith("/create-resume")
                ? "bg-brand text-white shadow-soft"
                : "bg-brand-soft text-brand-dark hover:bg-brand hover:text-white"
            )}
          >
            Create Resume
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;


