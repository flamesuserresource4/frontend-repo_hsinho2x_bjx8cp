import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-white pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Professional Printing Services
              <span className="block text-blue-600">for Books, Brands, and Beyond</span>
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-xl">
              From premium book printing to eye‑catching marketing materials, we deliver crisp results, fast turnarounds, and exceptional quality.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors">
                Get a Quote
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                Explore Services
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="relative grid grid-cols-3 gap-4">
              <div className="col-span-2 aspect-[4/3] rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5">
                <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop" alt="Book printing" className="h-full w-full object-cover" />
              </div>
              <div className="row-span-2 aspect-[3/4] rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5">
                <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1600&auto=format&fit=crop" alt="Flyers and posters" className="h-full w-full object-cover" />
              </div>
              <div className="col-span-2 aspect-[4/3] rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5">
                <img src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1600&auto=format&fit=crop" alt="Business cards" className="h-full w-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
