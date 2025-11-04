import { useMemo, useState } from 'react';

const SAMPLE_BOOKS = [
  {
    id: 1,
    title: 'Winds of Ink',
    cover: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=1200&auto=format&fit=crop',
    genre: 'Fiction',
    blurb: 'A sweeping saga about stories that shape us.'
  },
  {
    id: 2,
    title: 'Design Basics',
    cover: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0ea?q=80&w=1200&auto=format&fit=crop',
    genre: 'Design',
    blurb: 'Foundational principles for visual communication.'
  },
  {
    id: 3,
    title: 'The Startup Playbook',
    cover: 'https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?q=80&w=1200&auto=format&fit=crop',
    genre: 'Business',
    blurb: 'Lean strategies for building products that matter.'
  },
  {
    id: 4,
    title: 'Poems at Dusk',
    cover: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    genre: 'Poetry',
    blurb: 'A collection about light, shadow, and longing.'
  },
  {
    id: 5,
    title: 'Photography Field Guide',
    cover: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop',
    genre: 'Photography',
    blurb: 'Techniques and tips for breathtaking shots.'
  },
  {
    id: 6,
    title: 'Market Smarts',
    cover: 'https://images.unsplash.com/photo-1470167290877-7d5d3446de4c?q=80&w=1200&auto=format&fit=crop',
    genre: 'Business',
    blurb: 'Insights for modern marketing teams.'
  },
];

export default function Catalog() {
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('All');

  const genres = useMemo(() => ['All', ...Array.from(new Set(SAMPLE_BOOKS.map(b => b.genre)))], []);

  const filtered = useMemo(() => {
    return SAMPLE_BOOKS.filter(b => {
      const matchesGenre = genre === 'All' || b.genre === genre;
      const matchesQuery = b.title.toLowerCase().includes(query.toLowerCase());
      return matchesGenre && matchesQuery;
    });
  }, [genre, query]);

  return (
    <section id="catalog" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Book Catalog</h2>
            <p className="mt-3 text-gray-600 max-w-2xl">Browse a selection of recently printed titles. Filter by genre or search by title.</p>
          </div>
          <div className="flex items-center gap-3">
            <select value={genre} onChange={(e) => setGenre(e.target.value)} className="h-11 rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              {genres.map(g => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search title..." className="h-11 w-56 rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((b) => (
            <article key={b.id} className="group overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={b.cover} alt={b.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{b.title}</h3>
                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">{b.genre}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{b.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
