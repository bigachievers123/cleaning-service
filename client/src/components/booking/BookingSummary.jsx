import { useBooking } from "../../context/BookingContext";

function BookingSummary({ service }) {
  const { setCurrentStep } = useBooking();

  return (
    <div className="rounded-xl bg-white p-6 shadow-md lg:sticky lg:top-24">
      <h2 className="mb-6 text-2xl font-bold text-slate-800">
        Booking Summary
      </h2>

      {!service ? (
        <>
          <p className="text-gray-500">
            Please select a service.
          </p>

          <button
            disabled
            className="mt-8 w-full rounded-lg bg-gray-400 py-3 text-white cursor-not-allowed"
          >
            Continue
          </button>
        </>
      ) : (
        <>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Service</p>
              <h3 className="text-xl font-bold text-teal-600">
                {service.title}
              </h3>
            </div>

            <div>
              <p className="text-sm text-gray-500">Category</p>
              <p>{service.category}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Duration</p>
              <p>{service.duration}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Starting Price</p>
              <p className="text-3xl font-bold">
                ${service.price}
              </p>
            </div>
          </div>

          <button
            onClick={() => setCurrentStep(2)}
            className="mt-8 w-full rounded-lg bg-teal-600 py-3 text-white hover:bg-teal-700"
          >
            Continue →
          </button>
        </>
      )}
    </div>
  );
}

export default BookingSummary;