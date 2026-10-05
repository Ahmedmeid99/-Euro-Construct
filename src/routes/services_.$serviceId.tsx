import { ArrowLeft, ArrowUpRight, CircleCheck } from 'lucide-react';
import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { getServiceBySlug, getServiceSlug, services } from '@/data/content';
import { serviceArabic } from '@/data/arabic';
import { useLanguage } from '@/context/LanguageContext';

const serviceDetails: Record<string, { overview: string; overviewAr: string; scope: string[]; scopeAr: string[] }> = {
  'General Contracting': {
    overview: 'We deliver coordinated construction packages from mobilization and procurement through execution, testing, commissioning, and handover. Every phase is managed around safety, quality, schedule, and clear site accountability.',
    overviewAr: 'ننفذ حزم الإنشاء المتكاملة بدءاً من التجهيز والمشتريات وحتى التنفيذ والاختبارات والتشغيل والتسليم، مع إدارة كل مرحلة وفق متطلبات السلامة والجودة والبرنامج الزمني والمسؤولية الواضحة في الموقع.',
    scope: ['Project mobilization and site establishment', 'Civil, structural, architectural, and MEP execution', 'Procurement and subcontractor coordination', 'Quality control, testing, commissioning, and handover'],
    scopeAr: ['تجهيز المشروع وتأسيس الموقع', 'تنفيذ الأعمال المدنية والإنشائية والمعمارية والكهروميكانيكية', 'إدارة المشتريات وتنسيق المقاولين المتخصصين', 'ضبط الجودة والاختبارات والتشغيل والتسليم'],
  },
  'Construction Management': {
    overview: 'Our construction management teams bring structure to complex delivery environments through disciplined planning, field coordination, progress control, and transparent reporting.',
    overviewAr: 'تمنح فرق إدارة الإنشاءات لدينا المشاريع هيكلاً تنفيذياً واضحاً من خلال التخطيط المنضبط والتنسيق الميداني ومراقبة التقدم والتقارير الشفافة.',
    scope: ['Construction planning and programme control', 'Site team and contractor coordination', 'Cost, progress, and resource monitoring', 'Risk, quality, safety, and stakeholder reporting'],
    scopeAr: ['تخطيط الإنشاءات وضبط البرنامج الزمني', 'تنسيق فرق الموقع والمقاولين', 'متابعة التكلفة والتقدم والموارد', 'تقارير المخاطر والجودة والسلامة وأصحاب المصلحة'],
  },
  'Site Survey': {
    overview: 'We capture reliable site information that supports sound design and construction decisions, using coordinated field teams and clear technical documentation.',
    overviewAr: 'نوفر بيانات موقع موثوقة تدعم قرارات التصميم والتنفيذ السليمة من خلال فرق ميدانية منسقة ووثائق فنية واضحة.',
    scope: ['Topographic and engineering surveys', 'Boundary, cadastral, and route surveys', 'Existing-condition and utility mapping', 'Digital mapping, records, and technical reports'],
    scopeAr: ['الرفع الطبوغرافي والهندسي', 'مسح الحدود والأراضي ومسارات الطرق', 'توثيق الظروف القائمة وشبكات الخدمات', 'إعداد الخرائط الرقمية والسجلات والتقارير الفنية'],
  },
  'Geotechnical Investigation': {
    overview: 'Our investigations define subsurface conditions and provide the factual basis for safe foundations, infrastructure, earthworks, and risk-informed design.',
    overviewAr: 'تحدد دراساتنا خصائص التربة تحت السطح وتوفر الأساس الفني لتصميم آمن للأساسات والبنية التحتية والأعمال الترابية وإدارة المخاطر.',
    scope: ['Borehole drilling and soil sampling', 'Field and laboratory testing', 'Foundation and ground-condition assessment', 'Geotechnical interpretation and reporting'],
    scopeAr: ['حفر الجسات وأخذ عينات التربة', 'الاختبارات الميدانية والمخبرية', 'تقييم الأساسات وظروف التربة', 'التحليل الجيوتقني وإعداد التقارير'],
  },
  'Renovation Works': {
    overview: 'We upgrade existing buildings through carefully sequenced renovation, fit-out, repair, and finishing works that respect ongoing operations and the final design intent.',
    overviewAr: 'نطور المباني القائمة من خلال أعمال ترميم وتجهيز وإصلاح وتشطيب مدروسة المراحل، تراعي استمرارية التشغيل وتحقق الرؤية التصميمية النهائية.',
    scope: ['Existing-building assessment and planning', 'Architectural renovation and interior fit-out', 'MEP upgrades and service coordination', 'Finishes, testing, snagging, and final handover'],
    scopeAr: ['تقييم المبنى القائم وتخطيط الأعمال', 'الترميم المعماري والتجهيز الداخلي', 'تطوير الأنظمة الكهروميكانيكية وتنسيق الخدمات', 'التشطيبات والاختبارات ومعالجة الملاحظات والتسليم'],
  },
};

export const Route = createFileRoute('/services_/$serviceId')({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.serviceId);
    if (!service) throw notFound();
    const { title, text, image } = service;
    return { title, text, image };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? 'Service'} | Euro Construct for Contracting` },
      { name: 'description', content: loaderData?.text },
      { property: 'og:image', content: loaderData?.image },
    ],
  }),
  component: ServiceDetailsPage,
});

function ServiceDetailsPage() {
  const { isArabic } = useLanguage();
  const service = Route.useLoaderData();
  const details = serviceDetails[service.title];
  const related = services.filter((item) => item.title !== service.title).slice(0, 3);

  return (
    <>
      <section className="project-detail-hero service-detail-hero section-dark">
        <img src={service.image} alt="" />
        <div className="project-detail-overlay" />
        <div className="container project-detail-hero-content">
          <Link className="project-back-link" to="/services"><ArrowLeft size={17} /> {isArabic ? 'العودة إلى الخدمات' : 'Back to services'}</Link>
          <span className="project-detail-category">{isArabic ? 'خدمات يورو كونستركت' : 'Euro Construct services'}</span>
          <h1>{isArabic ? serviceArabic[service.title][0] : service.title}</h1>
          <p className="service-detail-intro">{isArabic ? serviceArabic[service.title][1] : service.text}</p>
        </div>
      </section>

      <section className="project-detail-body section-light">
        <div className="container project-detail-layout">
          <article className="project-detail-copy">
            <div className="section-label">{isArabic ? 'نظرة عامة' : 'Service overview'}</div>
            <h2>{isArabic ? <>خبرة منضبطة.<br /><em>تنفيذ موثوق.</em></> : <>Disciplined expertise.<br /><em>Reliable delivery.</em></>}</h2>
            <p>{isArabic ? details.overviewAr : details.overview}</p>
            <div className="service-scope-panel service-scope-inline">
              <span>{isArabic ? 'نطاق الخدمة' : 'Service scope'}</span>
              {(isArabic ? details.scopeAr : details.scope).map((item) => <div key={item}><CircleCheck size={18} /><p>{item}</p></div>)}
            </div>
          </article>
          <aside className="service-detail-sidebar">
            <nav className="service-directory" aria-label={isArabic ? 'قائمة الخدمات' : 'Services list'}>
              <span>{isArabic ? 'جميع الخدمات' : 'All services'}</span>
              {services.map((item, index) => (
                <Link
                  className={`service-directory-link ${item.title === service.title ? 'is-active' : ''}`}
                  to="/services/$serviceId"
                  params={{ serviceId: getServiceSlug(item) }}
                  key={item.title}
                  aria-current={item.title === service.title ? 'page' : undefined}
                >
                  <small>0{index + 1}</small>
                  <strong>{isArabic ? serviceArabic[item.title][0] : item.title}</strong>
                  {item.title === service.title ? <CircleCheck size={17} /> : <ArrowUpRight size={16} />}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      </section>

      <section className="related-services section-sand">
        <div className="container">
          <div className="section-heading">
            <div className="section-label">{isArabic ? 'خدمات ذات صلة' : 'Related services'}</div>
            <h2>{isArabic ? <>دعم متكامل <em>لمشروعك.</em></> : <>Integrated support for <em>your project.</em></>}</h2>
          </div>
          <div className="related-project-grid">
            {related.map((item) => (
              <Link className="related-project-card" to="/services/$serviceId" params={{ serviceId: getServiceSlug(item) }} key={item.title}>
                <img src={item.image} alt="" loading="lazy" />
                <div><span>{isArabic ? 'خدماتنا' : 'Our services'}</span><h3>{isArabic ? serviceArabic[item.title][0] : item.title}</h3><ArrowUpRight size={19} /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="project-detail-cta section-dark">
        <div className="container">
          <CircleCheck size={28} />
          <div><span>{isArabic ? 'هل تخطط لمشروعك القادم؟' : 'Planning your next project?'}</span><h2>{isArabic ? 'لنتحدث عن نطاق العمل.' : "Let's discuss the scope."}</h2></div>
          <Link className="button" to="/contact">{isArabic ? 'ناقش مشروعك' : 'Discuss your project'} <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
