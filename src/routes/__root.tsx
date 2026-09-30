import type { ReactNode } from 'react';
import {
  createRootRoute,
  HeadContent,
  Link,
  Outlet,
  Scripts,
} from '@tanstack/react-router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';
import appCss from '@/index.css?url';

const description =
  'Euro Construct is a contracting and construction company providing integrated project support across Saudi Arabia.';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { title: 'Euro Construct for Contracting | Building with discipline' },
      { name: 'description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Euro Construct for Contracting' },
      { property: 'og:description', content: description },
      { property: 'og:image', content: '/profile/hero-construction.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: '/profile/hero-construction.jpg' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <RootDocument>
      <LanguageProvider>
        <div className="site-shell">
          <Header />
          <main id="top">
            <Outlet />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <section className="page-header section-dark">
      <div className="container page-header-inner">
        <div className="eyebrow light"><span /> 404</div>
        <h1>That page could not be found.</h1>
        <Link className="button" to="/">Return home</Link>
      </div>
    </section>
  );
}
