import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-[80vh] bg-slate-100 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-800">
          Professional Cleaning
        </h1>

        <h2 className="mt-2 text-5xl md:text-7xl font-bold text-teal-600">
          Services
        </h2>

        <p className="mt-6 text-lg text-gray-600">
          We provide reliable residential and commercial cleaning services.
          Book online in minutes and enjoy a cleaner, healthier home.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/booking"
            className="rounded-lg bg-teal-600 px-8 py-3 text-center text-white transition hover:bg-teal-700"
          >
            Book Now
          </Link>

          <Link
            to="/services"
            className="rounded-lg border-2 border-teal-600 px-8 py-3 text-center text-teal-600 transition hover:bg-teal-600 hover:text-white"
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;