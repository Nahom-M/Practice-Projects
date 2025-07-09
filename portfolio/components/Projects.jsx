/*
Modern Web
Spring boot Test page
Godot Platformer
*/
"use client";

const Projects = () => {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Projects</h2>

      {/* 2-column grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-blue-100 p-4 rounded shadow">Item 1</div>
        <div className="bg-blue-100 p-4 rounded shadow">Item 2</div>
      </div>

      {/* 3-column grid */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-green-100 p-4 rounded shadow">Item A</div>
        <div className="bg-green-100 p-4 rounded shadow">Item B</div>
        <div className="bg-green-100 p-4 rounded shadow">Item C</div>
      </div>

      {/* Responsive grid: 1 column on mobile, 2 on medium, 4 on large */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-yellow-100 p-4 rounded shadow">Block 1</div>
        <div className="bg-yellow-100 p-4 rounded shadow">Block 2</div>
        <div className="bg-yellow-100 p-4 rounded shadow">Block 3</div>
        <div className="bg-yellow-100 p-4 rounded shadow">Block 4</div>
      </div>
    </section>
  );
};

export default Projects;
