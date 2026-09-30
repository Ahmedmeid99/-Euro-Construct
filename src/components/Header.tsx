import { ArrowUpRight, Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
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

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : 'is-top'}`}>
        <div className="container site-header-inner">
          <Link to="/" className="header-brand-btn" aria-label="Euro Construct home">
            <Brand />
          </Link>
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
          <button className="language-switch" type="button" onClick={toggleLanguage} aria-label={isArabic ? 'Switch to English' : 'التبديل إلى العربية'}>
            {isArabic ? 'EN' : 'العربية'}
          </button>
          <Link className="button button-small header-cta" to="/contact">
            {isArabic ? 'تواصل معنا' : 'Contact Us'} <ArrowUpRight size={16} />
          </Link>
          <button className="menu-button" aria-label="Open navigation" onClick={() => setMenuOpen(true)}>
            <Menu size={22} />
          </button>
        </div>
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
