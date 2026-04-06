import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog-posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Article Not Found" };

  const metaDescription = post.excerpt.length > 160 ? post.excerpt.slice(0, 157) + '...' : post.excerpt;

  return {
    title: post.title,
    description: metaDescription,
    alternates: { canonical: `https://pureaguaenterprise.com/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | Pure Agua`,
      description: metaDescription,
      url: `https://pureaguaenterprise.com/blog/${post.slug}`,
      type: "article",
      images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: `${post.title} - Pure Agua Enterprises Blog` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Pure Agua`,
      description: metaDescription,
      images: ["/images/og-image.png"],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Pure Agua Enterprises",
      url: "https://pureaguaenterprise.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Pure Agua Enterprises",
      url: "https://pureaguaenterprise.com",
      logo: {
        "@type": "ImageObject",
        url: "https://pureaguaenterprise.com/images/pure-agua-logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://pureaguaenterprise.com/blog/${post.slug}`,
    },
    image: "https://pureaguaenterprise.com/images/og-image.png",
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-[var(--color-dark)]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
        </div>
        <div className="container-custom relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/15 text-white text-xs font-semibold rounded-full">
              {post.category}
            </span>
            <span className="text-white/60 text-sm">{post.readTime}</span>
            <span className="text-white/60 text-sm">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl">{post.excerpt}</p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div
            className="prose prose-lg max-w-none prose-headings:font-heading prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6 prose-ul:text-gray-600 prose-ol:text-gray-600 prose-li:mb-2 prose-strong:text-gray-900 prose-a:text-[var(--color-primary)] prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 rounded-2xl border border-[var(--color-primary)]/10 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5">
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
              Questions About Your Water?
            </h3>
            <p className="text-gray-600 mb-6">
              Pure Agua offers free in-home water testing throughout the Kissimmee and Orlando metro area.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-full hover:opacity-90 transition-all duration-300 hover:scale-105"
            >
              Schedule Free Water Test
            </Link>
          </div>

          {/* Navigation */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevPost && (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group flex flex-col p-5 border border-gray-100 rounded-xl hover:border-[var(--color-primary)]/20 hover:shadow-md transition-all"
              >
                <span className="text-xs text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </span>
                <span className="font-semibold text-gray-900 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2 text-sm">
                  {prevPost.title}
                </span>
              </Link>
            )}
            {nextPost && (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group flex flex-col p-5 border border-gray-100 rounded-xl hover:border-[var(--color-primary)]/20 hover:shadow-md transition-all sm:text-right"
              >
                <span className="text-xs text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1 sm:justify-end">
                  Next
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <span className="font-semibold text-gray-900 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2 text-sm">
                  {nextPost.title}
                </span>
              </Link>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
