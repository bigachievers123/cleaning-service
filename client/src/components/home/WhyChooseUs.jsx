import {
  ShieldCheck,
  Leaf,
  BadgeDollarSign,
  Star,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Trusted Professionals",
    description:
      "Our trained and experienced cleaners provide reliable, high-quality service.",
  },
  {
    id: 2,
    icon: Leaf,
    title: "Eco-Friendly Products",
    description:
      "We use environmentally friendly cleaning products whenever possible.",
  },
  {
    id: 3,
    icon: BadgeDollarSign,
    title: "Affordable Pricing",
    description:
      "Transparent pricing with no hidden costs.",
  },
  {
    id: 4,
    icon: Star,
    title: "100% Satisfaction",
    description:
      "Customer satisfaction is always our top priority.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Why Choose Us
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Discover why hundreds of customers trust CleanPro.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="rounded-xl shadow-lg p-8 hover:shadow-xl transition text-center"
              >
                <div className="flex justify-center mb-6">
                  <Icon
                    size={50}
                    className="text-teal-600"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;