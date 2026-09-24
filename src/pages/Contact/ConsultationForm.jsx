import React, { useState, useRef } from 'react';
import { Send, CheckCircle2, Sparkles, ChevronDown, AlertCircle, Loader2 } from 'lucide-react';
import Button from '../../components/common/Button';

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: 'Indore',
    layout: 'L-Shaped',
    propertyType: 'Apartment',
    budget: 'Standard (₹2.5L – ₹4.5L)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef(null);

  // Build a well-formatted WhatsApp message from form data
  const buildWhatsAppUrl = (data) => {
    const lines = [
      `🏠 *New Kitchen Consultation Request*`,
      ``,
      `👤 *Name:* ${data.name}`,
      `📧 *Email:* ${data.email}`,
      `📞 *Phone:* ${data.phone}`,
      `📍 *City / Area:* ${data.city}`,
      `🏗️ *Property Type:* ${data.propertyType}`,
      `📐 *Preferred Layout:* ${data.layout}`,
      `💰 *Budget Range:* ${data.budget}`,
    ];
    if (data.message) {
      lines.push(``, `📝 *Additional Notes:*`, data.message);
    }
    lines.push(``, `— Sent via Naman Kitchen Website`);
    const text = encodeURIComponent(lines.join('\n'));
    return `https://wa.me/919575511657?text=${text}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const payload = {
        access_key: '03954b1e-833f-4ffd-ad09-90f881cfc6e6',
        subject: `🏠 New Kitchen Consultation – ${formData.name} | ${formData.city}`,
        from_name: 'Naman Kitchen Website',
        // Structured data for a clean email
        'Full Name': formData.name,
        'Email': formData.email,
        'Phone': formData.phone,
        'City / Area': formData.city,
        'Property Type': formData.propertyType,
        'Preferred Layout': formData.layout,
        'Budget Range': formData.budget,
        'Additional Notes': formData.message || 'No additional notes provided.',
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        // Also send the consultation details via WhatsApp
        const whatsappUrl = buildWhatsAppUrl(formData);
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      } else {
        setError(result.message || 'Something went wrong. Please try again or contact us directly.');
      }
    } catch (err) {
      setError('Network error. Please check your internet connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="consultation-success bg-white rounded-3xl p-8 sm:p-12 border border-black/10 shadow-card text-center space-y-6">
        {/* Animated success ring */}
        <div className="relative w-20 h-20 mx-auto">
          <div className="absolute inset-0 rounded-full bg-green-100 animate-ping opacity-30" />
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-green-50 to-emerald-100 text-emerald-600 flex items-center justify-center shadow-lg shadow-green-200/50">
            <CheckCircle2 className="w-10 h-10" strokeWidth={1.5} />
          </div>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-[var(--color-espresso)]">
          Thank You, {formData.name}!
        </h3>
        <p className="text-sm sm:text-base text-[var(--color-espresso-mid)] max-w-md mx-auto leading-relaxed">
          Your consultation request has been received. A Naman Kitchen design specialist will contact you
          within 24 hours to review your <strong>{formData.layout}</strong> kitchen requirements for <strong>{formData.city}</strong>.
        </p>
        <div className="inline-flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 px-4 py-2 rounded-full font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Confirmation sent to {formData.email}
        </div>
        <Button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: '',
              email: '',
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
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="consultation-form bg-white rounded-3xl p-8 sm:p-12 border border-black/10 shadow-card space-y-8"
    >
      <div className="border-b border-black/10 pb-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-naman-indigo)]">
          <Sparkles className="w-3.5 h-3.5 text-[var(--color-naman-red)]" />
          <span>Interactive Kitchen Worksheet</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-espresso)] mt-1">
          Request Free In-Home / Studio Consultation
        </h2>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm animate-fadeIn">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Submission Failed</p>
            <p className="text-red-600 mt-0.5">{error}</p>
          </div>
        </div>
      )}

      {/* Row 1: Contact details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="form-field-group">
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
            className="w-full px-4 py-3 rounded-xl border border-black/15 bg-[var(--color-ivory-light)] focus:bg-white focus:border-[var(--color-naman-indigo)] focus:outline-none focus:ring-2 focus:ring-[var(--color-naman-indigo)]/15 transition-all text-sm text-[var(--color-espresso)]"
          />
        </div>

        <div className="form-field-group">
          <label htmlFor="client-email" className="block text-xs font-bold uppercase tracking-wider text-[var(--color-espresso)] mb-2">
            Email Address *
          </label>
          <input
            id="client-email"
            type="email"
            required
            placeholder="e.g. rahul@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-black/15 bg-[var(--color-ivory-light)] focus:bg-white focus:border-[var(--color-naman-indigo)] focus:outline-none focus:ring-2 focus:ring-[var(--color-naman-indigo)]/15 transition-all text-sm text-[var(--color-espresso)]"
          />
        </div>
      </div>

      {/* Row 2: Phone & City */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="form-field-group">
          <label htmlFor="client-phone" className="block text-xs font-bold uppercase tracking-wider text-[var(--color-espresso)] mb-2">
            Phone Number *
          </label>
          <input
            id="client-phone"
            type="tel"
            required
            placeholder="e.g. 9575511657"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-black/15 bg-[var(--color-ivory-light)] focus:bg-white focus:border-[var(--color-naman-indigo)] focus:outline-none focus:ring-2 focus:ring-[var(--color-naman-indigo)]/15 transition-all text-sm text-[var(--color-espresso)]"
          />
        </div>

        <div className="form-field-group">
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
            className="w-full px-4 py-3 rounded-xl border border-black/15 bg-[var(--color-ivory-light)] focus:bg-white focus:border-[var(--color-naman-indigo)] focus:outline-none focus:ring-2 focus:ring-[var(--color-naman-indigo)]/15 transition-all text-sm text-[var(--color-espresso)]"
          />
        </div>
      </div>

      {/* Row 3: Property Type & Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="form-field-group">
          <label htmlFor="client-prop" className="block text-xs font-bold uppercase tracking-wider text-[var(--color-espresso)] mb-2">
            Property Type
          </label>
          <div className="relative">
            <select
              id="client-prop"
              value={formData.propertyType}
              onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
              className="w-full px-4 py-3 pr-10 rounded-xl border border-black/15 bg-[var(--color-ivory-light)] focus:bg-white focus:border-[var(--color-naman-indigo)] focus:outline-none focus:ring-2 focus:ring-[var(--color-naman-indigo)]/15 transition-all text-sm appearance-none cursor-pointer text-[var(--color-espresso)]"
            >
              <option value="Apartment">Apartment / Flat (2BHK / 3BHK)</option>
              <option value="Independent House">Independent House / Villa</option>
              <option value="Renovation">Complete Kitchen Renovation</option>
              <option value="Architect Project">Architect / Commercial Project</option>
            </select>
            <ChevronDown className="w-4 h-4 text-[var(--color-espresso-mid)] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="form-field-group">
          <label htmlFor="client-layout" className="block text-xs font-bold uppercase tracking-wider text-[var(--color-espresso)] mb-2">
            Preferred Kitchen Layout
          </label>
          <div className="relative">
            <select
              id="client-layout"
              value={formData.layout}
              onChange={(e) => setFormData({ ...formData, layout: e.target.value })}
              className="w-full px-4 py-3 pr-10 rounded-xl border border-black/15 bg-[var(--color-ivory-light)] focus:bg-white focus:border-[var(--color-naman-indigo)] focus:outline-none focus:ring-2 focus:ring-[var(--color-naman-indigo)]/15 transition-all text-sm appearance-none cursor-pointer text-[var(--color-espresso)]"
            >
              <option value="L-Shaped">L-Shaped Kitchen</option>
              <option value="Straight">Straight Kitchen</option>
              <option value="Parallel">Parallel Kitchen</option>
              <option value="U-Shaped">U-Shaped Kitchen</option>
              <option value="Island">Island Kitchen</option>
              <option value="Custom Modular">Custom Architecture</option>
            </select>
            <ChevronDown className="w-4 h-4 text-[var(--color-espresso-mid)] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Row 4: Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="form-field-group">
          <label htmlFor="client-budget" className="block text-xs font-bold uppercase tracking-wider text-[var(--color-espresso)] mb-2">
            Estimated Budget Range
          </label>
          <div className="relative">
            <select
              id="client-budget"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className="w-full px-4 py-3 pr-10 rounded-xl border border-black/15 bg-[var(--color-ivory-light)] focus:bg-white focus:border-[var(--color-naman-indigo)] focus:outline-none focus:ring-2 focus:ring-[var(--color-naman-indigo)]/15 transition-all text-sm appearance-none cursor-pointer text-[var(--color-espresso)]"
            >
              <option value="Essential (₹1.5L – ₹2.5L)">Essential (₹1.5L – ₹2.5L)</option>
              <option value="Standard (₹2.5L – ₹4.5L)">Standard (₹2.5L – ₹4.5L)</option>
              <option value="Premium (₹4.5L – ₹7L)">Premium (₹4.5L – ₹7L)</option>
              <option value="Luxury (₹7L+) ">Luxury Bespoke (₹7L+)</option>
            </select>
            <ChevronDown className="w-4 h-4 text-[var(--color-espresso-mid)] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Row 5: Message or requirements */}
      <div className="form-field-group">
        <label htmlFor="client-message" className="block text-xs font-bold uppercase tracking-wider text-[var(--color-espresso)] mb-2">
          Notes or Specific Requirements (Optional)
        </label>
        <textarea
          id="client-message"
          rows={4}
          placeholder="Mention any specific preferences like tall pantry units, chimney placement, microwave tall-units, or current construction status..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-black/15 bg-[var(--color-ivory-light)] focus:bg-white focus:border-[var(--color-naman-indigo)] focus:outline-none focus:ring-2 focus:ring-[var(--color-naman-indigo)]/15 transition-all text-sm"
        />
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full sm:w-auto"
          disabled={loading}
          icon={loading ? undefined : Send}
        >
          {loading ? (
            <span className="inline-flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </span>
          ) : (
            'Book Free Consultation'
          )}
        </Button>
        <p className="text-xs text-[var(--color-warm-gray)] mt-3">
          We respect your privacy. No spam. A kitchen specialist will connect for personal guidance.
        </p>
      </div>
    </form>
  );
}
