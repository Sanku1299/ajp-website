import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from '@/layouts/AppLayout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import BlogPage from '@/pages/BlogPage';
import ContactPage from '@/pages/ContactPage';
import PortfolioIndexPage from '@/pages/PortfolioIndexPage';
import PortfolioCategoryPage from '@/pages/PortfolioCategoryPage';
import PortfolioCaseStudyPage from '@/pages/PortfolioCaseStudyPage';
import NotFoundPage from '@/pages/NotFoundPage';

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<PortfolioIndexPage />} />
        <Route path="/portfolio/:category" element={<PortfolioCategoryPage />} />
        <Route path="/portfolio/:category/:slug" element={<PortfolioCaseStudyPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppLayout>
  );
}