import { motion } from 'framer-motion';
import { BookOpen, BadgeCheck, Layers } from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    title: 'Book Printing',
    desc: 'Hardcover, paperback, and premium finishes with vibrant color accuracy and durable binding.',
    price: 'From $4.50 per copy',
  },
  {
    icon: BadgeCheck,
    title: 'ISBN Registration',
    desc: 'Get a unique ISBN and barcode for your book to sell in stores and online marketplaces.',
    price: 'From $49 per title',
  },
  {
    icon: Layers,
    title: 'Custom Printing',
    desc: 'Flyers, posters, brochures, and business cards tailored to your brand and campaign.',
    price: 'Custom quotes • Fast turnaround',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Services</h2>
          <p className="mt-3 text-gray-600">High-quality printing solutions designed for authors, publishers, and growing brands.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <s.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">{s.price}</span>
                <a href="#contact" className="text-sm font-semibold text-blue-600 hover:text-blue-700">Request a quote →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
