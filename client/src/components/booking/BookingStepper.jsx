function BookingStepper({ currentStep }) {
  const steps = [
    "Service",
    "Date & Time",
    "Customer",
    "Address",
    "Review",
  ];

  return (
    <div className="mb-10">
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div
            key={step}
            className="flex flex-col items-center flex-1"
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full font-bold ${
                currentStep === index + 1
                  ? "bg-teal-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {index + 1}
            </div>

            <span className="mt-2 text-sm font-medium">
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookingStepper;