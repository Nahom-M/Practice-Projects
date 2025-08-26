import React from 'react';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold">
        Welcome to Next.js!
      </h1>
      <p>A platform made to help teach those who aren't up to date with current times.</p>

      <h3 className="text-2xl font-bold mt-4">
        Lessons
      </h3>
    </div>
  );
}
