import { useBooking } from "../../context/BookingContext";

const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
];

function DateTimeSelection() {
  const {
    booking,
    setBooking,
    setCurrentStep,
  } = useBooking();

  const handleDateChange = (e) => {
    setBooking({
      ...booking,
      date: e.target.value,
    });
  };

  const handleTimeSelect = (time) => {
    setBooking({
      ...booking,
      time,
    });
  };

  const canContinue = booking.date && booking.time;

  return (
    <div className="rounded-xl bg-white p-8 shadow-md">
      <h2 className="mb-6 text-2xl font-bold">
        Step 2: Choose Date & Time
      </h2>

      {/* Date */}
      <div className="mb-8">
        <label className="mb-2 block font-medium">
          Select a Date
        </label>

        <input
          type="date"
          value={booking.date}
          onChange={handleDateChange}
          min={new Date().toISOString().split("T")[0]}
          className="w-full rounded-lg border border-gray-300 p-3 focus:border-teal-600 focus:outline-none"
        />
      </div>

      {/* Time */}
      <div>
        <label className="mb-4 block font-medium">
          Select a Time
        </label>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {timeSlots.map((time) => (
            <button
              key={time}
              type="button"
              onClick={() => handleTimeSelect(time)}
              className={`rounded-lg border p-3 transition ${
                booking.time === time
                  ? "border-teal-600 bg-teal-600 text-white"
                  : "border-gray-300 hover:border-teal-600 hover:bg-teal-50"
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-10 flex justify-between">
        <button
          type="button"
          onClick={() => setCurrentStep(1)}
          className="rounded-lg border border-gray-300 px-8 py-3 font-medium hover:bg-gray-100"
        >
          ← Back
        </button>

        <button
          type="button"
          disabled={!canContinue}
          onClick={() => setCurrentStep(3)}
          className={`rounded-lg px-8 py-3 font-medium text-white transition ${
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

export default DateTimeSelection;