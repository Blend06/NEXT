import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full border-b border-zinc-200/60 dark:border-zinc-800/60 bg-white/70 dark:bg-zinc-950/40 backdrop-blur supports-[backdrop-filter]:bg-white/40 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
        <Link
          href="/"
          className="px-3 py-1.5 rounded-md text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/dashboard"
          className="px-3 py-1.5 rounded-md text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        >
          Dashboard
        </Link>
      </div>
    </nav>
  );
}