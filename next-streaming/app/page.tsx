import Image from "next/image";

export default async function Home() {
  const featuredItem = await fetch("http://localhost:3000/api/shows/random");

  let featured = null

  if (featuredItem.ok){
    featured = await featuredItem.json();
  }
  
  
  return (
    <section>
      <h1>Welcome to Next.js Streaming!</h1>
      <p>This is a sample page demonstrating streaming capabilities in Next.js.</p>

      <h3>Featured Content</h3>
      {featured ? (
        <div>
          <h4>{featured.title}</h4>
          <p>{featured.description}</p>
        </div>
      ) : (
        <p>Featured Item Is Unavailable</p>
      )}
    </section>
  );
}
