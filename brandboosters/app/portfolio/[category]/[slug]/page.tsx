import { notFound } from 'next/navigation';
import PortfolioCaseStudyView from '@/components/portfolio-case-study-view';
import { getCategory, getProject, portfolioCategories, type PortfolioCategoryKey } from '@/lib/portfolio-data';

type Params = { category: PortfolioCategoryKey; slug: string };

export function generateStaticParams() {
  return portfolioCategories.flatMap((category) => category.projects.map((project) => ({ category: category.key, slug: project.slug })));
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const resolvedParams = await params;
  const category = getCategory(resolvedParams.category);
  const project = category ? getProject(resolvedParams.category, resolvedParams.slug) : undefined;

  if (!category || !project) {
    notFound();
  }

  return <PortfolioCaseStudyView category={category} project={project} />;
}
