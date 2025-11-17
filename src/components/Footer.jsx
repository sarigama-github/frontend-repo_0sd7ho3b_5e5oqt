export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 text-sm text-gray-600">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="order-2 sm:order-1">© {new Date().getFullYear()} FootyTees. All rights reserved.</p>
          <nav className="order-1 sm:order-2 flex items-center gap-6">
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Instagram</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
