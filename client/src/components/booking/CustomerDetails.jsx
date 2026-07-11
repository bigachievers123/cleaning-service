import { useBooking } from "../../context/BookingContext";

function CustomerDetails() {
  const { booking, setBooking, setCurrentStep } = useBooking();

  const handleChange = (e) => {
    setBooking({
      ...booking,
      customer: {
        ...booking.customer,
        [e.target.name]: e.target.value,
      },
    });
  };

  const { firstName, lastName, email, phone } = booking.customer;

  const isValid =
    firstName.trim() &&
    lastName.trim() &&
    email.trim() &&
    phone.trim();

  return (
    <div className="rounded-xl bg-white p-8 shadow-md">
      <h2 className="mb-8 text-2xl font-bold text-slate-800">
        Step 3: Customer Details
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block font-medium">
            First Name
          </label>

          <input
            type="text"
            name="firstName"
            placeholder="John"
            value={firstName}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3 focus:border-teal-600 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Last Name
          </label>

          <input
            type="text"
            name="lastName"
            placeholder="Smith"
            value={lastName}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3 focus:border-teal-600 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={email}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3 focus:border-teal-600 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            placeholder="+49 123 456 789"
            value={phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3 focus:border-teal-600 focus:outline-none"
          />
        </div>

      </div>

      <div className="mt-10 flex justify-between">
        <button
          type="button"
          onClick={() => setCurrentStep(2)}
          className="rounded-lg border border-gray-300 px-8 py-3 font-medium hover:bg-gray-100"
        >
          ← Back
        </button>

        <button
          type="button"
          disabled={!isValid}
          onClick={() => setCurrentStep(4)}
          className={`rounded-lg px-8 py-3 font-medium text-white transition ${
            isValid
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

export default CustomerDetails;