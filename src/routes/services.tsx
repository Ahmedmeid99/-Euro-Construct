import { createFileRoute } from '@tanstack/react-router';
import ServicesPage from '@/pages/ServicesPage';

export const Route = createFileRoute('/services')({
  head: () => ({ meta: [{ title: 'Services | Euro Construct for Contracting' }] }),
  component: ServicesPage,
});
