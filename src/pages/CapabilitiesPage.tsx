import { capabilities } from '@/data/content';
import PageHeader from '@/components/PageHeader';
import useReveal from '@/components/useReveal';
import { useLanguage } from '@/context/LanguageContext';
import { capabilityArabic } from '@/data/arabic';

function CapabilitiesPage() {
  const { isArabic } = useLanguage();
  useReveal();

  return (
    <>
      <PageHeader
        label="Construction capabilities"
        title={<>The structure behind <em>successful delivery.</em></>}
        description="Integrated execution capabilities supporting reliable construction delivery across key sectors."
        arabicLabel="قدراتنا الإنشائية"
        arabicTitle={<>المنظومة التي تقود <em>التنفيذ الناجح.</em></>}
        arabicDescription="قدرات تنفيذ متكاملة تدعم تقديم أعمال إنشائية موثوقة في القطاعات الرئيسية."
        image="/profile/project-02.jpg"
      />

      <section className="capabilities section-sand">
        <div className="container">
          <div className="capability-grid">
            {capabilities.map(({ title, text, icon: Icon }, index) => (
              <article className="capability reveal" key={title} style={{ transitionDelay: `${index * 60}ms` }}>
                <div className="capability-icon"><Icon size={22} strokeWidth={1.5} /></div>
                <div>
                  <span className="index">0{index + 1}</span>
                  <h3>{isArabic ? capabilityArabic[title][0] : title}</h3>
                  <p>{isArabic ? capabilityArabic[title][1] : text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ethics section-dark">
        <div className="ethics-lines" />
        <div className="container ethics-content">
          <div className="section-label light">{isArabic ? 'منهجيتنا' : 'Our approach'}</div>
          <div className="ethics-copy">
            <h2>{isArabic ? <>تنفيذ منضبط،<br /><em>من البداية إلى النهاية.</em></> : <>Disciplined execution,<br /><em>end to end.</em></>}</h2>
            <p>{isArabic ? 'من التجهيز وحتى التسليم النهائي، تتكامل قدراتنا من خلال فرق مؤهلة وتخطيط سليم وإدارة الموارد وضبط الجودة والالتزام بالسلامة في كل مرحلة.' : 'From mobilization through final handover, our capabilities work together — qualified teams, proper planning, resource management, quality control and safety compliance embedded into every phase of delivery.'}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default CapabilitiesPage;
