import { createFileRoute } from '@tanstack/react-router';
import ClientsPage from '@/pages/ClientsPage';

export const Route = createFileRoute('/clients')({
  head: () => ({ meta: [{ title: 'Clients | Euro Construct for Contracting' }] }),
  component: ClientsPage,
});
