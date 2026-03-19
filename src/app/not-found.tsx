import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Pure Agua Enterprises",
  description: "The page you are looking for does not exist. Return to Pure Agua Enterprises for water filtration in Central Florida.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold text-[var(--color-primary)] mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4">
          Page Not Found
        </h2>
        <p className="text-[var(--color-muted)] mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white rounded-full font-medium hover:bg-[var(--color-secondary)] transition-colors"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
