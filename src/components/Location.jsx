import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Visit us</h2>
            <p className="mt-3 text-gray-600">Experience a calm, light-filled studio in the heart of the city.</p>

            <div className="mt-6 space-y-3 text-gray-700">
              <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-rose-600" /> 123 Han River Blvd, Suite 7, Seoul District</p>
              <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-rose-600" /> (555) 555-5555</p>
              <p className="flex items-center gap-3"><Clock className="h-5 w-5 text-rose-600" /> Tue–Sun 10:00–19:00 · Closed Monday</p>
            </div>

            <a
              href="https://maps.google.com?q=123+Han+River+Blvd"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              <Navigation className="h-4 w-4 text-rose-600" /> Open in Maps
            </a>
          </div>

          <div className="relative w-full h-80 rounded-2xl overflow-hidden border border-gray-200">
            <iframe
              title="salon-map"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093745!2d144.95373631550442!3d-37.81720974201359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5778c3b0d2c7c0!2sFlinders%20St%20Station!5e0!3m2!1sen!2sau!4v1635902042906!5m2!1sen!2sau"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
