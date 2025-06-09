import { createContext, useContext, useEffect, useState } from "react";
import skipData from "../data/skipData.json";

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [maxStep, setMaxStep] = useState(2); // Only allow up to step 2 initially

  // Helper to get the selected skip object
  const selectedSkipObj = skipData.find((s) => s.id === selectedSkip);

  // continue to next step
  const unlockNextStep = () => {
    setMaxStep((prev) => Math.max(prev, currentStep + 1));
    setCurrentStep((prev) => prev + 1);
  };

  // go to a previous step
  const goToStep = (step) => {
    if (step <= maxStep) setCurrentStep(step);
  };

  useEffect(()=>{
    setSelectedSkip(null);
    if(currentStep === 2){
      setMaxStep(2);
    }
  }, [currentStep])
  return (
    <BookingContext.Provider
      value={{
        skipData,
        selectedSkip,
        setSelectedSkip,
        selectedSkipObj,
        maxStep,
        unlockNextStep,
        goToStep,
        currentStep
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}
