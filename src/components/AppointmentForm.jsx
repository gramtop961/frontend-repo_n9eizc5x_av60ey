import { useState } from "react";
import { Calendar, User, Mail, Phone, Scissors, Clock } from "lucide-react";

export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Signature Korean Cut",
    date: "",
    time: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // For now, we simply simulate submission UI feedback.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  }

  return (
    <section id="appointment" className="py-20 bg-rose-50/40">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Book an appointment</h2>
          <p className="mt-3 text-gray-600">
            Choose a service and your preferred time. We’ll confirm by email or text.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm text-gray-700 flex items-center gap-2"><User className="h-4 w-4 text-rose-600" /> Full name</span>
              <input
                type="text"
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="text-sm text-gray-700 flex items-center gap-2"><Mail className="h-4 w-4 text-rose-600" /> Email</span>
              <input
                type="email"
                required
                name="email"
                value={form.email}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <label className="block sm:col-span-1">
              <span className="text-sm text-gray-700 flex items-center gap-2"><Phone className="h-4 w-4 text-rose-600" /> Phone</span>
              <input
                type="tel"
                required
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="(555) 555-5555"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-sm text-gray-700 flex items-center gap-2"><Scissors className="h-4 w-4 text-rose-600" /> Service</span>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-rose-500"
              >
                <option>Signature Korean Cut</option>
                <option>Gloss & Treatment</option>
                <option>Scalp Spa</option>
                <option>Bang Trim / Touch-up</option>
              </select>
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm text-gray-700 flex items-center gap-2"><Calendar className="h-4 w-4 text-rose-600" /> Date</span>
              <input
                type="date"
                required
                name="date"
                value={form.date}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-rose-500"
              />
            </label>
            <label className="block">
              <span className="text-sm text-gray-700 flex items-center gap-2"><Clock className="h-4 w-4 text-rose-600" /> Time</span>
              <input
                type="time"
                required
                name="time"
                value={form.time}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-rose-500"
              />
            </label>
          </div>

          <label className="block">
            <span className="text-sm text-gray-700">Notes (optional)</span>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows={4}
              className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-rose-500"
              placeholder="Add any preferences or questions..."
            />
          </label>

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-rose-600 text-white px-6 py-3 font-medium shadow-lg shadow-rose-600/20 hover:bg-rose-700 transition"
          >
            Request booking
          </button>

          {submitted && (
            <div className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
              Request sent. We’ll get back to you shortly!
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
