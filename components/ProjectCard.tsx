'use client';

import { useState } from 'react';
import type { Project } from '@/data/portfolio';

interface ProjectCardProps {
  project: Project;
  showMoreInfo?: boolean;
}

export default function ProjectCard({ project, showMoreInfo = false }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="h-40 sm:h-48 bg-gradient-to-br from-indigo-600 via-slate-700 to-slate-800 flex items-center justify-center border-b border-indigo-100">
        {!imageError ? (
          <img
            src={`/assets/${project.image}`}
            alt={project.name}
            className="h-full w-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="text-white text-xl sm:text-2xl font-bold px-4 text-center">{project.name}</div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-blue-600 font-semibold">{project.category}</span>
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

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
