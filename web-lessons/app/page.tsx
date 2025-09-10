import React from 'react';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="text-6xl font-bold mt-20">
        Welcome to Next.js!
      </h1>
      <p className='mt-5 mb-20'>A platform made to help teach those who aren't up to date with current times.</p>

      <h3 className="text-6xl font-bold mb-15">
        Lessons
      </h3>
      
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
        <div>Gmail</div>
        <div>Internet</div>
        <div>Google Drive</div>
      </div>
    </div>
  );
}
