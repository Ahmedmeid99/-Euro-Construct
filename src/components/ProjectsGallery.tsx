import { ArrowUpRight, MapPin } from 'lucide-react';
import { Link, useSearch } from '@tanstack/react-router';
import { categories, getProjectSlug, projects } from '@/data/content';

function ProjectsGallery() {
  const { category } = useSearch({ from: '/projects' });
  const activeCategory = category ?? 'All';
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <nav className="filter-row reveal" aria-label="Filter projects by category">
        {categories.map((filter) => {
          const isActive = activeCategory === filter;
          return (
            <Link
              key={filter}
              className={isActive ? 'active' : ''}
              to="/projects"
              search={{ category: filter === 'All' ? undefined : filter }}
              aria-current={isActive ? 'page' : undefined}
              resetScroll={false}
            >
              {filter}
              <span>{filter === 'All' ? projects.length : projects.filter((project) => project.category === filter).length}</span>
            </Link>
          );
        })}
      </nav>

      <div className="project-grid" aria-live="polite">
        {filteredProjects.map((project, index) => (
          <Link
            className="project-card"
            key={project.name}
            to="/projects/$projectId"
            params={{ projectId: getProjectSlug(project) }}
            style={{ animationDelay: `${Math.min(index, 8) * 45}ms` }}
          >
            <div className="project-image">
              <img
                src={project.image}
                alt={`${project.name} project image`}
                loading={index > 2 ? 'lazy' : 'eager'}
              />
              <span>{project.category}</span>
            </div>
            <div className="project-info">
              <div>
                <h3>{project.name}</h3>
                <p><MapPin size={14} />{project.location}</p>
              </div>
              <ArrowUpRight size={20} />
            </div>
          </Link>
        ))}
      </div>

      <div className="project-count">
        Showing <strong>{filteredProjects.length}</strong> of {projects.length} relevant experience entries
      </div>
    </>
  );
}

export default ProjectsGallery;
