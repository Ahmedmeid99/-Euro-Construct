import { ArrowLeft, ArrowUpRight, Building2, CircleCheck, MapPin, Users } from 'lucide-react';
import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { getProjectBySlug, getProjectSlug, projects } from '@/data/content';

export const Route = createFileRoute('/projects_/$projectId')({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.projectId);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? 'Project'} | Euro Construct for Contracting` },
      { name: 'description', content: loaderData?.summary },
      { property: 'og:image', content: loaderData?.image },
    ],
  }),
  component: ProjectDetailsPage,
});

function ProjectDetailsPage() {
  const project = Route.useLoaderData();
  const serviceItems = project.services.split(';').map((item) => item.trim()).filter(Boolean);
  const relatedProjects = projects
    .filter((candidate) => candidate.category === project.category && candidate.name !== project.name)
    .slice(0, 3);

  return (
    <>
      <section className="project-detail-hero section-dark">
        <img src={project.image} alt={`${project.name} project`} />
        <div className="project-detail-overlay" />
        <div className="container project-detail-hero-content">
          <Link className="project-back-link" to="/projects" search={{ category: project.category }}>
            <ArrowLeft size={17} /> Back to {project.category}
          </Link>
          <span className="project-detail-category">{project.category}</span>
          <h1>{project.name}</h1>
          <div className="project-detail-meta">
            <span><MapPin size={17} />{project.location}</span>
            <span><Users size={17} />{project.client}</span>
          </div>
        </div>
      </section>

      <section className="project-detail-body section-light">
        <div className="container project-detail-layout">
          <article className="project-detail-copy">
            <div className="section-label">Project overview</div>
            <h2>Scope and <em>delivery.</em></h2>
            <p>{project.summary}</p>

            <div className="project-services-list">
              <h3>Services provided</h3>
              {serviceItems.map((service) => (
                <div key={service}><CircleCheck size={18} /><span>{service}</span></div>
              ))}
            </div>
          </article>

          <aside className="project-facts">
            <div><span>Contract value</span><strong>{project.value}</strong></div>
            <div><span>Location</span><strong>{project.location}</strong></div>
            <div><span>Client</span><strong>{project.client}</strong></div>
            <div><span>Sector</span><strong>{project.category}</strong></div>
          </aside>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="related-projects section-sand">
          <div className="container">
            <div className="section-heading">
              <div className="section-label">Related experience</div>
              <h2>More work in <em>{project.category}.</em></h2>
            </div>
            <div className="related-project-grid">
              {relatedProjects.map((related) => (
                <Link
                  key={related.name}
                  className="related-project-card"
                  to="/projects/$projectId"
                  params={{ projectId: getProjectSlug(related) }}
                >
                  <img src={related.image} alt="" loading="lazy" />
                  <div>
                    <span>{related.location}</span>
                    <h3>{related.name}</h3>
                    <ArrowUpRight size={19} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="project-detail-cta section-dark">
        <div className="container">
          <Building2 size={28} />
          <div><span>Planning your next project?</span><h2>Build it with confidence.</h2></div>
          <Link className="button" to="/contact">Discuss your project <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
