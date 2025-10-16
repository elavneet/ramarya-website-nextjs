import type { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Ramarya - Products',
  description:
    'Explore Ramarya Consultancy products including VBNotes, ScoutIQ tooling, and bespoke analytics apps that blend modern UX with retrieval-augmented intelligence.',
  openGraph: {
    title: 'Ramarya Consultancy Products',
    description:
      'Discover VBNotes and other Ramarya Consultancy products designed for researchers, operators, and revenue teams, built with Next.js, React Native, and applied AI.',
  },
};

export default function Products() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white py-14 md:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
              <p className="text-xl text-indigo-100">
                Innovative solutions built in-house to solve real problems. Experience the quality and expertise
                that comes from years of software development.
              </p>
            </div>
            <div className="hidden lg:block">
              <img
                src="/assets/coding-screen.jpg"
                alt="Product Development"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Listing */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Explore Our Product Suite</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the tools we craft in-house to streamline operations, accelerate growth, and empower teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group block rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] bg-gradient-to-br from-indigo-700 via-slate-800 to-slate-900">
                  {product.image ? (
                    <img
                      src={`/assets/${product.image}`}
                      alt={product.name}
                      className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center px-6">
                      <span className="text-white text-2xl font-semibold text-center">
                        {product.name}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute left-4 bottom-4 right-4">
                    <span className="text-sm font-semibold text-indigo-100 line-clamp-2">{product.tagline}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">{product.description}</p>
                  {product.stats && (
                    <div className="flex flex-wrap gap-3 mb-4">
                      {product.stats.slice(0, 2).map((stat) => (
                        <div key={stat.label} className="rounded-lg bg-indigo-50 px-3 py-2 text-xs font-semibold text-indigo-700">
                          {stat.value} {stat.label}
                        </div>
                      ))}
                    </div>
                  )}
                  <span className="inline-flex items-center text-sm font-semibold text-indigo-600 group-hover:text-indigo-700">
                    View product
                    <svg
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-800 text-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl mb-6 text-indigo-100 max-w-2xl mx-auto">
            We build products that solve real problems. Let&apos;s discuss how we can create something amazing for your business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-indigo-700 px-7 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
