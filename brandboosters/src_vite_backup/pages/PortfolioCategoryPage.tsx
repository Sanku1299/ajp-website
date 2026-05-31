import { notFound } from './NotFoundPage';
import { useParams } from 'react-router-dom';
import PortfolioCategoryView from '@/components/PortfolioCategoryView';
import { getCategory, portfolioCategories, type PortfolioCategoryKey } from '@/data/portfolioData';

export default function PortfolioCategoryPage() {
  const params = useParams();
  const categoryKey = params.category as PortfolioCategoryKey | undefined;
  const category = categoryKey ? getCategory(categoryKey) : undefined;

  if (!category) {
    return notFound();
  }

  return <PortfolioCategoryView category={category} />;
}

export function portfolioCategoryStaticKeys() {
  return portfolioCategories.map((category) => category.key);
}