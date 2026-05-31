import { Link } from 'react-router-dom';

export function notFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-40 text-center md:px-6">
      <p className="font-groove text-[11px] uppercase tracking-[0.38em] text-black/72">404</p>
      <h1 className="mt-4 fluid-display-lg font-display uppercase tracking-[0.08em] text-navy">Page not found</h1>
      <p className="mt-6 text-sm leading-8 text-black/82">The page you are looking for does not exist in this React build.</p>
      <Link to="/" className="mt-8 inline-flex rounded-full bg-navy px-6 py-4 font-groove text-xs font-semibold uppercase tracking-[0.28em] text-white">
        Back home
      </Link>
    </div>
  );
}

export default function NotFoundPage() {
  return notFound();
}