const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    review:
      "Excellent service! My house has never looked better.",
  },
  {
    id: 2,
    name: "David K.",
    review:
      "Professional team, friendly staff, and always on time.",
  },
  {
    id: 3,
    name: "Jessica L.",
    review:
      "Highly recommended for office cleaning. Fantastic experience!",
  },
];

function Testimonials() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold text-slate-800">
          What Our Customers Say
        </h2>

        <p className="mt-4 text-center text-gray-600">
          Real feedback from our satisfied customers.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-xl bg-white p-6 shadow-md"
            >
              <div className="text-yellow-500 text-2xl">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="mt-4 text-gray-600 italic">
                "{item.review}"
              </p>

              <h3 className="mt-6 text-lg font-bold text-teal-600">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;