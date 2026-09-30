/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Language = 'en' | 'ar';

type LanguageContextValue = {
  language: Language;
  isArabic: boolean;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem('ecc-language');
    if (savedLanguage === 'ar') setLanguage('ar');
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    window.localStorage.setItem('ecc-language', language);
  }, [hasMounted, language]);

  const value = useMemo(() => ({
    language,
    isArabic: language === 'ar',
    toggleLanguage: () => setLanguage((current) => current === 'en' ? 'ar' : 'en'),
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
}
