import { blogPosts } from "../data/services";

export function Blogs() {
  return (
    <section id="blog" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold tracking-widest text-[#00F0FF] uppercase">Insights</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Latest from the blog</h2>
            <p className="mt-4 max-w-lg text-white/50">
              Thoughts on AI, product development, and growth for modern software businesses.
            </p>
          </div>
          <a
            href="#blog"
            className="shrink-0 text-sm font-medium text-[#00F0FF] hover:underline"
          >
            View all posts →
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-[#00F0FF]/20 hover:bg-[#00F0FF]/[0.02]"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-[#00F0FF]/20 bg-[#00F0FF]/5 px-3 py-1 text-xs font-medium text-[#00F0FF]">
                  {post.tag}
                </span>
                <time className="text-xs text-white/30">{post.date}</time>
              </div>
              <h3 className="mt-4 text-lg font-bold text-white transition-colors group-hover:text-[#00F0FF]">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/45">{post.excerpt}</p>
              <a
                href="#"
                className="mt-5 text-sm font-medium text-white/50 transition-colors group-hover:text-[#00F0FF]"
              >
                Read more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
