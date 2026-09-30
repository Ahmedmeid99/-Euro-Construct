import { ArrowUpRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import Brand from './Brand';
import { getServiceSlug, navItems, navPaths, services } from '@/data/content';
import { useLanguage } from '@/context/LanguageContext';

const arabicNav = {
  Home: 'الرئيسية', About: 'من نحن', Capabilities: 'قدراتنا', Services: 'خدماتنا',
  Projects: 'مشاريعنا', Clients: 'عملاؤنا', Contact: 'تواصل معنا',
} as const;

function Footer() {
  const { isArabic } = useLanguage();

  return (
    <footer className="footer section-dark">
      <div className="container">
        <div className="footer-top">
          <Brand light />
          <p>{isArabic ? 'خدمات مقاولات ودعم إنشائي ترتكز على الجودة والسلامة والتنفيذ المنضبط في جميع أنحاء المملكة العربية السعودية.' : 'Contracting and construction support built on quality, safety and disciplined execution across Saudi Arabia.'}</p>
          <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {isArabic ? 'العودة للأعلى' : 'Back to top'} <ArrowUpRight size={16} />
          </button>
        </div>
        <div className="footer-links">
          <div>
            <span>{isArabic ? 'استكشف' : 'Explore'}</span>
            {navItems.filter((item) => item !== 'Home').map((item) => (
              <Link key={item} className="footer-link" to={navPaths[item]}>
                {isArabic ? arabicNav[item] : item}
              </Link>
            ))}
          </div>
          <div>
            <span>{isArabic ? 'الخدمات' : 'Services'}</span>
            {services.map((service) => (
              <Link className="footer-link" to="/services/$serviceId" params={{ serviceId: getServiceSlug(service) }} key={service.title}>
                {isArabic ? ({
                  'General Contracting': 'المقاولات العامة',
                  'Construction Management': 'إدارة الإنشاءات',
                  'Site Survey': 'الرفع المساحي',
                  'Geotechnical Investigation': 'الدراسات الجيوتقنية',
                  'Renovation Works': 'أعمال الترميم',
                } as Record<string, string>)[service.title] : service.title}
              </Link>
            ))}
          </div>
          <div>
            <span>{isArabic ? 'المكاتب' : 'Offices'}</span>
            <p>{isArabic ? <>حي الروضة، طريق المدينة،<br />جدة، المملكة العربية السعودية</> : <>Al Rawdah District, Al Madinah Road,<br />Jeddah, Saudi Arabia</>}</p>
            <p>{isArabic ? <>7095 طريق الملك فيصل بن عبدالعزيز،<br />الرياض، المملكة العربية السعودية</> : <>7095 King Faisal Bin Abdul Aziz Road,<br />Riyadh, Saudi Arabia</>}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 {isArabic ? 'يورو كونستركت للمقاولات' : 'Euro Construct for Contracting'}</span>
          <span>{isArabic ? 'الجودة · السلامة · الموثوقية' : 'Quality · Safety · Reliability'}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
