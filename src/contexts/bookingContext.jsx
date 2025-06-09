import { createContext, useContext, useState } from "react";
import skipData from "../data/skipData.json";

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [selectedSkip, setSelectedSkip] = useState(null);

  // Optionally, helper to get the selected skip object
  const selectedSkipObj = skipData.find((s) => s.id === selectedSkip);

  return (
    <BookingContext.Provider
      value={{
        skipData,
        selectedSkip,
        setSelectedSkip,
        selectedSkipObj,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}