import { ArrowUpRight, Menu, X, ChevronRight, ChevronDown, Languages } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import Brand from './Brand';
import { navItems, navPaths } from '@/data/content';
import { useLanguage } from '@/context/LanguageContext';

const arabicNav = {
  Home: 'الرئيسية', About: 'من نحن', Capabilities: 'قدراتنا', Services: 'خدماتنا',
  Projects: 'مشاريعنا', Clients: 'عملاؤنا', Contact: 'تواصل معنا',
} as const;

const companyItems = ['About', 'Capabilities', 'Clients'] as const;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isArabic, toggleLanguage } = useLanguage();
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : 'is-top'}`}>
        <div className="container site-header-inner">
          <Brand onClick={closeMenu} />
          <nav className="desktop-nav" aria-label="Main navigation">
            <Link className="nav-link" to="/" activeProps={{ className: 'nav-link nav-active' }} activeOptions={{ exact: true }}>
              {isArabic ? arabicNav.Home : 'Home'}
            </Link>
            <div className="nav-group">
              <button className="nav-link nav-group-trigger" type="button" aria-haspopup="true">
                {isArabic ? 'الشركة' : 'Company'} <ChevronDown size={14} />
              </button>
              <div className="nav-dropdown">
                {companyItems.map((item) => (
                  <Link key={item} to={navPaths[item]} activeProps={{ className: 'nav-dropdown-link nav-active' }} className="nav-dropdown-link">
                    <span>{isArabic ? arabicNav[item] : item}</span><ArrowUpRight size={14} />
                  </Link>
                ))}
              </div>
            </div>
            {(['Services', 'Projects'] as const).map((item) => (
              <Link key={item} className="nav-link" to={navPaths[item]} activeProps={{ className: 'nav-link nav-active' }}>
                {isArabic ? arabicNav[item] : item}
              </Link>
            ))}
          </nav>
          <button className="language-switch desktop-language-switch" type="button" onClick={toggleLanguage} aria-label={isArabic ? 'Switch to English' : 'التبديل إلى العربية'}>
            {isArabic ? 'EN' : 'العربية'}
          </button>
          <Link className="button button-small header-cta" to="/contact">
            {isArabic ? 'تواصل معنا' : 'Contact Us'} <ArrowUpRight size={16} />
          </Link>
          <button className="menu-button" aria-label={isArabic ? 'فتح القائمة' : 'Open navigation'} onClick={() => setMenuOpen(true)}>
            <Menu size={16} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-nav-wrap">
          <div className="mobile-nav-backdrop" onClick={closeMenu} />
          <aside className="mobile-nav" aria-label={isArabic ? 'قائمة الجوال' : 'Mobile navigation'}>
            <div className="mobile-nav-top">
              <Brand />
              <button className="icon-button" aria-label={isArabic ? 'إغلاق القائمة' : 'Close navigation'} onClick={closeMenu}>
                <X size={16} />
              </button>
            </div>
            <div className="mobile-nav-links">
              {navItems.map((item, index) => (
                <Link
                  key={item}
                  className="mobile-nav-link"
                  to={navPaths[item]}
                  activeProps={{ className: 'mobile-nav-link nav-active' }}
                  activeOptions={{ exact: item === 'Home' }}
                  onClick={closeMenu}
                  style={{ animationDelay: `${index * 40}ms` }}
                >
                  {isArabic ? arabicNav[item] : item}
                  <ChevronRight size={18} />
                </Link>
              ))}
              <button className="mobile-language-switch" type="button" onClick={toggleLanguage} aria-label={isArabic ? 'Switch to English' : 'التبديل إلى العربية'}>
                <Languages size={16} />
                <span>{isArabic ? 'English' : 'العربية'}</span>
                <small>{isArabic ? 'EN' : 'AR'}</small>
              </button>
              <Link className="button mobile-contact-button" to="/contact" onClick={closeMenu}>
                {isArabic ? 'تواصل معنا' : 'Contact Us'} <ArrowUpRight size={17} />
              </Link>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

export default Header;
