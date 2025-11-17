import { useMemo, useState } from 'react'

const MOCK_PRODUCTS = [
  { id: 1, name: 'FC Barcelona Classic Tee', team: 'Barcelona', color: 'Blue/Red', price: 39, image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, name: 'Real Madrid Blanc Tee', team: 'Real Madrid', color: 'White', price: 42, image: 'https://images.unsplash.com/photo-1508918884069-2741137bed9d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGQyUyMEJhcmNlbG9uYSUyMENsYXNzaWMlMjBUZWV8ZW58MHwwfHx8MTc2MzQwNDE0M3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 3, name: 'Manchester City Ice Tee', team: 'Man City', color: 'Sky Blue', price: 40, image: 'https://images.unsplash.com/photo-1508918884069-2741137bed9d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGQyUyMEJhcmNlbG9uYSUyMENsYXNzaWMlMjBUZWV8ZW58MHwwfHx8MTc2MzQwNDE0M3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 4, name: 'AC Milan Rossoneri Tee', team: 'AC Milan', color: 'Black/Red', price: 38, image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, name: 'Argentina Albiceleste Tee', team: 'Argentina', color: 'White/Blue', price: 41, image: 'https://images.unsplash.com/photo-1508918884069-2741137bed9d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGQyUyMEJhcmNlbG9uYSUyMENsYXNzaWMlMjBUZWV8ZW58MHwwfHx8MTc2MzQwNDE0M3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 6, name: 'Brazil Seleção Tee', team: 'Brazil', color: 'Yellow', price: 40, image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop' },
]

export default function ProductGrid() {
  const [query, setQuery] = useState('')
  const [team, setTeam] = useState('all')
  const [sort, setSort] = useState('featured')

  const filtered = useMemo(() => {
    let items = MOCK_PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.team.toLowerCase().includes(query.toLowerCase())
    )

    if (team !== 'all') items = items.filter(p => p.team === team)

    if (sort === 'price-asc') items = [...items].sort((a,b) => a.price - b.price)
    if (sort === 'price-desc') items = [...items].sort((a,b) => b.price - a.price)

    return items
  }, [query, team, sort])

  const teams = ['all', ...Array.from(new Set(MOCK_PRODUCTS.map(p => p.team)))]

  return (
    <section id="products" className="py-16 border-t border-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Latest Drops</h2>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <input
              type="text"
              placeholder="Search by team"
              value={query}
              onChange={(e)=>setQuery(e.target.value)}
              className="h-9 w-48 rounded-md border border-gray-300 px-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            />
            <select value={team} onChange={(e)=>setTeam(e.target.value)} className="h-9 rounded-md border border-gray-300 px-3">
              {teams.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <select value={sort} onChange={(e)=>setSort(e.target.value)} className="h-9 rounded-md border border-gray-300 px-3">
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => (
            <article key={p.id} className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-gray-100">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105"/>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">{p.name}</h3>
                <span className="text-sm font-semibold text-gray-900">${'{'}p.price{'}'}</span>
              </div>
              <p className="text-xs text-gray-500">{p.team} • {p.color}</p>
              <button className="mt-3 inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Quick Add
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
