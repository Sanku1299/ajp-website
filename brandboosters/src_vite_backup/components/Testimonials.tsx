import { motion } from 'framer-motion';
import DynamicImage from './DynamicImage';

const testimonials = [
  { quote: 'BrandBoosters gave our launch a premium edge that immediately changed how the market responded.', author: 'Maya Chen, Founder at Northline', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80' },
  { quote: 'The motion system, pacing, and visual language made our digital presence feel unmistakably elevated.', author: 'Omar Patel, CMO at Pulse Commerce', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80' },
  { quote: 'Everything felt considered. The brand now feels like it belongs in the same conversation as the best in the category.', author: 'Leah Morgan, CEO at Astra Studio', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80' }
];

export default function Testimonials() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {testimonials.map((item, index) => (
        <motion.article
          key={item.author}
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: index * 0.06 }}
          className="rounded-[30px] border border-black/[0.06] bg-[rgba(255,255,255,0.52)] p-6 shadow-sm backdrop-blur-sm md:p-8"
        >
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 overflow-hidden rounded-full border border-black/[0.06] bg-[rgba(255,255,255,0.34)]">
              <DynamicImage src={item.avatar} alt={item.author} className="h-full w-full" imageClassName="rounded-full" />
            </div>
            <div>
              <p className="font-display text-4xl uppercase leading-[0.92] tracking-[0.1em] text-navy">“</p>
              <p className="mt-2 text-sm leading-7 text-black/84">{item.quote}</p>
            </div>
          </div>
          <p className="mt-8 font-groove text-[11px] uppercase tracking-[0.34em] text-black/66">{item.author}</p>
        </motion.article>
      ))}
    </div>
  );
}