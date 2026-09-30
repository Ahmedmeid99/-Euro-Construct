import { useState } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { services } from '@/data/content';
import PageHeader from '@/components/PageHeader';
import useReveal from '@/components/useReveal';

function ServicesPage() {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  useReveal();

  return (
    <>
      <PageHeader
        label="Services"
        title={<>Capability that meets <em>the moment.</em></>}
        description="Integrated contracting solutions from project mobilization through final handover."
        arabicLabel="خدماتنا"
        arabicTitle={<>قدرات تواكب <em>كل مرحلة.</em></>}
        arabicDescription="حلول مقاولات متكاملة من تجهيز المشروع وحتى التسليم النهائي."
        image="/profile/project-11.jpg"
      />

      <section className="services section-light">
        <div className="container">
          <div className="services-grid">
            {services.map(({ title, icon: Icon, text }) => (
              <article className={`service-card reveal ${expandedService === title ? 'expanded' : ''}`} key={title}>
                <div className="service-top">
                  <div className="service-icon"><Icon size={22} /></div>
                  <span>0{services.findIndex((service) => service.title === title) + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <button className="text-button" onClick={() => setExpandedService(expandedService === title ? null : title)}>
                  {expandedService === title ? 'Close details' : 'Learn more'}
                  <ChevronDown className={expandedService === title ? 'rotated' : ''} size={16} />
                </button>
                {expandedService === title && (
                  <div className="service-detail">
                    A considered approach to planning, coordination, resource management and quality control keeps the work clear from start to finish.
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta section-dark">
        <div className="container cta-inner reveal">
          <div className="section-label light">Quality & safety</div>
          <h2>Built responsibly.<br /><em>Delivered reliably.</em></h2>
          <p>Safe working practices, quality control, reliable project execution and responsible construction — built into every engagement.</p>
          <Link className="button" to="/contact">Discuss your next project <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
