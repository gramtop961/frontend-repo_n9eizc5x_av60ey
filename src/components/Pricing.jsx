import { Scissors, Sparkles, Bath, Clock } from "lucide-react";

const items = [
  {
    title: "Signature Korean Cut",
    desc: "Airy layers, soft texture, and a face-framing silhouette tailored to you.",
    price: "$68",
    icon: Scissors,
    duration: "45–60 min",
  },
  {
    title: "Gloss & Treatment",
    desc: "Glass-like shine and deep nourishment for silky, healthy hair.",
    price: "$85",
    icon: Sparkles,
    duration: "60 min",
  },
  {
    title: "Scalp Spa",
    desc: "Detox massage, exfoliation, and hydration for a refreshed scalp.",
    price: "$55",
    icon: Bath,
    duration: "40 min",
  },
  {
    title: "Bang Trim / Touch-up",
    desc: "Quick refinement to keep your look fresh between visits.",
    price: "$18",
    icon: Clock,
    duration: "15 min",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Pricing</h2>
          <p className="mt-3 text-gray-600">
            Transparent, gender-neutral pricing. We charge by craft and care, not by labels.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ title, desc, price, icon: Icon, duration }) => (
            <div key={title} className="group relative rounded-2xl border border-gray-200 bg-white p-6 transition hover:shadow-xl">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-rose-500/0 to-rose-500/0 group-hover:from-rose-500/10 group-hover:to-rose-500/0 transition" />
              <div className="relative">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 text-rose-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900">{price}</span>
                  <span className="text-xs text-gray-500">{duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          Color, perm, and bridal styling available upon consultation.
        </p>
      </div>
    </section>
  );
}
