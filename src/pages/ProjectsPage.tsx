import ProjectsGallery from '@/components/ProjectsGallery';
import PageHeader from '@/components/PageHeader';
import useReveal from '@/components/useReveal';

function ProjectsPage() {
  useReveal();

  return (
    <>
      <PageHeader
        label="Featured projects"
        title={<>Experience that holds <em>up in the field.</em></>}
        description="Selected experience across infrastructure, surveying, buildings, Holy Sites and renovation works."
        arabicLabel="مشاريع مختارة"
        arabicTitle={<>خبرة تثبت جدارتها <em>على أرض الواقع.</em></>}
        arabicDescription="خبرات مختارة في البنية التحتية والمساحة والمباني والمشاعر المقدسة وأعمال الترميم."
        image="/profile/project-16.jpg"
        dark
      />
      <section className="projects section-dark">
        <div className="container">
          <ProjectsGallery />
        </div>
      </section>
    </>
  );
}

export default ProjectsPage;
