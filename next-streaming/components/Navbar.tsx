import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-wide text-cyan-300 hover:text-cyan-200 transition"
        >
          Next Streaming
        </Link>

        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <Link
              href="/"
              className="text-slate-200 hover:text-emerald-300 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/programs"
              className="text-slate-200 hover:text-emerald-300 transition"
            >
              Programs
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="text-slate-200 hover:text-emerald-300 transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
