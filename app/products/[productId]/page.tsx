import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export function generateStaticParams() {
  return products.map((product) => ({ productId: product.id }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = products.find((item) => item.id === params.productId);

  if (!product) {
    return {
      title: 'Product Not Found - Ramarya Consultancy',
    };
  }

  return {
    title: `Ramarya - ${product.name}`,
    description: product.description,
    openGraph: {
      title: `${product.name} - Ramarya Consultancy`,
      description: product.description,
      type: 'article',
    },
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = products.find((item) => item.id === params.productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white py-14 md:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <Link
                href="/products"
                className="mb-6 inline-flex items-center text-sm font-semibold text-indigo-200 hover:text-white"
              >
                <svg
                  className="mr-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                All Products
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
              <p className="text-xl text-indigo-100 mb-4">{product.tagline}</p>
              <p className="text-lg text-indigo-100/90 mb-6 leading-relaxed">{product.description}</p>

              {product.stats && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                  {product.stats.map((stat) => (
                    <div key={stat.label} className="rounded-lg bg-white/10 px-4 py-3">
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-indigo-100/80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-4">
                <a
                  href={product.cta.primary.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-indigo-700 transition-colors hover:bg-indigo-50"
                >
                  {product.cta.primary.text}
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7M5 12h16" />
                  </svg>
                </a>
                {product.cta.secondary && (
                  <a
                    href={product.cta.secondary.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-indigo-700"
                  >
                    {product.cta.secondary.text}
                  </a>
                )}
              </div>
            </div>

            <div className="order-first lg:order-last">
              <div className="overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                {product.image ? (
                  <img
                    src={`/assets/${product.image}`}
                    alt={product.name}
                    className="w-full h-auto"
                  />
                ) : (
                  <div className="flex h-full min-h-[320px] items-center justify-center bg-gradient-to-br from-indigo-600 via-slate-700 to-slate-800">
                    <span className="text-3xl font-bold text-white">{product.name}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
              <ul className="space-y-4">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-3 mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
                      {idx + 1}
                    </span>
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h2>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <svg
                        className="mr-2 h-5 w-5 flex-shrink-0 text-green-600 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Perfect For</h2>
                <ul className="space-y-2">
                  {product.targetAudience.map((audience, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg
                        className="mr-2 h-4 w-4 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {audience}
                    </li>
                  ))}
                </ul>
              </div>

              {product.pricing && (
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                  <h3 className="text-lg font-semibold text-gray-900">Pricing</h3>
                  <p className="mt-2 text-gray-700">{product.pricing}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-800 text-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in {product.name}?</h2>
          <p className="text-xl mb-6 text-indigo-100 max-w-2xl mx-auto">
            Let&apos;s discuss how we can tailor this solution to fit your roadmap and integrate seamlessly with your stack.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-indigo-700 px-7 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            Talk to Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
