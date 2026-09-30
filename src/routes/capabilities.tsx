import { createFileRoute } from '@tanstack/react-router';
import CapabilitiesPage from '@/pages/CapabilitiesPage';

export const Route = createFileRoute('/capabilities')({
  head: () => ({ meta: [{ title: 'Capabilities | Euro Construct for Contracting' }] }),
  component: CapabilitiesPage,
});
