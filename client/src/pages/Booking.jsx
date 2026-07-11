import MainLayout from "../layouts/MainLayout";
import BookingStepper from "../components/booking/BookingStepper";
import ServiceSelection from "../components/booking/ServiceSelection";
import DateTimeSelection from "../components/booking/DateTimeSelection";
import { useBooking } from "../context/BookingContext";
import CustomerDetails from "../components/booking/CustomerDetails";
import AddressDetails from "../components/booking/AddressDetails";
import ReviewBooking from "../components/booking/ReviewBooking";

function Booking() {
  const { currentStep } = useBooking();

  return (
    <MainLayout>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="mb-4 text-4xl font-bold text-slate-800">
          Book a Cleaning Service
        </h1>

        <p className="mb-8 text-gray-600">
          Complete the steps below to schedule your appointment.
        </p>

        <BookingStepper currentStep={currentStep} />

        {currentStep === 1 && <ServiceSelection />}

        {currentStep === 2 && <DateTimeSelection />}

        {currentStep === 3 && <CustomerDetails />}

        {currentStep === 4 && <AddressDetails />}

        {currentStep === 5 && <ReviewBooking />}
      </div>
    </MainLayout>
  );
}

export default Booking;