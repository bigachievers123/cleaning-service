import { useBooking } from "../../context/BookingContext";

function ReviewBooking() {
  const {
    booking,
    setCurrentStep,
  } = useBooking();

  const handleConfirmBooking = () => {
    console.log("Booking Submitted:");
    console.log(booking);

    alert("Booking submitted successfully! 🎉");

    // Later we'll send this data to the backend.
  };

  return (
    <div className="rounded-xl bg-white p-8 shadow-md">
      <h2 className="mb-8 text-3xl font-bold">
        Review Your Booking
      </h2>

      {/* Service */}
      <div className="mb-8 rounded-lg border p-6">
        <h3 className="mb-4 text-xl font-bold text-teal-600">
          Service
        </h3>

        <p>
          <strong>Service:</strong> {booking.service?.title}
        </p>

        <p>
          <strong>Category:</strong> {booking.service?.category}
        </p>

        <p>
          <strong>Duration:</strong> {booking.service?.duration}
        </p>

        <p>
          <strong>Price:</strong> ${booking.service?.price}
        </p>
      </div>

      {/* Date */}
      <div className="mb-8 rounded-lg border p-6">
        <h3 className="mb-4 text-xl font-bold text-teal-600">
          Appointment
        </h3>

        <p>
          <strong>Date:</strong> {booking.date}
        </p>

        <p>
          <strong>Time:</strong> {booking.time}
        </p>
      </div>

      {/* Customer */}
      <div className="mb-8 rounded-lg border p-6">
        <h3 className="mb-4 text-xl font-bold text-teal-600">
          Customer
        </h3>

        <p>
          <strong>Name:</strong>{" "}
          {booking.customer.firstName} {booking.customer.lastName}
        </p>

        <p>
          <strong>Email:</strong> {booking.customer.email}
        </p>

        <p>
          <strong>Phone:</strong> {booking.customer.phone}
        </p>
      </div>

      {/* Address */}
      <div className="mb-8 rounded-lg border p-6">
        <h3 className="mb-4 text-xl font-bold text-teal-600">
          Address
        </h3>

        <p>{booking.address.street}</p>

        <p>
          {booking.address.city} {booking.address.postcode}
        </p>

        {booking.address.notes && (
          <p className="mt-3">
            <strong>Notes:</strong> {booking.address.notes}
          </p>
        )}
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setCurrentStep(4)}
          className="rounded-lg border border-gray-300 px-8 py-3 hover:bg-gray-100"
        >
          ← Back
        </button>

        <button
          onClick={handleConfirmBooking}
          className="rounded-lg bg-teal-600 px-8 py-3 text-white hover:bg-teal-700"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}

export default ReviewBooking;