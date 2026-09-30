import { Check, CircleCheck } from 'lucide-react';
import { images, values } from '@/data/content';
import PageHeader from '@/components/PageHeader';
import useReveal from '@/components/useReveal';

const ethics = [
  ['Accountability', 'We take responsibility for every decision and project outcome.'],
  ['Transparency', 'We communicate clearly and honestly with all stakeholders.'],
  ['Compliance', 'We follow laws, regulations, contracts, and industry standards.'],
  ['Safety', 'We prioritize the safety of our people, sites, and communities.'],
  ['Fairness', 'We treat clients, employees, subcontractors, and partners with fairness and respect.'],
] as const;

function AboutPage() {
  useReveal();

  return (
    <>
      <PageHeader
        label="About Euro Construct"
        title={<>Construction support built around <em>clarity and control.</em></>}
        description="A contracting and construction company based in Saudi Arabia, recognized for quality, safety, and reliable construction support solutions."
        arabicLabel="عن يورو كونستركت"
        arabicTitle={<>دعم إنشائي يرتكز على <em>الوضوح والتحكم.</em></>}
        arabicDescription="شركة مقاولات وإنشاءات سعودية معروفة بالجودة والسلامة وحلول الدعم الإنشائي الموثوقة."
        image="/profile/about-cranes.jpg"
      />

      <section className="intro section-light">
        <div className="container intro-grid">
          <div className="intro-main reveal">
            <div className="section-label">Company</div>
            <p className="kicker">A trusted partner on the ground</p>
            <h2>Who we are</h2>
            <p className="lead">Euro Construct is a contracting and construction company based in Saudi Arabia. The company provides general contracting, construction management, site survey, geotechnical investigation, soil and foundation assessment, and renovation works.</p>
            <p>Euro Construct supports projects through qualified site teams, proper planning, resource management, quality control and safety compliance.</p>
            <div className="vision-mission">
              <article>
                <span>Our vision</span>
                <p>A trusted contracting and site services company in Saudi Arabia, recognized for quality, safety, and reliable construction support solutions.</p>
              </article>
              <article>
                <span>Our mission</span>
                <p>To deliver construction projects with professionalism and commitment by applying effective site management, strict quality control, safe working practices, and efficient coordination from mobilization through final handover.</p>
              </article>
            </div>
          </div>
          <div className="intro-image reveal">
            <img src={images.survey} alt="Construction surveyor using precise site equipment" />
            <span className="image-caption">Precision at every point<br /><b>Site survey · Saudi Arabia</b></span>
          </div>
        </div>
      </section>

      <section className="values section-sand">
        <div className="container values-layout">
          <div className="section-heading reveal">
            <div className="section-label">Core values</div>
            <h2>Principles that guide<br /><em>how we work.</em></h2>
            <p>Strong relationships are built through consistent actions. These values shape our decisions on every site and in every conversation.</p>
          </div>
          <div className="values-list reveal">
            {values.map(([title, text], index) => (
              <article key={title}>
                <div className="value-number">0{index + 1}</div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <Check size={19} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ethics section-dark">
        <div className="ethics-lines" />
        <div className="container ethics-content">
          <div className="section-label light">Ethics & code of conduct</div>
          <div className="ethics-copy">
            <h2>Trust is not a claim.<br /><em>It is a practice.</em></h2>
            <p>Our work is grounded in accountability, transparency, compliance, safety and fairness — the standards that protect people, projects and partnerships.</p>
            <div className="ethics-points">
              {ethics.map(([title, text]) => (
                <article key={title}>
                  <CircleCheck size={18} />
                  <div><strong>{title}</strong><p>{text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
