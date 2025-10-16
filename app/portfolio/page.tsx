'use client';

import { useState } from 'react';
import { projects, categories } from '@/data/portfolio';
import PortfolioProjectCard from '@/components/PortfolioProjectCard';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'active' | 'archived'>('all');

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
    const statusMatch = selectedStatus === 'all' || project.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white py-14 md:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
              <p className="text-xl text-indigo-100">
              Explore web platforms, revenue tools, and AI-enabled products we&apos;ve delivered for teams across commerce, edtech, and operations
            </p>
            </div>
            <div className="hidden lg:block">
              <img
                src="/assets/hero-collaboration.jpg"
                alt="Our Projects and Team"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-gray-50 py-6 border-b md:sticky md:top-0 md:z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Filter by Category:</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Status:</h3>
              <div className="flex gap-2">
                {['all', 'active', 'archived'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(status as 'all' | 'active' | 'archived')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                      selectedStatus === status
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <PortfolioProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found matching your filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-800 text-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-6 text-indigo-100 max-w-2xl mx-auto">
            Let&apos;s build something amazing together. Contact us to discuss your next project.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-indigo-700 px-7 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
