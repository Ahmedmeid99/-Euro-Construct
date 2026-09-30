import { ArrowUpRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { clientLogos } from '@/data/content';
import PageHeader from '@/components/PageHeader';
import useReveal from '@/components/useReveal';
import { useLanguage } from '@/context/LanguageContext';

function ClientsPage() {
  const { isArabic } = useLanguage();
  useReveal();

  return (
    <>
      <PageHeader
        label="Clients"
        title={<>Trusted where <em>it matters.</em></>}
        description="Trusted by leading organizations across public and private sectors to support construction, infrastructure, and project delivery."
        arabicLabel="عملاؤنا"
        arabicTitle={<>ثقة راسخة <em>حيث تصنع الفرق.</em></>}
        arabicDescription="موثوقون لدى جهات رائدة في القطاعين العام والخاص لدعم الإنشاء والبنية التحتية وتنفيذ المشاريع."
        image="/profile/project-10.jpg"
      />

      <section className="clients section-light">
        <div className="container clients-layout">
          <div className="client-wall client-logo-wall reveal" aria-label="Selected Euro Construct clients">
            {clientLogos.map((client) => (
              <div className="client-logo" key={client.name}>
                <img src={client.image} alt={client.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta section-dark">
        <div className="container cta-inner reveal">
          <div className="section-label light">{isArabic ? 'كن شريكاً لنا' : 'Partner with us'}</div>
          <h2>{isArabic ? <>نبني بمسؤولية.<br /><em>ونسلّم بموثوقية.</em></> : <>Built responsibly.<br /><em>Delivered reliably.</em></>}</h2>
          <p>{isArabic ? 'انضم إلى الجهات التي تثق بيورو كونستركت لدعم أعمال الإنشاء والبنية التحتية وتنفيذ المشاريع.' : 'Join the organizations that trust Euro Construct to support their construction, infrastructure, and project delivery.'}</p>
          <Link className="button" to="/contact">{isArabic ? 'ناقش مشروعك القادم' : 'Discuss your next project'} <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}

export default ClientsPage;
