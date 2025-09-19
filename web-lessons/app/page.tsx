import React from 'react';
import Navbar from './components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="flex flex-col items-center justify-center text-center pt-50 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Welcome to <span className="text-blue-600">Next.js!</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          A platform designed to help teach those who aren’t up to date with the latest technology.
        </p>
      </section>

      <section className="mt-24 px-6">
        <h3 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Lessons
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Link href="/lessons/gmail" passHref>
            <div className="cursor-pointer bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl hover:scale-105 transition transform">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">📧 Gmail</h4>
              <p className="text-gray-600">Learn how to send emails, manage your inbox, and stay connected.</p>
            </div>
          </Link>

          <Link href="/lessons/internet" passHref>
            <div className="cursor-pointer bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl hover:scale-105 transition transform">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">🌐 Internet</h4>
              <p className="text-gray-600">Understand how to browse safely and make the most of the web.</p>
            </div>
          </Link>

          <Link href="/lessons/google-drive" passHref>
            <div className="cursor-pointer bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl hover:scale-105 transition transform">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">📂 Google Drive</h4>
              <p className="text-gray-600">Discover how to store, share, and collaborate with files in the cloud.</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
