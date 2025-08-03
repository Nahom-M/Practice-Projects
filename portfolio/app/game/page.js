"use client";

import Link from "next/link";

export default function GamePage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-black space-y-6 py-6">
      {/* Return Button */}
      <Link
        href="/"
        className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
      >
        Return to Portfolio
      </Link>

      {/* Game iframe */}
      <iframe
        src="/godot/basic-space-game.html"
        title="Godot Game"
        width="1142"
        height="648"
        className="border-2 border-gray-300 rounded-lg shadow-lg"
        allowFullScreen
      ></iframe>
    </div>
  );
}
