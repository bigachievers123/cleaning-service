import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export function BookingProvider({ children }) {
  // Booking data
  const [booking, setBooking] = useState({
    service: null,
    date: "",
    time: "",
    customer: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    address: {
      street: "",
      city: "",
      postcode: "",
      notes: "",
    },
  });

  // Current booking step
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <BookingContext.Provider
      value={{
        booking,
        setBooking,
        currentStep,
        setCurrentStep,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}