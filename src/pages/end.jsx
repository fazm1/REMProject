import "../styles/selectSkip.css";
import { useBooking } from "../contexts/bookingContext";

export default function End() {

  return (
    <section className="skip-select-outer">
      <header className="skip-select-header">
        <h1>
          <span className="skip-gradient-text">Thank you</span>
        </h1>
        <p className="skip-subtitle">
            Feel free to navigate back to Select Skip.
        </p>
      </header>
    </section>
  );
}