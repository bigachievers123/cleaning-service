import services from "../../data/services";
import ServiceCard from "./ServiceCard";

function ServicesSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold text-slate-800">
          Our Cleaning Services
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          Choose from our range of professional cleaning services designed for
          homes, offices, and commercial spaces.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;