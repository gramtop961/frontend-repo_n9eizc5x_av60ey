import { Scissors, Star, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-rose-50 via-white to-white">
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{
        backgroundImage:
          "radial-gradient(20rem 20rem at 10% 10%, rgba(244, 63, 94, 0.15), transparent), radial-gradient(30rem 30rem at 90% -10%, rgba(244, 63, 94, 0.12), transparent)",
      }} />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-24 lg:py-32 flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-rose-600">
            <Star className="h-3.5 w-3.5 fill-rose-500/20 text-rose-600" />
            Modern Korean | Unisex | Trendy Cuts
          </div>
          <h1 className="mt-5 font-semibold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-tight text-gray-900">
            Seoul-inspired hair for every identity
          </h1>
          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
            Precision cuts, airy layers, glassy shine. A boutique salon experience by
            female stylists specializing in modern Korean trends for all.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#appointment" className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-600 text-white px-6 py-3 font-medium shadow-lg shadow-rose-600/20 hover:bg-rose-700 transition">
              <Scissors className="h-5 w-5" /> Book Appointment
            </a>
            <a href="tel:+1234567890" className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 font-medium text-gray-900 hover:bg-gray-50 transition">
              <Phone className="h-5 w-5 text-rose-600" /> Call Us
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            Open Tue–Sun · Walk-ins welcome when available
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-rose-200 via-rose-100 to-white" />
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1400&auto=format&fit=crop"
              alt="Modern Korean haircut style"
              className="absolute inset-0 h-full w-full object-cover rounded-3xl mix-blend-multiply"
            />
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-b from-rose-500/10 to-transparent blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
