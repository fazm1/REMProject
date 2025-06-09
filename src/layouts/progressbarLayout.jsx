import { useState } from "react";
import Footer from "../components/footer";
import Progressbar from "../components/progressBar";
import { useBooking } from "../contexts/bookingContext";

export default function ProgressbarLayout({ children }) {
  const { selectedSkip, currentStep } = useBooking();
  return (
    <>
      <Progressbar />
      <main className="mt-4">{children}</main>
      {selectedSkip && <Footer />}
    </>
  );
}
