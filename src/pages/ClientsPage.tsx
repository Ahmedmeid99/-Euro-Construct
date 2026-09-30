import { ArrowUpRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { clients } from '@/data/content';
import PageHeader from '@/components/PageHeader';
import useReveal from '@/components/useReveal';

function ClientsPage() {
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
          <figure className="client-profile-panel reveal">
            <img src="/profile/client-logos.jpg" alt="Client logos from the Euro Construct company profile" />
            <figcaption className="sr-only">Selected clients: {clients.join(', ')}</figcaption>
          </figure>
        </div>
      </section>

      <section className="cta section-dark">
        <div className="container cta-inner reveal">
          <div className="section-label light">Partner with us</div>
          <h2>Built responsibly.<br /><em>Delivered reliably.</em></h2>
          <p>Join the organizations that trust Euro Construct to support their construction, infrastructure, and project delivery.</p>
          <Link className="button" to="/contact">Discuss your next project <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}

export default ClientsPage;
