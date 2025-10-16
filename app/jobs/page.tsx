'use client';

import { useState } from 'react';
import { jobs, jobTags } from '@/data/jobs';

export default function Jobs() {
  const [selectedTag, setSelectedTag] = useState('All');
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const filteredJobs = selectedTag === 'All'
    ? jobs
    : jobs.filter((job) => job.tags.includes(selectedTag));

  const toggleJob = (jobId: string) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white py-14 md:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Product & Applied AI Team</h1>
              <p className="text-xl text-indigo-100">
                Ship platforms like ScoutIQ and VBNotes while prototyping MCP agents, RAG stacks, and automation that power $100M+ client operations.
              </p>
            </div>
            <div className="hidden lg:block">
              <img
                src="/assets/remote-work.jpg"
                alt="Remote Work Environment"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-gray-50 py-6 border-b sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Filter by Tag:</h3>
            <div className="flex flex-wrap gap-2">
              {jobTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedTag === tag
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            {filteredJobs.length} {filteredJobs.length === 1 ? 'position' : 'positions'} available
          </div>
        </div>
      </section>

      {/* Jobs Listing */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div
                  className="p-5 cursor-pointer"
                  onClick={() => toggleJob(job.id)}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          {job.type}
                        </span>
                        {job.salary && (
                          <span className="flex items-center text-indigo-600 font-semibold">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {job.salary}
                          </span>
                        )}
                      </div>
                    </div>
                    <button className="ml-4">
                      <svg
                        className={`w-6 h-6 text-gray-400 transition-transform ${
                          expandedJob === job.id ? 'transform rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {job.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-700">{job.description}</p>
                </div>

                {expandedJob === job.id && (
                  <div className="px-5 pb-5 border-t pt-5">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-700">
                              <svg
                                className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-700">
                              <svg
                                className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-5 flex gap-4">
                      <a
                        href={`/contact?job=${encodeURIComponent(job.title)}`}
                        className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-500 transition-colors"
                      >
                        Apply Now
                      </a>
                      <a
                        href={`mailto:jobs@ramarya.com?subject=Application for ${job.title}`}
                        className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                      >
                        Email Application
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No positions found matching your filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">Why Work With Us?</h2>
          <p className="text-base text-gray-600 text-center max-w-3xl mx-auto mb-7">
            Join a youthful, high-energy crew building modern products and applied AI systems under mentors with 20+ years of shipping experience.
          </p>

          {/* Hero Image for Benefits */}
          <div className="mb-10 rounded-lg overflow-hidden shadow-xl">
            <img
              src="/assets/hero-collaboration.jpg"
              alt="Team Collaboration"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 md:w-8 md:h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Exciting Projects</h3>
              <p className="text-gray-600">
                Work on cutting-edge projects for clients generating $100M+ in revenue
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 md:w-8 md:h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Remote Work</h3>
              <p className="text-gray-600">
                Work from anywhere with flexible hours and a supportive remote culture
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 md:w-8 md:h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Growth Opportunities</h3>
              <p className="text-gray-600">
                Continuous learning, skill development, and career advancement opportunities
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
