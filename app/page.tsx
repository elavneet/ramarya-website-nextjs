import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '@/data/portfolio';
import { clients } from '@/data/clients';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Ramarya ships revenue-driving web apps, React Native experiences, data platforms, and AI agents backed by Model Context Protocol.',
  openGraph: {
    title: 'Product Engineering & Applied AI | Ramarya',
    description:
      'Build resilient platforms and intelligent assistants with Ramarya — the team behind ScoutIQ, VBNotes, and custom MCP-powered agents.',
  },
};

export default function Home() {
  const featuredProjects = projects.filter(p => p.status === 'active').slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Shipping Digital Products with Intelligent Superpowers
              </h1>
              <p className="text-xl md:text-2xl mb-3 text-indigo-100">
                From revenue-driving marketplaces to MCP-based AI copilots tailored to your data.
              </p>
              <p className="text-lg mb-6 text-indigo-50">
                We craft web and mobile platforms like ScoutIQ and VBNotes, then layer in retrieval-augmented search, custom agents, and automation so every team member can act on reliable insights.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/portfolio"
                  className="bg-white text-indigo-700 px-7 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
                >
                  Explore Case Studies
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent border-2 border-white text-white px-7 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="/assets/team.png"
                alt="Ramarya Team"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-10 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-indigo-500 mb-2">10+</div>
              <div className="text-gray-600">Years shipping production platforms</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-500 mb-2">$100M+</div>
              <div className="text-gray-600">Revenue influenced by our builds</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-500 mb-2">50+</div>
              <div className="text-gray-600">AI & product launches delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-500 mb-2">500K+</div>
              <div className="text-gray-600">End users supported daily</div>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-500 text-center max-w-3xl mx-auto">
            We&apos;re a youthful, high-energy crew guided by leaders with 20+ years of product experience—delivering forward-looking work with veteran judgement.
          </p>
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re proud to partner with innovative companies worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 gap-6 items-center">
            {clients.map((client) => (
              <a
                key={client.name}
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                title={client.description}
                className="flex items-center justify-center p-5 bg-white/40 rounded-xl grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 shadow-sm"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} - ${client.description}`}
                  className="max-h-16 md:max-h-20 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From retrieval-augmented knowledge hubs to resilient consumer products, we blend AI research with real-world product intuition.
            </p>
          </div>

          {/* Services Hero Image */}
          <div className="mb-10 rounded-lg overflow-hidden shadow-xl">
            <img
              src="/assets/web-development.jpg"
              alt="Professional Software Development"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-xl font-semibold mb-3 text-gray-900">Custom AI Agents</p>
              <p className="text-gray-600">
                MCP-driven assistants that let non-technical teammates query live databases, systems, or codebases safely and naturally.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <p className="text-xl font-semibold mb-3 text-gray-900">RAG & Knowledge Platforms</p>
              <p className="text-gray-600">
                Retrieval-augmented pipelines that index documents, tickets, and data warehouses to deliver trustworthy answers in seconds.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <p className="text-xl font-semibold mb-3 text-gray-900">Full-Stack Product Engineering</p>
              <p className="text-gray-600">
                Web, mobile, and API platforms that scale—from consumer marketplaces to revenue intelligence dashboards.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-xl font-semibold mb-3 text-gray-900">Data Infrastructure & Automation</p>
              <p className="text-gray-600">
                ETL, event streaming, and workflow automation so models and operators share a single source of truth.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <p className="text-xl font-semibold mb-3 text-gray-900">Responsible AI Operations</p>
              <p className="text-gray-600">
                Guardrails, evaluation, monitoring, and compliance frameworks that keep AI deployments secure and auditable.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <p className="text-xl font-semibold mb-3 text-gray-900">Product & AI Advisory</p>
              <p className="text-gray-600">
                Strategy sprints that align stakeholders, surface the highest ROI automation ideas, and chart build-measure-learn loops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Deliver
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lean squads of engineers, designers, and ML specialists who ship iteratively with measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <p className="text-xl font-semibold mb-3 text-gray-900">Context Discovery & Data Mapping</p>
                    <p className="text-gray-600">
                      We audit your workflows, data exhaust, and success metrics to define high-value agent behaviors, RAG sources, and product opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <p className="text-xl font-semibold mb-3 text-gray-900">Rapid Prototypes & Evaluation Loops</p>
                    <p className="text-gray-600">
                      We stand up pilots—LLM agents, dashboards, or apps—instrumented with evals so stakeholders see impact in days, not quarters.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <p className="text-xl font-semibold mb-3 text-gray-900">Scale, Operate, and Transfer</p>
                    <p className="text-gray-600">
                      We harden for production with observability, governance, and playbooks—then upskill your teams so they can iterate independently.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <img
                src="/assets/agile-process.jpg"
                alt="Agile Development Process"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Launches across commerce, education, and operations—each combining durable UX with intelligent automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/portfolio"
              className="inline-block bg-indigo-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-indigo-500 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Snapshot */}
      <section className="bg-white border-t border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-indigo-500 font-semibold mb-3">
            Engagement Snapshot
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 text-base text-gray-700">
            <div className="flex items-center justify-center gap-2">
              <span className="font-semibold text-gray-900">$75/hr</span>
              <span>Specialist squads on demand</span>
            </div>
            <span className="hidden sm:block text-gray-300">•</span>
            <div className="flex items-center justify-center gap-2">
              <span className="font-semibold text-gray-900">$8K/mo</span>
              <span>Retainers (≈15% savings)</span>
            </div>
            <span className="hidden sm:block text-gray-300">•</span>
            <div className="flex items-center justify-center gap-2">
              <span className="font-semibold text-gray-900">Custom Projects</span>
              <span>Scoped with your team</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <p className="text-lg font-semibold text-gray-900 mb-2">How do you approach new engagements?</p>
              <p className="text-gray-700">
                We start with a short discovery sprint to prioritise goals, data sources, and success metrics. From there we deliver a roadmap covering product milestones, retrieval-augmented knowledge needs, and any custom MCP tooling required.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <p className="text-lg font-semibold text-gray-900 mb-2">Can you integrate with our existing stack?</p>
              <p className="text-gray-700">
                Yes. We routinely work with PostgreSQL, DynamoDB, Salesforce, HubSpot, and internal APIs—exposing them through secure connectors so AI agents and product teams consume the same trusted source of truth.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <p className="text-lg font-semibold text-gray-900 mb-2">How quickly can we see a prototype?</p>
              <p className="text-gray-700">
                Most partners see a working slice—whether it&apos;s a React app, RAG knowledge base, or MCP-powered agent—within the first two weeks. We iterate in public demos so stakeholders can test and steer delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Launch Your Next AI-Ready Product?
          </h2>
          <p className="text-xl mb-6 text-indigo-100 max-w-2xl mx-auto">
            Partner with the team behind VBNotes, ScoutIQ, and other high-impact platforms to ship agents, apps, and data systems that customers love.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-700 px-7 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              href="/jobs"
              className="bg-transparent border-2 border-white text-white px-7 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition-colors"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
