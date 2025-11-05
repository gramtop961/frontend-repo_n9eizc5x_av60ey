import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import AppointmentForm from "./components/AppointmentForm";
import Location from "./components/Location";
import { Scissors } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="inline-flex items-center gap-2 font-semibold text-gray-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-600 text-white">
            <Scissors className="h-4 w-4" />
          </span>
          Salon Seoul
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#pricing" className="text-gray-700 hover:text-gray-900">Pricing</a>
          <a href="#appointment" className="text-gray-700 hover:text-gray-900">Appointment</a>
          <a href="#location" className="text-gray-700 hover:text-gray-900">Location</a>
          <a href="#appointment" className="rounded-full bg-rose-600 text-white px-4 py-2 font-medium hover:bg-rose-700 transition">Book</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Salon Seoul. All rights reserved.</p>
        <div className="text-sm text-gray-500">Unisex · Modern Korean · Female Stylists</div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Pricing />
      <AppointmentForm />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
