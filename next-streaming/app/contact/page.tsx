export default function Contact() {
  return (
    <section className="mx-auto max-w-xl px-6 py-12">
      <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-8 backdrop-blur-md">
        {/* Title */}
        <h3 className="mb-4 text-center text-3xl font-semibold text-emerald-300">
          Contact Support
        </h3>

        <p className="mb-8 text-center text-slate-300">
          For any questions, feedback, or issues, please reach out using the form
          below.
        </p>

        {/* Form */}
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-sm font-medium text-slate-200"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              required
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-2 text-slate-100 placeholder-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/30"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-slate-200"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-2 text-slate-100 placeholder-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/30"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="mb-1 block text-sm font-medium text-slate-200"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Describe your issue or question..."
              required
              className="w-full resize-none rounded-lg border border-white/10 bg-slate-900 px-4 py-2 text-slate-100 placeholder-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/30"
            />
          </div>

          {/* Button */}
          <button
            type="button"
            className="w-full rounded-lg bg-emerald-500 py-2 font-semibold text-slate-900 transition hover:bg-emerald-400 active:scale-[0.98]"
          >
            Send Message
          </button>
        </form>

        {/* Footer note */}
        <p className="mt-6 text-center text-sm text-slate-400">
          Note: This form is currently for demonstration purposes only.
        </p>
      </div>
    </section>
  );
}
