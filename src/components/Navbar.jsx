import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gray-900 text-white grid place-items-center font-bold">FT</div>
            <span className="text-sm font-semibold tracking-wide text-gray-900">FootyTees</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#home" className="hover:text-gray-900 transition-colors">Home</a>
            <a href="#products" className="hover:text-gray-900 transition-colors">Products</a>
            <a href="#faqs" className="hover:text-gray-900 transition-colors">FAQs</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact Us</a>
          </nav>

          <button className="md:hidden p-2 hover:bg-gray-100 rounded">
            <Menu className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  )
}
