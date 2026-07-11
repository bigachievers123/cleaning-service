import services from "../../data/services";
import BookingSummary from "./BookingSummary";
import { useBooking } from "../../context/BookingContext";

function ServiceSelection() {
  const { booking, setBooking } = useBooking();

  const selectedService = booking.service;

  const handleSelectService = (service) => {
    setBooking({
      ...booking,
      service,
    });
  };

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {/* Services */}
      <div className="lg:col-span-2 rounded-xl bg-white p-8 shadow-md">
        <h2 className="mb-6 text-2xl font-bold">
          Step 1: Choose Your Service
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            const isSelected = selectedService?.id === service.id;

            return (
              <div
                key={service.id}
                onClick={() => handleSelectService(service)}
                className={`cursor-pointer rounded-xl border-2 p-6 transition duration-300 ${
                  isSelected
                    ? "border-teal-600 bg-teal-50 shadow-lg"
                    : "border-gray-200 hover:border-teal-600 hover:shadow-lg"
                }`}
              >
                <div className="mb-4 flex justify-center">
                  <Icon size={48} className="text-teal-600" />
                </div>

                <h3 className="text-center text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-3 text-center text-gray-600">
                  {service.description}
                </p>

                <div className="mt-6 flex justify-between text-sm font-medium text-gray-700">
                  <span>${service.price}</span>
                  <span>{service.duration}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Booking Summary */}
      <BookingSummary service={selectedService} />
    </div>
  );
}

export default ServiceSelection;