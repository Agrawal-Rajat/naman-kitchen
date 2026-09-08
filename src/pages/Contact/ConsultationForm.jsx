import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles } from 'lucide-react';
import Button from '../../components/common/Button';

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Indore',
    layout: 'L-Shaped',
    propertyType: 'Apartment',
    budget: 'Standard (₹2.5L – ₹4.5L)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate clean dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/10 shadow-card text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-[var(--color-espresso)]">
          Thank You, {formData.name}!
        </h3>
        <p className="text-sm sm:text-base text-[var(--color-espresso-mid)] max-w-md mx-auto leading-relaxed">
          Your consultation request has been received. A Naman Kitchen design specialist will contact you
          within 24 hours to review your {formData.layout} kitchen requirements for {formData.city}.
        </p>
        <Button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: '',
              phone: '',
              city: 'Indore',
              layout: 'L-Shaped',
              propertyType: 'Apartment',
              budget: 'Standard (₹2.5L – ₹4.5L)',
              message: '',
            });
          }}
          variant="outline"
          size="md"
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 sm:p-12 border border-black/10 shadow-card space-y-8">
      <div className="border-b border-black/10 pb-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-naman-indigo)]">
          <Sparkles className="w-3.5 h-3.5 text-[var(--color-naman-red)]" />
          <span>Interactive Kitchen Worksheet</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-espresso)] mt-1">
          Request Free In-Home / Studio Consultation
        </h2>
      </div>

      {/* Row 1: Contact details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="client-name" className="block text-xs font-bold uppercase tracking-wider text-[var(--color-espresso)] mb-2">
            Full Name *
          </label>
          <input
            id="client-name"
            type="text"
            required
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-black/15 bg-[var(--color-ivory-light)] focus:bg-white focus:border-[var(--color-naman-indigo)] focus:outline-none transition-colors text-sm"
          />
        </div>

        <div>
          <label htmlFor="client-phone" className="block text-xs font-bold uppercase tracking-wider text-[var(--color-espresso)] mb-2">
            Phone Number *
          </label>
          <input
            id="client-phone"
            type="tel"
            required
            placeholder="e.g. 98260XXXXX"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-black/15 bg-[var(--color-ivory-light)] focus:bg-white focus:border-[var(--color-naman-indigo)] focus:outline-none transition-colors text-sm"
          />
        </div>
      </div>

      {/* Row 2: Location & Property Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="client-city" className="block text-xs font-bold uppercase tracking-wider text-[var(--color-espresso)] mb-2">
            City / Area in Madhya Pradesh *
          </label>
          <input
            id="client-city"
            type="text"
            required
            placeholder="e.g. Vijay Nagar, Indore"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-black/15 bg-[var(--color-ivory-light)] focus:bg-white focus:border-[var(--color-naman-indigo)] focus:outline-none transition-colors text-sm"
          />
        </div>

        <div>
          <label htmlFor="client-prop" className="block text-xs font-bold uppercase tracking-wider text-[var(--color-espresso)] mb-2">
            Property Type
          </label>
          <select
            id="client-prop"
            value={formData.propertyType}
            onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-black/15 bg-[var(--color-ivory-light)] focus:bg-white focus:border-[var(--color-naman-indigo)] focus:outline-none transition-colors text-sm"
          >
            <option value="Apartment">Apartment / Flat (2BHK / 3BHK)</option>
            <option value="Independent House">Independent House / Villa</option>
            <option value="Renovation">Complete Kitchen Renovation</option>
            <option value="Architect Project">Architect / Commercial Project</option>
          </select>
        </div>
      </div>

      {/* Row 3: Desired Layout & Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="client-layout" className="block text-xs font-bold uppercase tracking-wider text-[var(--color-espresso)] mb-2">
            Preferred Kitchen Layout
          </label>
          <select
            id="client-layout"
            value={formData.layout}
            onChange={(e) => setFormData({ ...formData, layout: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-black/15 bg-[var(--color-ivory-light)] focus:bg-white focus:border-[var(--color-naman-indigo)] focus:outline-none transition-colors text-sm"
          >
            <option value="L-Shaped">L-Shaped Kitchen</option>
            <option value="Straight">Straight Kitchen</option>
            <option value="Parallel">Parallel Kitchen</option>
            <option value="U-Shaped">U-Shaped Kitchen</option>
            <option value="Island">Island Kitchen</option>
            <option value="Custom Modular">Custom Architecture</option>
          </select>
        </div>

        <div>
          <label htmlFor="client-budget" className="block text-xs font-bold uppercase tracking-wider text-[var(--color-espresso)] mb-2">
            Estimated Budget Range
          </label>
          <select
            id="client-budget"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-black/15 bg-[var(--color-ivory-light)] focus:bg-white focus:border-[var(--color-naman-indigo)] focus:outline-none transition-colors text-sm"
          >
            <option value="Essential (₹1.5L – ₹2.5L)">Essential (₹1.5L – ₹2.5L)</option>
            <option value="Standard (₹2.5L – ₹4.5L)">Standard (₹2.5L – ₹4.5L)</option>
            <option value="Premium (₹4.5L – ₹7L)">Premium (₹4.5L – ₹7L)</option>
            <option value="Luxury (₹7L+)">Luxury Bespoke (₹7L+)</option>
          </select>
        </div>
      </div>

      {/* Row 4: Message or requirements */}
      <div>
        <label htmlFor="client-message" className="block text-xs font-bold uppercase tracking-wider text-[var(--color-espresso)] mb-2">
          Notes or Specific Requirements (Optional)
        </label>
        <textarea
          id="client-message"
          rows={4}
          placeholder="Mention any specific preferences like tall pantry units, chimney placement, microwave tall-units, or current construction status..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-black/15 bg-[var(--color-ivory-light)] focus:bg-white focus:border-[var(--color-naman-indigo)] focus:outline-none transition-colors text-sm"
        />
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full sm:w-auto"
          disabled={loading}
          icon={Send}
        >
          {loading ? 'Submitting...' : 'Book Free Consultation'}
        </Button>
        <p className="text-xs text-[var(--color-warm-gray)] mt-3">
          We respect your privacy. No spam. A kitchen specialist will connect for personal guidance.
        </p>
      </div>
    </form>
  );
}
