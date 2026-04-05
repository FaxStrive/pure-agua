import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Water Quality Blog for Florida Homeowners | Pure Agua",
  description:
    "Expert guides on Kissimmee and Orlando water quality, water softeners, reverse osmosis, and well water treatment from the Pure Agua team.",
  alternates: { canonical: "https://pureaguaenterprise.com/blog" },
  openGraph: {
    title: "Water Quality Blog for Florida Homeowners | Pure Agua",
    description:
      "Expert water quality guides for Central Florida homeowners — Orlando, Kissimmee, and surrounding areas.",
    url: "https://pureaguaenterprise.com/blog",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Pure Agua Enterprises Water Quality Blog - Expert Guides for Central Florida" }],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[var(--color-dark)]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />
        </div>
        <div className="container-custom relative text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">
            Knowledge Base
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Central Florida Water Quality Blog
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Expert guides on water quality, softeners, filtration, and well water treatment
            — written for Orlando and Kissimmee homeowners.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-6">
              Featured Article
            </p>
            <Link
              href={`/blog/${featured.slug}`}
              className="group block rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-[var(--color-primary)]/20 transition-all duration-300 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5"
            >
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-semibold rounded-full">
                    {featured.category}
                  </span>
                  <span className="text-gray-500 text-sm">{featured.readTime}</span>
                  <span className="text-gray-500 text-sm">
                    {new Date(featured.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[var(--color-primary)] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6 max-w-3xl">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center text-[var(--color-primary)] font-semibold gap-2 group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="pb-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-xl border border-gray-100 hover:border-[var(--color-primary)]/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-1 p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-gray-900 mb-3 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="px-6 pb-6 flex items-center justify-between">
                  <span className="text-gray-400 text-xs">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="text-[var(--color-primary)] text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--color-dark)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            Questions About Your Central Florida Water?
          </h2>
          <p className="text-white/70 mb-8">
            Schedule a free in-home water test with the Pure Agua team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[var(--color-primary)] text-white font-bold rounded-full hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get Your Free Water Test
          </Link>
        </div>
      </section>
    </div>
  );
}
