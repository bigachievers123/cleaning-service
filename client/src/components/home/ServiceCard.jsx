function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div className="rounded-xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-6 flex justify-center">
        <Icon size={56} className="text-teal-600" />
      </div>

      <h3 className="mb-3 text-center text-2xl font-bold text-slate-800">
        {service.title}
      </h3>

      <p className="mb-6 text-center text-gray-600">
        {service.description}
      </p>

      <button className="w-full rounded-lg bg-teal-600 py-3 text-white transition hover:bg-teal-700">
        Book Service
      </button>
    </div>
  );
}

export default ServiceCard;