import Image from "next/image";

export default async function Programs() {
  const res = await fetch("http://localhost:3000/api/shows", {
    cache: "no-store",
  });

  if (!res.ok) {
    return <p className="text-center text-slate-400">Failed to load programs.</p>;
  }

  const programs = await res.json();

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      {/* Title */}
      <h3 className="mb-10 text-center text-3xl font-semibold text-emerald-300">
        Watch Now
      </h3>

      {/* Grid */}
      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {programs.map((item: any) => (
          <li
            key={item._id}
            className="flex flex-col items-center rounded-2xl border border-white/10 bg-slate-950/60 p-6 backdrop-blur-md transition hover:scale-[1.02]"
          >
            {/* Poster */}
            {item.poster && (
              <Image
                src={item.poster}
                alt={item.title}
                width={220}
                height={330}
                className="mb-4 rounded-xl object-cover shadow-lg"
              />
            )}

            {/* Title */}
            <h4 className="mb-2 text-center text-lg font-semibold text-slate-100">
              {item.title}
            </h4>

            {/* Description */}
            <p className="text-center text-sm text-slate-300 line-clamp-3">
              {item.description}
            </p>

            {/* Meta */}
            <div className="mt-4 flex gap-4 text-xs text-slate-400">
              <span>{item.releaseYear}</span>
              <span className="capitalize">{item.type}</span>
              <span>⭐ {item.rating}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
