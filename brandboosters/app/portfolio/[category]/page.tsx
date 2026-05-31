import { notFound } from 'next/navigation';
import PortfolioCategoryView from '@/components/portfolio-category-view';
import { getCategory, portfolioCategories, type PortfolioCategoryKey } from '@/lib/portfolio-data';

type Params = { category: PortfolioCategoryKey };

export function generateStaticParams() {
  return portfolioCategories.map((category) => ({ category: category.key }));
}

export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const resolvedParams = await params;
  const category = getCategory(resolvedParams.category);
  if (!category) {
    notFound();
  }

  return <PortfolioCategoryView category={category} />;
}
