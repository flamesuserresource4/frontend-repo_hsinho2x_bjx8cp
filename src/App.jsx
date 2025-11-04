import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Catalog from './components/Catalog';
import { CalendarDays, PenTool, Sparkles, Mail, Phone, MapPin } from 'lucide-react';

function BlogSection() {
  const posts = [
    {
      id: 1,
      title: 'How to Prepare Print-Ready Files',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop',
      excerpt: 'Avoid common pitfalls and ensure your files are press-perfect every time with this checklist.',
    },
    {
      id: 2,
      title: 'Choosing Paper Stocks that Elevate Your Book',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1600&auto=format&fit=crop',
      excerpt: 'Matte vs. gloss, thickness, and texture—how to pick the right stock for your project.',
    },
    {
      id: 3,
      title: 'Cover Design Tips that Drive Sales',
      image: 'https://images.unsplash.com/photo-1630852722172-a1943ca8a55f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb3ZlciUyMERlc2lnbiUyMFRpcHMlMjB0aGF0fGVufDB8MHx8fDE3NjIyMTU4NTV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      excerpt: 'Practical design insights for creating covers that stand out online and on shelves.',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Blog</h2>
            <p className="mt-3 text-gray-600">Publishing insights, printing tips, and design guidance from our team.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
            Get expert advice <Sparkles size={16} />
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.id} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.excerpt}</p>
                <div className="mt-4 flex items-center gap-3 text-xs text-gray-500">
                  <CalendarDays size={14} />
                  <span>5 min read</span>
                  <PenTool size={14} />
                  <span>Editorial</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Thanks! We\'ll get back to you shortly.');
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Contact Us</h2>
            <p className="mt-3 text-gray-600">Tell us about your project—format, quantity, and any special finishes—and we\'ll prepare a tailored quote.</p>

            <div className="mt-8 space-y-4 text-gray-700">
              <p className="flex items-center gap-3"><Mail className="text-blue-600" size={18} /> hello@primeprint.co</p>
              <p className="flex items-center gap-3"><Phone className="text-blue-600" size={18} /> +1 (555) 123-4567</p>
              <p className="flex items-center gap-3"><MapPin className="text-blue-600" size={18} /> 123 Print Ave, Suite 200, New York, NY</p>
            </div>

            <div className="mt-8">
              <iframe
                title="map"
                className="w-full h-60 rounded-xl border border-gray-200"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24156.22206006909!2d-74.0060154!3d40.7127281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjgiTiA3NMKwMDAnMjEuNSJX!5e0!3m2!1sen!2sus!4v1689720000000"
              />
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a href="#" className="text-sm font-semibold text-gray-700 hover:text-gray-900">Twitter</a>
              <a href="#" className="text-sm font-semibold text-gray-700 hover:text-gray-900">Instagram</a>
              <a href="#" className="text-sm font-semibold text-gray-700 hover:text-gray-900">LinkedIn</a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="jane@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea rows={5} required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Tell us about your project..." />
              </div>
              <button type="submit" className="inline-flex justify-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
                Send message
              </button>
              {status && <p className="text-sm text-gray-600">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="font-inter text-gray-900 antialiased scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Catalog />
        <BlogSection />
        <ContactSection />
      </main>
      <footer className="border-t border-gray-200 py-8 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} PrimePrint. All rights reserved.</p>
          <div className="text-sm text-gray-600">Made with care for authors, publishers, and brands.</div>
        </div>
      </footer>
    </div>
  );
}
