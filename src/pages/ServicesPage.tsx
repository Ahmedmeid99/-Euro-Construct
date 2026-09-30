import { ArrowUpRight, MoveRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { getServiceSlug, services } from '@/data/content';
import PageHeader from '@/components/PageHeader';
import useReveal from '@/components/useReveal';
import { useLanguage } from '@/context/LanguageContext';
import { serviceArabic } from '@/data/arabic';

function ServicesPage() {
  const { isArabic } = useLanguage();
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
              <Link className="service-card service-card-link reveal" to="/services/$serviceId" params={{ serviceId: getServiceSlug(services.find((service) => service.title === title)!) }} key={title}>
                <div className="service-top">
                  <div className="service-icon"><Icon size={22} /></div>
                  <span>0{services.findIndex((service) => service.title === title) + 1}</span>
                </div>
                <h3>{isArabic ? serviceArabic[title][0] : title}</h3>
                <p>{isArabic ? serviceArabic[title][1] : text}</p>
                <span className="text-button">{isArabic ? 'عرض تفاصيل الخدمة' : 'View service details'} <MoveRight size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta section-dark">
        <div className="container cta-inner reveal">
          <div className="section-label light">{isArabic ? 'الجودة والسلامة' : 'Quality & safety'}</div>
          <h2>{isArabic ? <>نبني بمسؤولية.<br /><em>ونسلّم بموثوقية.</em></> : <>Built responsibly.<br /><em>Delivered reliably.</em></>}</h2>
          <p>{isArabic ? 'ممارسات عمل آمنة وضبط للجودة وتنفيذ موثوق وبناء مسؤول في كل مشروع.' : 'Safe working practices, quality control, reliable project execution and responsible construction — built into every engagement.'}</p>
          <Link className="button" to="/contact">{isArabic ? 'ناقش مشروعك القادم' : 'Discuss your next project'} <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
