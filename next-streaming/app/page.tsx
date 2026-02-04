import Image from "next/image";

export default async function Home() {
  const featuredItem = await fetch("http://localhost:3000/api/shows/random", {
    cache: "no-store",
  });

  let featured = null;

  if (featuredItem.ok) {
    featured = await featuredItem.json();
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-12">
      {/* Main */}
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-cyan-300">
          Welcome to Next.js Streaming
        </h1>
        <p className="max-w-2xl text-slate-300">
          Discover movies and series for you to consume.
        </p>
      </div>

      {/* Featured */}
      <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 backdrop-blur-md">
        <h3 className="mb-8 text-center text-xl font-semibold text-emerald-300">
          Featured Content
        </h3>

        {featured ? (
          <div className="flex flex-col items-center gap-2">
            {/* Title */}
            <h4 className="text-center text-3xl font-bold text-slate-100">
              {featured.title}
            </h4>

            {/* Poster */}
            {featured.poster && (
              <Image
                src={featured.poster}
                alt={featured.title}
                width={280}
                height={420}
                className="rounded-xl object-cover shadow-lg"
              />
            )}

            {/* Details */}
            <div className="mt-4 max-w-xl text-center space-y-4">
              <p className="text-slate-300">
                {featured.description}
              </p>

              <div className="flex justify-center gap-6 text-sm text-slate-400">
                <span>{featured.releaseYear}</span>
                <span className="capitalize">{featured.type}</span>
                <span>⭐ {featured.rating}</span>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-slate-400">
            Featured item is unavailable.
          </p>
        )}
      </div>
    </section>
  );
}
