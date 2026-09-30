import { ArrowLeft, ArrowUpRight, Building2, CircleCheck, MapPin, Users } from 'lucide-react';
import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { getProjectBySlug, getProjectSlug, projects } from '@/data/content';
import { useLanguage } from '@/context/LanguageContext';
import { arabicLocation, arabicProjectServices, arabicProjectSummary, categoryArabic, projectNameArabic } from '@/data/arabic';

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
  const { isArabic } = useLanguage();
  const project = Route.useLoaderData();
  const serviceItems = isArabic
    ? arabicProjectServices(project.category)
    : project.services.split(';').map((item) => item.trim()).filter(Boolean);
  const relatedProjects = projects
    .filter((candidate) => candidate.category === project.category && candidate.name !== project.name)
    .slice(0, 3);

  return (
    <>
      <section className="project-detail-hero section-dark">
        <img src={project.image} alt={isArabic ? `مشروع ${projectNameArabic[project.name] || project.name}` : `${project.name} project`} />
        <div className="project-detail-overlay" />
        <div className="container project-detail-hero-content">
          <Link className="project-back-link" to="/projects" search={{ category: project.category }}>
            <ArrowLeft size={17} /> {isArabic ? `العودة إلى ${categoryArabic[project.category]}` : `Back to ${project.category}`}
          </Link>
          <span className="project-detail-category">{isArabic ? categoryArabic[project.category] : project.category}</span>
          <h1>{isArabic ? projectNameArabic[project.name] || project.name : project.name}</h1>
          <div className="project-detail-meta">
            <span><MapPin size={17} />{isArabic ? arabicLocation(project.location) : project.location}</span>
            <span><Users size={17} />{project.client}</span>
          </div>
        </div>
      </section>

      <section className="project-detail-body section-light">
        <div className="container project-detail-layout">
          <article className="project-detail-copy">
            <div className="section-label">{isArabic ? 'نظرة عامة على المشروع' : 'Project overview'}</div>
            <h2>{isArabic ? <>النطاق و<em>التنفيذ.</em></> : <>Scope and <em>delivery.</em></>}</h2>
            <p>{isArabic ? arabicProjectSummary(project.name, project.category) : project.summary}</p>

            <div className="project-services-list">
              <h3>{isArabic ? 'الخدمات المقدمة' : 'Services provided'}</h3>
              {serviceItems.map((service) => (
                <div key={service}><CircleCheck size={18} /><span>{service}</span></div>
              ))}
            </div>
          </article>

          <aside className="project-facts">
            <div><span>{isArabic ? 'قيمة العقد' : 'Contract value'}</span><strong>{project.value}</strong></div>
            <div><span>{isArabic ? 'الموقع' : 'Location'}</span><strong>{isArabic ? arabicLocation(project.location) : project.location}</strong></div>
            <div><span>{isArabic ? 'العميل' : 'Client'}</span><strong>{project.client}</strong></div>
            <div><span>{isArabic ? 'القطاع' : 'Sector'}</span><strong>{isArabic ? categoryArabic[project.category] : project.category}</strong></div>
          </aside>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="related-projects section-sand">
          <div className="container">
            <div className="section-heading">
              <div className="section-label">{isArabic ? 'خبرات ذات صلة' : 'Related experience'}</div>
              <h2>{isArabic ? <>مزيد من الأعمال في <em>{categoryArabic[project.category]}.</em></> : <>More work in <em>{project.category}.</em></>}</h2>
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
                    <span>{isArabic ? arabicLocation(related.location) : related.location}</span>
                    <h3>{isArabic ? projectNameArabic[related.name] || related.name : related.name}</h3>
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
          <div><span>{isArabic ? 'هل تخطط لمشروعك القادم؟' : 'Planning your next project?'}</span><h2>{isArabic ? 'ابنه بثقة.' : 'Build it with confidence.'}</h2></div>
          <Link className="button" to="/contact">{isArabic ? 'ناقش مشروعك' : 'Discuss your project'} <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
