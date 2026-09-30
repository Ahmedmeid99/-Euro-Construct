import { createFileRoute } from '@tanstack/react-router';
import { categories, type ProjectCategory } from '@/data/content';
import ProjectsPage from '@/pages/ProjectsPage';

export const Route = createFileRoute('/projects')({
  validateSearch: (search: Record<string, unknown>): { category?: ProjectCategory } => {
    const category = search.category;
    return typeof category === 'string' && category !== 'All' && categories.includes(category as (typeof categories)[number])
      ? { category: category as ProjectCategory }
      : {};
  },
  head: () => ({ meta: [{ title: 'Projects | Euro Construct for Contracting' }] }),
  component: ProjectsPage,
});
