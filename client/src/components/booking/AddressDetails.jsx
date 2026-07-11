import { useBooking } from "../../context/BookingContext";

function AddressDetails() {
  const { booking, setBooking, setCurrentStep } = useBooking();

  const handleChange = (e) => {
    setBooking({
      ...booking,
      address: {
        ...booking.address,
        [e.target.name]: e.target.value,
      },
    });
  };

  const { street, city, postcode } = booking.address;

  const canContinue = street && city && postcode;

  return (
    <div className="rounded-xl bg-white p-8 shadow-md">
      <h2 className="mb-8 text-2xl font-bold">
        Step 4: Service Address
      </h2>

      <div className="space-y-6">
        <div>
          <label className="mb-2 block font-medium">
            Street Address
          </label>

          <input
            type="text"
            name="street"
            value={street}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            City
          </label>

          <input
            type="text"
            name="city"
            value={city}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Postcode
          </label>

          <input
            type="text"
            name="postcode"
            value={postcode}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Additional Notes (Optional)
          </label>

          <textarea
            name="notes"
            rows="4"
            value={booking.address.notes || ""}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3"
            placeholder="Gate code, pets, parking instructions..."
          />
        </div>
      </div>

      <div className="mt-10 flex justify-between">
        <button
          onClick={() => setCurrentStep(3)}
          className="rounded-lg border border-gray-300 px-8 py-3 hover:bg-gray-100"
        >
          ← Back
        </button>

        <button
          disabled={!canContinue}
          onClick={() => setCurrentStep(5)}
          className={`rounded-lg px-8 py-3 text-white ${
            canContinue
              ? "bg-teal-600 hover:bg-teal-700"
              : "cursor-not-allowed bg-gray-400"
          }`}
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

export default AddressDetails;