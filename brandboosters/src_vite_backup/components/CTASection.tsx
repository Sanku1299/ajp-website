import { Link } from 'react-router-dom';

type CTASectionProps = {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
};

export default function CTASection({ title, description, primaryHref, primaryLabel, secondaryHref, secondaryLabel }: CTASectionProps) {
  return (
    <section className="section-shell px-4 pb-18 md:px-6 md:pb-24">
      <div className="container-laptop mx-auto overflow-hidden rounded-[40px] border border-black/[0.06] bg-[linear-gradient(135deg,#061B3A,#0c274f_45%,#07111f)] px-6 py-12 text-white md:px-10 md:py-14 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="font-groove text-[11px] uppercase tracking-[0.38em] text-white/86">CTA Footer</p>
            <h2 className="mt-4 fluid-display-xl font-display uppercase leading-[0.92] tracking-[0.08em] text-white">
              {title}
            </h2>
          </div>
          <div className="max-w-xl justify-self-start lg:justify-self-end">
            <p className="text-sm leading-7 text-white/84 md:text-base">{description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to={primaryHref} className="rounded-full bg-orange px-6 py-4 font-groove text-xs font-semibold uppercase tracking-[0.28em] text-dark">
                {primaryLabel}
              </Link>
              <Link to={secondaryHref} className="rounded-full border border-[rgba(219,219,219,0.24)] bg-[rgba(219,219,219,0.12)] px-6 py-4 font-groove text-xs font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-md">
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}