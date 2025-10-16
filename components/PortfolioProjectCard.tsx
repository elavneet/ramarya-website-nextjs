'use client';

import { useState } from 'react';
import type { Project } from '@/data/portfolio';

interface PortfolioProjectCardProps {
  project: Project;
}

export default function PortfolioProjectCard({ project }: PortfolioProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-200">
      {/* Project Image */}
      <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center relative border-b border-indigo-100">
        {!imageError ? (
          <img
            src={`/assets/${project.image}`}
            alt={project.name}
            className="h-full w-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="text-white text-2xl font-bold px-4 text-center">{project.name}</div>
        )}
        {project.status === 'archived' && (
          <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-3 py-1 rounded-full">
            Archived
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-blue-600 font-semibold">{project.category}</span>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>

        {/* Project Type Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.projectType.map((type) => (
            <span
              key={type}
              className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-medium"
            >
              {type}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-2 text-gray-900">{project.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>

        {project.metrics && (
          <div className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full inline-block mb-4">
            {project.metrics}
          </div>
        )}

        {/* Features */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {project.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <svg
                  className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="line-clamp-2">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span key={tech} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
