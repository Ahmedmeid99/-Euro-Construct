import { useLanguage } from '@/context/LanguageContext';

interface PageHeaderProps {
  label: string;
  title: React.ReactNode;
  description?: string;
  arabicLabel?: string;
  arabicTitle?: React.ReactNode;
  arabicDescription?: string;
  dark?: boolean;
  image?: string;
}

function PageHeader({ label, title, description, arabicLabel, arabicTitle, arabicDescription, dark = false, image }: PageHeaderProps) {
  const { isArabic } = useLanguage();
  const isDark = dark || Boolean(image);
  const visibleLabel = isArabic && arabicLabel ? arabicLabel : label;
  const visibleTitle = isArabic && arabicTitle ? arabicTitle : title;
  const visibleDescription = isArabic && arabicDescription ? arabicDescription : description;

  return (
    <section className={`page-header ${isDark ? 'section-dark' : 'section-light'} ${image ? 'has-image' : ''}`}>
      {image && <img className="page-header-image" src={image} alt="" aria-hidden="true" />}
      {image && <div className="page-header-overlay" />}
      <div className="page-header-grid" />
      <div className="container">
        <div className={`section-label reveal ${isDark ? 'light' : ''}`}>{visibleLabel}</div>
        <h1 className="page-header-title reveal">{visibleTitle}</h1>
        {visibleDescription && <p className={`page-header-desc reveal ${isDark ? 'light' : ''}`}>{visibleDescription}</p>}
      </div>
    </section>
  );
}

export default PageHeader;
