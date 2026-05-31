import { useParams } from 'react-router-dom';
import PortfolioCaseStudyView from '@/components/PortfolioCaseStudyView';
import { getCategory, getProject, portfolioCategories, type PortfolioCategoryKey } from '@/data/portfolioData';
import { notFound } from './NotFoundPage';

export default function PortfolioCaseStudyPage() {
  const params = useParams();
  const categoryKey = params.category as PortfolioCategoryKey | undefined;
  const slug = params.slug;
  const category = categoryKey ? getCategory(categoryKey) : undefined;
  const project = category && slug ? getProject(category.key, slug) : undefined;

  if (!category || !project) {
    return notFound();
  }

  return <PortfolioCaseStudyView category={category} project={project} />;
}

export function portfolioCaseStudyStaticParams() {
  return portfolioCategories.flatMap((category) => category.projects.map((project) => ({ category: category.key, slug: project.slug })));
}