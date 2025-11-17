export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-20 sm:py-28 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500">Minimal • Modern • Football</p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Premium Soccer T‑Shirts
            </h1>
            <p className="mt-5 text-gray-600 leading-relaxed max-w-md">
              Clean designs inspired by the world's greatest clubs and national teams. Crafted for comfort, built for everyday wear.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#products" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-white text-sm font-semibold hover:bg-black transition-colors">
                Shop Collection
              </a>
              <a href="#faqs" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                Learn More
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200" />
            <div className="absolute inset-4 rounded-xl border border-white/60 shadow-[0_10px_50px_-10px_rgba(0,0,0,0.25)] bg-white/40 backdrop-blur-sm" />
          </div>
        </div>
      </div>
    </section>
  )
}
