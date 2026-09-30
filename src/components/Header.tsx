import { ArrowUpRight, Menu, X, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import Brand from './Brand';
import { navItems, navPaths } from '@/data/content';
import { useLanguage } from '@/context/LanguageContext';

const arabicNav = {
  Home: 'الرئيسية', About: 'من نحن', Capabilities: 'قدراتنا', Services: 'خدماتنا',
  Projects: 'مشاريعنا', Clients: 'عملاؤنا', Contact: 'تواصل معنا',
} as const;

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

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : 'is-top'}`}>
        <Link to="/" className="header-brand-btn" aria-label="Euro Construct home">
          <Brand />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item}
              className="nav-link"
              to={navPaths[item]}
              activeProps={{ className: 'nav-link nav-active' }}
              activeOptions={{ exact: item === 'Home' }}
            >
              {isArabic ? arabicNav[item] : item}
            </Link>
          ))}
        </nav>
        <button className="language-switch" type="button" onClick={toggleLanguage} aria-label={isArabic ? 'Switch to English' : 'التبديل إلى العربية'}>
          {isArabic ? 'EN' : 'العربية'}
        </button>
        <Link className="button button-small header-cta" to="/contact">
          {isArabic ? 'تواصل معنا' : 'Contact Us'} <ArrowUpRight size={16} />
        </Link>
        <button className="menu-button" aria-label="Open navigation" onClick={() => setMenuOpen(true)}>
          <Menu size={22} />
        </button>
      </header>

      {menuOpen && (
        <div className="mobile-nav-wrap">
          <div className="mobile-nav-backdrop" onClick={closeMenu} />
          <aside className="mobile-nav" aria-label="Mobile navigation">
            <div className="mobile-nav-top">
              <Brand />
              <button className="icon-button" aria-label="Close navigation" onClick={closeMenu}>
                <X size={22} />
              </button>
            </div>
            {navItems.map((item) => (
              <Link
                key={item}
                className="mobile-nav-link"
                to={navPaths[item]}
                activeProps={{ className: 'mobile-nav-link nav-active' }}
                activeOptions={{ exact: item === 'Home' }}
                onClick={closeMenu}
              >
                {isArabic ? arabicNav[item] : item}
                <ChevronRight size={18} />
              </Link>
            ))}
            <Link className="button" to="/contact" onClick={closeMenu}>
              {isArabic ? 'تواصل معنا' : 'Contact Us'} <ArrowUpRight size={17} />
            </Link>
          </aside>
        </div>
      )}
    </>
  );
}

export default Header;
