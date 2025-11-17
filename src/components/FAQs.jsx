export default function FAQs() {
  const faqs = [
    {
      q: 'What sizes do you offer?',
      a: 'We offer unisex sizes XS to XXL. Check the size guide on each product page for exact measurements.'
    },
    {
      q: 'How long does shipping take?',
      a: 'Orders ship within 1-2 business days. Delivery typically takes 3-7 days depending on your location.'
    },
    {
      q: 'What is your return policy?',
      a: 'You can return unworn items within 30 days for a full refund. Start a return from your order confirmation email.'
    },
    {
      q: 'Do you ship internationally?',
      a: 'Yes, we ship worldwide. International shipping times vary by region.'
    }
  ]

  return (
    <section id="faqs" className="py-16 border-t border-gray-100">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8 text-center">FAQs</h2>
        <div className="divide-y divide-gray-200">
          {faqs.map((item, idx) => (
            <details key={idx} className="py-4 group">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="text-sm font-medium text-gray-900">{item.q}</span>
                <span className="text-gray-400 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
