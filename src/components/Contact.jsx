export default function Contact() {
  return (
    <section id="contact" className="py-16 border-t border-gray-100">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8 text-center">Contact Us</h2>
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <form className="grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Name</label>
                <input type="text" className="w-full h-10 rounded-md border border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full h-10 rounded-md border border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Message</label>
              <textarea className="w-full rounded-md border border-gray-300 px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="How can we help?" />
            </div>
            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-white text-sm font-semibold hover:bg-black transition-colors">
              Send Message
            </button>
          </form>
          <div className="mt-6 text-sm text-gray-600">
            <p>Email: support@footytees.shop</p>
            <p>Mon–Fri, 9am–6pm</p>
          </div>
        </div>
      </div>
    </section>
  )
}
